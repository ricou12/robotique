document.getElementById("my-video").addEventListener('click', () => {
    document.querySelector('.robotique__video').innerHTML =`
        <video controls autoplay>
            <source src="assets/video/video.mp4" type="video/mp4">
                <p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici 
                    <a href="assets/video/video.mp4">un lien pour télécharger la vidéo</a>.
                </p>
        </video>`;
 });