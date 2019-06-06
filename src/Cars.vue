<template>
    <div id="cars">

        <div class="cars__description">
            <h1>Cars application</h1>
        </div>

        <div class="wrap__content">

            <div class="form">
                <label for="search">Find your cars</label>
                <input
                        type="text"
                        class="form__input"
                        id="search"
                        placeholder="name, model ..."
                        v-model="search"/>

                <hr>

                <ul class="list">
                    <li
                    v-for="(car, index) in filteredCars"
                    class="list__item"
                    @click="selectCar(index)"
                    :class="[ selectedCarIndex === index ? 'activeCarElem' : '' ]">{{ car.name }} - {{ car.model }}
                    </li>
                </ul>
            </div>

            <div class="details">

                <div class="details__title">
                    <h2 >{{ car.name }}</h2>
                    <img :src="car.image" :alt="car.image" class="details__image" />
                </div>

                <div class="cars__details">
                    <h2>Car Details</h2>

                    <ul class="details__list">
                        <li>Model - <strong>{{ car.model }}</strong></li>
                        <li>Year - <strong>{{ car.year }}</strong></li>
                        <li>Owner - <strong>{{ car.owner }}</strong></li>
                    </ul>

                        <a class="details__phone" :class="[ isActiveTel ? '' : 'showTel']" :tel="car.phone">{{ car.phone }}</a>

                    <div class="buttons__details">
                        <button class="btn btn__success" @click="togglePhone">{{ phoneBtnText }}</button>
                        <button class="btn btn__primary" @click="modalVisible = true">Buy</button>
                    </div>
                </div>

            </div>
        </div>

        <div class="success" v-if="buyCarsBlockVisible">
            <ul class="buy__car-list">
                <li v-for="buyCar in buyCars">{{ buyCar }}</li>
            </ul>
        </div>

        <transition name="modal">
            <div class="modal" v-if="modalVisible">
                <h3>Do you want by this car?</h3>
                <p>Current car - <strong>{{ car.name }}</strong></p>

                <ul class="details__list">
                    <li>Model - <strong>{{ car.model }}</strong></li>
                    <li>Year - <strong>{{ car.year }}</strong></li>
                    <li>Owner - <strong>{{ car.owner }}</strong></li>
                </ul>

                <span @click="modalVisible = false">X</span>
                <div class="modal__btn">
                    <button class="btn btn__save" @click="newOrder">Buy</button>
                    <button class="btn btn__close" @click="modalVisible = false">Cancel</button>
                </div>
            </div>
        </transition>

        <div v-if="modalVisible" class="backdrop"></div>

    </div>
</template>

<script>
    export default {
        name: "Cars",
        data() { // базовые методы для отрисовки
           return {
               cars: [
                   { name: "Ford", model: "Focus", owner: "Andrey", year: 2016, phone: "+7-929-123-45-67", image: "./src/assets/ford_focus.jpg" },
                   { name: "Volkswagen", model: "Passat", owner: "Evgeniy", year: 2014, phone: "+7-907-321-54-67", image: "./src/assets/passat.jpg" },
                   { name: "Porche", model: "Panamera", owner: "Anatoliy", year: 2018, phone: "+7-600-123-45-67", image: "./src/assets/porsche_panamera.jpg" },
                  ],
               car: { name: "Ford", model: "Focus", owner: "Andrey", year: 2016, phone: "+7-929-123-45-67", image: "./src/assets/ford_focus.jpg" },
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
            }
        },

        computed: {  //  вычисленные свойства
            phoneBtnText: function() {
               return this.isActiveTel ? 'Hide phone' : 'Show phone'
            },
            filteredCars: function() {
                return this.cars.filter(car => {
                    return car.name.toLocaleLowerCase().indexOf(this.search) > -1 || car.model.toLocaleLowerCase().includes(this.search);
                })
            }
        },
        filters: {
            date: function(value) {
                return value.toLocaleString();
            }
        }
    }


