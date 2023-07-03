const artworksContainer = document.getElementById('artworks-container');
const artworkElements = artworksContainer.getElementsByClassName('artwork');

Array.from(artworkElements).forEach(artworkElement => {
    const idArtwork = artworkElement.dataset.artworkId;

    fetch(`https://api.artic.edu/api/v1/artworks/${idArtwork}`)
        .then(response => response.json())
        .then(data => {
            const artwork = data.data;

            const imageUrl = artwork.image_id ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg` : '';
            const title = artwork.title ? artwork.title : 'Titolo non disponibile';
            const author = artwork.artist_display ? artwork.artist_display : 'Autore non disponibile';

            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            artworkElement.appendChild(imageElement);

            const titleElement = document.createElement('p');
            titleElement.textContent = title;
            artworkElement.appendChild(titleElement);

        })
        .catch(error => console.log(error));
});
