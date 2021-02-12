class Slide {
  constructor(src, description) {
    this._src = src;
    this._description = description;
  }
  get src() {
    return this._src;
  }
  get description() {
    return this._description;
  }
}

class Carousel {
  constructor(slides, currentIndex = 0) {
    this._slides = slides;
    this._currentIndex = currentIndex;
  }
  get currentIndex() {
    return this._currentIndex;
  }
  set currentIndex(value) {
    if (typeof value !== 'number') throw new TypeError();
    if (
      !Number.isSafeInteger(value) ||
      value < 0 ||
      value >= this._slides.length
    )
      throw new RangeError();
    this._currentIndex = value;
  }

  get currentSlide() {
    return this._slides[this._currentIndex];
  }
  get nextSlide() {
    return this._slides[this.nextIndex];
  }

get nextNextSlide() {
    return this._slides[this.nextIndex+1];
  }

  get prevSlide() {
    return this._slides[this.prevIndex];
  }

  get prevPrevSlide() {
    return this._slides[this.prevIndex-1];
  }


  get nextIndex() {
    return (this._currentIndex + 1) % this._slides.length;
  }
  get prevIndex() {
    return (this._currentIndex - 1 + this._slides.length) % this._slides.length;
  }
}

const carousel = new Carousel([
  new Slide(
    'https://images6.fanpop.com/image/photos/39500000/jhkhjj-maria5151-39543845-261-193.jpg',
    'Ван Гог что-то интересное'
  ),
  new Slide(
    'http://media.pogliad.ua/news/article/2020/03/16/386187/jhkhj.r695x430.jpg',
    'Крик Монг'
  ),
  new Slide(
    'https://media.sketchfab.com/models/c2a9984f9ac341ef86b835572c38f517/thumbnails/dc603a85253445a6b5dc63bc176b34ba/720x405.jpeg',
    'Неизвестная '
  ),
  new Slide(
    'https://scientificrussia.ru/data/shared/top_10/kartiny/141.jpg',
    'девочка с персиками'
  ),
  new Slide(
    'https://scientificrussia.ru/data/shared/top_10/kartiny/Die_drei_Bogatyr.jpg',
    'богатыри'
  ),
  new Slide(
    'https://raskraski.com.ua/content/images/24/54731017572293_small11.jpeg',
    'кот под зонтом'
  ),
  new Slide(
    'https://images.ua.prom.st/1130959163_w640_h640_1130959163.jpg',
    'звездная ночь'
  ),
  new Slide(
    'https://i.pinimg.com/originals/b4/14/63/b41463ffd060f011cb2fba7d699412eb.jpg',
    'балерина'
  ),
  new Slide(
    'https://furnikon.com.ua/wp-content/uploads/hatynka-50-701500.jpg',
    'сельский дом'
  ),
  new Slide(
    'https://valueart.ru/image/cache/catalog/kartini-po-nomeram/GX3596-kartini-i-raskraski-po-nomeram-800x800.jpg',
    'дерево'
  ),
]);

const [prevButtonElem, nextButtonElem] = document.querySelectorAll('.btn');

const sliderClick = (direction = 'next') => (event) => {
  carousel.currentIndex =
    carousel[direction == 'next' ? 'nextIndex' : 'prevIndex'];
  updateSlide(direction);
};

prevButtonElem.addEventListener('click', sliderClick('prev'));
nextButtonElem.addEventListener('click', sliderClick('next'));

updateSlide();
/*
function updateSlide(direction) {
  const oldCurrentImg = document.querySelector('.currentImage');
  const newCurrentImg = document.querySelector('.nextImage');
  const currentSlide = carousel.currentSlide;
  //const nextSlide = carousel[direction == 'next' ? 'nextSlide' : 'prevSlide'];
  newCurrentImg.classList.replace('nextImage', 'currentImage');
  oldCurrentImg.classList.replace('currentImage', 'nextImage');
  newCurrentImg.setAttribute('src', currentSlide.src);
  //console.log('new event');
}
*/
function updateSlide(direction) {
  const currentImg = document.querySelector('.currentImage');
  const nextImg = document.querySelector('.nextImage');
  const prevImg = document.querySelector('.prevImage');
  const nextNextImg = document.querySelector('.nextNextImage');
  const prevPrevImg = document.querySelector('.prevPrevImage');
  //const currentSlide = carousel.currentSlide;

  /*currentImg.classList.replace('currentImage', 'prevImage');
  nextImg.classList.replace('nextImage', 'currentImage');
  prevImg.classList.replace('prevImage', 'nextImage');*/


  currentImg.setAttribute('src', carousel.currentSlide.src);
  nextImg.setAttribute('src', carousel.nextSlide.src);
  prevImg.setAttribute('src', carousel.prevSlide.src);
  nextNextImg.setAttribute('src', carousel.nextNextSlide.src);
  prevPrevImg.setAttribute('src', carousel.prevPrevSlide.src);
  //console.log('new event');
}