new Glide('.popino-gallery', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 40,
    autoplay: 6000,
    breakpoints: {
        1000: {
            perView: 4
        },
        1000: {
            perView: 3
        }
    }
}).mount()