document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelectorAll('.fixed-action-btn');
  const navBar = document.querySelectorAll('.sidenav');
  const el = document.querySelectorAll('.tabs');

  M.FloatingActionButton.init(btn);
  M.Sidenav.init(navBar);
  M.Tabs.init(el);
});

function MakeCard() {
  // appending to the doc
  const container = document.getElementById('cards-container');

  // card column
  const col = document.createElement('div');
  col.className = 'col s12 m6 l3';
  container.appendChild(col);
  // card container
  const card = document.createElement('div');
  card.className = 'card';
  col.appendChild(card);

  // card image holder
  const cardImage = document.createElement('div');
  cardImage.className = 'card-image';
  card.appendChild(cardImage);
  // card image
  const image = document.createElement('img');
  image.src = '../images/2.png';
  cardImage.appendChild(image);

  // card content holder
  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';
  card.appendChild(cardContent);
  // card title
  const cardTitle = document.createElement('span');
  cardTitle.className = 'card-title';
  cardTitle.textContent = 'xxxxx';
  cardContent.appendChild(cardTitle);
  // card description
  const cardDesc = document.createElement('p');
  cardDesc.textContent = 'xxxxx';
  cardContent.appendChild(cardDesc);

  // card action holder
  const cardAction = document.createElement('div');
  cardAction.className = 'card-action';
  card.appendChild(cardAction);
  // card link
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = 'xxxxx';
  cardAction.appendChild(link);

  /* <div class="col s12 m6 l3">
    <div class="card">
      <div class="card-image">
        <img src="../images/2.png">
      </div>
      <div class="card-content">
        <span class="card-title">Card Title</span>
        <p>I am a very simple card. I am good at containing small bits of information.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div> */
}

document.getElementById('floating-btn').addEventListener('click', () => {
  MakeCard();
});
