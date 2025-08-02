(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const mainContentContainer = document.getElementById('swup');
    if (!mainContentContainer) {
      console.error('错误：未找到 ID 为 "swup" 的容器。请检查 HTML 结构。');
      return;
    }

    // 定义页面切换函数，并立即执行
    function transitionPage(url) {
      // 触发旧内容淡出动画
      mainContentContainer.classList.add('fade-out');

      // 使用 fetch 获取新页面的 HTML
      fetch(url)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const newDoc = parser.parseFromString(html, 'text/html');
          const newMainContent = newDoc.getElementById('swup');
          
          if (!newMainContent) {
            window.location.href = url;
            return;
          }

          // 替换旧内容
          mainContentContainer.innerHTML = newMainContent.innerHTML;
          window.history.pushState({}, '', url);
          document.title = newDoc.title;

          // 触发新内容淡入动画
          mainContentContainer.classList.remove('fade-out');
        })
        .catch(error => {
          console.error('加载新页面时出错:', error);
          window.location.href = url;
        });
    }

    // 使用事件委托，将点击事件绑定到 document.body
    document.body.addEventListener('click', function(event) {
      // 获取被点击的链接元素
      const clickedLink = event.target.closest('a');

      if (clickedLink) {
        // 检查链接是否为内部链接，并且不是新窗口打开
        const isInternalLink = clickedLink.href.startsWith(window.location.origin);
        const isNotSamePageLink = clickedLink.href !== window.location.href;

        if (isInternalLink && isNotSamePageLink && clickedLink.target !== '_blank' && !clickedLink.href.includes('#')) {
          
          // 立即阻止默认跳转行为
          event.preventDefault(); 
          
          // 立即开始页面过渡
          transitionPage(clickedLink.href);
        }
      }
    });

    // 处理前进/后退按钮的点击
    window.addEventListener('popstate', function() {
      transitionPage(window.location.href);
    });
  });
})();