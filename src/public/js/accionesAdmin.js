function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function () {
        var imagePreview = document.getElementById('imagePreview');
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';

        // Ocultar el texto del dropbox al subir la imagen
        var dropboxText = document.querySelector('.dropbox-text');
        dropboxText.style.display = 'none';

        // Actualizar el logo en el header
        var headerLogo = document.querySelector('header img');
        headerLogo.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

document.addEventListener('DOMContentLoaded', function () {
    var colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('change', function () {
        var selectedColor = colorPicker.value;

        // Actualizar el color del header
        var header = document.querySelector('header');
        header.style.backgroundColor = selectedColor;

        // Actualizar el color del footer
        var footer = document.querySelector('footer');
        footer.style.backgroundColor = selectedColor;
    });
});
