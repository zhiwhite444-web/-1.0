# SillyTavern GrokChat 风格美化主题

基于 GrokChat 设计风格的 SillyTavern UI 美化方案，提供现代化的可折叠侧边栏布局。

## ✨ 核心特性

- ✅ **完整可用的主题** - 立即可用，无需修改 SillyTavern 代码
- ✅ **可折叠侧边栏** - 点击按钮或悬停展开/收起
- ✅ **毛玻璃效果** - 现代化的透明模糊背景
- ✅ **保留所有功能** - Visual Novel、TTS、API 连接等完全兼容
- ✅ **响应式设计** - 移动端和桌面端都适配
- ✅ **高度可定制** - CSS 变量支持灵活配置

## 📦 主题文件结构

```
sillytavern-grokchat-theme/
├── README.md                          # 本文件
├── css/
│   └── grokchat-theme.css            # 主样式文件（完整可直接使用）
├── js/
│   └── grokchat-overlay.js           # 交互增强脚本（可选）
└── 其他说明文件...

根目录文件：
├── sillytavern-ui-extension.json      # Chrome 扩展配置
└── grokchat-theme-final.md            # 详细设计文档
```

## 🚀 快速安装

### 方法 1：添加 CSS 到 SillyTavern（推荐）

**步骤 1：打开 SillyTavern 的样式文件**

```bash
cd ~/.config/SillyTavern/client/css/
```

**步骤 2：备份原有文件**

```bash
cp style.css style.css.backup
cp main.css main.css.backup
```

**步骤 3：在 `main.css` 文件**末尾添加：

```css
@import url(/sillytavern-grokchat-theme/css/grokchat-theme.css);
```

**步骤 4：重启 SillyTavern**

刷新浏览器页面即可看到效果！

### 方法 2：直接复制主题文件到 SillyTavern

**步骤 1：下载主题文件到 SillyTavern 本地**

在你的 SillyTavern 安装目录下创建一个主题文件夹，比如：
```
~/.config/SillyTavern/client/themes/grokchat-theme/
```

**步骤 2：复制以下文件到该文件夹**
- `grokchat-theme.css`
- `grokchat-overlay.js`（可选）

**步骤 3：在 `main.css` 中引入**

```css
@import url(/client/themes/grokchat-theme/grokchat-theme.css);
```

## ⚙️ 自定义配置

### 修改侧边栏宽度

在 `main.css` 中添加：

```css
:root {
    --grokchat-sidebar-width: 320px; /* 修改为需要的宽度 */
}
```

### 调整模糊程度

```css
:root {
    --grokchat-blur: 15px; /* 更模糊 */
}
```

### 自定义颜色（可选）

```css
#ai-config-button {
    background: rgba(15, 23, 42, 0.9) !important;
}

#ai-config-button .menu_button {
    background: rgba(255, 255, 255, 0.15);
}
```

## 🎯 使用方法

### 展开侧边栏

- **鼠标悬停**：将鼠标移动到左侧区域
- **点击按钮**：点击侧边栏右上角的切换按钮

### 收起侧边栏

- **自动**：鼠标离开后自动收起
- **手动**：再次点击切换按钮

### 移动端

默认收起状态，触摸左侧区域展开，滑动后自动收起。

## 🔧 高级功能

### 启用 JavaScript 增强功能

将 `grokchat-overlay.js` 同样引入到 SillyTavern：

1. 将文件放在主题目录下
2. 在 `main.css` 中添加：
```css
@import url(/client/themes/grokchat-theme/grokchat-overlay.js);
```

这个脚本提供：
- 快捷键切换（Ctrl+E）
- 更流畅的动画效果
- 移动端手势支持

### 调整默认状态

```javascript
// 在 grokchat-overlay.js 顶部修改
const DEFAULT_ENABLED = true; // true = 默认展开
```

## 📱 浏览器兼容性

- ✅ Chrome/Edge/Chromium（推荐）
- ✅ Firefox
- ✅ Safari（部分支持）
- ✅ 移动端浏览器

## 🐛 常见问题

### 背景图不显示？

确保 SillyTavern 的 `#bg1` 元素没有被意外隐藏。主题不会影响背景图显示。

### 样式未生效？

1. 确认 CSS 文件路径正确
2. 刷新浏览器（硬刷新 Ctrl+F5）
3. 检查浏览器控制台是否有 CSS 加载错误

### 与其他主题冲突？

使用 `!important` 提高优先级，或调整为不同的 CSS 规则。

### Visual Novel 模式不工作？

主题完全保留 Visual Novel 模式的所有功能，MediaPipe 检测、检测覆盖等都会正常工作。

## 📝 文件说明

### grokchat-theme.css（最重要）

完整的样式文件，包含：
- 侧边栏布局覆盖
- 毛玻璃效果
- 聊天窗口适配
- 响应式设计
- 移动端适配
- 浏览器兼容性

### grokchat-overlay.js（可选）

JavaScript 增强，提供额外交互功能。

## 🎨 效果预览

主题布局：
```
┌─────────────────────────────────────────────────────────────┐
│  [┌ 侧边栏菜单┌]   [主聊天窗口]            [工具栏]         │
│  │ 用户信息  │   [消息气泡]                       [AI 设置]  │
│  ├──────────┤   [输入框]                         [绘画]     │
│  │ AI 配置  │   [消息气泡]                       [扩展]     │
│  ├──────────┤   [消息气泡]                                         │
│  │ 中间层些  │   [消息气泡]                           ┘         │
│  ├──────────┤   [消息气泡]                                         │
│  ├──────────┤   [消息气泡]                                         │
│  ├──────────┤   [消息气泡]                                         │
│  └──────────┘   [消息气泡]                                         │
└─────────────────────────────────────────────────────────────┘
```

## 🔗 相关文件

- 精细设计文档：[grokchat-theme-final.md](https://github.com/zhiwhite444-web/-1.0/blob/main/grokchat-theme-final.md)
- 扩展配置：[sillytavern-ui-extension.json](https://github.com/zhiwhite444-web/-1.0/blob/main/sillytavern-ui-extension.json)

## 📄 许可

MIT License - 自由使用，严禁商用，欢迎 Contributions！

---

**作者**：zhiwhite444
**版本**：v1.0.0
**最后更新**：2026-03-12
**基于**：SillyTavern + GrokChat UI 设计