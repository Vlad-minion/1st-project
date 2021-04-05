 window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            return document.querySelector('.navbar').classList.add('hide')
        }
        return document.querySelector('.navbar').classList.remove('hide')

       
    })

    const menuBtn = document.querySelector('.menu__btn')
const wrapper = document.querySelector('.wrapper')


menuBtn.addEventListener('click', function (evt) {
       evt.preventDefault();
    menuBtn.classList.toggle('menu__btn_active')
    wrapper.classList.toggle('wrapper_show')
    

    })