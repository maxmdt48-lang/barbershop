// ============================================
// КАТАЛОГ ТОВАРОВ (30 позиций)
// Чтобы вставить реальные фото, пропишите img: 'images/belt-1.jpg'
// ============================================
const CAT_NAMES = {
    belts: 'Ремни',
    perfume: 'Парфюмерия',
    accessories: 'Аксессуары',
    care: 'Косметика',
    sets: 'Наборы'
};

const PRODUCTS = [
    // РЕМНИ
    { cat: 'belts', icon: '🧵', img: '', badge: 'Хит', name: 'Ремень «Classic»', price: 4900, desc: 'Кожаный ремень ручной работы с классической пряжкой' },
    { cat: 'belts', icon: '🧵', img: '', badge: 'Premium', name: 'Ремень «Premium»', price: 7900, desc: 'Итальянская кожа, матовая пряжка, ручная работа' },
    { cat: 'belts', icon: '🧵', img: '', badge: 'Elite', name: 'Ремень «Elite»', price: 12900, desc: 'Эксклюзивная коллекция, ограниченная серия' },
    { cat: 'belts', icon: '🧵', img: '', badge: '', name: 'Ремень «Milano»', price: 8900, desc: 'Гладкая кожа, тонкий профиль, деловой стиль' },
    { cat: 'belts', icon: '🧵', img: '', badge: '', name: 'Ремень «Roma»', price: 6900, desc: 'Фактурная кожа под крокодила, латунная пряжка' },
    { cat: 'belts', icon: '🧵', img: '', badge: '', name: 'Ремень «London»', price: 9900, desc: 'Английская кожа, строгая пряжка, классика жанра' },
    { cat: 'belts', icon: '🧵', img: '', badge: '', name: 'Ремень «Casual»', price: 3900, desc: 'Повседневный ремень под джинсы и чиносы' },
    { cat: 'belts', icon: '🧵', img: '', badge: '', name: 'Ремень «Double»', price: 5900, oldPrice: 6900, desc: 'Двусторонний: чёрный и коричневый в одном' },

    // ПАРФЮМЕРИЯ
    { cat: 'perfume', icon: '🧴', img: '', badge: 'Новинка', name: 'Туалетная вода «Noir»', price: 3500, desc: 'Древесно-пряный аромат. Сандал, бергамот, мускус' },
    { cat: 'perfume', icon: '🧴', img: '', badge: 'Бестселлер', name: 'Туалетная вода «Oud»', price: 4500, desc: 'Восточный аромат. Уд, амбра, ваниль' },
    { cat: 'perfume', icon: '🧴', img: '', badge: 'Exclusive', name: 'Парфюм «Signature»', price: 6500, desc: 'Авторский аромат O!BRIT, лимитированная коллекция' },
    { cat: 'perfume', icon: '🧴', img: '', badge: '', name: 'Туалетная вода «Marine»', price: 3200, desc: 'Свежий морской аромат. Цитрус, соль, кедр' },
    { cat: 'perfume', icon: '🧴', img: '', badge: '', name: 'Туалетная вода «Tabacco»', price: 4200, desc: 'Тёплый табачный аромат. Табак, мёд, специи' },
    { cat: 'perfume', icon: '🧴', img: '', badge: '', name: 'Парфюм «Amber»', price: 5800, desc: 'Смолистая амбра с кожаными нотами' },
    { cat: 'perfume', icon: '🧴', img: '', badge: '', name: 'Туалетная вода «Citrus»', price: 2900, desc: 'Лёгкий летний аромат. Грейпфрут, нероли, ветивер' },
    { cat: 'perfume', icon: '🧴', img: '', badge: 'Limited', name: 'Парфюм «Leather»', price: 7200, desc: 'Аромат дорогой кожи и уда, для вечера' },

    // АКСЕССУАРЫ
    { cat: 'accessories', icon: '⌚', img: '', badge: '', name: 'Браслет «Steel»', price: 2500, desc: 'Браслет из хирургической стали с кожаной вставкой' },
    { cat: 'accessories', icon: '📿', img: '', badge: '', name: 'Цепь «Cuban»', price: 3900, desc: 'Цепь плетения кубинка, покрытие под золото' },
    { cat: 'accessories', icon: '👝', img: '', badge: 'Хит', name: 'Кошелёк «Leather»', price: 4500, desc: 'Компактный кошелёк из полнозернистой кожи' },
    { cat: 'accessories', icon: '🔘', img: '', badge: '', name: 'Запонки «Onyx»', price: 3200, desc: 'Запонки с натуральным ониксом, серебро 925' },

    // КОСМЕТИКА (премиум-уход, как просил Миша)
    { cat: 'care', icon: '🫙', img: '', badge: 'Хит', name: 'Масло для бороды «O!BRIT»', price: 1900, desc: 'Премиальное масло с сандалом и жожобой' },
    { cat: 'care', icon: '🫙', img: '', badge: '', name: 'Бальзам для бороды «Control»', price: 1700, desc: 'Фиксирует форму и смягчает, матовый финиш' },
    { cat: 'care', icon: '🫙', img: '', badge: '', name: 'Воск матовый «Strong»', price: 1500, desc: 'Сильная фиксация укладки без блеска' },
    { cat: 'care', icon: '🫙', img: '', badge: 'Новинка', name: 'Шампунь для бороды «Fresh»', price: 1300, desc: 'Бережное очищение без сухости и стянутости' },
    { cat: 'care', icon: '🫙', img: '', badge: '', name: 'Паста для укладки «Texture»', price: 1600, desc: 'Пластичная фиксация и естественная текстура' },
    { cat: 'care', icon: '🫙', img: '', badge: '', name: 'Крем «After Shave»', price: 1400, desc: 'Успокаивает кожу после бритья, пантенол в составе' },

    // НАБОРЫ
    { cat: 'sets', icon: '🎁', img: '', badge: 'Выгодно', name: 'Набор «Gentleman»', price: 8900, oldPrice: 9400, desc: 'Ремень «Classic» + кошелёк «Leather» в подарочной коробке' },
    { cat: 'sets', icon: '🎁', img: '', badge: '', name: 'Набор «Aroma»', price: 4900, desc: 'Три мини-аромата: Noir, Oud, Marine — для знакомства' },
    { cat: 'sets', icon: '🎁', img: '', badge: 'Premium', name: 'Набор «Полный образ»', price: 12900, oldPrice: 14600, desc: 'Ремень «Premium» + парфюм «Signature» + браслет «Steel»' },
    { cat: 'sets', icon: '🎁', img: '', badge: '', name: 'Подарочный набор «O!BRIT»', price: 9900, desc: 'Фирменная коробка: парфюм на выбор + кошелёк + открытка' }
];

