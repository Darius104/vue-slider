Vue.config.devtools = true;
const app = new Vue({
    el: '#root',
    data: {
        activeSlide: 0,

        slides: 
        [
            {
                title: 'Svezia',
                image: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                title: 'Svizzera',
                image: 'img/02.jpg',
                text: 'Lorem ipsum'
            },
            {
                title: 'Gran Bretagna',
                image: 'img/03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                title: 'Germania',
                image: 'img/04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                title: 'Paradise',
                image: 'img/05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ]
    },
    methods:{
        nextSlide: function(){
            if( this.activeSlide < this.slides.length - 1 ){
                this.activeSlide++;
            }
        },
        bSlide: function(){
            if( this.activeSlide > 0 ){
                this.activeSlide--;
            }
        }
    }
});


