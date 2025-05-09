document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    if (!bird) return console.warn(`${item.id} is missing a birdtype, despite having the 'bird-grid-item' class.`)
    item.innerHTML = `<div class="bird-grid-bottom-bar"><h2></h2><a href="bird?species=${bird}"><img class="bird-readmore" src="src/img/misc/readmore.svg" alt="bird-readmore"></a></div>`
});

document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    item.style.backgroundImage = `url('src/img/birds/${bird}.png')`
});
