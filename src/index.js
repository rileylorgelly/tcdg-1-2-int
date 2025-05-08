document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    if (!bird) return console.warn(`${item.id} is missing a birdtype, despite having the 'bird-grid-item' class.`)
    item.innerHTML = `<div class="bird-grid-bottom-bar"><h2></h2><img class="bird-readmore" data-birdtype="${bird}" src="src/img/misc/readmore.svg" alt="bird-readmore"></div>` 
});

document.querySelectorAll(".bird-grid-item").forEach((item) => {
    const bird = item.dataset.birdtype;
    item.style.backgroundImage = `url('src/img/birds/${bird}.png')`
});

/**
 * 
 * @param {string} link 
 * @param {MouseEvent} event could also be a pointerevent, but that derives from mouse event, and we only really need the MouseEvent.button property. 
 * @returns 
 */

function gotolink(link, event) {
    if (!link) return console.warn("no link.");
    if (!event) return console.warn("no event.");

    if(link.startsWith("https://")) return window.open(link, '_blank').focus();

    switch (event.button) {
        case 0:
            window.location.href = link;
            break;
        case 1: /* middle click, bcuz i use it yk */
            window.open(link, '_blank').focus();
            break;
        default:
            break;
    }
}

const elements = document.querySelectorAll('[data-link]').forEach((item) => {
    const link = item.dataset.link;
    if (!link) return console.error(`${item.id} is missing the fucking data-link, even though i used the data query selector, why the fuck isn';t it there, help. it should be!!!`) /* ignore length */

    item.addEventListener("click", (e) => gotolink(link, e));
    item.addEventListener("auxclick", (e) => gotolink(link, e)); /* other mouse clicks, for middle click. */ 
});
