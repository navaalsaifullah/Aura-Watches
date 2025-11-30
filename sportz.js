let parent = document.getElementById('parent');

const watches = [
  {
    "image": "./images/sportz1.png",
    "title": "Business Elite",
    "description": "Professional features for the corporate world",
    "price": "$399",
    "features": ["Email Integration", "Calendar Sync", "Voice Assistant"],
    "details": "Designed for professionals, the Business Elite keeps you connected and organized throughout your workday."
  },
  {
    "image": "./images/sportz2.png",
    "title": "Marathon Pro",
    "description": "Endurance tracking for long-distance runners",
    "price": "$329",
    "features": ["GPS Route Mapping", "Pace Analysis", "Heart Rate Zones", "Hydration Alerts"],
    "details": "Built for marathon training with advanced metrics and recovery tracking for endurance athletes."
  },
  {
    "image": "./images/sportz3.png",
    "title": "Trail Blazer",
    "description": "Rugged outdoor adventure companion",
    "price": "$359",
    "features": ["Altimeter", "Barometer", "Compass", "Storm Alerts"],
    "details": "Conquer any terrain with advanced navigation sensors and weather tracking for outdoor enthusiasts."
  },
  {
    "image": "./images/sportz4.png",
    "title": "Swim Master",
    "description": "Advanced swimming metrics and analysis",
    "price": "$289",
    "features": ["Stroke Recognition", "Pool Length Detection", "SWOLF Score", "Waterproof 50m"],
    "details": "Perfect for swimmers with detailed stroke analysis, lap counting, and swimming efficiency metrics."
  },
  {
    "image": "./images/sportz5.png",
    "title": "Cycling Edge",
    "description": "Performance tracking for cyclists",
    "price": "$379",
    "features": ["Cadence Sensor", "Power Meter Support", "Climb Pro", "Bike Radar"],
    "details": "Comprehensive cycling metrics with power analysis and safety features for road and mountain bikers."
  },
  {
    "image": "./images/sportz6.png",
    "title": "Gym Warrior",
    "description": "Strength training and workout companion",
    "price": "$269",
    "features": ["Rep Counter", "Rest Timer", "Exercise Library", "Muscle Recovery"],
    "details": "Optimize your gym sessions with automatic rep counting, form analysis, and workout planning."
  },
  {
    "image": "./images/sportz7.png",
    "title": "Triathlon Ultimate",
    "description": "Multi-sport tracking for triathletes",
    "price": "$449",
    "features": ["Multi-Sport Mode", "Transition Tracking", "Custom Race Plans", "VO2 Max"],
    "details": "Seamlessly transition between swimming, cycling, and running with dedicated triathlon features."
  },
  {
    "image": "./images/sportz8.png",
    "title": "Yoga Balance",
    "description": "Mindfulness and yoga practice assistant",
    "price": "$239",
    "features": ["Breathing Guide", "Pose Detection", "Flexibility Tracking", "Meditation Timer"],
    "details": "Enhance your yoga practice with pose feedback, breathing exercises, and mindfulness tracking."
  },
  {
    "image": "./images/sportz9.png",
    "title": "Basketball Pro",
    "description": "Court performance analytics",
    "price": "$299",
    "features": ["Jump Analysis", "Quickness Metrics", "Shot Detection", "Game Time Tracking"],
    "details": "Track your basketball performance with jump height, agility metrics, and game statistics."
  },
  {
    "image": "./images/sportz10.png",
    "title": "Soccer Star",
    "description": "Football training and match analysis",
    "price": "$319",
    "features": ["Sprint Analysis", "Distance Covered", "Heat Maps", "Match Intensity"],
    "details": "Complete soccer performance tracking with movement analysis and match statistics."
  },
  {
    "image": "./images/sportz11.png",
    "title": "Winter Sports Pro",
    "description": "Cold weather sports specialist",
    "price": "$389",
    "features": ["Ski Tracking", "Snowboard Metrics", "Temperature Resistant", "Resort Maps"],
    "details": "Built for winter sports with ski run tracking, jump analysis, and cold temperature operation."
  },
  {
    "image": "./images/sportz12.png",
    "title": "Golf Precision",
    "description": "Advanced golf course management",
    "price": "$429",
    "features": ["Course Maps", "Shot Tracking", "Swing Analysis", "Green View"],
    "details": "Elevate your golf game with detailed course maps, shot tracking, and swing performance metrics."
  },
  {
    "image": "./images/sportz13.png",
    "title": "Tennis Ace",
    "description": "Court performance and technique analysis",
    "price": "$349",
    "features": ["Swing Speed", "Shot Type Detection", "Match Statistics", "Strokes Count"],
    "details": "Improve your tennis game with stroke analysis, match stats, and technique feedback."
  },
  {
    "image": "./images/sportz14.png",
    "title": "Surf Wave",
    "description": "Ocean sports and wave tracking",
    "price": "$369",
    "features": ["Wave Count", "Surf Duration", "Water Temperature", "Tide Information"],
    "details": "Track your surfing sessions with wave analysis, duration tracking, and ocean conditions."
  },
  {
    "image": "./images/sportz15.png",
    "title": "Climb Peak",
    "description": "Rock climbing and bouldering assistant",
    "price": "$339",
    "features": ["Route Tracking", "Climb Difficulty", "Rest Timer", "Grip Strength"],
    "details": "Specialized features for climbers including route logging, difficulty tracking, and performance metrics."
  },
  {
    "image": "./images/sportz16.png",
    "title": "Recovery Plus",
    "description": "Advanced recovery and wellness monitoring",
    "price": "$279",
    "features": ["Sleep Analysis", "HRV Tracking", "Recovery Score", "Stress Monitor"],
    "details": "Focus on recovery with detailed sleep tracking, heart rate variability, and wellness metrics."
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

    // === ADD ALERT & LUXURY FEEDBACK AFTER ALL CARDS ARE CREATED ===
    document.querySelectorAll('.btn-overlay').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevents any overlay hover conflicts

            // Get the watch title from the same card (works perfectly)
            const watchTitle = this.closest('.child').querySelector('h3').textContent.trim();

            // Luxury alert message using the real watch name
            alert(`🛒 Added to Cart Successfully!\n\n${watchTitle}\n\nThank you for your impeccable taste in horology.\nAura Watches appreciates collectors of true distinction.`);

            // Premium button feedback
            const originalText = this.textContent;
            this.textContent = 'ADDED ✓';
            this.style.backgroundColor = '#0f172a';
            this.style.transform = 'scale(1.05)';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
                this.style.transform = '';
                this.disabled = false;
            }, 2600);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    generateWatchCards();
});