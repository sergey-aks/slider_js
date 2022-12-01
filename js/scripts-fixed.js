// aksSlider Begin
//Получаем картинки
let imagesInitial = [
    {
        url: './images/slider/photo-1.jpg',
        title: 'Rostov-on-Don, Admiral'
    },
    {
        url: './images/slider/photo-2.jpg',
        title: 'Sochi Thieves'
    },
    {
        url: './images/slider/photo-3.jpg',
        title: 'Rostov-on-Don Patriotic'
    },
]

const aksSlider_wrapper = document.querySelector('.aks-slider');

//Функция слайдер
function aksSlider(aksSlider_wrapper, imagesInitial) {

    const aksSlider_wrapper_Title = aksSlider_wrapper.querySelector('.aks-slider-title-wrapper'); //Контейнер для заголовков
    const aksSlider_wrapper_Img = aksSlider_wrapper.querySelector('.aks-slider-img-wrapper'); //Контейнер для картинок
    const aksSlider_wrapper_Control = aksSlider_wrapper.querySelector('.aks-slider-control-wrapper'); //Контейнер для точек управления

    //Добавляем левую, правую стрелки и контейнер для точек в aks-slider-control-wrapper
    let leftControlArrow = document.createElement('div');
    leftControlArrow.classList.add('completed-projects-control__arrow-left');
    leftControlArrow.innerHTML = '<img src="./images/icons/arrow.svg" alt="left">';
    aksSlider_wrapper_Control.appendChild(leftControlArrow);

    let dotsWrapper = document.createElement('div');
    dotsWrapper.classList.add('completed-projects-control-dots-wrapper');
    aksSlider_wrapper_Control.appendChild(dotsWrapper);

    let rightControlArrow = document.createElement('div');
    rightControlArrow.classList.add('completed-projects-control__arrow-right');
    rightControlArrow.innerHTML = '<img src="./images/icons/arrow.svg" alt="lefrightt">';
    aksSlider_wrapper_Control.appendChild(rightControlArrow);

    //Добавляем картинки, заголовки,элементы управления в контейнеры
    imagesInitial.forEach((img,index) => {
        //Добавляем картинки в контейнер
        let image = document.createElement('img');
        image.classList.add('aks-slider-img-wrapper__item');
        image.setAttribute('src', img.url);
        image.setAttribute('alt', img.title);
        aksSlider_wrapper_Img.appendChild(image);

        if (index === 0) image.classList.add('active');
        //Добавляем заголовки в aks-slider-title-wrapper
        let titleElement = document.createElement('span');
        titleElement.classList.add('completed-projects-choose-city__item');
        titleElement.classList.add('aks-slider-title-wrapper__item');
        titleElement.innerText = img.title;
        titleElement.setAttribute('data-index', index);
        if (index === 0) titleElement.classList.add('active');
        aksSlider_wrapper_Title.appendChild(titleElement);

        //Добавляем элементы управления (точки) в aks-slider-control-wrapper
        let dot = document.createElement('div');
        dot.classList.add('completed-projects-control__dot');
        dot.innerHTML = '<img src="./images/icons/dot.svg" alt="">';
        dot.setAttribute('data-index', index);
        if (index === 0) dot.classList.add('active');
        dotsWrapper.appendChild(dot);
    });

    const aksSlider_wrapper_Img_Items = aksSlider_wrapper_Img.querySelectorAll('.aks-slider-img-wrapper__item');  //Картинки

    //Добавляем левую, правую стрелки над картинками
    let arrowWrapper = document.createElement('div');
    arrowWrapper.classList.add('completed-projects-slider__control-wrapper');

    let arrowLeftWrapper = document.createElement('div');
    arrowLeftWrapper.classList.add('completed-projects-slider__control-left');
    arrowLeftWrapper.innerHTML = '<img src="./images/icons/slider-control.svg" alt="left">';
    arrowWrapper.appendChild(arrowLeftWrapper);

    let arrowRightWrapper = document.createElement('div');
    arrowRightWrapper.classList.add('completed-projects-slider__control-right');
    arrowRightWrapper.innerHTML = '<img src="./images/icons/slider-control.svg" alt="right">';
    arrowWrapper.appendChild(arrowRightWrapper);

    aksSlider_wrapper_Img.after(arrowWrapper);

    //Находим все элементы
    const aksSliderImages = aksSlider_wrapper_Img.querySelectorAll('.aks-slider-img-wrapper__item');  // Картинки
    const aksSliderTitles = aksSlider_wrapper_Title.querySelectorAll('.aks-slider-title-wrapper__item');  // Заголовки
    const aksSliderDots = aksSlider_wrapper_Control.querySelectorAll('.completed-projects-control__dot');  // Точки

    //Функция изменения картинки при клике на заголовоки и точки
    function clickTitleDot(clickElement) {
        aksSlider_wrapper_Img.querySelector('.active').classList.remove('active');
        aksSlider_wrapper_Title.querySelector('.active').classList.remove('active');
        aksSlider_wrapper_Control.querySelector('.active').classList.remove('active');

        aksSliderImages[clickElement.getAttribute('data-index')].classList.add('active');
        aksSliderTitles[clickElement.getAttribute('data-index')].classList.add('active');
        aksSliderDots[clickElement.getAttribute('data-index')].classList.add('active')
    }

    //Клик на заголовки
    aksSliderTitles.forEach((title) => {
        title.addEventListener('click', () => {
            if (title.classList.contains('active')) return;
            clickTitleDot(title);
        })
    })

    //Клик на точки
    aksSliderDots.forEach((dot) => {
        dot.addEventListener('click', () => {
            if (dot.classList.contains('active')) return;
            clickTitleDot(dot);
        })
    })

    //Функция изменения картинки при клике на левую, правую стрелки над картинками и около точек
    function arrowClick(side) {
        // Определяем активную картинку
        const activeImg = aksSlider_wrapper_Img.querySelector('.active');
        // Определяем активный заголовок
        const activeTitle = aksSlider_wrapper_Title.querySelector('.active');
        // Определяем активную точку
        const activeDot = aksSlider_wrapper_Control.querySelector('.active');

        //Убираем у активных элементов класс active
        activeImg.classList.remove('active');
        activeTitle.classList.remove('active');
        activeDot.classList.remove('active');

        if (side === 'left') {
            if (activeImg.previousElementSibling === null) {
                aksSliderImages[aksSliderImages.length - 1].classList.add('active');
                aksSliderTitles[aksSliderImages.length - 1].classList.add('active');
                aksSliderDots[aksSliderImages.length - 1].classList.add('active');
            } else {
                activeImg.previousElementSibling.classList.add('active');
                activeTitle.previousElementSibling.classList.add('active');
                activeDot.previousElementSibling.classList.add('active');
            }
        } else {
            if (activeImg.nextElementSibling === null) {
                aksSliderImages[0].classList.add('active');
                aksSliderTitles[0].classList.add('active');
                aksSliderDots[0].classList.add('active');
            } else {
                activeImg.nextElementSibling.classList.add('active');
                activeTitle.nextElementSibling.classList.add('active');
                activeDot.nextElementSibling.classList.add('active');
            }
        }
    }
    //Левая стрелка над картинками
    arrowLeftWrapper.addEventListener('click', () => {
        arrowClick('left');
    });
    //Правая стрелка над картинками
    arrowRightWrapper.addEventListener('click', () => {
        arrowClick('right');
    });
    //Левая стрелка, где точки
    leftControlArrow.addEventListener('click', () => {
        arrowClick('left');
    });
    //Правая стрелка, где точки
    rightControlArrow.addEventListener('click', () => {
        arrowClick('right');
    });

};

document.addEventListener('DOMContentLoaded', aksSlider(aksSlider_wrapper, imagesInitial));

// aksSlider End