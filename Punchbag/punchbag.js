new Vue({
    el: '#game',
    data: {
        hp: 100,
        ended: false,
        punchSound: new Audio('sound/PUNCH.wav')
    },
    methods: {
        punch: function () {
            this.hp -= 10;
            this.punchSound.play();
            if ( this.hp <= 0 ) {
                this.ended = true;
            }
        },
        restart: function () {
            this.hp = 100;
            this.ended = false;
        }
    }
});