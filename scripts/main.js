import {ABOUT, DATA} from "./data.js";
import {BIRTHDAYS} from "./birthday_data.js";

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
<!--            <div class="modal_birthday_btn_close">-->
<!--                <img class="modal_birthday_btn_close_image" src="./images/modal_birthday/btn_close.png" alt="close">-->
<!--            </div>-->
            
            <div class="item_image">      
                <img src=${item.item_image} alt=${item.item_code}>
            </div>
            
            <div>
                <div class="item_code">${item.item_code}</div>
                <div class="copy_code">Копировать номер</div>
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

// МОДАЛКА УВЕЛИЧЕННАЯ ДЕТАЛЬ

const increaseElements = document.querySelectorAll('.item_image')
const modalBackground = document.getElementById('header')
const modal = document.getElementById("myModal");

for(let i = 0; i < increaseElements.length; i++) {
    increaseElements[i].addEventListener('click', () => {
        console.log(increaseElements[i]);
        // modal.insertAdjacentHTML('beforeend', `${increaseElements[i].parentElement.innerHTML}`)

        modal.insertAdjacentHTML('beforeend', `${increaseElements[i].innerHTML}`)
        const increaseImage = document.getElementsByClassName('item_image')
        increaseImage[0].style.width = '100%'
        // increaseImage[0].style.borderRadius = '15px 15px 0 0'
        increaseImage[0].style.borderRadius = '15px 15px 5px 5px'

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
                <div class="links">
                        <a href="https://donate.stream/donate_6368cb89e59ec" target="_blank">
                            <img class="for_beer_btn" src="./images/for_beer.jpg" alt="">
                        </a> 
                        Поддержать платформу (добровольные донатики) 
                </div>
                <div class="links download">Установить на телефон (онлайн-приложение)
                    <a href="./download/app-release.apk" download="">
                        <img class="download_btn" src="./images/download_android.png" alt="скачать"/>
                    </a>
                </div>
                <div class="links">
                        <a href="https://chat.whatsapp.com/EkBtJl0utpR5TXPR8xMuBa" target="_blank">
                            <img class="for_beer_btn" src="./images/logo.jpg" alt="">
                        </a> 
                        Попросить помощи или совета у чатлан (или просто по3.14здеть) 
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

// МОДАЛКА С ДНЯМИ РОЖДЕНИЯ !!!

// Get the modal_birthday
const modal_birthday = document.getElementById("modal_birthday");

// Get the button that opens the modal_birthday
// const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal_birthday
const span = document.getElementsByClassName("modal_birthday_btn_close_image")[0];

// When the user clicks the button, open the modal_birthday
// btn.onclick = function() {
//     modal_birthday.style.display = "block";
//     document.body.style.backgroundColor = 'rgba(0,0,0,0.4)'
// }

// When the user clicks on <span> (x), close the modal_birthday
span.onclick = function() {
    modal_birthday.style.display = "none";
    // document.body.style.backgroundColor = 'white';
    modalBackground.style.pointerEvents = 'all';
    document.body.style.overflow = "visible";
}

// When the user clicks anywhere outside of the modal_birthday, close it
// window.onclick = function(event) {
//     if (event.target == modal_birthday) {
//         modal_birthday.style.display = "none";
//         document.body.style.backgroundColor = 'white'
//     }
// }

// const USER = BIRTHDAYS[20]

const isCurrentDate = new Date();
const isCurrentYear = isCurrentDate.getFullYear();
const isCurrentMonth = isCurrentDate.getMonth() + 1;
const isCurrentDay = isCurrentDate.getDate();


for (let element of BIRTHDAYS) {
    const birthdayStringToNumbers = element.birthday_date.split('-')
    // console.log(birthdayStringToNumbers[0]);
    // console.log(birthdayStringToNumbers[1]);
    // console.log(isCurrentDay);
    // console.log(isCurrentMonth);

    if (Number(birthdayStringToNumbers[0]) === isCurrentDay && Number(birthdayStringToNumbers[1]) === isCurrentMonth) {
        addUserDataToModal(element)
        // showModal()
        setTimeout(showModal, 5000)
    }
}

// ПОКАЗАТЬ МОДАЛКУ

function showModal () {
    modal_birthday.style.display = "block";
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';

    modalBackground.style.pointerEvents = 'none';
    document.body.style.overflow = "hidden";
}

function closeModal () {
    modal_birthday.style.display = "none";
    document.body.style.backgroundColor = 'white'
}

// ВСТАВЛЯЕМ ДАННЫЕ В МОДАЛКУ

function addUserDataToModal (USER) {
    const userNicknameElement = document.getElementById('user_nickname')
    const userNameElement = document.getElementById('user_name')
    const userAgeElement = document.getElementById('user_age')
    const userAboutElement = document.getElementById('user_about')
    const userWorkElement = document.getElementById('user_work')
    const userAvatarElement = document.getElementById('modal_birthday_content_avatar')

    const birthdayStringToNumbers = USER.birthday_date.split('-')
    const isUserAge = String(isCurrentYear - birthdayStringToNumbers[2])

    userNicknameElement.textContent = USER.nickname

    if (USER.name) {
        userNameElement.textContent = 'Для чатлан: ' + USER.name
    } else userNameElement.textContent = ''

    if (isUserAge) {
        userAgeElement.textContent = 'Сегодня исполнилось: ' + isUserAge
    } else userAgeElement.textContent = ''

    if (USER.about) {
        userAboutElement.textContent = 'Обо мне: ' + USER.about
    } else userAboutElement.textContent = ''

    if (USER.work) {
        userWorkElement.textContent = 'Сфера интересов: ' + USER.work
    } else userWorkElement.textContent = ''

    if (USER.avatar) {
        userAvatarElement.setAttribute("src", `${USER.avatar}`)
    } else userAvatarElement.setAttribute("src", './images/modal_birthday_avatars/no_avatar.jpg')
}

// КОПИРОВАНИЕ НОМЕРА В БУФЕР

const copyElements = document.querySelectorAll('.copy_code')

for(let i = 0; i < copyElements.length; i++) {
    copyElements[i].addEventListener('click', () => {
        const detailNumberString = copyElements[i].previousElementSibling.innerHTML;
        const detailNumber = detailNumberString.split(' ')
        copyTextToClipboard(detailNumber[0]);
        }
    )
        async function copyTextToClipboard(prop) {
            try {
                await navigator.clipboard.writeText(prop);
                console.log(prop);
            } catch (err) {
                console.error('Error in copying text: ', err);
            }
        }
    }
