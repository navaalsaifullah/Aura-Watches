
        var map = L.map('map').setView([24.8607, 67.0011], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        var watchIcon = L.divIcon({
            html: '<i class="fas fa-clock" style="color: #1A3C5E; font-size: 24px;"></i>',
            iconSize: [30, 30],
            className: 'watch-marker'
        });

        const branches = [
            {
                id: "clifton",
                name: "Clifton Branch",
                coords: [24.8129, 67.0227],
                address: "Shop #12, Ocean Mall, Clifton, Karachi",
                phone: "+92 21 3514 1001",
                hours: "Mon-Sat, 11 AM - 9 PM"
            },
            {
                id: "defence",
                name: "Defence Branch",
                coords: [24.7991, 67.0488],
                address: "Plot #45, DHA Phase 6, Karachi",
                phone: "+92 21 3534 2002",
                hours: "Mon-Sun, 12 PM - 10 PM"
            },
            {
                id: "gulshan",
                name: "Gulshan Branch",
                coords: [24.9213, 67.0971],
                address: "Shop #3, Gulshan Center, Gulshan-e-Iqbal, Karachi",
                phone: "+92 21 3481 3003",
                hours: "Mon-Fri, 10 AM - 8 PM"
            }
        ];

        // Add markers for each branch
        const markers = [];
        branches.forEach(branch => {
            const marker = L.marker(branch.coords, {icon: watchIcon})
                .addTo(map)
                .bindPopup(`
                    <div style="min-width: 200px;">
                        <h5 style="color: #1A3C5E; margin-bottom: 10px;">${branch.name}</h5>
                        <p style="margin-bottom: 8px;"><i class="fas fa-map-marker-alt" style="color: #1A3C5E;"></i> ${branch.address}</p>
                        <p style="margin-bottom: 8px;"><i class="fas fa-phone" style="color: #1A3C5E;"></i> <a href="tel:${branch.phone}">${branch.phone}</a></p>
                        <p style="margin-bottom: 0;"><i class="fas fa-clock" style="color: #1A3C5E;"></i> ${branch.hours}</p>
                    </div>
                `);
            markers.push(marker);
        });

        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));

        document.querySelectorAll('.store-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.store-card').forEach(c => {
                    c.classList.remove('active');
                });
                
                this.classList.add('active');
   
                const branchId = this.getAttribute('data-branch');
                const branch = branches.find(b => b.id === branchId);
     
                if (branch) {
                    map.setView(branch.coords, 15);
                    
                    // Open popup for the selected branch
                    markers.forEach(marker => {
                        if (marker.getLatLng().lat === branch.coords[0] && 
                            marker.getLatLng().lng === branch.coords[1]) {
                            marker.openPopup();
                        }
                    });
                }
            });
        });