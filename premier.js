let parent = document.getElementById('parent');

const watches = [
    { 
        image: './images/premier1.png',
        title: 'Chronos Pro',
        description: 'Advanced chronograph with heart rate monitoring',
        price: '$349',
        features: ['Heart Rate Monitor', 'Water Resistant', 'GPS Tracking'],
        details: 'The Chronos Pro combines elegant design with advanced health monitoring features, perfect for the active professional.'
    },
    { 
        image: './images/premier2.png',
        title: 'Aura Elite',
        description: 'Luxury smartwatch with premium materials',
        price: '$499',
        features: ['Premium Leather', 'Wireless Charging', 'OLED Display'],
        details: 'Crafted with premium materials, the Aura Elite offers luxury and functionality in a sophisticated package.'
    },
    { 
        image: './images/premier3.png',
        title: 'Sportz Pro',
        description: 'Rugged design for extreme conditions',
        price: '$299',
        features: ['Shock Resistant', '100m Waterproof', 'Long Battery'],
        details: 'Built to withstand the toughest conditions, the Sportz Pro is the ultimate companion for adventure seekers.'
    },
    { 
        image: './images/premier4.png',
        title: 'Urban Classic',
        description: 'Minimalist design for everyday elegance',
        price: '$279',
        features: ['Slim Design', 'Customizable Dials', 'Smart Notifications'],
        details: 'The Urban Classic blends minimalist aesthetics with smart functionality for the modern urbanite.'
    },
    { 
        image: './images/premier5.png',
        title: 'Navigator X',
        description: 'Advanced navigation with topographic maps',
        price: '$429',
        features: ['Topographic Maps', 'Compass', 'Altimeter'],
        details: 'Designed for explorers, the Navigator X provides advanced navigation tools in a sleek, wearable format.'
    },
    { 
        image: './images/premier6.png',
        title: 'Luxe Edition',
        description: 'Premium materials with diamond accents',
        price: '$899',
        features: ['Diamond Accents', '18K Gold Plating', 'Limited Edition'],
        details: 'The Luxe Edition represents the pinnacle of luxury, featuring premium materials and exquisite craftsmanship.'
    },
    { 
        image: './images/premier7.png',
        title: 'Fitness Pro',
        description: 'Comprehensive health and fitness tracking',
        price: '$329',
        features: ['VO2 Max Tracking', 'Sleep Analysis', 'Activity Modes'],
        details: 'The Fitness Pro offers comprehensive health monitoring with advanced metrics for fitness enthusiasts.'
    },
    { 
        image: './images/premier8.png',
        title: 'Business Elite',
        description: 'Professional features for the corporate world',
        price: '$399',
        features: ['Email Integration', 'Calendar Sync', 'Voice Assistant'],
        details: 'Designed for professionals, the Business Elite keeps you connected and organized throughout your workday.'
    },
    { 
        image: './images/premier9.png',
        title: 'Mariner',
        description: 'Designed for water sports and diving',
        price: '$379',
        features: ['200m Waterproof', 'Tide Information', 'Dive Computer'],
        details: 'The Mariner is engineered for water enthusiasts, offering specialized features for diving and water sports.'
    },
    { 
        image: './images/premier10.png',
        title: 'Heritage',
        description: 'Vintage design with modern technology',
        price: '$349',
        features: ['Vintage Styling', 'Modern Tech', 'Interchangeable Straps'],
        details: 'The Heritage collection combines nostalgic design with contemporary smartwatch capabilities.'
    },
    { 
        image: './images/premier11.png',
        title: 'Aviator',
        description: 'Inspired by classic pilot watches',
        price: '$459',
        features: ['Flight Computer', 'Multiple Time Zones', 'Barometer'],
        details: 'Inspired by aviation instruments, the Aviator offers specialized features for travelers and pilots.'
    },
    { 
        image: './images/premier12.png',
        title: 'Carbon Fiber',
        description: 'Ultra-lightweight with carbon fiber case',
        price: '$549',
        features: ['Carbon Fiber', 'Ultra Light', 'Scratch Resistant'],
        details: 'Crafted from advanced carbon fiber, this timepiece offers exceptional durability with minimal weight.'
    },
    { 
        image: './images/premier13.png',
        title: 'Solar Charge',
        description: 'Eco-friendly with solar charging capability',
        price: '$319',
        features: ['Solar Powered', 'Eco-Friendly', 'Infinite Battery'],
        details: 'The Solar Charge harnesses the power of the sun, offering sustainable timekeeping with unlimited battery life.'
    },
    { 
        image: './images/premier14.png',
        title: 'Titanium Edge',
        description: 'Lightweight titanium construction',
        price: '$589',
        features: ['Titanium Case', 'Hypoallergenic', 'Military Grade'],
        details: 'Built from aerospace-grade titanium, the Titanium Edge offers superior strength with feather-light comfort.'
    },
    { 
        image: './images/premier15.png',
        title: 'Moonphase',
        description: 'Elegant moonphase complication',
        price: '$679',
        features: ['Moonphase Display', 'Sapphire Crystal', 'Automatic Movement'],
        details: 'The Moonphase combines traditional watchmaking artistry with modern digital precision in a stunning package.'
    },
    { 
        image: './images/premier16.png',
        title: 'Racing Chrono',
        description: 'Inspired by motorsport timing',
        price: '$429',
        features: ['Tachymeter', 'Lap Timer', 'Ceramic Bezel'],
        details: 'Designed for speed enthusiasts, the Racing Chrono features professional timing functions with sporty aesthetics.'
    },
    { 
        image: './images/premier17.png',
        title: 'Medical Pro',
        description: 'Advanced health monitoring system',
        price: '$499',
        features: ['ECG Monitor', 'Blood Oxygen', 'Stress Tracking'],
        details: 'The Medical Pro offers hospital-grade health monitoring with comprehensive wellness insights and alerts.'
    },
    { 
        image: './images/premier18.png',
        title: 'Gaming Edition',
        description: 'Designed for gamers and tech enthusiasts',
        price: '$379',
        features: ['Game Integration', 'RGB Lighting', 'Stream Alerts'],
        details: 'The Gaming Edition syncs with your gaming sessions, providing notifications and performance metrics in real-time.'
    },
    { 
        image: './images/premier19.png',
        title: 'Explorer Pro',
        description: 'Built for outdoor adventures',
        price: '$459',
        features: ['Solar Charging', 'Storm Alerts', 'Survival Mode'],
        details: 'The Explorer Pro is your ultimate outdoor companion with weather alerts and extended battery for long expeditions.'
    },
    { 
        image: './images/premier20.png',
        title: 'Artisan Series',
        description: 'Handcrafted limited edition',
        price: '$799',
        features: ['Hand-Engraved', 'Limited to 500', 'Artisan Crafted'],
        details: 'Each Artisan Series timepiece is individually handcrafted, making every watch a unique work of wearable art.'
    }
];

        function generateWatchCards() {
            
            
            watches.forEach((watch) => {
                const featuresHTML = watch.features.map(feature => 
                    `<span class="feature">${feature}</span>`
                ).join('');
                
                const card = `
                    <div class="child">
                        <div class="image-container">
                            <img src="${watch.image}" alt="${watch.title}" class="image">
                        </div>
                        <div class="card-content">
                            <h3>${watch.title}</h3>
                            <p>${watch.description}</p>
                            <div class="price">${watch.price}</div>
                        </div>
                        <div class="overlay-content">
                            <h3>${watch.title}</h3>
                            <p>${watch.details}</p>
                            <div class="features">
                                ${featuresHTML}
                            </div>
                            <button class="btn-overlay">ADD TO CART</button>
                        </div>
                    </div>
                `;
                
                parent.innerHTML += card;
            });
        }
        document.addEventListener('DOMContentLoaded', function() {
            generateWatchCards();
        });