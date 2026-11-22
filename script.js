// ============================================
// ПРЕЛОАДЕР
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 1500);
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });

// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        burger.classList.remove('active');
    });
});

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// ============================================
// ПОРТФОЛИО: ОДНО ЗЕРКАЛО, 15 РАБОТ
// Мастера по анкете: только Михаил и Алексей
// ============================================
const WORKS = [
    { icon: '💇‍️', img: 'media/works/01.jpg', title: 'Классическая стрижка', master: 'Мастер Михаил' },
    { icon: '🧔', img: '', title: 'Оформление бороды', master: 'Мастер Алексей' },
    { icon: '🪒', img: '', title: 'Королевское бритьё', master: 'Мастер Михаил' },
    { icon: '✂️', img: '', title: 'Фейд «Crop»', master: 'Мастер Алексей' },
    { icon: '👨', img: '', title: 'Удлинённая стрижка', master: 'Мастер Алексей' },
    { icon: '💈', img: '', title: 'Детская стрижка', master: 'Мастер Михаил' },
    { icon: '🧔♂️', img: '', title: 'Камуфляж бороды', master: 'Мастер Михаил' },
    { icon: '👨‍👦', img: '', title: 'Стрижка «Отец + сын»', master: 'Мастер Михаил' },
    { icon: '🪒', img: '', title: 'Бритьё опасной бритвой', master: 'Мастер Михаил' },
    { icon: '💇‍️', img: '', title: 'Box fade', master: 'Мастер Алексей' },
    { icon: '🧔', img: '', title: 'Моделирование усов', master: 'Мастер Алексей' },
    { icon: '✂️', img: '', title: 'Стрижка машинкой', master: 'Мастер Алексей' },
    { icon: '💈', img: '', title: 'Hair tattoo', master: 'Мастер Алексей' },
    { icon: '👨🦱', img: '', title: 'Камуфляж седины', master: 'Мастер Михаил' },
    { icon: '🧔‍♂️', img: '', title: 'Комплекс: стрижка + борода', master: 'Мастер Михаил' }
];

const stage = document.getElementById('portfolioStage');

if (stage) {
    const mirrorInfo = document.getElementById('mirrorInfo');
    const mirrorStage = document.getElementById('mirrorStage');
    let workIndex = 0;

    const renderWork = (animate = true) => {
        const work = WORKS[workIndex];

        stage.innerHTML = work.img
            ? `<img src="${work.img}" alt="${work.title}">`
            : `<div class="portfolio-image">${work.icon}</div>`;

        document.getElementById('workTitle').textContent = work.title;
        document.getElementById('workMaster').textContent = work.master;
        document.getElementById('workCurrent').textContent = workIndex + 1;

        if (animate) {
            [stage, mirrorInfo].forEach(el => {
                el.classList.remove('swap');
                void el.offsetWidth;
                el.classList.add('swap');
            });
        }
    };

    const nextWork = () => {
        workIndex = (workIndex + 1) % WORKS.length;
        renderWork();
    };

    const prevWork = () => {
        workIndex = (workIndex - 1 + WORKS.length) % WORKS.length;
        renderWork();
    };

    document.getElementById('nextWork').addEventListener('click', nextWork);
    document.getElementById('prevWork').addEventListener('click', prevWork);
    document.getElementById('workTotal').textContent = WORKS.length;
    renderWork(false);

    // Свайп по зеркалу
    let touchStartX = null;

    mirrorStage.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });

    mirrorStage.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
            dx < 0 ? nextWork() : prevWork();
        }
        touchStartX = null;
    }, { passive: true });
}

// ============================================
// СТРЕЛКИ ГОРИЗОНТАЛЬНЫХ ЛЕНТ
// ============================================
document.querySelectorAll('.row-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
        const row = document.getElementById(btn.dataset.scroll);
        if (!row) return;
        const card = row.firstElementChild;
        const step = (card.offsetWidth + 20) * Number(btn.dataset.dir);
        row.scrollBy({ left: step, behavior: 'smooth' });
    });
});

// ============================================
// УВЕДОМЛЕНИЯ
// ============================================
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');

    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ============================================
// КОРЗИНА (работает на обеих страницах)
// ============================================
const CART_KEY = 'obrit_cart';
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartBody = document.getElementById('cartBody');
const cartFooter = document.getElementById('cartFooter');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const backToCartBtn = document.getElementById('backToCartBtn');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function formatPrice(n) {
    return n.toLocaleString('ru-RU') + ' ₽';
}

function cartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSum() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateBadge(bump = false) {
    const count = cartCount();
    cartBadge.textContent = count;
    cartBadge.classList.toggle('show', count > 0);
    if (bump) {
        cartBadge.classList.remove('bump');
        void cartBadge.offsetWidth;
        cartBadge.classList.add('bump');
    }
}

