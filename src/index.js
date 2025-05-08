document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    item.innerHTML = `<div class="bird-grid-bottom-bar"><h2></h2><img class="bird-readmore" data-birdtype="${bird}" src="src/img/misc/readmore.svg" alt="bird-readmore"></div>` 
});

document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    item.style.backgroundImage = `url('src/img/birds/${bird}.png')`
});