// ===== State =====
let cards = [...flashcardsData.cards];
let currentIndex = 0;
let score = 0;
let streak = 0;
let activeCategory = 'all';

// ===== DOM Elements =====
const html = document.documentElement;
const flashcard = document.getElementById('flashcard');
const cardContainer = document.getElementById('cardContainer');
const termEl = document.getElementById('term');
const definitionEl = document.getElementById('definition');
const exampleEl = document.getElementById('example');
const categoryBadgeEl = document.getElementById('categoryBadge');
const currentEl = document.getElementById('current');
const totalEl = document.getElementById('total');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const progressFill = document.getElementById('progressFill');
const skipBtn = document.getElementById('skipBtn');
const knewBtn = document.getElementById('knewBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const categoryButtonsEl = document.getElementById('categoryButtons');
const themeToggle = document.getElementById('themeToggle');

// ===== Theme Management =====
function initTheme() {
    const savedTheme = localStorage.getItem('bouldering-lingo-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(theme);
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('bouldering-lingo-theme', theme);
    
    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#f5f5f7');
    }
}

function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// ===== Initialize =====
function init() {
    initTheme();
    renderCategoryButtons();
    filterCards();
    shuffle();
    updateCard();
    updateProgress();
    bindEvents();
}

// ===== Render category filter buttons =====
function renderCategoryButtons() {
    const totalCards = flashcardsData.cards.length;
    let html = `<button class="category-btn active" data-category="all">Alle (${totalCards})</button>`;
    
    for (const [key, label] of Object.entries(flashcardsData.categories)) {
        const count = flashcardsData.cards.filter(c => c.category === key).length;
        html += `<button class="category-btn" data-category="${key}">${label} (${count})</button>`;
    }
    
    categoryButtonsEl.innerHTML = html;
}

// ===== Filter cards by category =====
function filterCards() {
    if (activeCategory === 'all') {
        cards = [...flashcardsData.cards];
    } else {
        cards = flashcardsData.cards.filter(card => card.category === activeCategory);
    }
    currentIndex = 0;
    totalEl.textContent = cards.length;
}

// ===== Shuffle cards (Fisher-Yates) =====
function shuffle() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    currentIndex = 0;
    updateCard();
    updateProgress();
}

// ===== Update displayed card =====
function updateCard() {
    if (cards.length === 0) {
        termEl.textContent = "Ingen kort";
        definitionEl.textContent = "Vælg en kategori med kort";
        exampleEl.textContent = "";
        categoryBadgeEl.textContent = "";
        categoryBadgeEl.style.display = 'none';
        return;
    }
    
    const card = cards[currentIndex];
    
    // Reset flip state
    flashcard.classList.remove('flipped');
    
    // Update content with slight delay for smooth transition
    setTimeout(() => {
        termEl.textContent = card.term;
        definitionEl.textContent = card.definition;
        exampleEl.textContent = card.example || "";
        
        // Update category badge
        const categoryLabel = flashcardsData.categories[card.category] || card.category;
        categoryBadgeEl.textContent = categoryLabel;
        categoryBadgeEl.style.display = 'block';
    }, 50);
    
    // Update stats
    currentEl.textContent = currentIndex + 1;
    totalEl.textContent = cards.length;
}

// ===== Update progress bar =====
function updateProgress() {
    const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;
    progressFill.style.width = `${progress}%`;
}

// ===== Update streak display =====
function updateStreak() {
    if (streak >= 3) {
        streakEl.hidden = false;
        streakEl.style.animation = 'none';
        streakEl.offsetHeight; // Trigger reflow
        streakEl.style.animation = 'pulse 0.5s ease';
    } else {
        streakEl.hidden = true;
    }
}

// ===== Go to next card with animation =====
function nextCard() {
    currentIndex++;
    if (currentIndex >= cards.length) {
        showCompletion();
        return;
    }
    
    // Add animation class
    cardContainer.classList.remove('animate-next');
    void cardContainer.offsetWidth; // Trigger reflow
    cardContainer.classList.add('animate-next');
    
    updateCard();
    updateProgress();
}

