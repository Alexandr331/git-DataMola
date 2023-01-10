const video = document.querySelector('video')
const greeting = document.querySelector('#greeting')
const headerDesc = document.querySelectorAll('.parallax__headers-item')
const itemDesc = document.querySelectorAll('.info__parallax__desc-item')
const itemDescModal = document.querySelector('.info__parallax__desc')
const toggle = document.querySelector('#toggle')
const closeBtn = document.querySelector('#closeBtn')
const body = document.querySelector('body')
const headerDescModal = document.querySelector('.info__parallax__headers')


window.addEventListener('load', () => {
  if (window.innerWidth >= 1150) {
    window.addEventListener('scroll', parallax)
  
    function parallax() {
      const positionY = window.pageYOffset
      video.style.transform = `translateY(-${positionY / 10}px)`
      greeting.style.transform = `translateY(-${positionY / 2}px)`
      if (positionY > 500) {
        headerDesc.forEach((item) => {
          item.style.opacity = 1
        })
      }
      else {
        headerDesc.forEach((item) => {
          item.style.opacity = 0
        })
      }
    }
  }
  else {
    headerDesc.forEach((item) => {
      item.style.opacity = 1
    })
  }
  
  
  headerDesc.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-parentid') 
      itemDesc.forEach((item) => {
        if (item.getAttribute('data-id') == id) {
          if (window.innerWidth <= 1150) {
            itemDescModal.style.display = 'flex'
            headerDescModal.style.display = 'none'
            toggle.style.display = 'block'
          }
          item.style.opacity = 1
          item.style.transform = `translateX(0px)`
        }
        else {
          item.style.opacity = 0
          item.style.transform = `translateX(-800px)`
        }
  
      })
    })
  })
  
  
  toggle.addEventListener('click', () => {
    headerDescModal.style.display = 'flex'
    toggle.style.display = 'none'
  })
  closeBtn.addEventListener('click', () => {
    headerDescModal.style.display = 'none'
    toggle.style.display = 'block'
  })



})

