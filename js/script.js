$(document).ready(function () {
    let muted = true;
    const video = document.getElementById('background');
    const volumeRange = document.getElementById('volume_range');

    $("#muted").on('click', function () {
        if (muted == true) {
            $("#muted svg").removeClass("fa-volume-xmark").addClass("fa-volume-high");
            video.muted = false;
            muted = false;
        } else {
            $("#muted svg").removeClass("fa-volume-high").addClass("fa-volume-xmark");
            video.muted = true;
            muted = true;
        }
    });

    // Change volume
    volumeRange.addEventListener('input', () => {
        video.volume = volumeRange.value / 100;
    });
});

    // Definindo o controle de volume inicial
    $("#background").prop("volume", 0.5); // 0.5 para 50%

    // Função para controlar o volume quando o range for alterado
    $("#volume_range").on('input', function () {
        var volume = $(this).val() / 100; // Convertendo para um valor entre 0 e 1
        vimeoPlayer.setVolume(volume)
    });

    var images = [
        "Solo leveling.webp",
        "Solo leveling2.webp",
        "Solo leveling3.webp",
        "Solo leveling4.webp",
        "Solo leveling5.webp",
        "Solo leveling6.webp",
        "igris.webp",

    ];

    var currentIndex = 0;
    var totalImages = images.length;

    // Função para mostrar a próxima imagem
    function showNextImage() {
        $('#carousel img').fadeOut(1000, function () {
            $(this).attr('src', './media/img/' + images[currentIndex]).fadeIn(1000);
        });
        currentIndex = (currentIndex + 1) % totalImages;
    }

    // Define o intervalo par   a trocar as imagens automaticamente
    var interval = setInterval(showNextImage, 3000); // Troca a cada 3 segundos






