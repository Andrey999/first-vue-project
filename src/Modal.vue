<template>
    <div id="modal" class="modal">
        <h3>Do you want by this car?</h3>
        <p>Modal body text going here</p>
        <span>X</span>
        <div class="modal__btn">
            <button class="btn btn__save">Save changes</button>
            <button class="btn btn__close">Close</button>
        </div>
    </div>

    <div class="backdrop"></div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style lang="scss" scoped>

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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

            &:after {
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 110px;
                width: 100%;
                height: 1px;
                background-color: #000000;
            }
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

</style>