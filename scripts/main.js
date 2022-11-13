import {ABOUT, DATA} from "./data.js";

// DOM-дерево

const Header = document.getElementById('header')

for (let item of DATA) {
    addHeaders(Header, item)
    const subTitlesContainer = document.getElementById(`${item.id}`)
    const subTitles = item.sub_titles

    for (let item of subTitles) {
        addSubtitles(subTitlesContainer, item)
        const itemsContainer = document.getElementById(`${item.id}`)
        const itemsInfo = item.items
        if (itemsInfo === undefined) continue
        for (let item of itemsInfo) {
            addSubtitleItems(itemsContainer, item)
        }
    }
}

function addHeaders (items_head, item) {
    items_head.insertAdjacentHTML('beforeend', `
        <div class="list_item">
            <button class="accordion">${item.title}</button>
            <div class="panel" id="${item.id}"></div>
        </div>`)
}

function addSubtitles (items_head, item) {
    if (item.items === undefined) {
        items_head.insertAdjacentHTML('beforeend', `
        <button class="accordion _items" disabled>${item.subtitle}</button>`)
    } else {
        items_head.insertAdjacentHTML('beforeend', `
        <button class="accordion _items">${item.subtitle}</button>
            <div class="panel">
                <div class="item_container" id="${item.id}"></div>
            </div>`)
    }
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

// МОДАЛКА

const increaseElements = document.querySelectorAll('.item')
const modalBackground = document.getElementById('header')
const modal = document.getElementById("myModal");

for(let i = 0; i < increaseElements.length; i++) {
    increaseElements[i].addEventListener('click', () => {
        modal.insertAdjacentHTML('beforeend', `${increaseElements[i].innerHTML}`)
        const increaseImage = document.getElementsByClassName('item_image')
        increaseImage[0].style.width = '100%'
        increaseImage[0].style.borderRadius = '15px 15px 0 0'
        modal.style.display = "block";
        // modalBackground.style.background = 'rgba(0,0,0)';
        // modalBackground.style.background = 'rgba(0,0,0,0.75)';
        modalBackground.style.pointerEvents = 'none';
        document.body.style.overflow = "hidden";
    })

    modal.addEventListener('click', () => {
        modal.style.display = "none";
        modal.innerHTML = '';
        // modalBackground.style.background = 'rgba(0,0,0,0)';
        modalBackground.style.pointerEvents = 'all';
        document.body.style.overflow = "visible";
    })
}

const infoAbout = document.getElementById('about')

// infoAbout.innerText = ABOUT

function addInfoAbout (items_head, item) {
    items_head.insertAdjacentHTML('beforeend', `
        <div class="list_item">
        <button class="accordion">О платформе</button>
            <div class="panel">
                <div class="about">${item}</div>
                <div class="contacts">
                    <div class="inline">
                        <a href="https://wa.me/+375291730020" target="_blank">
                            <img style="height: 40px; padding-left: 6px" src="./images/whatsap.png" alt="whatsapp" title="Whatsapp">
                        </a>
                        <a href="https://t.me/okigarok" target="_blank">
                            <img style="height: 40px; padding-left: 10px" src="./images/telegram.png" alt="telegram" title="Telegram">
                        </a>
                        <a href="mailto:1730020@gmail.com" target="_blank">
                            <img style="height: 55px; padding-left: 8px" src="./images/icons8-gmail-96.png" alt="email" title="Email">
                        </a>
                        <a href="https://www.drive2.ru/r/chrysler/pacifica/491169987143139953/" target="_blank">
                            <img style="height: 50px; padding-left: 4px " src="./images/icon_drive2.png" alt="drive2" title="Drive2">
                        </a>
                        <a href="https://www.youtube.com/channel/UCQnuGmKlz4jtkdxSamt4z5w/videos" target="_blank">
                            <img style="height: 55px" src="./images/icons8-youtube-в-квадрате-96.png" alt="youtube" title="YouTube">
                        </a>
                    </div>
                </div>        
                <div class="donate">
                        <a href="https://donate.stream/donate_6368cb89e59ec" target="_blank">
                            <img class="for_beer_btn" src="./images/for_beer.jpg" alt="">
                        </a> 
                        Поддержать платформу (добровольные донатики) 
                </div>
                <div class="donate">Установить на телефон (онлайн-приложение)
                    <a href="./download/app-release_2.5_2022-11-06.apk" download="">
                        <img class="download_btn" src="./images/download_android.png" alt="скачать"/>
                    </a>
                </div>
            </div>
        </div>`)
}

addInfoAbout(infoAbout, ABOUT)

// АККОРДИОН

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = "100%"
        }
    });
}