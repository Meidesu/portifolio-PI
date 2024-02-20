const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const header = card.querySelector('header');

            header.addEventListener('mouseenter', () => {
                card.classList.add('hovered');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('hovered');
            });
        });