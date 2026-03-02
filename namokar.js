// 1. Function jo elements ko reveal karega
const revealOnScroll = () => {
    const sections = document.querySelectorAll(".page-section, .page-content, .spiritual-card");
    const screenHeight = window.innerHeight;

    sections.forEach(sec => {
        const position = sec.getBoundingClientRect().top;
        
        // Agar element screen ke andar aa jaye
        if (position < screenHeight - 50) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0px)";
        }
    });
};

// 2. Initial Style Setup (Saare sections ko shuru me hide karne ke liye)
document.querySelectorAll(".page-section, .page-content, .spiritual-card").forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(30px)";
    sec.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"; // Smooth movement
});

// 3. Listeners
window.addEventListener("scroll", revealOnScroll);

// 4. Page Load hote hi check karein (taaki top wala section turant dikhe)
window.addEventListener("load", revealOnScroll);

// 5. Sidebar click par bhi animation trigger karne ke liye 'showPage' function me 
// revealOnScroll() ko call karna zaroori hai.
document.addEventListener("DOMContentLoaded", function() {

  const player = document.getElementById("audioPlayer");
  const title = document.getElementById("nowPlaying");

  document.querySelectorAll(".lecture-link").forEach(link => {

    link.addEventListener("click", function(e) {
      e.preventDefault();

      const file = this.getAttribute("data-file");

      player.src = file;
      player.load();

      player.play()
        .then(() => {
          title.innerText = "Now Playing: " + this.innerText;
        })
        .catch(error => {
          console.log("Playback error:", error);
          alert("Audio file not found or browser blocked autoplay.");
        });

    });

  });

});
