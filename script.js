document.addEventListener('DOMContentLoaded', function() {
    // HTML elementlerini değişkenlere atıyoruz
    const button = document.getElementById('secretButton');
    const message = document.getElementById('secretMessage');
    const mainText = document.querySelector('.main-text'); // Ortadaki büyük yazıyı alıyoruz

    // Butona tıklama olayı ekliyoruz
    button.addEventListener('click', function() {
        // Tıklanınca ortadaki büyük yazıyı gizle
        if (mainText) {
            mainText.classList.add('hidden');
        }

        // Butonu gizle
        button.classList.add('hidden');

        // Yeni mesajı ayarla
        message.textContent = "YALAN SÖYLEME, HER ŞEYİ BİLİYORUM!";

        // Mesajı görünür yap
        message.classList.remove('hidden');
        
        // Bir sonraki frame'de fade-in animasyonunu başlat (CSS ile görünür yap)
        setTimeout(() => {
            message.classList.add('visible');
        }, 10);
    });
});
