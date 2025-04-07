// const backToTopButton = document.getElementById('back-to-top');
// window.onscroll = function () {
//     if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         backToTopButton.style.display = 'block';
//     } else {
//         backToTopButton.style.display = 'none';
//     }
// };

const checkTheme = document.getElementById("check-5");
checkTheme.addEventListener("click", () => {
    let theme = "light";
    if (checkTheme.checked)
        document.querySelector(".check>label").className = "bi bi-brightness-high-fill";
    else {
        theme = "dark";
        document.querySelector(".check>label").className = "bi bi-moon-stars-fill";
    }
    document.getElementsByTagName("html")[0].setAttribute("data-bs-theme", theme);
    document.getElementById('page-show').contentWindow.postMessage({ theme: theme }, '*');
});

const container = document.getElementById("content");
const btn_offcanvas_bdSidebar = document.querySelector('button[data-bs-target="#bdSidebar"]');
async function redirect(idToActive) {
    const filename = `templates\\${idToActive}.html`;
    const response = await fetch(filename);
    if (!response.ok) alert(`Lỗi khi tải file: ${response.status}`);
    else {
        const contentHtml = await response.text();
        container.innerHTML = contentHtml;
        document.querySelector(".nav-link.active").classList.remove("active");
        document.getElementById(idToActive).classList.toggle("active");
        if (idToActive != "contact") {
            btn_offcanvas_bdSidebar.classList.toggle("d-none");
            document.getElementById("fb-root").classList.replace("d-flex", "d-none");
        }
        else {
            btn_offcanvas_bdSidebar.classList.remove('d-none');
            document.getElementById("fb-root").className = "w-100 d-flex justify-content-center";
            console.log(document.getElementById("fb-root").className);

        }

        if (idToActive == "home")
            document.getElementById("carouselExampleControlsNoTouching")
                .classList.remove("d-none");
        else document.getElementById("carouselExampleControlsNoTouching")
            .classList.toggle("d-none");
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry.target);
        if (entry.isIntersecting)
            entry.target.classList.add("show");
        else entry.target.classList.remove("show");
    });
})
document.querySelectorAll(".motion").forEach(e => observer.observe(e));
// const hiddenElements = document.querySelectorAll(".hidden");

