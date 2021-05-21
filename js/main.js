//split effect
const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
const preCont = document.querySelector('.showonMobile_prev_prev')
const preContRight = document.querySelector('.showonMobile_prev_prev_right')


left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    preCont.classList.add('showonMobile_prev_prev_show')
    })

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
preCont.classList.remove('showonMobile_prev_prev_show')


})

right.addEventListener('mouseenter', () => {
     container.classList.add('hover-right')
preContRight.classList.add('showonMobile_prev_prev_show_right')

})
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
preContRight.classList.remove('showonMobile_prev_prev_show_right')
})

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
   const videoPl = document.getElementById('about__video')


    playBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        playBtn.classList.toggle('playBtn_hide') 
        previewDst.classList.toggle('prevDst');
        videoPl.play();
    })

