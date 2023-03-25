// const wallpapers = [
//     {
//       id: 1,
//       title: "Sunset over the ocean",
//       imageUrl: "https://example.com/wallpapers/sunset-ocean.jpg",
//       tags: ["sunset", "ocean", "beach"],
//       resolution: {
//         width: 1920,
//         height: 1080,
//       },
//     },
//     {
//       id: 2,
//       title: "Mountains in the mist",
//       imageUrl: "https://example.com/wallpapers/mountains-mist.jpg",
//       tags: ["mountains", "nature", "landscape"],
//       resolution: {
//         width: 2560,
//         height: 1440,
//       },
//     },
//     {
//       id: 3,
//       title: "City skyline at night",
//       imageUrl: "https://example.com/wallpapers/city-skyline-night.jpg",
//       tags: ["city", "night", "skyline"],
//       resolution: {
//         width: 3840,
//         height: 2160,
//       },
//     },
//     // и так далее
//   ];
  

let wallpapers = [
    {
        title : 'Popular',
        id : 0,
        describe : 'The most popular wallpapers here!',
        img : [
           'img/1.jpeg',
           'img/2.jpeg',
           'img/3.jpeg',
           'img/4.jpeg',
           'img/5.jpeg',
           'img/6.jpeg',
           'img/7.jpeg',
           'img/8.jpeg',
           'img/9.jpeg'
        ]
    },
    {
        title : 'Animals',
        id : 1,
        describe : 'The most beautiful animals where you can see here!',
        img : [
            'img/animals1.jpeg',
            'img/animals2.jpeg',
            'img/animals3.jpeg',
            'img/animals4.jpeg',
            'img/animals5.jpeg',
            'img/animals6.jpeg',
            'img/animals7.jpeg',
            'img/animals8.jpeg',
            'img/animals9.jpeg'
        ]
    },
    {
        title : 'Auto',
        id : 2,
        describe : 'There are a lot of cars for your desktop.',
        img : [
            'img/auto1.jpeg',
            'img/auto2.jpeg',
            'img/auto3.jpeg',
            'img/auto4.jpeg',
            'img/auto5.jpeg',
            'img/auto6.jpeg',
            'img/auto7.jpeg',
            'img/auto8.jpeg',
            'img/auto9.jpeg'
        ]
    },
    {
        title : 'Food',
        id : 3,
        describe : 'Just food. Nothing anymore.',
        img : [
            'img/food1.jpeg',
            'img/food2.jpeg',
            'img/food3.jpeg',
            'img/food4.jpeg',
            'img/food5.jpeg',
            'img/food6.jpeg',
            'img/food7.jpeg',
            'img/food8.jpeg',
            'img/food9.jpeg'
        ]
    },
    {
        title : 'Nature',
        id : 4,
        describe : 'If you wanna left your troubles and take calm, you need to come here.',
        img : [
            'img/nature1.jpeg',
            'img/nature2.jpeg',
            'img/nature3.jpeg',
            'img/nature4.jpeg',
            'img/nature5.jpeg',
            'img/nature6.jpeg',
            'img/nature7.jpeg',
            'img/nature8.jpeg',
            'img/nature9.jpeg'
        ]
    },
    {
        title : 'Space',
        id : 5,
        describe : 'adsflkajsdfsad',
        img : [
            'img/space1.jpeg',
            'img/space2.jpeg',
            'img/space3.jpeg',
            'img/space4.jpeg',
            'img/space5.jpeg',
            'img/space6.jpeg',
            'img/space7.jpeg',
            'img/space8.jpeg',
            'img/space9.jpeg'
        ]
    }
];

console.log(wallpapers[0].title)

//------------------------------------------------------------------------------------------------------------------------------------

//находим коробку под карточки
let main = document.querySelector('main');

//получаем текст шаблона каталога
let templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

//получаем текст шаблона блока в каталоге
let templateBlock = document.getElementById('tmpl-block').innerHTML;

//получаем текст шаблона карточки
let templateCard = document.getElementById('tmpl-card').innerHTML;

//вызываем функцию при загрузке страницы
renderCatalog();


//создаем функцию по отрисовке каталога блоков карточек (показаны только первые картинки в массиве)
function renderCatalog(id) {

    clearPage();

    //рисуем данные на экран
    for (let i = 0; i < wallpapers[id][img].length; i++ ) {

        //в коробку, которую нашли, засовываем наш шаблон, и заменяем заглушки, на адрес в массиве.
        main.innerHTML += templateCatalog.replace('${title}', wallpapers[i].title)
                                         .replace('${img}', wallpapers[i].img[i]) //<---- показывается как превью (первая картинка)
                                         .replace('${id}', wallpapers[i].id) //<------ ВОТ ЗДЕСЬ
                                         .replace('${describe}', wallpapers[i].describe) ;
    }

}


// //создаем функцию отрисовки одного блока карточек (задаем id, и обращаемся к айдишнику, который у нас указан как "ключ")
// function renderGroup(id) {

//     clearPage();
//     //заполняем шаблон и выводим на экран
//     for (let i = 0; i < wallpapers.length; i++) {

//         //выводим все картинки этого блока
//         main.innerHTML += templateBlock.replace('${firstImg}', wallpapers[id].img[i]);
        
//     }
// }

// function renderCard(id) {

//     clearPage();

//     main.innerHTML += templateCard.replace('${img}', wallpapers.img[id]);

// }

// console.log(wallpapers[4].img[0]);

//------------------------------------------------------------------------------------------------------------------------------------
//функция очистки страницы
function clearPage() {
    main.innerHTML = '';

};
