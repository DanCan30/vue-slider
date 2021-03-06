const app = new Vue (
    {
        el: "#app",

        data: {

            currentImg: 0,

            clock: "",

            slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],
        
        },

        methods: {

            nextImg: function() {

                this.currentImg++;
                if (this.currentImg === this.slides.length) {
                    this.currentImg = 0;
                };
            },

            prevImg: function() {

                this.currentImg--;
                if (this.currentImg < 0) {
                    this.currentImg = this.slides.length - 1;
                };
            },

            thumbnailInteraction: function(i) {

                this.currentImg = i;
            },

            stopAutoplayOnHover: function() {

                clearInterval(this.clock);
            },

            startAutoplay: function() {

                this.clock = setInterval(this.nextImg, 3000);
            },

        },

        created: function() {
            this.startAutoplay();
        },
    },
)