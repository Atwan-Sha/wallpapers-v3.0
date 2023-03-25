const wallpapers = [
           'img/1.jpeg',
           'img/2.jpeg',
           'img/3.jpeg',
           'img/4.jpeg',
           'img/5.jpeg',
           'img/6.jpeg',
           'img/7.jpeg',
           'img/8.jpeg',
           'img/9.jpeg',
           'img/animals1.jpeg',
            'img/animals2.jpeg',
            'img/animals3.jpeg',
            'img/animals4.jpeg',
            'img/animals5.jpeg',
            'img/animals6.jpeg',
            'img/animals7.jpeg',
            'img/animals8.jpeg',
            'img/animals9.jpeg',
            'img/auto1.jpeg',
            'img/auto2.jpeg',
            'img/auto3.jpeg',
            'img/auto4.jpeg',
            'img/auto5.jpeg',
            'img/auto6.jpeg',
            'img/auto7.jpeg',
            'img/auto8.jpeg',
            'img/auto9.jpeg',
            'img/food1.jpeg',
            'img/food2.jpeg',
            'img/food3.jpeg',
            'img/food4.jpeg',
            'img/food5.jpeg',
            'img/food6.jpeg',
            'img/food7.jpeg',
            'img/food8.jpeg',
            'img/food9.jpeg',
            'img/nature1.jpeg',
            'img/nature2.jpeg',
            'img/nature3.jpeg',
            'img/nature4.jpeg',
            'img/nature5.jpeg',
            'img/nature6.jpeg',
            'img/nature7.jpeg',
            'img/nature8.jpeg',
            'img/nature9.jpeg',
            'img/space1.jpeg',
            'img/space2.jpeg',
            'img/space3.jpeg',
            'img/space4.jpeg',
            'img/space5.jpeg',
            'img/space6.jpeg',
            'img/space7.jpeg',
            'img/space8.jpeg',
            'img/space9.jpeg'
];

//находим коробку под карточки
let main = document.querySelector('main');

//получаем текст шаблона каталога
let templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//получаем текст шаблона карточки
let templateCard = document.getElementById('tmpl-card').innerHTML;

//вызываем функцию при загрузке страницы
renderCatalog();

//создаем функцию по отрисовке каталога блоков карточек (показаны только первые картинки в массиве)
function renderCatalog() {

    //рисуем данные на экран
    for (let i = 0; i < wallpapers.length; i++ ) {

        
        main.innerHTML += templateCatalog.replace('${img}', wallpapers[i])
                                         .replace('${id}', i+1);
    }
}


function renderImage(id) {

    clearPage();

    main.innerHTML += templateCard.replace('${img}', wallpapers[id-1]);
}

//функция очистки страницы
function clearPage() {
    main.innerHTML = '';

};
