// Step 1: Get DOM
let nextDom = document.getElementById('Next');
let prevDom = document.getElementById('prev');

let mainDom = document.querySelector('.main');
let sliderDom = mainDom.querySelector('.box1');
let thumbnailBorderDom = document.querySelector('.next');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.box2');
let timeDom = document.querySelector('.main .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
    showSlider('Next');
}

prevDom.onclick = function () {
    showSlider('prev');
}

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);

function showSlider(type) {
    let sliderItemsDom = sliderDom.querySelectorAll('.box2');

    if (type === 'Next') {
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        mainDom.classList.add('Next');
    } else {
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        mainDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        mainDom.classList.remove('Next');
        mainDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}
