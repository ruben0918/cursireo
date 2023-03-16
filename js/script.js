let allBtn = document.querySelector(`#all`);
let gamesBtn = document.querySelector(`#games`);
let webBtn = document.querySelector(`#web`);
let designBtn = document.querySelector(`#design`);
let coursesBlock = document.querySelector(`.coursers-block`);

for (let i = 0; i < data.length; i++) {
    coursesBlock.innerHTML += `<div class="course">
    <img src="${data[i].img}" alt="" class="course__img">
    <div class="course__content">
        <h3 class="course__title">${data[i].title}</h3>
        <p class="course__price">${data[i].price}₽</p>
        <a href="#" class="course__link">Приобрести</a>
    </div>
    </div>`
}

function filter(type) {
    coursesBlock.innerHTML = ``
    for (let i = 0; i < data.length; i++) {
        if (data[i].type == type) {
            coursesBlock.innerHTML += `<div class="course">
            <img src="${data[i].img}" alt="" class="course__img">
            <div class="course__content">
                <h3 class="course__title">${data[i].title}</h3>
                <p class="course__price">${data[i].price}₽</p>
                <a href="#" class="course__link">Приобрести</a>
            </div>
            </div>`
        }
    }

    if (coursesBlock.innerHTML == ``) {
        coursesBlock.innerHTML = `<p>Результатов не найдено</p>`
    }
}

allBtn.addEventListener(`click`, () => {
    coursesBlock.innerHTML = ``
    for (let i = 0; i < data.length; i++) {
        coursesBlock.innerHTML += `<div class="course">
        <img src="${data[i].img}" alt="" class="course__img">
        <div class="course__content">
            <h3 class="course__title">${data[i].title}</h3>
            <p class="course__price">${data[i].price}₽</p>
            <a href="#" class="course__link">Приобрести</a>
        </div>
        </div>`
    }
});

gamesBtn.addEventListener(`click`, () => {
    filter(`game`);
});

webBtn.addEventListener(`click`, () => {
    filter(`web`);
});

designBtn.addEventListener(`click`, () => {
    filter(`design`);
});