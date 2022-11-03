import {DATA} from "./data.js";

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
        modal.style.display = "block";
        modalBackground.style.background = 'rgba(0,0,0)';
        modalBackground.style.background = 'rgba(0,0,0,0.75)';
        modalBackground.style.pointerEvents = 'none';
        document.body.style.overflow = "hidden";
    })

    modal.addEventListener('click', () => {
        modal.style.display = "none";
        modal.innerHTML = '';
        modalBackground.style.background = 'rgba(0,0,0,0)';
        modalBackground.style.pointerEvents = 'all';
        document.body.style.overflow = "visible";
    })
}
