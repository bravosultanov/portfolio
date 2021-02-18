const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach(element => {
    element.addEventListener('click', () => {
        element.parentNode.classList.toggle('active');
    })
})