document.getElementById('header-descarga-cv').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1p-SLwiJ4yNmWqD6euEj7XJ1waEn0ilGn';
    link.download = 'CV_Juan_Isabel_Gutierrez.pdf'; // Puedes establecer el nombre del archivo aquí
    link.click();
});