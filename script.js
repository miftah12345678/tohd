document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const files = fileInput.files;

    if (files.length > 0) {
        const file = files[0];
        const galleryContainer = file.type.startsWith('image/') ? document.getElementById('photo-gallery') : document.getElementById('video-gallery');
        
        const reader = new FileReader();
        reader.onload = function(e) {
            let element;
            if (file.type.startsWith('image/')) {
                element = document.createElement('img');
                element.src = e.target.result;
            } else if (file.type.startsWith('video/')) {
                element = document.createElement('video');
                element.src = e.target.result;
                element.controls = true;
            }

            // Tambahkan elemen ke galeri
            galleryContainer.appendChild(element);

            // Buat tombol download
            const downloadButton = document.createElement('a');
            downloadButton.href = e.target.result;
            downloadButton.download = file.name; // Nama file saat diunduh
            downloadButton.innerText = 'Download';
            downloadButton.className = 'download-button';

            // Tambahkan tombol download ke galeri
            galleryContainer.appendChild(downloadButton);
        };
        reader.readAsDataURL(file);
    } else {
        alert('Silakan pilih file untuk diunggah.');
    }
});