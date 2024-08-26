document.getElementById("sidebarToggle").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");

  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebar.style.transform = "translateX(0)";
    mainContent.style.marginLeft = "250px";
  } else {
    sidebar.style.transform = "translateX(-250px)";
    mainContent.style.marginLeft = "0";
  }
});
