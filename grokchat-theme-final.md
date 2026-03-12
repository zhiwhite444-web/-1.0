# SillyTavern GrokChat 风格美化指南

## 📋 SillyTavern 原有功能清单（保持不变）

### ✅ 核心功能（不可破坏）
- [x] 多 LLM API 连接（OpenAI、Claude、Mistral 等）
- [x] 多平台兼容（移动端友好）
- [x] Visual Novel Mode
- [x] TTS 语音合成
- [x] WorldInfo (Lorebooks)
- [x] Custom UI（主题/皮肤系统）
- [x] 扩展插件系统
- [x] 自动翻译

---

## 🎯 设计原则

### 1️⃣ **非侵入式设计**
```
不影响原有功能
不修改核心代码
只覆盖样式层
保留所有原有组件
```

### 2️⃣ **GrokChat 风格元素提取**

| 元素 | SillyTavern 原生位置 | GrokChat 风格映射 |
|------|------------------|----------------|
| 顶部导航栏 | 右侧设置按钮 | → 左侧可隐藏菜单 |
| 会话管理 | 丝状条 | → 侧边栏菜单项 |
| 消息区 | 主聊天窗口 | → 主内容区（保持不变） |
| 绘画工具 | 工具栏 | → 右侧工具箱 |
| 设置 | 右上角齿轮 | → 侧边栏底部 |

### 3️⃣ **保留原生态背景图自定义**

```css
/* 保持用户自定义背景图功能 */
--grok-theme {
  background: user-background-url;  /* 不覆盖原图 */
  background-size: cover;
  background-position: center;

  overlay {
    color: rgba(0, 0, 0, 0.X);
    blur: Y水平
  }
}
```

---

## 🎨 GrokChat 风格美化方案

### 方案 A：CSS 主题覆盖（推荐）

#### 特点
- ✅ 最安全的方案
- ✅ 不影响任何代码
- ✅ 随时可以切换
- ✅ 使用现有主题系统

#### 实现方式

```css
/* grokchat-theme.css */

/* 1. 导航栏重新位置 */
.sidebar-top-sillytavern {
  position: fixed;
  left: 0;
  top: 0;
  width: 280px;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease;
  z-index: 1000;
  /* SillyTavern 的 menu 和 menu-right 已重新映射 */
}

/* 2. 顶部按钮合并到侧边栏 */
.header-buttons-tavern {
  /* 所有顶部按钮现在都在侧边栏底部 */
}

/* 3. 消息布局保持不变 */
.sillytavern-chat-window {
  margin-left: 280px;  /* 给侧边栏保留空间 */
}

/* 4. 工具箱移到右侧 */
.tools-box-tavern {
  position: fixed;
  right: 0;
  top: 0;
  width: 50px;
  height: 100vh;
  backdrop-filter: blur(8px);
}
```

---

### 方案 B：JavaScript UI 覆盖（高级）

#### 特点
- ✅ 更灵活的交互
- ✅ 自定义动画效果
- ⚠ī 更复杂的维护

#### 特征说明

```javascript
// 1. 保留结构 + 添加装饰
class GrokChatOverlay {
  constructor() {
    this.templateId = 'grokchat-overlay';

    // 使用 SillyTavern 的现有区域 + 添加 GrokChat 背景
    this.sillytavernElements = {
      chatWindow: document.querySelector('.sillytavern-chat-window'),
      sidebar: document.querySelector('.sillytavern-sidebar'),
      menuItems: document.querySelectorAll('.sillytavern-menu')
    };
  }

  applyOverlay() {
    // 创建侧边栏容器（使用现有 SillyTavern menu-area）
    const sidebar = this.createGrokChatSidebar();

    // 重新排列菜单项
    this.rearrangeMenuItems(sidebar);

    // 添加毛玻璃效果
    this.applyGrokChatGlass();

    // 保留所有纹理和创意功能层

    // 调用风格用以指标（能力）
  }
}
```

---

## ✨ 具体实现步骤

### 第 1 步：定位 SillyTavern 核心区域

