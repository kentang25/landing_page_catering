$(document).ready(function(){

    // Tambah underline
    $('.nav-link').each(function(){
        $(this).append(
            '<span class="underline absolute left-0 bottom-0 h-[2px] w-0 bg-gray-800"></span>'
        );
    });

    // Hover effect
    $('.nav-link').hover(
        function() {
            if(!$(this).hasClass('active')){
                $(this).find('.underline')
                       .stop()
                       .animate({ width: '100%' }, 300);
            }
        },
        function() {
            if(!$(this).hasClass('active')){
                $(this).find('.underline')
                       .stop()
                       .animate({ width: '0%' }, 300);
            }
        }
    );

    // Click → set active
    $('.nav-link').click(function(e){
        e.preventDefault();

        // Hapus active dari semua
        $('.nav-link').removeClass('active text-gray-900');

        // Reset semua underline
        $('.nav-link .underline').stop().animate({ width: '0%' }, 200);

        // Tambah active ke yang diklik
        $(this).addClass('active text-gray-900');

        // Garis tetap full
        $(this).find('.underline')
               .stop()
               .animate({ width: '100%' }, 300);
    });

});

let index = 0;
const carousel = document.getElementById("carousel");
const total = carousel.children.length;

function updateSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlide();
}

// Auto slide (optional)
setInterval(nextSlide, 4000);