import '@/scss/index.scss'





let acc = document.querySelectorAll(".sidebar-menu .has_child > a");

acc.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        item.parentNode.classList.toggle("active")
    })
})