<template>
    <div id="app">
        <div>
            <Cart />
        </div>
        <div>
            <ItemList />
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">

</style>

<script>
    import Cart from "./components/Cart";
    import ItemList from "./components/ItemList";

    export default {
        name: "App",
        components: {
            Cart,
            ItemList
        },
        created() {
            this.$store.dispatch('setCart',
                JSON.parse(window.localStorage.getItem('cart')));
        }
    }
</script>
