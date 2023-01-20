const DOTS = document.querySelectorAll('.dot');
const IMGAGE = document.querySelector('#l_img');
const TITLE = document.querySelector('.banner_title');
const TITLES = [
    'Разработано 2000+ приложений',
    'Бесплатные приложения',
    'Тысячи довольных клиентов'
];
const SUBTITLE = document.querySelector('.banner_subtitle');
const SUBTITLES = [
    'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
    'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
    'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
];

DOTS.forEach((dot, index) => dot.addEventListener('click', () => {
    DOTS.forEach(el => {
        el.classList.remove('active');
    });

    dot.classList.add('active');
    IMGAGE.src = 'img/dots_' +index + 1+ '.png';
    console.log(index + 1 + IMGAGE);
    TITLE.textContent = TITLES[index];
    SUBTITLE.textContent = SUBTITLES[index];
}));