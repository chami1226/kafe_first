document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.querySelectorAll("menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.checked = false; // メニューを閉じる
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLinks = document.querySelectorAll("menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // デフォルトのジャンプ動作を防ぐ

            const targetId = this.getAttribute("href").substring(1); // #を除いたIDを取得
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // スムーススクロール
            }

            menuToggle.checked = false; // メニューを閉じる
        });
    });
});
