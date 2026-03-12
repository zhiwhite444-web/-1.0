// SillyTavern GrokChat Theme
(function() {
    'use strict';

    const DEFAULT_ENABLED = false;

    function apply() {
        const sidebar = document.getElementById('ai-config-button');
        if (!sidebar) return;

        const btn = sidebar.querySelector('.drawer-toggle');

        if (DEFAULT_ENABLED) {
            sidebar.style.transform = 'translateX(0)';
        } else {
            sidebar.style.transform = 'translateX(calc(var(--grokchat-sidebar-width) * -1 + 20px))';
        }

        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                const current = sidebar.style.transform;
                const isOpen = current.includes('0px');

                sidebar.style.transform = isOpen
                    ? 'translateX(calc(var(--grokchat-sidebar-width) * -1 + 20px))'
                    : 'translateX(0)';
            });
        }
    }

    window.addEventListener('load', apply);
    document.addEventListener('DOMContentLoaded', apply);

    console.log('🚀 GrokChat Theme Loaded');
})();