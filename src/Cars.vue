<template>
    <div id="cars">

        <div class="cars__description">
            <h1>Cars application</h1>
        </div>

        <div class="form">
            <label for="search">Find your cars</label>
            <input type="text" class="form__input" id="search" placeholder="name, model ..." />
        </div>

        <ul class="list">
            <li class="list__item">12345</li>
            <li class="list__item">12345</li>
            <li class="list__item">12345</li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "Cars"
    }
</script>

<style lang="scss" scoped>
    ul,li {
        padding: 0;
        margin: 0;
    }
    .form {
        input {
            margin-top: 5px;
            display: block;
            padding: 5px 5px;
            font-size: 16px;
            border-radius: 5px;
            border: 1px solid #ccc;
            /*width: 38%;*/
        }
    }

    .list {
        width: 38%;
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


</style>