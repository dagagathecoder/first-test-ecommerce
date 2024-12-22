document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.navbar-toggler');

    toggler.addEventListener('click', () => {
        toggler.classList.toggle('collapsed');
    });
});
