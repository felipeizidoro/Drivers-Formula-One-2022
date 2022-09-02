const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let currentCard = 0;

function ocultCardSelected(){
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}

function showCardSelected(indiceCard){
    cards[indiceCard].classList.add('selected');
}

btnNext.addEventListener('click', () => {
    if(currentCard === cards.length - 1) return;

    ocultCardSelected();

    currentCard ++;
    showCardSelected(currentCard);
});

btnBack.addEventListener('click', () => {
    if(currentCard === 0) return;

    ocultCardSelected();

    currentCard --;
    showCardSelected(currentCard);
});