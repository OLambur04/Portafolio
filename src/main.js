import './style.less'

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Gracias por tu interés, pronto me pondré en contacto contigo.')
        })
    })
})