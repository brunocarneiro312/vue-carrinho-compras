<template>
    <div class="container">
        <div>
            Quantidade: {{ quantidade }}
        </div>
        <div>
            TOTAL: {{ total }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data: function() {
            return {
                cart: []
            }
        },
        computed: {
            quantidade() {
                return this.$store.getters.count;
            },
            total() {
                return this.$store.getters.total;
            }
        },
        created() {
            this.$store.dispatch('setCart', JSON.parse(window.localStorage.getItem('cart')))
        }
    }
</script>

<style scoped>

</style>