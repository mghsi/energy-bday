function toggleMenu(state) {
    let sidebar = document.getElementById("sidebar");
    let openBtn = document.getElementById("open-btn");
    let closeBtn = document.getElementById("close-btn");

    if (state === 'open') {
        sidebar.classList.remove("hidden")
        sidebar.classList.add("flex")
        openBtn.classList.remove("animate-rotate-right")
        closeBtn.classList.remove("animate-rotate-right")
        openBtn.classList.add("animate-rotate-left")
        closeBtn.classList.add("animate-rotate-left")
        sidebar.classList.add("animate-slide-in");
    } else {
        sidebar.classList.add("animate-slide-out");
        openBtn.classList.remove("animate-rotate-left")
        closeBtn.classList.remove("animate-rotate-left")
        setTimeout(() => {
            openBtn.classList.add("animate-rotate-right")
            closeBtn.classList.add("animate-rotate-right")
            sidebar.classList.add("hidden");
            sidebar.classList.remove("flex");
            sidebar.classList.remove("animate-slide-out");
        }, 300);
    }
}   