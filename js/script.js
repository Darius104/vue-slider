Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        // variabile impostata a 0 per poter collegare le Thumbs con le immagini
        activeSlide: 0,
        // creo il mio array di oggetti
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
        // aggiungo i metodi per le arrow
        // arrow next controllo se la variabile inizializzata a 0 è minore della lunghezza dell'array - 1 vado a
        // incrementare il numero
        nextSlide: function(){
            if( this.activeSlide < this.slides.length - 1 ){
                this.activeSlide++;
            }
        },
        // arrowB controllo se la variabile inizializzata a 0 è maggiore di 0 vado a
        // decrementare il numero
        bSlide: function(){
            if( this.activeSlide > 0 ){
                this.activeSlide--;
            }
        }
    }
});