// ============================================
// РЕНДЕР КАТАЛОГА
// ============================================
const catalogGrid = document.getElementById('catalogGrid');
const catalogEmpty = document.getElementById('catalogEmpty');
const searchInput = document.getElementById('searchInput');

let currentCat = 'all';
let currentQuery = '';

function productCard(p) {
    return `
    <div class="product-card">
        <div class="product-image">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            ${p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">` : p.icon}
        </div>
        <div class="product-info">
            <span class="product-category">${CAT_NAMES[p.cat]}</span>
            <h3 class="product-title">${p.name}</h3>
            <p class="product-description">${p.desc}</p>
            <div class="product-footer">
                <span class="product-price">${formatPrice(p.price)}${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}</span>
                <button class="product-btn" data-name="${p.name}" data-price="${p.price}" data-icon="${p.icon}">В корзину</button>
            </div>
        </div>
    </div>`;
}

function applyFilters() {
    const list = PRODUCTS.filter(p => {
        const byCat = currentCat === 'all' || p.cat === currentCat;
        const byQuery = (p.name + ' ' + p.desc).toLowerCase().includes(currentQuery);
        return byCat && byQuery;
    });

    catalogGrid.innerHTML = list.map(productCard).join('');
    catalogEmpty.hidden = list.length !== 0;
}

// Фильтры по категориям
document.querySelectorAll('.catalog-filter').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.cat;
        applyFilters();
    });
});

// Ссылки категорий в футере
document.querySelectorAll('[data-cat-link]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentCat = link.dataset.catLink;
        document.querySelectorAll('.catalog-filter').forEach(b => {
            b.classList.toggle('active', b.dataset.cat === currentCat);
        });
        applyFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Поиск
searchInput.addEventListener('input', () => {
    currentQuery = searchInput.value.trim().toLowerCase();
    applyFilters();
});

// Первый рендер
applyFilters();