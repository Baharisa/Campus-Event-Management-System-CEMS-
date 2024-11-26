// frontend/js/main.js
import api from './api.js';

let currentSlide = 0;
const items = [];

const loadFeaturedEvents = async () => {
    const events = await api.getEvents();
    items.push(...events);
    updateCarousel();
};

const prevSlide = () => {
    currentSlide = (currentSlide === 0) ? items.length - 1 : currentSlide - 1;
    updateCarousel();
};

const nextSlide = () => {
    currentSlide = (currentSlide === items.length - 1) ? 0 : currentSlide + 1;
    updateCarousel();
};

const updateCarousel = () => {
    const carouselContainer = document.getElementById('carousel-items');
    carouselContainer.innerHTML = items.map((item, index) => `
        <div class="carousel-item" style="transform: translateX(-${currentSlide * 100}%);">
            <img src="${item.image}" alt="${item.title}" style="width:100%;">
            <h3>${item.title}</h3>
            <p>${item.date}</p>
        </div>
    `).join('');
};

const loadCalendar = (events) => {
    const calendarContainer = document.getElementById('calendar');
    const daysInWeek = 7;
    const today = new Date();
    const currentMonth = today.getMonth();
    let days = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();

    for (let day = 1; day <= days; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        dayDiv.innerHTML = `<strong>${day}</strong><br>`;

        const dayEvents = events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day && eventDate.getMonth() === currentMonth;
        });

        dayEvents.forEach(event => {
            dayDiv.innerHTML += `<span>${event.title}</span><br>`;
        });

        calendarContainer.appendChild(dayDiv);
    }
};

document.addEventListener('DOMContentLoaded', loadFeaturedEvents);