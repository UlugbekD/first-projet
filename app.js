const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {

    } 
}

document.getElementById('xBtn').addEventListener('click', function() {
    document.getElementById('cForm').style.display = 'block';
});
document.getElementById('cForm').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});