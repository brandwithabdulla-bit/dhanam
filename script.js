document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       MOBILE NAVIGATION
       ========================================================================== */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    /* ==========================================================================
       SCROLL TO SECTION & ACTIVE LINK UPDATE
       ========================================================================== */
    const sections = document.querySelectorAll('section');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let current = '';
        
        // Add class to navbar on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       FADE-UP ANIMATION OBSERVER
       ========================================================================== */
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const fadeObserverOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
    
    // Trigger scroll event on load to set initial active states
    window.dispatchEvent(new Event('scroll'));
});

/* ==========================================================================
   PRODUCT DRAWER DATA & LOGIC
   ========================================================================== */
const productsData = {
    'chemba': {
        name: 'Dhanam Steamed Chemba Puttu Podi',
        tagline: 'HEALTH IN EVERY SHADE OF RED.',
        desc: 'The authentic taste and aroma of traditional Chemba rice, just like the puttu our grandmothers used to make.',
        img: 'assets/images/product_chemba.jpg',
        highlights: [
            { title: 'RICH IN FIBRE', text: 'Made from traditional Chemba rice and naturally rich in dietary fibre.' },
            { title: '100% NATURAL CHEMBA RICE', text: 'Made from carefully selected traditional Kerala Chemba rice.' },
            { title: 'TRADITIONAL NUTRITION', text: 'A naturally wholesome choice for everyday breakfast.' },
            { title: 'NO PRESERVATIVES', text: 'Steamed, dried and processed with care, without unnecessary preservatives or artificial additives.' }
        ],
        brandLine: 'DHANAM CHEMBA PUTTU &mdash;<br>HEALTH HIDDEN IN EVERY SHADE OF RED.'
    },
    'white-puttu': {
        name: 'Dhanam Steamed White Puttu Podi',
        tagline: 'THE PERFECTION OF TRADITION.',
        desc: 'A classic Kerala breakfast staple made from carefully selected rice and processed with care to deliver soft, light and authentic puttu.',
        img: 'assets/images/product_white_puttu.jpg',
        highlights: [
            { title: '100% PURE', text: 'Made from carefully selected rice without unnecessary chemicals or preservatives.' },
            { title: 'SOFT & FLUFFY', text: 'The steaming process helps create soft, light and fluffy puttu.' },
            { title: 'EVERYDAY NOURISHMENT', text: 'A simple and comforting breakfast option for both children and adults.' },
            { title: 'AUTHENTIC TASTE', text: 'Inspired by the traditional Kerala puttu enjoyed across generations.' }
        ],
        brandLine: 'DHANAM PUTTU PODI &mdash;<br>THE TASTE OF TRADITION IN EVERY HANDFUL.'
    },
    'ragi': {
        name: 'Dhanam Steamed Ragi Puttu Podi',
        tagline: 'AN ANCIENT GRAIN. A MODERN BREAKFAST.',
        desc: 'A wholesome puttu option made from carefully selected ragi, bringing the natural character of this traditional grain into an easy everyday breakfast.',
        img: 'assets/images/product_ragi.jpg',
        highlights: [
            { title: 'MADE WITH RAGI', text: 'Prepared from carefully selected ragi.' },
            { title: 'NATURAL FIBRE', text: 'Ragi naturally contributes dietary fibre to the diet.' },
            { title: 'STEAMED & FINELY MILLED', text: 'Processed with care for a convenient puttu-making experience.' },
            { title: 'TRADITIONAL GRAIN. MODERN CONVENIENCE.', text: 'A simple way to enjoy the goodness of ragi as part of everyday meals.' }
        ],
        brandLine: 'DHANAM RAGI PUTTU &mdash;<br>AN ANCIENT GRAIN, A MODERN BREAKFAST.'
    },
    'corn': {
        name: 'Dhanam Steamed Corn Puttu Podi',
        tagline: 'GOLDEN GOODNESS. NATURALLY HEALTHY.',
        desc: 'A naturally golden, nutritious breakfast option with a mild sweetness and soft texture that makes it enjoyable even for children.',
        img: 'assets/images/product_corn.jpg',
        highlights: [
            { title: '100% NATURAL CORN', text: 'Made from carefully selected yellow corn that is steamed, dried and finely milled.' },
            { title: 'NO MAIDA. NO UNNECESSARY CHEMICALS.', text: 'Made without maida and without unnecessary additives.' },
            { title: 'GLUTEN-FREE INGREDIENT', text: 'A naturally gluten-free corn-based option.' },
            { title: 'SOFT & FAMILY-FRIENDLY', text: 'Its mild natural sweetness and soft texture make it an appealing breakfast choice for the whole family.' },
            { title: 'NATURAL ENERGY', text: 'Corn provides carbohydrates and naturally occurring nutrients that make it a satisfying breakfast option.' }
        ],
        brandLine: 'DHANAM CORN PUTTU &mdash;<br>GOLDEN GOODNESS, NATURALLY HEALTHY.'
    },
    'wheat-puttu': {
        name: 'Dhanam Steamed Wheat Puttu Podi',
        tagline: 'WHOLESOME WHEAT. TRADITIONAL PUTTU.',
        desc: 'A comforting wheat-based puttu option made for families who enjoy a wholesome variation of the traditional Kerala breakfast.',
        img: 'assets/images/product_wheat_puttu.jpg',
        highlights: [
            { title: 'CAREFULLY SELECTED WHEAT', text: 'Made using quality wheat.' },
            { title: 'STEAMED & FINELY MILLED', text: 'Processed for a soft and convenient puttu preparation.' },
            { title: 'WHOLESOME EVERYDAY OPTION', text: 'A practical breakfast choice for everyday family meals.' },
            { title: 'TRADITIONAL TASTE. EASY PREPARATION.', text: 'Enjoy a classic taste without the hassle.' }
        ],
        brandLine: 'DHANAM WHEAT PUTTU &mdash;<br>WHOLESOME WHEAT, TRADITIONAL PUTTU.'
    },
    'rice-powder': {
        name: 'Dhanam Steamed Rice Powder',
        tagline: 'PURE RICE. CAREFULLY PROCESSED.',
        desc: 'Carefully processed rice powder designed for traditional Kerala cooking and everyday food preparation.',
        img: 'assets/images/product_rice_powder.jpg',
        highlights: [
            { title: 'QUALITY RICE', text: 'Made from carefully selected rice.' },
            { title: 'STEAMED PROCESSING', text: 'Processed with care using steaming and controlled drying methods.' },
            { title: 'FINELY MILLED', text: 'Fine texture suitable for traditional preparations.' },
            { title: 'VERSATILE EVERYDAY INGREDIENT', text: 'A useful staple for a variety of Kerala recipes.' }
        ],
        brandLine: 'DHANAM RICE POWDER &mdash;<br>PURE RICE, CAREFULLY PROCESSED.'
    },
    'palappam': {
        name: 'Dhanam Palappam & Pathiri Powder',
        tagline: 'TRADITIONAL RECIPES. MADE SIMPLE.',
        desc: 'A carefully prepared flour blend designed to help bring classic Kerala favourites such as palappam and pathiri to the family table.',
        img: 'assets/images/product_palappam.jpg',
        highlights: [
            { title: 'FOR TRADITIONAL KERALA RECIPES', text: 'Suitable for preparing classic palappam and pathiri.' },
            { title: 'CAREFULLY PROCESSED', text: 'Made from selected ingredients and processed with attention to quality.' },
            { title: 'EASY EVERYDAY PREPARATION', text: 'Designed for convenient home cooking.' },
            { title: 'AUTHENTIC KERALA FOOD', text: 'Made to help families enjoy familiar traditional flavours at home.' }
        ],
        brandLine: 'DHANAM PALAPPAM & PATHIRI POWDER &mdash;<br>TRADITIONAL RECIPES, MADE SIMPLE.'
    },
    'wheat-powder': {
        name: 'Dhanam Wheat Powder',
        tagline: 'EVERYDAY WHEAT. CAREFULLY MILLED.',
        desc: 'A dependable wheat powder made from carefully selected wheat and processed for everyday cooking.',
        img: 'assets/images/product_wheat_powder.jpg',
        highlights: [
            { title: 'QUALITY WHEAT', text: 'Carefully selected raw material.' },
            { title: 'FINELY MILLED', text: 'Processed to provide a consistent flour texture.' },
            { title: 'EVERYDAY VERSATILITY', text: 'Suitable for a variety of everyday cooking and baking applications.' },
            { title: 'QUALITY YOU CAN TRUST', text: 'Produced with attention to raw material selection and processing.' }
        ],
        brandLine: 'DHANAM WHEAT POWDER &mdash;<br>EVERYDAY WHEAT, CAREFULLY MILLED.'
    }
};

window.openProductDrawer = function(productId) {
    const data = productsData[productId];
    if (!data) return;

    const drawerContent = document.getElementById('drawerContent');
    
    let highlightsHtml = '';
    if (data.highlights && data.highlights.length > 0) {
        highlightsHtml = '<div class="drawer-highlights">';
        data.highlights.forEach(h => {
            highlightsHtml += `
                <div class="highlight-item">
                    <h5>${h.title}</h5>
                    <p>${h.text}</p>
                </div>
            `;
        });
        highlightsHtml += '</div>';
    }

    drawerContent.innerHTML = `
        <img src="${data.img}" alt="${data.name}" class="drawer-img">
        <span class="drawer-tagline">${data.tagline}</span>
        <h3 class="drawer-title">${data.name}</h3>
        <p class="drawer-desc">${data.desc}</p>
        ${highlightsHtml}
        <div class="drawer-brand-line">${data.brandLine}</div>
    `;

    document.getElementById('drawerOverlay').classList.add('active');
    document.getElementById('productDrawer').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
};

window.closeProductDrawer = function() {
    document.getElementById('drawerOverlay').classList.remove('active');
    document.getElementById('productDrawer').classList.remove('active');
    document.body.style.overflow = '';
};
