//https://talkerscode.com/webtricks/display-progress-bar-while-page-loads-using-jquery.php
window.addEventListener("load", function() {
    const loadingPage = document.getElementById("loadingPage");
    const mainContent = document.getElementById("mainContent");
    const progressBar = document.getElementById("progressBar");
    let progress = 0;
  
    const loadingInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + "%";
        if (progress >= 100) {
            clearInterval(loadingInterval);
            loadingPage.style.opacity = 0;
            setTimeout(() => {
                loadingPage.style.display = "none";
                mainContent.style.display = "block";
            }, 500);
        }
    }, 50);
  });
  