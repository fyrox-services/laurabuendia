const linksInBlog = document.querySelectorAll(".body-content a");

linksInBlog.forEach((link) => {
  if (link.getAttribute("href")?.startsWith("http")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});
