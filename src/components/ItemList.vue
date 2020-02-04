<template>
    <div class="container">
        <ul>
            <li v-for="item in saleItems" v-bind:key="item.id">
                <span>[#{{ item.id }}] {{ item.name }} - R${{ item.price }}</span>
                <button @click="addItem(item)">Adicionar ao carrinho</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ItemList",
        data: function() {
            return {
                saleItems: [
                    {
                        id: 1,
                        name: 'Teclado',
                        price: 150.25
                    },
                    {
                        id: 2,
                        name: 'Mouse',
                        price: 35.50
                    },
                    {
                        id: 3,
                        name: 'Monitor',
                        price: 675.23
                    },
                    {
                        id: 4,
                        name: 'Processador',
                        price: 842.56
                    },
                    {
                        id: 5,
                        name: 'Placa de Vídeo',
                        price: 2225.75
                    },
                    {
                        id: 6,
                        name: 'Memória RAM 16GB',
                        price: 320.20
                    },
                    {
                        id: 7,
                        name: 'Gabinete',
                        price: 150.00
                    },
                ]
            }
        },
        methods: {
            addItem(item) {
                this.$store.dispatch('addItem', item);
            }
        }
    }
</script>

<style scoped>

</style>