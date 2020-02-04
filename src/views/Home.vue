<template>
    <div class="container">
        <Cart />
        <ItemList />
    </div>
</template>

<script>
    import Cart from "../components/Cart";
    import ItemList from "../components/ItemList";

    export default {
        name: "Home",
        components: {
            Cart,
            ItemList
        }
    }
</script>

<style scoped>

</style>