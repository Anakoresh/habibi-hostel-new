function getMinHeight(container) {
  const width = window.innerWidth
  const actualHeight = container.clientHeight

  if (width >= 1024 && width < 1440) {
    return Math.max(actualHeight, 600)
  }

  return Math.max(actualHeight, 900)
}

// ROOMS SLIDER
const upBtnRooms = document.querySelector('#rooms .up-button')
const downBtnRooms = document.querySelector('#rooms .down-button')
const sidebarRooms = document.querySelector('#rooms .sidebar')
const mainSlideRooms = document.querySelector('#rooms .main-slide')
const slidesCountRooms = mainSlideRooms.querySelectorAll('div').length
const containerRooms = document.querySelector('#rooms')

let activeSlideIndexRooms = 0
sidebarRooms.style.top = `-${(slidesCountRooms - 1) * getMinHeight(containerRooms)}px`

upBtnRooms.addEventListener('click', () => changeSlideRooms('up'))
downBtnRooms.addEventListener('click', () => changeSlideRooms('down'))

function changeSlideRooms(direction) {
  if (direction === 'up') {
    activeSlideIndexRooms = (activeSlideIndexRooms + 1) % slidesCountRooms
  } else {
    activeSlideIndexRooms = (activeSlideIndexRooms - 1 + slidesCountRooms) % slidesCountRooms
  }

  const height = getMinHeight(containerRooms)
  mainSlideRooms.style.transform = `translateY(-${activeSlideIndexRooms * height}px)`
  sidebarRooms.style.transform = `translateY(${activeSlideIndexRooms * height}px)`
}

// AREAS SLIDER
const upBtnAreas = document.querySelector('#areas .up-button')
const downBtnAreas = document.querySelector('#areas .down-button')
const sidebarAreas = document.querySelector('#areas .sidebar')
const mainSlideAreas = document.querySelector('#areas .main-slide')
const slidesCountAreas = mainSlideAreas.querySelectorAll('div').length
const containerAreas = document.querySelector('#areas')

let activeSlideIndexAreas = 0
sidebarAreas.style.top = `-${(slidesCountAreas - 1) * getMinHeight(containerAreas)}px`

upBtnAreas.addEventListener('click', () => changeSlideAreas('up'))
downBtnAreas.addEventListener('click', () => changeSlideAreas('down'))

function changeSlideAreas(direction) {
  if (direction === 'up') {
    activeSlideIndexAreas = (activeSlideIndexAreas + 1) % slidesCountAreas
  } else {
    activeSlideIndexAreas = (activeSlideIndexAreas - 1 + slidesCountAreas) % slidesCountAreas
  }

  const height = getMinHeight(containerAreas)
  mainSlideAreas.style.transform = `translateY(-${activeSlideIndexAreas * height}px)`
  sidebarAreas.style.transform = `translateY(${activeSlideIndexAreas * height}px)`
}

// AROUND HOSTEL SLIDER
const upBtnAroundHostel = document.querySelector('#around-hostel .up-button')
const downBtnAroundHostel = document.querySelector('#around-hostel .down-button')
const sidebarAroundHostel = document.querySelector('#around-hostel .sidebar')
const mainSlideAroundHostel = document.querySelector('#around-hostel .main-slide')
const slidesCountAroundHostel = mainSlideAroundHostel.querySelectorAll('div').length
const containerAroundHostel = document.querySelector('#around-hostel')

let activeSlideIndexAroundHostel = 0
sidebarAroundHostel.style.top = `-${(slidesCountAroundHostel - 1) * getMinHeight(containerAroundHostel)}px`

upBtnAroundHostel.addEventListener('click', () => changeSlideAroundHostel('up'))
downBtnAroundHostel.addEventListener('click', () => changeSlideAroundHostel('down'))

function changeSlideAroundHostel(direction) {
  if (direction === 'up') {
    activeSlideIndexAroundHostel = (activeSlideIndexAroundHostel + 1) % slidesCountAroundHostel
  } else {
    activeSlideIndexAroundHostel = (activeSlideIndexAroundHostel - 1 + slidesCountAroundHostel) % slidesCountAroundHostel
  }

  const height = getMinHeight(containerAroundHostel)
  mainSlideAroundHostel.style.transform = `translateY(-${activeSlideIndexAroundHostel * height}px)`
  sidebarAroundHostel.style.transform = `translateY(${activeSlideIndexAroundHostel * height}px)`
}

// FAQ SLIDER
const upBtnFaq = document.querySelector('#faq .up-button')
const downBtnFaq = document.querySelector('#faq .down-button')
const sidebarFaq = document.querySelector('#faq .sidebar')
const mainSlideFaq = document.querySelector('#faq .main-slide')
const slidesCountFaq = mainSlideFaq.querySelectorAll('.faq-right-content').length
const containerFaq = document.querySelector('#faq')

let activeSlideIndexFaq = 0
sidebarFaq.style.top = `-${(slidesCountFaq - 1) * getMinHeight(containerFaq)}px`

upBtnFaq.addEventListener('click', () => changeSlideFaq('up'))
downBtnFaq.addEventListener('click', () => changeSlideFaq('down'))

function changeSlideFaq(direction) {
  if (direction === 'up') {
    activeSlideIndexFaq = (activeSlideIndexFaq + 1) % slidesCountFaq
  } else {
    activeSlideIndexFaq = (activeSlideIndexFaq - 1 + slidesCountFaq) % slidesCountFaq
  }

  const height = getMinHeight(containerFaq)
  mainSlideFaq.style.transform = `translateY(-${activeSlideIndexFaq * height}px)`
  sidebarFaq.style.transform = `translateY(${activeSlideIndexFaq * height}px)`
}
