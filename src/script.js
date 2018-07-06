class SimpleScrollAnimation {
    constructor() {
        this.win = window;
        this.doc = document;

        this.doc.body.setAttribute('data-js', 'on');
    }

    init() {
        // get all elements for animation from page
        this.elements = this.doc.querySelectorAll('[data-scroll-animate="on"]');
        // get top position of 'this.elements'
        this.elementsWithTopPosition = this.getElementsWithTopPosition(this.elements);

        // run animation when app starting
        this.animation(this.elementsWithTopPosition);
        // run animation when scroll to animated elements
        this.scrollHandler();
    }

    animation() {
        let windowTopPosition = this.doc.documentElement.scrollTop;

        this.elementsWithTopPosition.forEach((item) => {
            if(windowTopPosition >= item[0]) {
                setTimeout(() => item[1].removeAttribute('data-scroll-animate-style'), item[2] ? item[2] : 0);
            }
        });
    }

    getElementsWithTopPosition(elemsWithPos) {
        let rect = 0;
        let pos = 0;
        let arr = [];
        let topOffset = this.win.innerHeight - 100;

        elemsWithPos.forEach((elem) => {
            rect = elem.getBoundingClientRect();
            pos = rect.top - topOffset;

            // get top position
            arr.push([[pos], elem, elem.getAttribute('data-scroll-animate-delay')]);
        });

        return arr;
    }

    scrollHandler() {
        this.win.addEventListener('scroll', () => this.animation());
    }
}

let instance = new SimpleScrollAnimation();
instance.init();