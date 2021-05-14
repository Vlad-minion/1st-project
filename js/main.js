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

     const playBtn = document.querySelector ('.about__vid__play_btn')
     const playImg = document.querySelector ('.about__video__img')
     const playVid = document.getElementsByClassName ('.about__video')

    playBtn.addEventListener('click',function (evt){
        evt.preventDefault();
        playBtn.classList.toggle('play_btn_disalable')
        playImg.classList.toggle('play_img_disalable')
       playVid.play()
    })

  
    //scroll navbar


    window.addEventListener('scroll', () => {
        if (window.scrollY ) {
            return document.querySelector('.navbar').classList.add('hide')
        } 
        return document.querySelector('.navbar').classList.remove('hide')
        
       
    })



    