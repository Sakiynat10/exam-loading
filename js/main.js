window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.classList.add('backtop-show')
    } else {
      backtop.classList.remove('backtop-show')
    }
  }

  const loading = document.getElementById("loading");

  const loadingDuration = 2000; // 2s
  
  setTimeout(() => {
    loading.classList.add('loading-none');
  }, loadingDuration);