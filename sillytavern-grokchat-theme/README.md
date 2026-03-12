# SillyTavern GrokChat 主题 - 完整安装版

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/zhiwhite444-web/-1.0)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

基于 GrokChat 设计风格的 SillyTavern UI 美化主题，提供现代化的可折叠侧边栏布局。

## ✨ 特性

- ✅ **完整可用的主题** - 所有样式文件已优化可直接使用
- ✅ **可折叠侧边栏** - 悬停展开/自动收起，支持鼠标手势
- ✅ **毛玻璃效果** - 现代化的透明模糊背景（12px blur）
- ✅ **完全兼容** - 保留所有 SillyTavern 功能
- ✅ **响应式设计** - 移动端和桌面端完美适配
- ✅ **主题系统支持** - 与 SillyTavern 自定义主题兼容

## 📦 文件结构

```
sillytavern-grokchat-theme/
├── manifest.json              # 扩展程序清单（SillyTavern 专用）
├── README.md                  # 本文档
├── scripts/                    # JavaScript 脚本目录
│   └── grokchat-overlay.js    # 交互增强脚本（可选）
└── styles/                     # CSS 样式目录
    └── grokchat-theme.css     # 主样式文件（推可控用）
```

## 🚀 安装方法

### 方法 1：扩展程序安装（推荐）

1. **复制仓库链接并下载 ZIP** 或使用 Git 克隆
   ```bash
   git clone https://github.com/zhiwhite444-web/-1.0.git
   ```

2. **将整个 `sillytavern-grokchat-theme` 文件夹复制到 SillyTavern 扩展目录**
   ```bash
   cp -r sillytavern-grokchat-theme ~/.config/SillyTavern/data/default-user/extensions/
   ```

3. **重启 SillyTavern**
   - 关闭 SillyTavern
   - 重新打开浏览器
   - 访问 SillyTavern 页面

### 方法 2：CSS 直接引入（适合高级用户）

如果扩展安装失败，可以手动安装：

**步骤 1：在 SillyTavern 设置 → 自定义样式 中添加**

找到 `~/.config/SillyTavern/client/css/main.css`，在**文件末尾**添加：

```css
@import url(/sillytavern-grokchat-theme/styles/grokchat-theme.css);
```

**步骤 2：刷新浏览器**

确保 SillyTavern Web 服务器能访问主题文件的路径。

## ⚙️ 使用方法

### 切换侧边栏

- **展开侧边栏**：将鼠标移动到左侧区域
- **收起侧边栏**：鼠标离开左侧区域
- **强制切换**：按 `Ctrl+E`（如果在页面上焦点正确）
- **点击切换按钮**：点击侧边栏右上角的箭头按钮

### 移动端使用

- **默认状态**：侧边栏收起
- **展开**：触摸左侧区域
- **收起**：滑动后自动收起，或再次触摸

### 自定义配置

编辑 `manifest.json` 或直接在 SillyTavern 的 CSS 引入处添加：

```css
:root {
    --grokchat-sidebar-width: 320px; /* 侧边栏宽度 */
    --grokchat-blur: 15px;           /* 毛玻璃模糊程度 */
    --grokchat-opacity: 0.95;
}
```

## 🐛 常见问题

### 安装失败：Manifest file not found

**解决方法 1**：确保文件夹路径正确
```
~/.config/SillyTavern/data/default-user/extensions/
└── stupid-tavern-grokchat-theme/
    ├── manifest.json
    ├── styles/
    │   └── grokchat-theme.css
    └── scripts/
        └── grokchat-overlay.js
```

**解决方法 2**：使用 ZIP 下载安装

### 样式未生效

1. 打开浏览器控制台（F12）查看错误
2. 确认 CSS 文件路径正确
3. 刷新页面（Ctrl + F5 硬刷新）
4. 检查 SillyTavern 是否已启用扩展

### Visual Novel 模式不工作

主题完全保留了 Visual Novel 模式的所有功能，如果出现问题请检查：
1. 浏览器控制台是否有错误
2. 扩展是否已启用
3. SillyTavern 主题设置是否冲突

## 🎨 自定义外观

### 修改侧边栏颜色

编辑 `styles/grokchat-theme.css`：

```css
#ai-config-button {
    background: rgba(15, 23, 42, 0.95); /* 修改这个值 */
}
```

### 添加额外样式

在 SillyTavern 自定义 CSS 中添加：

```css
#left-nav-panel .menu_button {
    background: rgba(255, 255, 255, 0.15);
    border-left: 3px solid #60a5fa; /* 添加左侧边框 */
}
```

### 禁用 JavaScript 增强功能

1. 直接安装目录中的 `styles/grokchat-theme.css` 即可（不需要 JS）
2. 删除或跳过 `scripts/grokchat-overlay.js` 的安装

## 🔧 高级调试

### 查看日志

打开浏览器控制台，主题启用时会显示：
```
🚀 SillyTavern GrokChat Theme Loaded ✅
```

### 手动调试 CSS

1. 打开开发者工具（F12）
2. Elements 面板
3. 在 Console 中执行：
```javascript
// 检查侧边栏状态
document.getElementById('ai-config-button')

// 手动展开侧边栏
document.querySelector('#ai-config-button').style.transform = 'translateX(0)'
```

## 📱 浏览器兼容性

- ✅ Chrome 80+
- ✅ Edge 80+
- ✅ Firefox 84+
- ✅ Safari 后续版本
- ✅ 移动端浏览器

## 📄 权限说明

扩展程序不需要特殊权限，仅包含：
- Content Scripts 注入（不影响用户全局）

## 🔗 相关链接

- **完整设计文档**：[grokchat-theme-final.md](https://github.com/zhiwhite444-web/-1.0/blob/main/grokchat-theme-final.md)
- **SillyTavern 官方文档**：https://docs.sillytavern.app/
- **GitHub 仓库**：https://github.com/zhiwhite444-web/-1.0

## 📝 更新日志

### v1.0.0 (2026-03-12)

- ✨ 完整的 GrokChat UI 主题
- ✨ 标准化的扩展程序文件结构
- ✨ 可折叠侧边栏（悬停 + 手势）
- ✨ 毛玻璃背景效果
- ✨ 移动端友好
- ✨ 与 SillyTavern 主题系统兼容

## 🤝 贡献

欢迎提 Issue 和 PR！

## 📄 许可证

MIT License - 自由使用、修改和分发

---

**作者**
**作者**: zhiwhite444

**版本**: v1.0.0
**创建日期**: 2026-03-12
**最后更新**: 2026-03-12