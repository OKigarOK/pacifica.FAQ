const DATA = [
    {
        title: 'Детали для ТО:',
        id: 'maintenance',
        sub_titles: [
            {subtitle: 'Фильтр маслянный', id: 'oil_filter', items: [
                    {
                        item_image: './images/maintenance/oil_filter_mopar_05281090.jpg',
                        item_code: '05281090 (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_fram_ph16.jpg',
                        item_code: 'PH16 (Fram)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_mahle_oc23.jpg',
                        item_code: 'OC23 (Knecht/Mahle)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/oil_filter_mahle_oc236.jpg',
                        item_code: 'OC236 (Knecht/Mahle)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр воздушный', id: 'air_filter', items: [
                    {
                        item_image: './images/maintenance/air_filter_mopar_05510026aa.jpg',
                        item_code: '05510026AA (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_blue_print_ada102256.jpg',
                        item_code: 'ADA102256 (Blue Print)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_stellox_7101933sx.jpg',
                        item_code: '71-01933-SX (Stellox)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/air_filter_patron_pf1534.jpg',
                        item_code: 'PF1534 (Patron)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр салона', id: 'cabin_filter', items: [
                    {
                        item_image: './images/maintenance/cabine_filter_blue_print_ada102503.jpg',
                        item_code: 'ADA102503 (Blue Print)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/cabine_filter_patron_pf2250.jpg',
                        item_code: 'PF2250 (Patron)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/cabine_filter_mopar_82205905.jpg',
                        item_code: '82205905 (Mopar)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Фильтр АКПП', id: 'trans_filter', items: [
                    {
                        item_image: './images/maintenance/trans_filter_mopar_4864505ab.jpg',
                        item_code: '4864505AB (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/trans_filter_fram_ft1122a.jpg',
                        item_code: 'FT1122A (Fram)',
                        item_note: 'в комплекте пробковая прокладка'
                    }
                ]},
            {subtitle: 'Свечи зажигания', id: 'spark', items: [
                    {
                        item_image: './images/maintenance/spark_plug_champion_7034.jpg',
                        item_code: '7034 (Champion)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/spark_plug_ngk_7781.jpg',
                        item_code: '7781 (NGK)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/spark_plug_mopar_SZFR5LP13G.jpg',
                        item_code: 'SZFR5LP13G (Mopar)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Ремень поликлинковый', id: 'belt', items: [
                    {
                        item_image: './images/maintenance/belt_mopar_04861850aa.jpg',
                        item_code: '04861850AA (Mopar)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_continental.jpg',
                        item_code: '6PK2370 (Continental)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_dayco_6pk2375.jpg',
                        item_code: '6PK2375 (Dayco)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Ремень ГРМ', id: 'belt_timing', items: [
                    {
                        item_image: './images/maintenance/belt_timing_gates_5674XS.jpg',
                        item_code: '5674XS (Gates)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_timing_dayco_94864.jpg',
                        item_code: '94864 (Dayco)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/belt_timing_mopar_04792353.jpg',
                        item_code: '04792353 (Mopar)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Термостат', id: 'thermostat', items: [
                    {
                        item_image: './images/maintenance/motorad_465-195.jpg',
                        item_code: '465-195 (Motorad)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/thermostat_stant_14789.jpg',
                        item_code: '14789 (Stant)',
                        item_note: ''
                    },
                    {
                        item_image: './images/maintenance/thermostat_gates_33952.jpg',
                        item_code: '33952 (Gates)',
                        item_note: ''
                    }
                ]},
            {subtitle: 'Пробка сливного отверстия', id: 'oil_drain', items: [
                    {
                        item_image: './images/maintenance/oil_drain_mopar_06507741aa.jpg',
                        item_code: '06507741AA (Mopar)',
                        item_note: 'M14-1.5'
                    }
                ]},
            {subtitle: 'Щетки стеклоочистителя', id: 'wipers', items: [
                    {
                        item_image: './images/logo.jpg',
                        item_code: 'Уточнить можно тута',
                        item_note: 'Пока что в работе...'
                    }
                ]},
            {subtitle: 'Насос системы охлаждения', id: 'water_pump', items: [
                    {
                        item_image: './images/maintenance/water_pump_mopar_V9900085.jpg',
                        item_code: 'V9900095 (Mopar)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_gmb_gwcr35a.jpeg',
                        item_code: 'GWCR35A (GMB)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_airtex_7162.jpg',
                        item_code: '7162 (Airtex)',
                        item_note: 'мелкая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_patron_pwp1018.jpg',
                        item_code: 'PWP1018 (Patron)',
                        item_note: 'мелкая помпа. Здеся может быть очень много текста и всяких букаф )))'
                    },
                    {
                        item_image: './images/maintenance/water_pump_mopar_04792968ad.jpg',
                        item_code: '04792968AD (Mopar)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_gates_43542.jpg',
                        item_code: '43542 (Gates)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_gmb-gwcr43a.jpg',
                        item_code: 'GWCR43A (GMB)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_airtex_1835.jpg',
                        item_code: '1835 (Airtex)',
                        item_note: 'большая помпа'
                    },
                    {
                        item_image: './images/maintenance/water_pump_patron_pwp1217.jpg',
                        item_code: 'PWP1217 (Patron)',
                        item_note: 'большая помпа'
                    },

                ]},
            {subtitle: 'Колодки тормозные', id: 'break_pads', items: [
                    {
                        item_image: './images/maintenance/break_pads_patron_pbp7000.jpg',
                        item_code: 'PBP7000 (Patron)',
                        item_note: 'Передние колодки'
                    },
                    {
                        item_image: './images/maintenance/break_pads_patron_pbp7001.jpg',
                        item_code: 'PBP7001 (Patron)',
                        item_note: 'Задние колодки'
                    }
                ]},
        ]
    },
    {
        title: 'Двигатель:',
        id: 'engine',
        sub_titles: [
            {subtitle: 'Прокладки', id: ''},
            {subtitle: 'Система подачи воздуха', id: ''},
            {subtitle: 'Механизм газораспределения', id: ''},
            {subtitle: 'Блок-картер', id: ''},
            {subtitle: 'Кривошипношатунный механизм', id: ''},
            {subtitle: 'Система смазки', id: ''},
            {subtitle: 'Крепление двигателя', id: ''},
            {subtitle: 'Система очистки ОГ', id: ''},
            {subtitle: 'Ременной привод', id: ''},
            {subtitle: 'Приготовление смеси', id: ''},
            {subtitle: 'Головка цилиндра', id: ''},
        ]
    },
    {
        title: 'Топливная система:',
        id: 'fuel_system',
        sub_titles: [
            {subtitle: 'Бак топливный', id: ''},
            {subtitle: 'Клапан', id: ''},
            {subtitle: 'Датчик уровня топлива', id: ''},
            {subtitle: 'Регулятор давления подачи оплива', id: ''},
            {subtitle: 'Насос топливный, комплектующие', id: ''},
        ]
    },
    {
        title: 'Система охлаждения:',
        id: 'cooling_system',
        sub_titles: [
            {subtitle: 'Термостат, прокладка', id: ''},
            {subtitle: 'Радиаторы маслянный, водяной', id: ''},
            {subtitle: 'Патрубки системы охлаждения', id: ''},
            {subtitle: 'Выключатель, датчик', id: ''},
            {subtitle: 'Вентилятор охлаждения радиатора', id: ''},
            {subtitle: 'Насос системы охлаждения, прокладка', id: ''},
        ]
    },
    {
        title: 'Система выпуска:',
        id: 'exhaust_system',
        sub_titles: [
            {subtitle: 'Нейтрализация ОГ', id: ''},
            {subtitle: 'Глушитель в сборе', id: ''},
            {subtitle: 'Датчик кислорода', id: ''},
            {subtitle: 'Коллектор впускной', id: ''},
            {subtitle: 'Трубы', id: ''},
            {subtitle: 'Детали монтажа', id: ''},
        ]
    },
    {
        title: 'Трансмиссия:',
        id: 'transmission',
        sub_titles: [
            {subtitle: 'Автоматическая коробка передач', id: '123'},
            {subtitle: 'Привод колеса', id: '456'},
            {subtitle: 'Главная передача', id: '789'},
        ]
    },
    {
        title: 'Ходовая часть:',
        id: 'chassis',
        sub_titles: [
            {subtitle: 'Пружина подвески', id: ''},
            {subtitle: 'Опора амортизатора', id: ''},
            {subtitle: 'Амортизатор подвески', id: ''},
            {subtitle: 'Рычаги и тяги подвески', id: ''},
            {subtitle: 'Стабилизатор, крепление', id: ''},
            {subtitle: 'Ступица колеса, составляющие', id: ''},
            {subtitle: 'Крепление амортизатора подвески', id: ''},
            {subtitle: 'Кулак поворотный, составляющие', id: ''},
            {subtitle: 'Балка моста, подвеска оси', id: ''},
            {subtitle: 'Колесо, крепление колеса', id: ''},
            {subtitle: 'Система контроля давления в шинах', id: ''},
            {subtitle: 'Колеса, шины', id: ''},
        ]
    },
    {
        title: 'Рулевое управление:',
        id: 'steering',
        sub_titles: [
            {subtitle: 'Шарниры', id: ''},
            {subtitle: 'Рейка рулевая, насос ГУР', id: ''},
            {subtitle: 'Бачок ГУР', id: ''},
            {subtitle: 'Тяга рулевая', id: ''},
        ]
    },
    {
        title: 'Тормозная система:',
        id: 'brake_system',
        sub_titles: [
            {subtitle: 'Дисковый тормоз', id: ''},
            {subtitle: 'Барабанный тормозной механизм', id: ''},
            {subtitle: 'Тросы, тяги и рычаги тормозной системы', id: ''},
            {subtitle: 'Стояночный тормоз', id: ''},
            {subtitle: 'Шланги тормозный', id: ''},
            {subtitle: 'Тормозной усилитель', id: ''},
            {subtitle: 'Главный тормозной усилитель', id: ''},
            {subtitle: 'Регулировка динамики движения', id: ''},
            {subtitle: 'Выключатель фонаря сигнала торможения', id: ''},
            {subtitle: 'Суппорт тормозной', id: ''},
        ]
    },
    {
        title: 'Электрооборудование:',
        id: 'electrical_equipment',
        sub_titles: [
            {subtitle: 'Система стартера', id: ''},
            {subtitle: 'Генератор, составляющие', id: ''},
            {subtitle: 'Головной свет, составляющие', id: ''},
            {subtitle: 'Дополнительное освещение', id: ''},
            {subtitle: 'Система освещения', id: ''},
            {subtitle: 'Выключатель, реле, блок управления освещения', id: ''},
            {subtitle: 'Датчики', id: ''},
            {subtitle: 'Контрольные приборы', id: ''},
            {subtitle: 'Система очистки окон', id: ''},
            {subtitle: 'Дополнительные удобства', id: ''},
        ]
    },
    {
        title: 'Отопление/Кондиционирование',
        id: 'heating_conditioning',
        sub_titles: [
            {subtitle: 'Отопление', id: ''},
            {subtitle: 'Кондиционер', id: ''},
        ]
    },
    {
        title: 'Детали салона:',
        id: 'interior_details',
        sub_titles: [
            {subtitle: 'Подъемное устройство', id: ''},
            {subtitle: 'Ручки', id: ''},
            {subtitle: 'Багажник', id: ''},
            {subtitle: 'Замок', id: ''},
        ]
    },
    {
        title: 'Детали кузова:',
        id: 'body_parts',
        sub_titles: [
            {subtitle: 'Автомобиль, передняя часть', id: ''},
            {subtitle: 'Кабина пассажира', id: ''},
            {subtitle: 'Автомобиль, задняя часть', id: ''},
            {subtitle: 'Кузовные детали', id: ''},
            {subtitle: 'Облицовка, защитные накладки, эмблемы', id: ''},
            {subtitle: 'Остекление, зеркала', id: ''},
            {subtitle: 'Головной свет', id: ''},
            {subtitle: 'Дополнительное освещение', id: ''},
            {subtitle: 'Освещение', id: ''},
        ]
    },
]

const Header = document.getElementById('header')

for (let item of DATA) {
    addHeaders(Header, item)
    // console.log(item);
    // console.log(item.title);
    // console.log(item.id);
    // console.log(item.sub_titles);

    const subTitlesContainer = document.getElementById(`${item.id}`)
    console.log(subTitlesContainer);

    const subTitles = item.sub_titles

    if (subTitles === undefined) continue

    for (let item of subTitles) {
        addSubtitles(subTitlesContainer, item)

        const itemsContainer = document.getElementById(`${item.id}`)

        const itemsInfo = item.items

        if (itemsInfo === undefined) continue

        // console.log(itemsInfo);

        for (let item of itemsInfo) {
            addSubtitleItems(itemsContainer, item)
        }
    }
}

// АНИМАЦИЯ

// const isItems = document.querySelectorAll('.item')
// console.log(isItems);
//
// for (let item of isItems) {
//     item.addEventListener('click', () => {
//         console.log(item);
//         item.classList.toggle('increase')
//     })
// }


function addHeaders (items_head, item) {
    items_head.insertAdjacentHTML('beforeend', `
        <div class="list_item">
            <button class="accordion">${item.title}</button>
            <div class="panel" id="${item.id}"></div>
        </div>`)
}

function addSubtitles (items_head, item) {
    items_head.insertAdjacentHTML('beforeend', `
        <button class="accordion _items">${item.subtitle}</button>
            <div class="panel">
                <div class="item_container" id="${item.id}"></div>
            </div>`)
}

function addSubtitleItems(items_head, item) {
    items_head.insertAdjacentHTML('beforeend', `        
        <div class="item">
            <div class="item_image">
                <img src=${item.item_image} alt=${item.item_code}>
            </div>
            <div>
                <div class="item_code">${item.item_code}</div>
                <div class="item_note">${item.item_note}</div>
            </div>
        </div>`)
}

