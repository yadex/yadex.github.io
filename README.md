# 个人博客网站

这是一个使用纯 HTML、CSS 和 JavaScript 构建的现代化中文个人博客网站。

## 📁 项目结构

```
/workspace
├── index.html      # 主页面文件
├── style.css       # 样式表文件
├── script.js       # JavaScript 交互脚本
└── README.md       # 项目说明文档
```

## ✨ 功能特点

- **响应式设计**：完美适配桌面、平板和手机设备
- **现代 UI 设计**：简洁美观的卡片式布局
- **平滑滚动**：导航链接点击平滑滚动到对应区域
- **动画效果**：丰富的悬停和加载动画
- **模块化结构**：清晰的代码结构，易于维护和扩展

## 🎨 页面包含

1. **头部导航** - 固定在顶部的导航栏
2. **欢迎区域** - 渐变色背景的欢迎横幅
3. **关于我** - 个人介绍和技能标签展示
4. **文章列表** - 三篇示例文章的卡片展示
5. **联系我** - 社交媒体和联系方式
6. **页脚** - 版权信息和 RSS 订阅链接

## 🚀 使用方法

### 方式一：直接在浏览器打开

1. 找到 `/workspace/index.html` 文件
2. 双击用浏览器打开即可预览

### 方式二：使用本地服务器（推荐）

```bash
# 如果使用 Python 3
cd /workspace
python3 -m http.server 8080

# 或使用 Node.js 的 http-server
npx http-server /workspace
```

然后在浏览器访问 `http://localhost:8080`

## 🛠️ 自定义配置

### 修改个人信息

在 `index.html` 中找到以下部分进行修改：

- **头像**：修改 `.avatar img` 的 `src` 属性
- **个人介绍**：修改 `.about-text p` 中的文字内容
- **技能标签**：修改 `.skill-tag` 元素
- **联系方式**：修改 `.contact-item` 的 `href` 属性

### 添加新文章

在 `index.html` 的 `.articles-grid` 中添加新的 `.article-card`：

```html
<article class="article-card">
    <div class="card-image">
        <img src="你的图片地址" alt="文章封面">
    </div>
    <div class="card-content">
        <span class="category">分类名称</span>
        <h3>文章标题</h3>
        <p class="excerpt">文章摘要...</p>
        <div class="card-meta">
            <span class="date">📅 发布日期</span>
            <span class="read-time">⏱️ 阅读时间</span>
        </div>
        <a href="#" class="read-more">阅读全文 →</a>
    </div>
</article>
```

### 修改颜色主题

在 `style.css` 的 `:root` 部分修改 CSS 变量：

```css
:root {
    --primary-color: #4a90d9;      /* 主色调 */
    --secondary-color: #2c3e50;    /* 次要色 */
    --accent-color: #e74c3c;       /* 强调色 */
    /* ... 其他颜色 */
}
```

## 📱 浏览器兼容性

支持所有现代浏览器：
- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

## 🎯 后续扩展建议

1. **添加文章详情页** - 为每篇文章创建独立的 HTML 页面
2. **集成评论系统** - 如 Disqus 或 Gitalk
3. **添加搜索功能** - 实现文章搜索
4. **暗黑模式** - 添加主题切换功能
5. **RSS 订阅** - 生成 RSS Feed 文件
6. **SEO 优化** - 添加 meta 标签和结构化数据
7. **性能优化** - 图片懒加载、代码压缩等

## 📄 许可证

本项目为开源项目，可自由使用和修改。

---

**祝你使用愉快！** 🎉

如有问题或建议，欢迎随时联系。