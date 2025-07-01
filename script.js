// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to sections
    document.querySelectorAll("nav a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Simple carousel
    const projects = document.querySelectorAll(".project");
    let current = 0;
  
    function showProject(index) {
      projects.forEach((p, i) => p.style.display = i === index ? "block" : "none");
    }
  
    document.getElementById("prevProject").addEventListener("click", () => {
      current = (current - 1 + projects.length) % projects.length;
      showProject(current);
    });
  
    document.getElementById("nextProject").addEventListener("click", () => {
      current = (current + 1) % projects.length;
      showProject(current);
    });
  
    showProject(current);
  });
  