# SillyTavern GrokChat 风格美化主题 - 完整版

基于 GrokChat 页面风格的 SillyTavern UI 美化主题，提供现代化的可折叠侧边栏布局。

## ✨ 功能特性

- ✅ **完整的 CSS 主题** - 无需修改 SillyTavern 本体代码
- ✅ **可折叠侧边栏** - 点击按钮切换展开/收起状态
- ✅ **毛玻璃效果** - 现代化的透明模糊背景
- ✅ **保留所有功能** - Visual Novel Mode、TTS、API 连接等功能完全保留
- ✅ **响应式设计** - 支持移动端和桌面端
- ✅ **自定义配置** - 可通过 CSS 变量调节样式

## 📦 文件说明

```
sillytavern-grokchat-theme/
├── README.md                          # 本文件
├── css/
│   └── grokchat-theme.css            # 主样式文件（完整）
├── js/
│   └── grokchat-overlay.js           # 交互增强脚本（可选）
└── funky-sillytavern-theme.json      # 扩展配置（兼容扩展系统）

root/
├── grokchat-theme-final.md            # 详细设计文档
└── sillytavern-ui-extension.json      # Chrome 扩展配置
```

## 🚀 快速安装

### 方法 1：CSS 直接引入（推荐）

**步骤 1：备份原有样式文件**

```bash
cd ~/.config/SillyTavern/client/css/
cp style.css style.css.backup
cp main.css main.css.backup
```

**步骤 2：添加 GrokChat 样式文件**

```bash
# 在 style.css 文件最顶部添加以下内容：

@import url('grokchat-theme.css');
```

**步骤 3：重启 SillyTavern**

```bash
# 浏览器刷新页面或重启 SillyTavern
```

### 方法 2：使用 Chrome 扩展

**步骤 1**：按照 `sillytavern-ui-extension.json` 创建 Chrome 扩展

**步骤 2**：扩展名为 `.crx` 文件格式化后加载到浏览器

**步骤 3**：访问 SillyTavern 时自动应用主题

**步骤 4**：在 SillyTavern 设置 → 组件选择器中选择刚创建的扩展

### 方法 3：修改 main.css

**步骤 1**：打开 `~/.config/SillyTavern/client/css/main.css`

**步骤 2**：在文件最后添加：

```css
@import url(/sillytavern-grokchat-theme/css/grokchat-theme.css);
```

（确保主题文件在 SillyTavern 的 Web 服务器可访问）

## ⚙️ 配置选项

### 自定义侧边栏宽度

在 `main.css` 中添加：

```css
:root {
    --grokchat-sidebar-width: 280px; /* 修改为你的宽度 */
}
```

### 自定义毛玻璃模糊程度

```css
:root {
    --grokchat-blur: 12px; /* 值越大越模糊 */
}
```

### 自定义透明度

```css
:root {
    --grokchat-opacity: 0.95; /* 0-1，1 为完全不透明 */
}
```

### 默认启用还是禁用侧边栏

在 `grokchat-overlay.js` 文件顶部修改：

```javascript
const DEFAULT_ENABLED = true; // true = 默认展开，false = 默认收起
```

### 修改切换动画速度

```css
:root {
    --grokchat-transition-speed: 0.3s; /* 值越小越快 */
}
```

## 🎯 使用方法

### 展开侧边栏

- **鼠标悬停**：将鼠标放在左侧边栏区域
- **点击切换按钮**：点击侧边栏右上角的切换按钮
- **退出聊天区域**：将鼠标移动到聊天区域外

### 收起侧边栏

- **鼠标不悬停**：保持鼠标离开侧边栏区域
- **点击收起按钮**：再次点击右上角的切换按钮

### 响应式行为

- **桌面端**：侧边栏始终可用，悬停展开
- **移动端**：默认收起，触摸屏幕展开，滑动后自动收起

## 🔧 高级配置

### 移除悬停自动展开

如果不喜欢自动展开功能，修改 `grokchat-overlay.js`：

```javascript
// 注释掉这些部分或删除对应代码：
chatWindow.addEventListener('mouseenter', ...);
chatWindow.addEventListener('mouseleave', ...);
```

### 添加快捷键

在 `grokchat-overlay.js` 中添加快捷键监听：

```javascript
// 默认 Ctrl+E 切换侧边栏
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        toggleSidebar(); // 添加你定义的切换函数
    }
});
```

### 浏览器兼容性

- ✅ Chrome/Edge/Chromium (推荐)
- ✅ Firefox
- ✅ Safari (部分支持，可能受限于 WebKit)
- ✅ 移动端浏览器

## 🎨 样式兼容性

此主题使用 SillyTavern 的 CSS 变量和类名，完全兼容：

- ✅ 主题系统（自定义颜色、模糊度等）
- ✅ Visual Novel Mode
- ✅ 自定义主题扩展
- ✅ 所有插件系统
- ✅ 所有 LLM 连接方式

## 🐛 常见问题

### 背景图没有显示出来？

**原因**：CSS 可能覆盖了背景设置

**解决**：确保在 `grokchat-theme.css` 中背景相关代码放在后面

### 侧边栏点击无反应？

**可能原因**：
1. JavaScript 未加载
2. 权限问题（本地文件访问）

**解决**：使用 Chrome 扩展方式安装，或确保 SillyTavern 能访问主题文件

### 在某些主题下样式错乱？

**原因**：部分主题覆盖了关键 CSS 变量

**解决**：在 CSS 中使用 !important 确保优先级，或覆盖特定主题的 CSS

### 移动端体验不好？

**解决**：修改 CSS 中的媒体查询参数：

```css
/* 在移动端调整侧边栏尺寸 */
@media (max-width: 768px) {
    :root {
        --grokchat-sidebar-width: 260px;
    }
}
```

## 📱 移动端使用

### 桌面端（PC）

- 鼠标悬停左侧区域展开侧边栏
- 鼠标离开后收起
- 点击右侧箭头按钮切换

### 移动端

- 默认收起状态
- 点击左侧区域展开
- 向左滑动或点击关闭按钮收起

## 🔍 调试工具

在浏览器控制台中可以查看主题状态：

```javascript
// 检查侧边栏状态
const sidebar = document.getElementById('ai-config-button');
console.log('Sidebar enabled:', !sidebar.style.transform.includes('0px'));

// 手动切换侧边栏
const toggle = document.querySelector('.drawer-toggle');
toggle.click();
```

## 📝 更新日志

### v1.0.0 (2026-03-12)
- ✅ 完整的 CSS 主题文件
- ✅ JavaScript 交互增强
- ✅ 支持 GrokChat 风格布局
- ✅ 毛玻璃效果
- ✅ 响应式设计
- ✅ 完全兼容 SillyTavern

## 🤝 贡献

欢迎提issue和PR！

## 📄 许可

MIT License

---

**作者**：zhiwhite444
**基于**：SillyTavern + GrokChat UI 设计
**版本**：v1.0.0
**最后更新**：2026-03-12