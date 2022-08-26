
let art;
let displayArtData;

async function clickedEvent(art_id, item_index) {

    let request = fetch(`https://api.artic.edu/api/v1/artworks/${art_id}`)
        .then((response) => {
        if (response.ok) {
            // console.log('Is this happening too?');
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
        })
        .then(art => {
        console.log(art);
        displayArt(art);
        })
        .catch((error) => console.error("FUNKY FETCH ERROR:", error));
}

//  fetch("https://api.artic.edu/api/v1/artworks/111628")

function displayArt(art) {
    const title = art.data.title;
    const artist = art.data.artist_title;
    const credit = art.data.credit_line;
    const categories = art.data.category_titles //returns an array
    const art_date = art.data.date_display //returns a string
    console.log(`Art title here:${title}, by ${artist}, provided by ${credit}. First on display in ${art_date}, and considered as the following: ${categories}`)
    
    const artDiv = document.getElementById("art_info");
    let displayHTML = `<h5> ${title}</h5>by <h6> ${artist}</h6><br>`;
    displayHTML += `First displayed on ${art_date}<br>`;
    displayHTML += `Provided by ${credit}<br>`
    displayHTML += `Considered: ${categories}`
    artDiv.innerHTML = displayHTML;
}
