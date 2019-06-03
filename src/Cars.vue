<template>
    <div id="cars">

        <div class="cars__description">
            <h1>Cars application</h1>
        </div>

        <div class="wrap__content">

            <div class="form">
                <label for="search">Find your cars</label>
                <input type="text" class="form__input" id="search" placeholder="name, model ..." />

                <hr>

                <ul class="list">
                    <li
                    v-for="(car, index) in cars"
                    class="list__item"
                    @click="selectCar(index)">{{ car.name }} - {{ car.model }}</li>
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

                    <a class="details__phone" :tel="car.phone">{{ car.phone }}</a>

                    <div class="buttons__details">
                        <button class="btn btn__success">Show phone</button>
                        <button class="btn btn__primary">Buy</button>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        carsArr: [
            { name: "Ford", model: "Focus", owner: "Andrey", year: 2016, phone: "+7-929-123-45-67", image: "./dist/ford_focus.jpg" },
            { name: "Ford", model: "Mondeo", owner: "Evgeniy", year: 2014, phone: "+7-907-321-54-67", image: "./assets/ford_mondeo.jpg" },
            { name: "Porche", model: "Panamera", owner: "Anatoliy", year: 2018, phone: "+7-600-123-45-67", image: "./assets/porche_panamera.jpg" },
        ],
        name: "Cars",
        data() { // базовые методы для отрисовки
           return {
               car: carsArr[0],
               }
           },

        methods: { // указываем функции которые хотим определить
                selectCar: function(index) {
                 console.log(this.cars)
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
            width: 102%;
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
    }

    .details__image {
        width: 200px;
        height: auto;
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
        font-size: 15px;
        font-weight: 200;
        margin-bottom: 10px;
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








</style>