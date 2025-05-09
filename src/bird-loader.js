const params = new URLSearchParams(window.location.search);

const species = params.get("species");
if (!species) throw new Error("please include a species in the url. ...?species=name");

fetch(`src/birdinfo/${species}.txt`)
    .then(async (response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    const birdinfo = await response.text()
    const splitBirdInfo = birdinfo.split('¦')
    const birdName = splitBirdInfo[0]
    const birdDescription = splitBirdInfo[1]

    if (!birdName | !birdDescription) return error(`${species}.txt birdinfo is malformed.`);
});