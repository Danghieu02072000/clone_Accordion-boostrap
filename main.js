var item = document.querySelectorAll('.accordion__item')
item.forEach(function(item) {
    item.onclick = function(e) {
        let btn = e.target.closest('.accordion__item');
        btn.classList.toggle('active');
    }
})