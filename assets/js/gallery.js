
       let currentIndex = 0;
        const images = document.querySelectorAll('.gallery img');

        function enlargeImage(img) {
            const modal = document.getElementById('modal');
            const modalImage = document.getElementById('modalImage');
            modalImage.src = img.src;
            modal.style.display = 'flex';
            currentIndex = Array.from(images).indexOf(img);
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.style.display = 'none';
        }

        function showImage(index) {
            if (index >= 0 && index < images.length) {
                const modalImage = document.getElementById('modalImage');
                modalImage.src = images[index].src;
                currentIndex = index;
            }
        }
               document.getElementById('modal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(event) {
            if (document.getElementById('modal').style.display === 'flex') {
                if (event.key === 'ArrowRight') {
                    showImage(currentIndex + 1);
                } else if (event.key === 'ArrowLeft') {
                    showImage(currentIndex - 1);
                }
            }
        });