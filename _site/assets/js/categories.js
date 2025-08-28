const categories = { "机器学习": [{ url: `/posts/%E7%BA%BF%E6%80%A7%E5%9B%9E%E5%BD%92%E6%A8%A1%E5%9E%8B/`, date: `10 Apr 2025`, title: `线性回归模型`},],"深度学习": [{ url: `/posts/Awesome_AIGC_Detection/`, date: `15 Aug 2025`, title: `Awesome-AIGC-Detection`},{ url: `/posts/pytorch1/`, date: `10 Aug 2025`, title: `Pytorch笔记📓第一弹`},{ url: `/posts/LLM%E7%AE%80%E4%BB%8B/`, date: `20 Jul 2025`, title: `LLM简介`},{ url: `/posts/MLLM%E7%9A%84AIGC%E6%A3%80%E6%B5%8B/`, date: `03 May 2025`, title: `MLLM的AIGC检测`},{ url: `/posts/GenImage/`, date: `29 Apr 2025`, title: `GENIMAGE`},],"论文笔记": [{ url: `/posts/MLLM%E7%9A%84AIGC%E6%A3%80%E6%B5%8B/`, date: `03 May 2025`, title: `MLLM的AIGC检测`},{ url: `/posts/GenImage/`, date: `29 Apr 2025`, title: `GENIMAGE`},],"Pytorch": [{ url: `/posts/pytorch1/`, date: `10 Aug 2025`, title: `Pytorch笔记📓第一弹`},],"Jekyll": [{ url: `/posts/Jekyll%E9%AD%94%E6%94%B9%E6%95%99%E7%A8%8B(%E4%B8%80)/`, date: `17 Aug 2025`, title: `Jekyll魔改教程(一)`},{ url: `/posts/Jekyll%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E6%95%99%E7%A8%8B/`, date: `12 Aug 2025`, title: `Jekyll博客搭建教程`},],"教程": [{ url: `/posts/Jekyll%E9%AD%94%E6%94%B9%E6%95%99%E7%A8%8B(%E4%B8%80)/`, date: `17 Aug 2025`, title: `Jekyll魔改教程(一)`},{ url: `/posts/Jekyll%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E6%95%99%E7%A8%8B/`, date: `12 Aug 2025`, title: `Jekyll博客搭建教程`},],"论文整理": [{ url: `/posts/Awesome_AIGC_Detection/`, date: `15 Aug 2025`, title: `Awesome-AIGC-Detection`},], }

console.log(categories);

window.onload = function () {
  document.querySelectorAll(".article-category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      console.log(posts);
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};