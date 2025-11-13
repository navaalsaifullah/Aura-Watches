const parent = document.getElementById('parent');
        
        const watches = [
    { 
        image: './images/digital1.png',
        title: 'Aura Pro Digital',
        price: '$249.99',
        features: ['Water Resistant', 'Heart Rate Monitor', 'GPS Tracking', 'Sleep Analysis'],
        description: 'Premium digital watch with advanced health monitoring features.'
    },
    { 
        image: './images/digital2.png',
        title: 'Sport Elite',
        price: '$189.99',
        features: ['50m Waterproof', 'Activity Tracking', 'Smart Notifications', '7-Day Battery'],
        description: 'Perfect companion for your active lifestyle with comprehensive fitness tracking.'
    },
    { 
        image: './images/digital3.png',
        title: 'Classic Digital',
        price: '$129.99',
        features: ['Retro Design', 'Alarm Function', 'Stopwatch', 'Backlight'],
        description: 'Timeless digital watch with modern functionality and retro appeal.'
    },
    { 
        image: './images/digital4.png',
        title: 'Smart Connect',
        price: '$299.99',
        features: ['Bluetooth Calling', 'Music Control', 'Voice Assistant', 'Customizable Dials'],
        description: 'Stay connected with this feature-rich smartwatch for your digital life.'
    },
    { 
        image: './images/digital5.png',
        title: 'Adventure X',
        price: '$219.99',
        features: ['Shock Resistant', 'Compass & Barometer', 'Solar Charging', 'Dual Time Zones'],
        description: 'Built for adventure with rugged design and outdoor-specific features.'
    },
    { 
        image: './images/digital6.png',
        title: 'Luxe Digital',
        price: '$349.99',
        features: ['Premium Materials', 'Wireless Charging', 'Custom Watch Faces', 'Premium Support'],
        description: 'Luxury digital watch with premium materials and exclusive features.'
    },
    { 
        image: './images/digital7.png',
        title: 'Fitness Pro',
        price: '$199.99',
        features: ['24/7 Heart Rate', 'VO2 Max Tracking', 'Workout Modes', 'Smart Coaching'],
        description: 'Advanced fitness tracking with personalized coaching and insights.'
    },
    { 
        image: './images/digital8.png',
        title: 'Urban Style',
        price: '$169.99',
        features: ['Sleek Design', 'Touch Display', 'Mobile Payments', 'Custom Straps'],
        description: 'Urban-inspired digital watch that combines style with smart features.'
    },
    { 
        image: './images/digital9.png',
        title: 'Tech Master',
        price: '$279.99',
        features: ['AMOLED Display', 'NFC Payments', 'Voice Commands', 'App Ecosystem'],
        description: 'High-tech smartwatch with premium display and extensive app support.'
    },
    { 
        image: './images/digital10.png',
        title: 'Marine Explorer',
        price: '$229.99',
        features: ['100m Waterproof', 'Dive Computer', 'Tide Information', 'Moon Phase'],
        description: 'Professional diving watch with specialized marine features.'
    },
    { 
        image: './images/digital11.png',
        title: 'Business Elite',
        price: '$319.99',
        features: ['Email Integration', 'Calendar Sync', 'Voice Memos', 'Professional Design'],
        description: 'Designed for professionals with business-focused smart features.'
    },
    { 
        image: './images/digital12.png',
        title: 'Youth Active',
        price: '$149.99',
        features: ['Parent Controls', 'Step Counter', 'Fun Watch Faces', 'Durable Build'],
        description: 'Kid-friendly digital watch with activity tracking and parental controls.'
    },
    { 
        image: './images/digital13.png',
        title: 'Retro Wave',
        price: '$179.99',
        features: ['80s Design', 'Calculator Function', 'Game Mode', 'Vintage Colors'],
        description: 'Nostalgic digital watch inspired by classic 80s timepieces.'
    },
    { 
        image: './images/digital14.png',
        title: 'Health Guardian',
        price: '$269.99',
        features: ['ECG Monitor', 'Blood Oxygen', 'Stress Tracking', 'Medication Reminders'],
        description: 'Comprehensive health monitoring watch with medical-grade sensors.'
    },
    { 
        image: './images/digital15.png',
        title: 'Travel Companion',
        price: '$199.99',
        features: ['World Time Zones', 'Currency Converter', 'Weather Forecast', 'Travel Alarms'],
        description: 'Perfect travel watch with global features and travel utilities.'
    },
    { 
        image: './images/digital16.png',
        title: 'Gaming Edition',
        price: '$239.99',
        features: ['Game Integration', 'Custom RGB Lights', 'Performance Metrics', 'Stream Alerts'],
        description: 'Gamer-focused smartwatch with gaming integrations and flashy design.'
    },
    { 
        image: './images/digital17.png',
        title: 'Minimalist Pro',
        price: '$159.99',
        features: ['Slim Design', 'Essential Features', 'Long Battery Life', 'Clean Interface'],
        description: 'Sleek minimalist watch focusing on essential functions and elegant design.'
    },
    { 
        image: './images/digital18.png',
        title: 'Outdoor Navigator',
        price: '$289.99',
        features: ['Topographic Maps', 'Altitude Tracking', 'Storm Alerts', 'Emergency SOS'],
        description: 'Rugged outdoor watch with advanced navigation and safety features.'
    },
    { 
        image: './images/digital19.png',
        title: 'Luxury Gold',
        price: '$399.99',
        features: ['Gold Plated', 'Sapphire Crystal', 'Limited Edition', 'Premium Packaging'],
        description: 'Exclusive luxury digital watch with premium materials and limited availability.'
    },
    { 
        image: './images/digital20.png',
        title: 'Budget Smart',
        price: '$119.99',
        features: ['Basic Smart Features', 'Long Battery', 'Essential Tracking', 'Affordable Price'],
        description: 'Budget-friendly smartwatch with essential features at an accessible price point.'
    }
];

        watches.forEach((watch) => {
            const featuresList = watch.features.map(feature => `<li><i class="fas fa-check-circle me-2"></i>${feature}</li>`).join('');
            
            const child = `
                <div class="child">
                    <img src="${watch.image}" alt="${watch.title}" class="image">
                    <h3 class="watch-title">${watch.title}</h3>
                    <div class="watch-price">${watch.price}</div>
                    <div class="watch-overlay">
                        <h4>${watch.title}</h4>
                        <p>${watch.description}</p>
                        <ul class="watch-features">
                            ${featuresList}
                        </ul>
                        <button class="btn-buy">ADD TO CART</button>
                    </div>
                </div>
            `;
            parent.innerHTML += child;
        });