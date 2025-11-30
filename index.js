var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
        });

        const products = [
            {
                id: 1,
                name: "Aura Smart",
                image: "./images/category1.jpg",
                category: "available",
                page: "smart.html"
            },
            {
                id: 2,
                name: "Aura Sportz",
                image: "./images/category2.jpg",
                category: "available",
                page: "sportz.html"
            },
            {
                id: 3,
                name: "Aura Premier",
                image: "./images/category3.png",
                category: "available",
                page: "premier.html"
            },
            {
                id: 4,
                name: "Aura Digital",
                image: "./images/category4.jpg",
                category: "available",
                page: "digital.html"
            },
            {
                id: 5,
                name: "Adventure X",
                price: "$219.99",
                image: "./images/digital5.png",
                category: "featured",
                page: "digital.html"
            },
            {
                id: 6,
                name: " Urban Classic",
                price: "$279",
                image: "./images/premier4.png",
                category: "featured",
                page: "premier.html"
            },
            {
                id: 7,
                name: "Music Master",
                price: "$319",
                image: "./images/smart13.png",
                category: "featured",
                page: "smart.html"
            },
            {
                id: 8,
                name: "Soccer Star",
                price: "$319",
                image: "./images/sportz10.png",
                category: "featured",
                page: "sportz.html"
            },
        ];

        function createProductCard(product) {
            return `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-overlay">
                            <button class="quick-view-btn"><a href="${product.page}">Quick View</a></button>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                       <a href="${product.page}"> <button class="add-to-cart-btn">See More</button></a>
                    </div>
                </div>
            `;
        }

        function renderProducts() {
            const availableProductsContainer = document.getElementById('available-products');
            const featuredProductsContainer = document.getElementById('featured-products-grid');
            
            const availableProducts = products.filter(product => product.category === 'available');
            availableProducts.forEach(product => {
                availableProductsContainer.innerHTML += createProductCard(product);
            });
            
            const featuredProducts = products.filter(product => product.category === 'featured');
            featuredProducts.forEach(product => {
                featuredProductsContainer.innerHTML += createProductCard(product);
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            renderProducts();
            
            document.getElementById('subscribe-btn').addEventListener('click', function() {
                const email = document.getElementById('email').value;
                if(email) {
                    alert('Thank you for subscribing to our newsletter!');
                    document.getElementById('email').value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        });