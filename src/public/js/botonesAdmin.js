// Función para el botón de configuración
document.addEventListener("DOMContentLoaded", function() {
    var btnConfiguracion = document.querySelector('.configuracion');

    btnConfiguracion.addEventListener('click', function() {
        // Redirigir a adminconfig.html al hacer clic en el botón de configuración
        window.location.href = 'adminconfig.html';
    });
});

// Función para el botón "Terminado" de cada fila
document.querySelectorAll('.finish').forEach(function(button) {
    button.addEventListener('click', function() {
        var buttonsInRow = this.parentElement.querySelectorAll('.edit, .delete, .viewport, .finish, .habilitar');
        buttonsInRow.forEach(function(btn) {
            btn.style.display = 'none';
        });
        this.parentElement.querySelector('.habilitar').style.display = 'inline-block';
    });
});

// Función para el botón "Habilitar" de cada fila
document.querySelectorAll('.habilitar').forEach(function(button) {
    button.addEventListener('click', function() {
        var buttonsInRow = this.parentElement.querySelectorAll('.edit, .delete, .viewport, .finish, .habilitar');
        buttonsInRow.forEach(function(btn) {
            btn.style.display = 'inline-block';
        });
        this.style.display = 'none';
    });
});

//Funcion para regresar a la pagina de inicio del administrador
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón de regresar por su ID
    var btnRegresar = document.getElementById("btnRegresar");

    // Agregar un evento de clic al botón de regresar
    btnRegresar.addEventListener("click", function() {
        // Redirigir a la página adminHome.html
        window.location.href = "adminHome.html";
    });
});

// Función para el botón "Gestion de Usuarios"
document.addEventListener("DOMContentLoaded", function() {
    var btnGuardar = document.getElementById("btnGuardar");

    btnGuardar.addEventListener('click', function() {
        // Redirigir a adminconfig.html al hacer clic en el botón "Gestion de Usuarios"
        window.location.href = 'gestionUsers.html';
    });
});

// Función para el botón "Diseño de Vistas"
document.addEventListener("DOMContentLoaded", function() {
    var btnCancelar = document.getElementById("btnCancelar");

    btnCancelar.addEventListener('click', function() {
        // Redirigir a la página correspondiente al hacer clic en el botón "Diseño de Vistas"
        window.location.href = 'gestionStyle.html'; // Reemplaza 'paginaDiseño.html' con la URL correcta
    });
});

// Funcion para regresar a mi configuracion
document.addEventListener("DOMContentLoaded", function() {
    var btnNuevo = document.getElementById("btnRegresarConfiguracion");

    btnNuevo.addEventListener('click', function() {
        // Redirigir a adminConfig.html al hacer clic en el botón "Nuevo Botón"
        window.location.href = 'adminConfig.html';
    });
});
