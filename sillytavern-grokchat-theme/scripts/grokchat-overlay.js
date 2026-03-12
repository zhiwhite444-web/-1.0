// SillyTavern GrokChat Theme Enhancement
// 增强 CSS 的交互功能

(function() {
    'use strict';

    // 默认启用侧边栏
    const DEFAULT_ENABLED = false; // false = 收起状态，true = 展开状态

    // 等待页面加载完成
    function init() {
        // 立即执行（如果左侧面板已存在）
        if (document.getElementById('ai-config-button')) {
            applyTheme();
        } else {
            // 等待 DOM 加载
            setTimeout(applyTheme, 500);
        }
    }

    // 应用主题
    function applyTheme() {
        const sidebar = document.getElementById('ai-config-button');
        if (!sidebar) return;

        const body = document.body;
        const toggleBtn = sidebar.querySelector('.drawer-toggle');

        // 根据默认设置设置侧边栏状态
        if (DEFAULT_ENABLED) {
            body.classList.remove('is-sidebar-collapsed');
            sidebar.style.transform = 'translateX(0)';
        } else {
            body.classList.add('is-sidebar-collapsed');
            sidebar.style.transform = 'translateX(calc(-1 * var(--grokchat-sidebar-width) + 20px))';
        }

        // 确保 CSS 变量已设置
        if (document.documentElement.style.getPropertyValue('--grokchat-sidebar-width')) {
            // CSS 变量已设置
        } else {
            document.documentElement.style.setProperty('--grokchat-sidebar-width', '280px');
            document.documentElement.style.setProperty('--grokchat-blur', '12px');
        }

        // 绑定切换按钮点击事件
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleSidebar);
        }
    }

    // 切换侧边栏状态
    function toggleSidebar(e) {
        e.preventDefault();
        e.stopPropagation();

        const sidebar = e.target.closest('#ai-config-button');
        if (!sidebar) return;

        const body = document.body;
        const currentTransform = sidebar.style.transform;
        const isEnabled = !currentTransform.includes('0px') && !body.classList.contains('is-sidebar-collapsed');

        if (isEnabled) {
            // 收起侧边栏
            if (sidebar.style.transform === '') {
                sidebar.style.transform = 'translateX(calc(-1 * var(--grokchat-sidebar-width) + 20px))';
            } else {
                sidebar.style.transform = 'translateX(calc(var(--grokchat-sidebar-width) * -1 + 20px))';
            }
            body.classList.add('is-sidebar-collapsed');
        } else {
            // 展开侧边栏
            sidebar.style.transform = 'translateX(0)';
            body.classList.remove('is-sidebar-collapsed');
        }
    }

    // 键盘快捷键：按空格或 Tab 切换侧边栏
    let lastKey = null;

    document.addEventListener('keydown', function(e) {
        // 只在用户 focus 在聊天区域时响应 Ctrl+E 或空格（可选）
        if (e.ctrlKey && (e.key === 'e' || e.key === 'E')) {
            // 可以用来切换侧边栏
            e.preventDefault();
            const sidebar = document.getElementById('ai-config-button');
            if (sidebar) {
                const body = document.body;
                if (body.classList.contains('is-sidebar-collapsed')) {
                    sidebar.style.transform = 'translateX(0)';
                    body.classList.remove('is-sidebar-collapsed');
                } else {
                    sidebar.style.transform = 'translateX(calc(var(--grokchat-sidebar-width) * -1 + 20px))';
                    body.classList.add('is-sidebar-collapsed');
                }
            }
        }
    });

    // 鼠标悬停检测（可选：在鼠标离开聊天区域时自动收起侧边栏）
    const chatWindow = document.querySelector('.sillytavern-chat-window, #chat-context, #history');

    if (chatWindow) {
        chatWindow.addEventListener('mouseenter', function() {
            // 鼠标进入聊天区域时收起侧边栏（可选）
            const sidebar = document.getElementById('ai-config-button');
            if (sidebar && sidebar.closest('#ai-config-button')) {
                sidebar.style.transform = 'translateX(calc(var(--grokchat-sidebar-width) * -1 + 20px))';
            }
        });

        chatWindow.addEventListener('mouseleave', function() {
            // 鼠标离开聊天区域时展开侧边栏（可选）
            const sidebar = document.getElementById('ai-config-button');
            if (sidebar && sidebar.style.transform.includes('0px')) {
                // 只有当鼠标在侧边栏外部时才展开
                if (!document.querySelector('#left-nav-panel:hover')) {
                    return;
                }
                sidebar.style.transform = 'translateX(0)';
            }
        });
    }

    // WebSocket 连接后可以重新应用主题（如果页面动态更新）
    window.addEventListener('newChatGenerated', function() {
        // 可以在这里根据新聊天的状态应用不同的主题设置
    });

    // 页面加载完成
    window.addEventListener('load', init);

    // 动态样式变化时重新应用
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' || mutation.type === 'childList') {
                // 重新应用主题设置
                const sidebar = document.getElementById('ai-config-button');
                if (sidebar) {
                    applyTheme();
                }
            }
        });
    });

    // 开始观察
    observer.observe(document.documentElement, {
        attributes: true,
        childList: true,
        subtree: true
    });

    console.log('🚀 SillyTavern GrokChat Theme Loaded ✅');
})();