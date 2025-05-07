document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    item.innerHTML = `<div class="bird-grid-bottom-bar"><h2></h2><img id="bird-readmore" src="src/img/misc/readmore.svg" alt="bird-readmore"></div>`
});