// ===== Show completion message =====
function showCompletion() {
    flashcard.classList.remove('flipped');
    categoryBadgeEl.style.display = 'none';
    
    const percentage = cards.length > 0 ? Math.round((score / cards.length) * 100) : 0;
    let message = "";
    let emoji = "🎉";
    
    if (percentage === 100) {
        emoji = "🏆";
        message = "Perfekt score! Du er en ægte klatreekspert!";
    } else if (percentage >= 80) {
        emoji = "🔥";
        message = "Stærkt! Du kender din klatre-lingo!";
    } else if (percentage >= 60) {
        emoji = "💪";
        message = "Godt gået! Bliv ved med at øve!";
    } else {
        emoji = "📚";
        message = "God øvelse! Prøv igen for at lære mere!";
    }
    
    setTimeout(() => {
        termEl.textContent = `${emoji} Færdig!`;
        definitionEl.innerHTML = `
            <strong>${score} ud af ${cards.length}</strong> rigtige (${percentage}%)
            <br><br>
            ${message}
        `;
        exampleEl.textContent = "";
    }, 50);
    
    currentEl.textContent = cards.length;
    updateProgress();
}

// ===== Reset game =====
function reset() {
    currentIndex = 0;
    score = 0;
    streak = 0;
    scoreEl.textContent = score;
    streakEl.hidden = true;
    shuffle();
    updateProgress();
}

// ===== Bind event listeners =====
function bindEvents() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Flip card on click
    flashcard.addEventListener('click', () => {
        if (currentIndex < cards.length) {
            flashcard.classList.toggle('flipped');
        }
    });
    
    // Skip button
    skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        streak = 0;
        updateStreak();
        nextCard();
    });
    
    // Knew it button
    knewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        score++;
        streak++;
        scoreEl.textContent = score;
        updateStreak();
        
        // Success animation
        knewBtn.classList.add('success');
        setTimeout(() => knewBtn.classList.remove('success'), 300);
        
        nextCard();
    });
    
    // Shuffle button
    shuffleBtn.addEventListener('click', () => {
        shuffle();
    });
    
    // Reset button
    resetBtn.addEventListener('click', () => {
        reset();
    });
    
    // Category buttons
    categoryButtonsEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            // Update active state
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            
            // Filter and reset
            activeCategory = e.target.dataset.category;
            score = 0;
            streak = 0;
            scoreEl.textContent = score;
            streakEl.hidden = true;
            filterCards();
            shuffle();
            updateProgress();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Don't trigger if user is typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        
        switch(e.key) {
            case ' ':
            case 'Enter':
                e.preventDefault();
                if (currentIndex < cards.length) {
                    flashcard.classList.toggle('flipped');
                }
                break;
            case 'ArrowRight':
            case 'n':
                streak = 0;
                updateStreak();
                nextCard();
                break;
            case 'ArrowLeft':
            case 'p':
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCard();
                    updateProgress();
                }
                break;
            case 'k':
                if (currentIndex < cards.length) {
                    score++;
                    streak++;
                    scoreEl.textContent = score;
                    updateStreak();
                    knewBtn.classList.add('success');
                    setTimeout(() => knewBtn.classList.remove('success'), 300);
                    nextCard();
                }
                break;
            case 's':
                shuffle();
                break;
            case 'r':
                reset();
                break;
            case 't':
                toggleTheme();
                break;
        }
    });
    
    // Touch gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    
    cardContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    cardContainer.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const touchEndY = e.changedTouches[0].screenY;
        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;
        
        // Only trigger swipe if horizontal movement is greater than vertical
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
            if (deltaX < 0) {
                // Swipe left - skip
                streak = 0;
                updateStreak();
                nextCard();
            } else {
                // Swipe right - previous
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCard();
                    updateProgress();
                }
            }
        }
    }, { passive: true });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem('bouldering-lingo-theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// ===== Start the app =====
init();
