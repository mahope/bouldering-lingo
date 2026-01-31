// ===== Shared scripts for all pages =====

(function() {
    'use strict';

    // ===== Theme Management =====
    const THEME_KEY = 'bouldering-lingo-theme';
    const html = document.documentElement;

    function initTheme() {
        const savedTheme = localStorage.getItem(THEME_KEY);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        setTheme(theme, false);
    }

    function setTheme(theme, save = true) {
        html.setAttribute('data-theme', theme);
        if (save) {
            localStorage.setItem(THEME_KEY, theme);
        }
        
        // Update meta theme-color for mobile browsers
        const metaThemes = document.querySelectorAll('meta[name="theme-color"]');
        metaThemes.forEach(meta => {
            if (meta.getAttribute('media')?.includes('dark') && theme === 'dark') {
                meta.setAttribute('content', '#0a0a0b');
            } else if (meta.getAttribute('media')?.includes('light') && theme === 'light') {
                meta.setAttribute('content', '#f5f5f7');
            } else if (!meta.getAttribute('media')) {
                meta.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#f5f5f7');
            }
        });
    }

    function toggleTheme() {
        const current = html.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // ===== Navigation Toggle =====
    function initNavToggle() {
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                const expanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', !expanded);
                navToggle.classList.toggle('open');
                navLinks.classList.toggle('open');
            });

            // Close menu when clicking a link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('open');
                    navLinks.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                    navToggle.classList.remove('open');
                    navLinks.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }

    // ===== Theme Toggle Button =====
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }
    }

    // ===== Smooth Scroll for Anchor Links =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }

    // ===== Initialize =====
    function init() {
        initTheme();
        initNavToggle();
        initThemeToggle();
        initSmoothScroll();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
            setTheme(e.matches ? 'dark' : 'light', false);
        }
    });
})();