function renderCart() {
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">🛒</span>
                <p>Корзина пуста</p>
                <p style="font-size: 0.9rem; margin-top: 8px;">Загляните в бутик — там ремни, парфюм и косметика</p>
            </div>`;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartBody.innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
                <div class="cart-item-controls">
                    <button class="qty-btn" data-action="minus" data-index="${i}">−</button>
                    <span class="cart-qty">${item.qty}</span>
                    <button class="qty-btn" data-action="plus" data-index="${i}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-action="remove" data-index="${i}" aria-label="Убрать товар">×</button>
        </div>
    `).join('');
    cartTotal.textContent = formatPrice(cartSum());
}

function addToCart(name, price, icon) {
    const found = cart.find(item => item.name === name);
    if (found) {
        found.qty++;
    } else {
        cart.push({ name, price, icon, qty: 1 });
    }
    saveCart();
    updateBadge(true);
    renderCart();
    showNotification(`🛒 «${name}» — в корзине`);
}

// Делегирование: работает и со статичными, и с динамически созданными кнопками
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-btn');
    if (btn) {
        addToCart(btn.dataset.name, Number(btn.dataset.price), btn.dataset.icon);
    }
});

cartBody.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const i = Number(btn.dataset.index);

    if (btn.dataset.action === 'plus') cart[i].qty++;
    if (btn.dataset.action === 'minus') {
        cart[i].qty--;
        if (cart[i].qty <= 0) cart.splice(i, 1);
    }
    if (btn.dataset.action === 'remove') cart.splice(i, 1);

    saveCart();
    updateBadge();
    renderCart();
});

function openCart() {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
    checkoutForm.hidden = true;
    cartBody.style.display = '';
    cartFooter.style.display = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer.classList.contains('active')) closeCart();
});

checkoutBtn.addEventListener('click', () => {
    checkoutForm.hidden = false;
    cartBody.style.display = 'none';
    cartFooter.style.display = 'none';
});

backToCartBtn.addEventListener('click', () => {
    checkoutForm.hidden = true;
    cartBody.style.display = '';
    cartFooter.style.display = cart.length ? 'block' : 'none';
});

confirmOrderBtn.addEventListener('click', () => {
    const name = document.getElementById('orderName').value.trim();
    const phone = document.getElementById('orderPhone').value.trim();

    if (!name || !phone) {
        showNotification('⚠️ Укажите имя и телефон');
        return;
    }

    // Сюда позже подключим отправку заказа: Telegram-бот, почта или CRM
    showNotification(`✅ Заказ на ${formatPrice(cartSum())} принят! Мы свяжемся с вами.`);

    cart = [];
    saveCart();
    updateBadge();
    renderCart();
    closeCart();

    document.getElementById('orderName').value = '';
    document.getElementById('orderPhone').value = '';
    document.getElementById('orderComment').value = '';
});

updateBadge();
renderCart();

// ============================================
// SMOOTH SCROLL (только якоря текущей страницы)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// ПАРАЛЛАКС ДЛЯ HERO (только главная)
// ============================================
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const limit = window.innerHeight * 0.6;

    if (heroContent && scrolled < limit) {
        heroContent.style.transform = `translateY(${scrolled * 0.25}px)`;
        heroContent.style.opacity = 1 - (scrolled / limit);
    } else if (heroContent && scrolled >= limit) {
        heroContent.style.opacity = 0;
    }
}, { passive: true });

// ============================================
// ВИДЕО: играет непрерывно, пока hero на экране
// ============================================
const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {
    const heroSection = document.getElementById('hero');

    // iOS требует свойство muted, а не только атрибут в HTML
    heroVideo.muted = true;
    heroVideo.defaultMuted = true;

    // Скрываем видео ТОЛЬКО при реальной ошибке файла
    heroVideo.addEventListener('error', () => {
        heroSection.classList.add('no-video');
    }, true);

    // Страховка: если за 5 секунд данных нет вообще (битый файл/путь)
    setTimeout(() => {
        if (heroVideo.readyState === 0) {
            heroSection.classList.add('no-video');
        }
    }, 5000);

    // Страховка зацикливания: если loop не сработал — перезапускаем сами
    heroVideo.addEventListener('ended', () => {
        heroVideo.currentTime = 0;
        heroVideo.play().catch(() => {});
    });

    // Играем, только пока hero виден на экране и вкладка активна
    let heroInView = true;

    const tryPlay = () => {
        if (heroInView && !document.hidden) {
            heroVideo.play().catch(() => {});
        } else {
            heroVideo.pause();
        }
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            heroInView = entry.isIntersecting;
            tryPlay();
        });
    }, { threshold: 0.15 });

    videoObserver.observe(heroSection);

    // Пауза при уходе на другую вкладку, возврат — при возвращении
    document.addEventListener('visibilitychange', tryPlay);

    // Принудительный старт после полной загрузки страницы (особенно мобильные)
    window.addEventListener('load', tryPlay);
    tryPlay();
}

console.log('🎉 Сайт O!BRIT загружен!');