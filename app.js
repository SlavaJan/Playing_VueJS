new Vue ({
    el: '#vue-app',
    data: {
        name: '',
        job: 'Chef',
        website: 'http://Vishvanatan.name',
        websiteTag: '<a href="http://Vishvanatan.name" target="_blank">Vishvanatan\'s website</a>',
        age: '',
        x: 0,
        y: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,

        characters: ['Mario', 'Luigi', 'Yoshi', 'Vishvanatan'],
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Ken', age: 25},
            {name: 'Dan', age: 35},
            {name: 'Sakura', age: 15}
        ]
    },
    methods: {
        greet: function (str) {
            return str + ' ' + this.name
        },
        add: function (num) {
            this.age += num;
        },
        subtract: function (num) {
            this.age -=num;
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logName: function () {
            
        },
        logAge: function () {
            
        }
    },
    computed: {
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }

    }
});