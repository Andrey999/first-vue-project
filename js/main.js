
new Vue({
    el: '#app',

    data() { // базовые методы для отрисовки
        return {
            cars: [
                { name: "Ford", model: "Focus", owner: "Andrey", year: 2016, phone: "+7-929-123-45-67", image: "./assets/ford_focus.jpg" },
                { name: "Volkswagen", model: "Passat", owner: "Evgeniy", year: 2014, phone: "+7-907-321-54-67", image: "./assets/passat.jpg" },
                { name: "Porche", model: "Panamera", owner: "Anatoliy", year: 2018, phone: "+7-600-123-45-67", image: "./assets/porsche_panamera.jpg" },
            ],
            car: { name: "Ford", model: "Focus", owner: "Andrey", year: 2016, phone: "+7-929-123-45-67", image: "./assets/ford_focus.jpg" },
            selectedCarIndex: 0,
            isActiveTel: false,
            search: '',
            modalVisible: false,
            buyCars: [],
            buyCarsBlockVisible: false
        }
    },

    methods: { // указываем функции которые хотим определить
        selectCar: function(index) {
            this.car = this.cars[index];
            this.selectedCarIndex = index;
        },
        togglePhone: function() {
            this.isActiveTel = !this.isActiveTel
        },
        newOrder: function() {
            this.modalVisible = false;
            this.buyCarsBlockVisible = true;
            this.buyCars = [`Success order: ${this.car.name} - ${this.car.model} - ${ new Date().toLocaleString()}`];
            setTimeout(() => {return this.buyCarsBlockVisible = false},8000)
        },
    },

    computed: {  //  вычисленные свойства
        phoneBtnText: function() {
            return this.isActiveTel ? 'Hide phone' : 'Show phone'
        },
        filteredCars: function() {
            return this.cars.filter(car => {
                return car.name.toUpperCase().indexOf(this.search) > -1 || car.name.toLowerCase().indexOf(this.search) > -1 ||
                       car.model.toUpperCase().includes(this.search) || car.model.toLowerCase().includes(this.search);
            })
        }
    },

    filters: {
        date: function(value) {
            return value.toLocaleString();
        }
    },

    created() { // когда  компонент создался
        setTimeout(() => {
            document.getElementById('app').style.opacity = 1;
            document.getElementById('spiner').style.display = 'none';
        },2500);
    },
});