document.getElementById('imageInput').addEventListener('change', function(event) {
    const imagesContainer = document.getElementById('images');
    imagesContainer.innerHTML = ''; // Clear previous images

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            imagesContainer.appendChild(img);

            // Tambahkan tautan untuk mengedit gambar di iLoveIMG
            const editLink = document.createElement('a');
            editLink.href = `https://www.iloveimg.com/edit-image?image=${encodeURIComponent(e.target.result)}`;
            editLink.target = "_blank";
            editLink.className = 'edit-link';
            editLink.innerText = 'Edit Gambar di iLoveIMG';
            imagesContainer.appendChild(editLink);
        }

        reader.readAsDataURL(file);
    }
});

document.getElementById('videoInput').addEventListener('change', function(event) {
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = ''; // Clear previous videos

    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            videosContainer.appendChild(video);
        }

        reader.readAsDataURL(file);
    }
});