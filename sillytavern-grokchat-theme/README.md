# SillyTavern GrokChat 风格美化主题

基于 GrokChat 设计风格的 SillyTavern UI 美化方案，保持所有原有功能的同时提供现代化的界面体验。

## 🎨 特性

- **非侵入式设计** - 不修改核心代码，只覆盖样式层
- **左侧可折叠边栏** - 将顶部菜单集成到侧边栏
- **现代化毛玻璃效果** - 半透明背景 with 模糊效果
- **保持原生态背景** - 支持用户自定义背景图
- **完全兼容移动端** - 响应式设计
- **保留所有功能** - Visual Novel Mode、TTS、WorldInfo 等功能不变

## 📦 文件结构

```
sillytavern-grokchat-theme/
├── README.md                    # 说明文档
├── sillytavern-ui-extension.json # 主题扩展配置
├── css/
│   └── grokchat-theme.css       # 主样式文件
├── js/
│   └── grokchat-overlay.js      # 交互脚本（可选）
└── assets/
    └── icons/                   # 自定义图标
```

## 🚀 安装方法

### 方法1：直接复制到 SillyTavern

1. 下载主题文件到 SillyTavern 根目录
2. 在 SillyTavern 设置中导入主题
3. 启用"GrokChat 风格"主题

### 方法2：Chrome 扩展方式

1. 按照 `sillytavern-ui-extension.json` 配置
2. 在 Chrome 扩展程序页面加载已解压的扩展程序
3. 访问 SillyTavern 时自动应用主题

## ⚙️ 配置选项

```css
/* 自定义透明度 */
:root {
  --grokchat-opacity: 0.95;
  --grokchat-blur: 12px;
  --grokchat-sidebar-width: 280px;
}
```

## 🎯 布局说明

```
┌─────────────────────────────────────────────────────────────┐
│  [┌ 侧边栏菜单┌]   [主内容区（保持不变）]           [右上工具箱] │
│  │ 用户信息  │   [聊天消息区域]                       [绘画工具] │
│  ├──────────┤   [输入框+菜单]                        [设置]     │
│  │ 主菜单    │   [AI 回复区域]                       [其他工具]   │
│  ├──────────┤                                             │
│  │ 对话列表  │                                             │
│  ├──────────┤                                             │
│  │ 系统设置  │                                             │
│  └──────────┘                                             │
└─────────────────────────────────────────────────────────────┘
```

## 🔧 兼容性

- ✅ SillyTavern v1.0+
- ✅ 移动端浏览器
- ✅ 桌面端浏览器
- ✅ 支持 PWA

## 📝 更新日志

### v1.0.0 (2026-03-12)
- ✨ 初始版本发布
- 🎨 基于 GrokChat 风格设计
- 📱 完全响应式布局
- 🛡️ 非侵入式安装

---

**作者**: zhiwhite444  
**基于**: SillyTavern + GrokChat UI 设计  
**许可**: MIT License

> 💡 提示：此主题不会影响 SillyTavern 的任何原有功能，所有现有的 API 连接、插件、设置都会正常工作！