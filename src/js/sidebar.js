const sidebarHandler = document.querySelector(".sidebar-handler");

sidebarHandler.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("scroll-paused")
    document.querySelector(".sidebar").classList.toggle("active")
});
