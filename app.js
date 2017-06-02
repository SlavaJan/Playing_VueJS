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
        ],
        todos: [
            { text: 'write my own todo-app', done: false }
        ],
        newItem: ''
    },
    methods: {
        greet: function (str) {
            return str + ' ' + this.name
        },
        add: function (num) {
            this.age += parseInt(num);
        },
        subtract: function (num) {
            this.age -= parseInt(num);
        },
        updateXY: function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        add: function (e) {
            this.todos.push({text: this.newItem, done: false});
            this.newItem = '';
        },
        remove: function (index) {
            this.todos.splice(index, 1);
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