import './style.less'

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', function() {
        alert('Gracias por tu interés, pronto me pondré en contacto contigo.');
    });
});
