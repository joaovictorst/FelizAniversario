document.addEventListener("DOMContentLoaded", () => {
    const btnEla = document.getElementById("btnEla");
    const container = document.querySelector(".buttons");

    var count = 0
    function moveButton() {
        const maxX = container.clientWidth - btnEla.offsetWidth;
        const maxY = container.clientHeight - btnEla.offsetHeight;
        if (count == 6) {
            btnEla.style.display = 'none';
        }
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        btnEla.style.left = `${randomX}px`;
        btnEla.style.top = `${randomY}px`;
        count++
    }

    btnEla.addEventListener("mouseenter", moveButton);
});


function popUp(){
    alert("EU JÁ SABIA KKKK!!");
}