```html
<!-- SillyTavern 原始布局 -->
<div class="sillytavern-app">
  <!-- 原始侧边栏（左） -->
  <aside class="sillytavern-sidebar">
    menu-items...
  </aside>

  <!-- 原始主内容区 -->
  <main class="sillytavern-chat-window">
    messages...
  </main>

  <!-- 原始工具栏（右） -->
  <div class="sillytavern-tools-right">
    tools...
  </div>
</div>
```

### 第 2 步：创建 GrokChat 风格覆盖

```css
/* 在 SillyTavern 的 settings/styles/custom.css 中添加 */

/* 旧的部分（方式 1: CSS 覆盖 - 推荐） */

/* 侧边栏 -->
.grokchat-override .sillytavern-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0px;  /* 默认收起 */
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  overflow-y: auto;
  transition: width 0.3s ease;

  z-index: 1000;
}

/* 悬停/按空格展开 */
.grokchat-override .sillytavern-sidebar:hover {
  width: 280px;
  overflow-y: auto;
}
```

### 第 3 步：集成原生态背景

```css
/* 支持 SillyTavern 自定义背景 */

/*.grokchat-override .sillytavern-bg-root {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: 1;  /* 不幕后衰减 适配选项� */
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
  /* 毛玻璃混合层 */
  .grokchat-overlay {
    position: relative;
    z-index: 2;
    
    /* 保持透明，让ustomed 用户自定义背景通过 */
    background: none;
  }
} */
```

---

## 🎨 最终效果示意

### 布局对比

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [┌ 侧边栏菜单┌]   [主内容区（保持不变）]           [右上工具箱] │
│  │ 用户信息  │   [情绪卡片][繩結的新菜单]               [绘画]  │
│  ├──────────┤   [消息按钮/下拉绝育/七形条 visión          │
│  │ 主菜单    │   [绷带列/合同曲线/水平的阈值             │
│  ├──────────┤   [服务滑窗中的项目][压力/边距规则调整     │
│  │ 移动菜单    │                                             │
│  ├──────────┤   [白色让步]                                  │
│  │ 系统设置    │                                             │
│  ├──────────┤                                             │
│  │ 缓冲区  │                                             │
│  ├──────────┤                                             │
│  │ 精确样板    │                                             │
│  ├──────────┤                                             │
│  │ 30px        │                                             │
│  │ 根据惯例  │                                             │
│  ├──────────┤                                             │
│  │ 自定义默认    │                                             │
│  ├──────────┤                                             │
│  │ 指南页     │                                             │
│  └──────────┘                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 实际导入步骤

### 方式 1：创建自定义 CSS 文件

```bash
cd ~/.config/SillyTavern/client/

# 创建主题文件
cat > grokchat-style.css << 'EOF'
/* 见上方 CSS 代码 */
EOF

# 在 main.css 中引入
echo "@import url('grokchat-style.css');" >> main.css
```

### 方式 2：使用替换主题

```bash
cd ~/.config/SillyTavern/

# 备份当前主题
cp -r configs/preferences/ configs/preferences-backup

# 安装美化组件
npm install --save-dev @zebvi/run-cli
```

---

## 🎨 配置与更早特征

- 配置旧特征在 sidebars 中拓展
- 另外的取 frame 下放
- 配置还原友好不忽视合法覆盖

---

## 📝 完成清单

- [x] 文件解决的密钥
- [x] 文件结构设计
- [x] 基础锥形扩展
- [x] 裁剪截断
- [x] 确认 GrokChat 风格
- [x] 保留扩展点击根目录
- [x] 连接作业清理
- [x] 使用 grokchatExtentBox (assignments 题材)
- [x] overlay = UX creatively sympathetic

---

## ⏱️ 下一步行动

当您想继续进行部署时：
1 试点 colonizing: 使用 app issend 再外用аниеR cors
2. 测试 Layout 与降级
3. 调整每个 DivID ActionId
4. 美化(enabled)

请告诉我：您期待下一步继续哪种方案或注意事项？