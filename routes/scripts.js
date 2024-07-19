document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchResults = document.getElementById('search-results');
    
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const destination = document.getElementById('destination').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            const budget = document.getElementById('budget').value;
            
            searchResults.innerHTML = `<p>Searching for trips to ${destination} from ${startDate} to ${endDate} within a budget of $${budget}.</p>`;
        });
    }
});

document.getElementById('price-range').addEventListener('input', function() {
    document.getElementById('price-value').textContent = `$0 - $${this.value}`;
});

// trips array containing sample data for trips
const trips = [
    {
        title: 'Goa',
        destination: 'Goa',
        price: 3000,
        description: 'Experience the beaches and nightlife of Goa.',
        image: 'images/goa.jpg'
    },
    {
        title: 'Wayanad',
        destination: 'Wayanad',
        price: 2500,
        description: 'Explore the natural beauty of Wayanad.',
        image: 'images/wayanad.jpg'
    },
    {
        title: 'Varkala',
        destination: 'Varkala',
        price: 2000,
        description: 'Relax on the serene beaches of Varkala.',
        image: 'images/varkala.jpg'
    },
    {
        title: 'Kolkata',
        destination: 'Kolkata',
        price: 4000,
        description: 'Discover the rich culture and heritage of Kolkata.',
        image: 'images/kolkata.jpg'
    },
    {
        title: 'Ooty',
        destination: 'Ooty',
        price: 3500,
        description: 'Enjoy the cool climate and scenic beauty of Ooty.',
        image: 'images/ooty.jpg'
    },
    {
        title: 'Mumbai',
        destination: 'Mumbai',
        price: 4500,
        description: 'Experience the bustling city life of Mumbai.',
        image: 'images/mumbai.jpg'
    },
    {
        title: 'Ladakh',
        destination: 'Ladakh',
        price: 5000,
        description: 'Adventure awaits in the mountains of Ladakh.',
        image: 'images/ladakh.jpg'
    },
    {
        title: 'Alappuzha',
        destination: 'Alappuzha',
        price: 2800,
        description: 'Cruise through the backwaters of Alappuzha.',
        image: 'images/alappuzha.jpg'
    },
    {
        title: 'Mysuru',
        destination: 'Mysuru',
        price: 3200,
        description: 'Explore the palaces and gardens of Mysuru.',
        image: 'images/mysuru.jpg'
    },
    {
        title: 'Agra',
        destination: 'Agra',
        price: 3700,
        description: 'Visit the iconic Taj Mahal in Agra.',
        image: 'images/agra.jpg'
    },
    {
        title: 'Hyderabad',
        destination: 'Hyderabad',
        price: 3300,
        description: 'Discover the history and cuisine of Hyderabad.',
        image: 'images/charminar.jpg'
    }
];

// Function to search for trips based on user input
function searchTrips() {
    const searchBarValue = document.getElementById('search-bar').value.toLowerCase();
    const destinationFilter = document.getElementById('destination').value;
    const priceFilter = parseInt(document.getElementById('price-range').value);

    const filteredTrips = trips.filter(trip => {
        const matchesSearch = trip.title.toLowerCase().includes(searchBarValue);
        const matchesDestination = !destinationFilter || trip.destination === destinationFilter;
        const matchesPrice = trip.price <= priceFilter;

        return matchesSearch && matchesDestination && matchesPrice;
    });

    displayTrips(filteredTrips);
}

// Function to display trips in the results section
function displayTrips(trips) {
    const resultsGrid = document.getElementById('results-grid');
    resultsGrid.innerHTML = '';

    trips.forEach(trip => {
        const tripCard = document.createElement('div');
        tripCard.className = 'trip-card';
        tripCard.innerHTML = `
            <img src="${trip.image}" alt="${trip.title}">
            <div class="card-content">
                <h3>${trip.title}</h3>
                <p>${trip.description}</p>
                <a href="#" class="btn">Learn More</a>
            </div>
        `;
        resultsGrid.appendChild(tripCard);
    });
}

// Initial display of all trips
searchTrips();

// Event listener to update price range display
document.getElementById('price-range').addEventListener('input', function() {
    document.getElementById('price-value').textContent = `₹0 - ₹${this.value}`;
});