const portfolioGridId = 'portfolioGrid';
const modalSectionId = 'modal-section';

const portfolioCardData = [
  {
    category: 'web',
    modal: 'web-1',
    type: 'Web Development',
    title: 'Food Website',
    image: './assets/images/portfolio-1.jpg',
    h3: 'Web Project 1',
    pTitle: 'My first awesome website',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'web',
    modal: 'web-2',
    type: 'Web Development',
    title: 'Skate website',
    image: './assets/images/portfolio-2.jpg',
    h3: 'Web Project 2',
    pTitle: 'My second awesome website',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'web',
    modal: 'web-3',
    type: 'Web Development',
    title: 'Eating Website',
    image: './assets/images/portfolio-3.jpg',
    h3: 'Web Project 3',
    pTitle: 'My third awesome website',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'ui',
    modal: 'ui-1',
    type: 'UI Design',
    title: 'Cool Design',
    image: './assets/images/portfolio-4.jpg',
    h3: 'UI Project 1',
    pTitle: 'My first awesome UI design',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'app',
    modal: 'app-1',
    type: 'App Development',
    title: 'Game App',
    image: './assets/images/portfolio-5.jpg',
    h3: 'App Project 1',
    pTitle: 'My first awesome app',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'app',
    modal: 'app-2',
    type: 'App Development',
    title: 'Gambling App',
    image: './assets/images/portfolio-6.jpg',
    h3: 'App Project 2',
    pTitle: 'My second awesome app',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'app',
    modal: 'app-3',
    type: 'App Development',
    title: 'Money App',
    image: './assets/images/portfolio-7.jpg',
    h3: 'App Project 3',
    pTitle: 'My third awesome app',
    p1: 'text 1',
    p2: 'text 2',
  },
  {
    category: 'ui',
    modal: 'ui-2',
    type: 'UI Design',
    title: 'Fantastic Design',
    image: './assets/images/portfolio-8.jpg',
    h3: 'UI Project 2',
    pTitle: 'My second awesome UI design',
    p1: 'text 1',
    p2: 'text 2',
  },
];

// Get ids from html
const portfolioGrid = document.getElementById(portfolioGridId);
const modalSection = document.getElementById(modalSectionId);

// Function to create portfolio cards
const createPortfolioCard = (item) => {
  const card = document.createElement('div');
  card.classList.add('portfolio-card');
  card.dataset.item = item.category;
  card.dataset.open = item.modal;

  card.innerHTML = `
      <div class="card-body">
        <img src="${item.image}" alt="portfolio icon">
        <div class="card-popup-box">
          <div>${item.type}</div>
          <h3>${item.title}</h3>
        </div>
      </div>
    `;

  return card;
};

// Function to create portfolio card modals
const createPortfolioModals = (item) => {
  const modal = document.createElement('div');
  modal.id = item.modal;
  modal.classList.add('modal');
  modal.dataset.animation = 'slideInOutTop';

  modal.innerHTML = `
    <div class="modal-dialog">
      <header class="modal-header">
        <h3>${item.h3}</h3>
        <i class="fas fa-times" data-close></i>
      </header>
      <div class="modal-body">
        <div class="img-wrapper">
          <img src="${item.image}" alt="portfolio img">
        </div>
        <div class="text-wrapper">
          <p><strong>${item.pTitle}</strong></p>
          <p>${item.p1}</p>
          <p>${item.p2}</p>
        </div>
      </div>
    </div>
  `;

  return modal;
};

// Populate the portfolio grid
portfolioCardData.forEach((item) => {
  const card = createPortfolioCard(item);
  portfolioGrid.appendChild(card);
});

// Create the modals
portfolioCardData.forEach((item) => {
  const modal = createPortfolioModals(item);
  modalSection.appendChild(modal);
});
