document.addEventListener("DOMContentLoaded", () => {
  const blogList = document.getElementById("blog-list");
  if (!blogList || !window.blogData) return;

  window.blogData.forEach((blog) => {
    const post = document.createElement("div");

    post.innerHTML = `
      <div class="p-4">
        <h2 class="text-xl font-semibold">${blog.title}</h2>
        <p class="text-gray-600 mt-2">${blog.description}</p>
        <a href="blog-template.html?slug=${blog.slug}" class="inline-block mt-4 text-blue-600 hover:underline">Read More</a>
      </div>
    `;

    blogList.appendChild(post);
  });
});
