// Your code here
window.addEventListener('DOMContentLoaded', (e) => {
  getFilms();
});
const moviesList = document.querySelector('.film');
const movieTitle = document.getElementById('title');
const runTime = document.getElementById('run-time');
const description = document.getElementById('film-info');
const poster = document.getElementById('poster');
const showtime = document.getElementById('showtime');
const ticketNumbers = document.getElementById('ticket-num');
const buyTicket = document.getElementById('buy-ticket');

moviesList.innerHTML = '';

let currentFilm;
// fetch movies and displays the first movie on DOMContentLoaded
function getFilms () {
  fetch('http://localhost:3000/films/')
    .then(r => r.json())
    .then(renderFilms);
  starter();
}

// Fetch the first movie to display when page loads
function starter () {
  fetch('http://localhost:3000/films/1')
    .then(r => r.json())
    .then(showFilm);
}

// Iterate over the array to access individual objects
function renderFilms (films) {
  films.forEach(renderFilm);
}

// takes in a film object and accesses individual values
function renderFilm (film) {
  const movieN = document.createElement('div');
  movieN.setAttribute('id', 'movie-names');
  movieN.style.cursor = 'pointer';
  movieN.innerHTML = film.title;
  moviesList.appendChild(movieN);
  movieN.addEventListener('click', () => {    
    showFilm(film);
  });
}

// responsible for displaying details about a given film to the user
function showFilm (film) {
  // mathematical operation to show remaining tickets
  const soldTickets = film.tickets_sold;
  const ticketCapacity = film.capacity;
  const availableTickets = ticketCapacity - soldTickets;
  if (availableTickets > 0) {
    buyTicket.innerText = 'BUY TICKET';
    ticketNumbers.innerHTML = availableTickets;
  } else {
    ticketNumbers.innerHTML = 'No';
    buyTicket.innerText = 'TICKETS ARE SOLD OUT';
  }
  // remainder get and display DOM manipulations
  movieTitle.innerHTML = film.title;
  runTime.innerHTML = film.runtime;
  description.innerHTML = film.description;
  showtime.innerHTML = film.showtime;
  poster.src = film.poster;

  // anticipates booking of tickets
  buyTicket.addEventListener('click', function (e) {
    e.preventDefault();
    if (buyTicket.innerText === 'BUY TICKET') {
      ticketNumbers.innerHTML = availableTickets - 1;
      alert('Ticket booked!');
    }
  });
}

// bonus deliverable to allow a patch on the data

