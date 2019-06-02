<template>
    <div id="methods">

        <p :title="msg">{{msg}}</p>

        <h1 v-show="status">Заголовок с v-show</h1>

        <div :class="[isActive ? 'active' : '']">{{isActive}}</div>
        <div :style="{ color: 'red', fontSize: fontSize + 'px' }">Hello World</div>


        <table border="1">
            <thead>
            <th>ID</th>
            <th>Name</th>
            </thead>

            <tbody>
            <tr v-for="item in todos">
                <td>{{item.id}}</td>
                <td>{{item.text}}</td>
            </tr>
            </tbody>
        </table>




        <!--    <template v-if="status === 1">-->
        <!--      <h1>Свойство равно 1</h1>-->
        <!--      <p>Описание 1</p>-->
        <!--    </template>-->

        <!--    <template v-else>-->
        <!--      <h1>Свойство равно {{status}}</h1>-->
        <!--      <h1>Свойство равно {{status}}</h1>-->
        <!--      <h1 v-show="status">Заголовок с v-show</h1>-->
        <!--    </template>-->

        <ul>
            <li v-for="todo in todos">{{todo.text}}</li>
        </ul>
        <p>{{ message }}</p>
        <button @click="reverseMessage">Перевернуть сообщение</button>
        <input type="text" v-model="textsearch" />
        <button @click="counter">Кликов: {{count}}</button>
        <button @click="getHashTags">Get Hashtags</button>
        <button @click="getCities">Get Cities</button>

        <ul>
            <li v-for="hashtag in hashtags">{{hashtag}}</li>
        </ul>

        <ul>
            <li v-for="city in cities">{{city.region}}: {{city.city}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "methods",

        data() {
            return {
                message: 'Привет, Vue',
                textsearch: '',
                count: 0,
                hashtags: [],
                cities: [],
                msg: 'Hello world!!!',
                status: true,
                todos: [
                    { id: 1, text: 'Изучить JavaScript' },
                    { id: 2, text: 'Изучить Vue' },
                    { id: 3, text: 'Создать что-нибудь классное' }
                ],
                isActive: true,
                fontSize: 25,
                url: {
                    hashtags: 'https://dka-develop.ru/api?type=hashtag',
                    cities: 'https://dka-develop.ru/api?type=city'
                }
            }
        },

        created: function() {
            this.count = 3
        },
        methods: {
            reverseMessage: function() {
                this.message = this.message.split('').reverse().join('')
            },
            counter: function() {
                this.count++;
            },
            getHashTags: function () {
                axios.get(this.url.hashtags)
                    .then(response => {
                        this.hashtags = response.data
                    });
            },

            getCities: function () {
                axios.get(this.url.cities)
                    .then(response => {
                        this.cities = response.data
                    });
            }

        }
    }
</script>

<style scoped>

</style>