</script>


<style lang="scss" scoped>
    ul,li {
        padding: 0;
        margin: 0;
    }

    .wrap__content {
        display: flex;
    }

    .form {
        input {
            margin-top: 5px;
            display: block;
            padding: 5px 5px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    }
    // list
    .list {
        width: 300px;
        list-style-type: none;
        display: block;
        border: 1px solid #ccc;
        margin-top: 15px;
        border-radius: 5px;
    }

    .list__item {
        padding: 5px 5px;
        cursor: pointer;
        transition: background .3s;

        &:hover {
            background: #cccccc;
            opacity: .9;
        }

        &:after {
            content: '';
            position: relative;
            top: 5px;
            left: -6px;
            background-color: #cccccc;
            display: block;
            width: 104%;
            height: 1px;
        }

        &:last-child:after {
            width: 0;
            height: 0;
        }
    }


    // details
    .details {
        display: flex;
        width: 100%;
        justify-content: space-around;
    }

    .details__title {
        text-align: center;
        width: 200px;
        height: 210px;
    }

    .details__image {
        width: 200px;
        height: 133px;
    }

    // cars__details
    .details__list {
        list-style-type: circle;
        margin: 10px 20px;
        li {
            font-size: 15px;
            font-weight: 100;
            padding-bottom: 2px;
        }
    }

    .details__phone {
        display: block;
        font-size: 18px;
        font-weight: 200;
        margin-bottom: 10px;
        transition: transform .5s;
    }

    // btn
    .btn {
        padding: 0 15px;
        background-color: transparent;
        border-radius: 5px;
        height: 35px;
        font-size: 16px;
        outline: none;
        cursor: pointer;
        transition: background .4s;
    }

    .btn__success {
        width: 121px;
        border: 1px solid limegreen;
        color: limegreen;
        margin-right: 3px;

        &:hover {
            color: #fff;
            background: limegreen;
        }
    }

    .btn__primary {
        border: 1px solid dodgerblue;
        background: dodgerblue;
        color: #fff;

        &:hover {
            background: lighten(dodgerblue, 10%);
        }
    }
    // add class to
    .activeCarElem {
        background: dodgerblue !important;
    }
    // add class to show or hide phone
    .showTel {
        transform: translateX(152px);
        opacity: 0;
    }

    //  modal
    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        min-height: 310%;
        background: rgba(170,170,170, .5);
    }

    .modal {
        background-color: #ffffff;
        position: relative;
        top: -250px;
        margin: auto;
        width: 350px;
        height: auto;
        z-index: 10;
        border: 1px solid #000;
        border-radius: 6px;
        padding: 0 20px;
        display: block;

        h3 {
            font-weight: 100;

            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 55px;
                width: 100%;
                height: 1px;
                background-color: #000000;
            }
        }

        p {
            padding-top: 10px;
        }

        span {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 20px;
            cursor: pointer;
            font-weight: 600;

            &:hover {
                opacity: .5;
            }
        }
    }

    .modal__btn {
        display: flex;
        justify-content: flex-end;
        margin: 30px 0 18px;
    }

    .btn__save {
        border: 1px solid dodgerblue;
        background: dodgerblue;
        color: #fff;
    }

    .btn__close {
        border: 1px solid #ccc;
        background: #ccc;
        color: #fff;
        margin-left: 15px;
    }

    /*  buy  car  */
    .success {
        background: lightseagreen;
        border-radius: 5px;
    }

    .buy__car-list {
        margin-top: 15px;
        list-style-type: none;
        padding: 15px;
    }

    // animation
    //-enter - элемент появился;  -leave
    //-enter-active - висит на элементе, продолжительный класс; -leave-active
    // -enter-to добавится к финальному состоянию;  -leave-to
    .modal-enter-active, .modal-leave-active {
        transition: all .5s;
    }

    .modal-enter, .modal-leave-to {
        transform: translateY(-100px);
    }

    @import 'style.scss';
</style>