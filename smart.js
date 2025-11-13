let parent = document.getElementById('parent');

const watches = [
  {
    "image": "./images/smart1.png",
    "title": "Business Elite",
    "description": "Professional features for the corporate world",
    "price": "$399",
    "features": ["Email Integration", "Calendar Sync", "Voice Assistant"],
    "details": "Designed for professionals, the Business Elite keeps you connected and organized throughout your workday."
  },
  {
    "image": "./images/smart2.png",
    "title": "Fitness Pro",
    "description": "Advanced health tracking for active lifestyles",
    "price": "$279",
    "features": ["Heart Rate Monitor", "Sleep Tracking", "GPS Tracking"],
    "details": "Perfect for fitness enthusiasts with comprehensive health monitoring and activity tracking capabilities."
  },
  {
    "image": "./images/smart3.png",
    "title": "Adventure Xtreme",
    "description": "Rugged design for outdoor adventures",
    "price": "$349",
    "features": ["Shock Resistant", "Waterproof 100m", "Extended Battery"],
    "details": "Built to withstand extreme conditions with military-grade durability and specialized outdoor features."
  },
  {
    "image": "./images/smart4.png",
    "title": "Luxury Classic",
    "description": "Elegant timepiece with smart capabilities",
    "price": "$599",
    "features": ["Sapphire Crystal", "Premium Leather", "Wireless Charging"],
    "details": "Combines traditional watchmaking craftsmanship with modern smart technology for the discerning user."
  },
  {
    "image": "./images/smart5.png",
    "title": "Student Plus",
    "description": "Affordable smartwatch for academic life",
    "price": "$199",
    "features": ["Study Timer", "Budget Tracker", "Campus Navigation"],
    "details": "Specifically designed for students with features that enhance productivity and campus life organization."
  },
  {
    "image": "./images/smart6.png",
    "title": "Travel Companion",
    "description": "Global features for frequent travelers",
    "price": "$429",
    "features": ["Multi-timezone", "Currency Converter", "Flight Updates"],
    "details": "Your perfect travel partner with world time, weather updates, and travel-specific applications."
  },
  {
    "image": "./images/smart7.png",
    "title": "Health Guardian",
    "description": "Medical-grade health monitoring",
    "price": "$479",
    "features": ["ECG Monitor", "Blood Oxygen", "Medication Reminder"],
    "details": "Advanced health tracking with medical-grade sensors for comprehensive wellness monitoring."
  },
  {
    "image": "./images/smart8.png",
    "title": "Gaming Edge",
    "description": "Connected gaming experience",
    "price": "$329",
    "features": ["Game Notifications", "Team Chat", "Achievement Tracking"],
    "details": "Enhance your gaming experience with real-time notifications and gaming community connectivity."
  },
  {
    "image": "./images/smart9.png",
    "title": "Family Connect",
    "description": "Keeping families connected safely",
    "price": "$249",
    "features": ["Location Sharing", "SOS Button", "Family Chat"],
    "details": "Perfect for families with safety features, location tracking, and easy communication between members."
  },
  {
    "image": "./images/smart10.png",
    "title": "Sports Premium",
    "description": "Professional athletic performance tracking",
    "price": "$379",
    "features": ["Multi-sport Mode", "Recovery Analysis", "Coach Connect"],
    "details": "Advanced sports analytics and performance tracking for serious athletes and coaches."
  },
  {
    "image": "./images/smart11.png",
    "title": "Minimalist One",
    "description": "Sleek design with essential features",
    "price": "$229",
    "features": ["Long Battery Life", "Basic Notifications", "Step Counter"],
    "details": "Clean, minimalist design focusing on essential smart features without overwhelming complexity."
  },
  {
    "image": "./images/smart12.png",
    "title": "Senior Care",
    "description": "Health and safety monitoring for seniors",
    "price": "$299",
    "features": ["Fall Detection", "Medication Alerts", "Large Display"],
    "details": "Specifically designed for senior users with enhanced safety features and easy-to-use interface."
  },
  {
    "image": "./images/smart13.png",
    "title": "Music Master",
    "description": "Premium audio experience on your wrist",
    "price": "$319",
    "features": ["Music Storage", "Audio Controls", "Concert Mode"],
    "details": "Music lovers' dream with enhanced audio controls, storage, and music-focused applications."
  },
  {
    "image": "./images/smart14.png",
    "title": "Creative Pro",
    "description": "Tools for creative professionals",
    "price": "$459",
    "features": ["Design Apps", "Color Picker", "Project Timer"],
    "details": "Specialized features for designers, photographers, and creative professionals on the go."
  },
  {
    "image": "./images/smart15.png",
    "title": "Budget Smart",
    "description": "Essential features at an affordable price",
    "price": "$149",
    "features": ["Basic Fitness", "Notifications", "7-day Battery"],
    "details": "All the essential smart features at an accessible price point for budget-conscious consumers."
  },
  {
    "image": "./images/smart16.png",
    "title": "Executive Gold",
    "description": "Premium business features with luxury design",
    "price": "$699",
    "features": ["VIP Support", "Custom Watch Faces", "Executive Tools"],
    "details": "The ultimate business smartwatch with premium materials, exclusive features, and luxury design elements."
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