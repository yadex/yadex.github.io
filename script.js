// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    
    // 导航链接点击平滑滚动
    const navLinks = document.querySelectorAll('.nav-links a, .read-more');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 文章卡片悬停效果增强
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            articleCards.forEach(c => {
                if (c !== card) {
                    c.style.opacity = '0.7';
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            articleCards.forEach(c => {
                c.style.opacity = '1';
            });
        });
    });

    // 技能标签点击效果
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 可以在这里添加搜索相关文章的功能
            console.log('点击了技能标签:', this.textContent);
        });
    });

    // 联系按钮点击反馈
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                alert('请在 HTML 中配置实际的联系方式链接！');
            }
        });
    });

    // 阅读更多按钮提示
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                e.preventDefault();
                const articleTitle = this.closest('.card-content').querySelector('h3').textContent;
                alert(`"${articleTitle}" 文章详情页待开发，敬请期待！`);
            }
        });
    });

    // 添加页面加载动画
    const sections = document.querySelectorAll('.about-section, .articles-section, .contact-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // 控制台欢迎信息
    console.log('%c欢迎访问我的博客！', 'color: #4a90d9; font-size: 20px; font-weight: bold;');
    console.log('%c这是一个使用纯 HTML、CSS 和 JavaScript 构建的个人博客网站。', 'color: #666; font-size: 14px;');
    console.log('%c如果你有任何问题或建议，欢迎联系我！', 'color: #2c3e50; font-size: 14px;');
});

// 返回顶部功能（可选）
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const header = document.querySelector('.header');
    
    if (scrollPosition > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
