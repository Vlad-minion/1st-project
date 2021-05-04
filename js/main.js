//split effect
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

//burger menu for mobile
const menuBtn = document.querySelector('.menu__btn')
const wrapper = document.querySelector('.wrapper')


menuBtn.addEventListener('click', function (evt) {
       evt.preventDefault();
    menuBtn.classList.toggle('menu__btn_active')
    wrapper.classList.toggle('wrapper_show')
    

    })

    //scroll navbar


    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            return document.querySelector('.navbar').classList.add('hide')
        }
        return document.querySelector('.navbar').classList.remove('hide')

       
    })


    const playBtn = document.querySelector('.about__vid__play_btn')
   const previewDst = document.querySelector('.about__video__img')
    const vidPlay = document.querySelector('.about__video')


    playBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        playBtn.classList.toggle('playBtn_hide') 
        previewDst.classList.toggle('prevDst');
        

    })