// 页面切换动画
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href.startsWith('#') && !href.startsWith('javascript')) {
      e.preventDefault();
      document.body.classList.add('page-transition');
      setTimeout(() => {
        window.location.href = href;
      }, 500); // 动画时间
    }
  });
});
