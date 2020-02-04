<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Produto</th>
                <th class="text-left">Preço</th>
                <th class="text-left">Estoque</th>
                <th class="text-left">Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in saleItems" :key="item.id">
                <td>#{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td :class="estoqueColorClass(item.estoque)">{{ item.estoque }}</td>
                <td>R${{ item.price }}</td>
                <td>
                    <v-btn text @click="addItem(item)" color="primary" x-small>
                        <v-icon>mdi-cart-plus</v-icon>
                        Adicionar
                    </v-btn>
                </td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
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
                        price: 150.25,
                        estoque: 200
                    },
                    {
                        id: 2,
                        name: 'Mouse',
                        price: 35.50,
                        estoque: 234
                    },
                    {
                        id: 3,
                        name: 'Monitor',
                        price: 675.23,
                        estoque: 75
                    },
                    {
                        id: 4,
                        name: 'Processador',
                        price: 842.56,
                        estoque: 23
                    },
                    {
                        id: 5,
                        name: 'Placa de Vídeo',
                        price: 2225.75,
                        estoque: 17
                    },
                    {
                        id: 6,
                        name: 'Memória RAM 16GB',
                        price: 320.20,
                        estoque: 52
                    },
                    {
                        id: 7,
                        name: 'Gabinete',
                        price: 150.00,
                        estoque: 79
                    },
                ]
            }
        },
        methods: {
            addItem(item) {
                this.$store.dispatch('addItem', item);
            },
            estoqueColorClass(estoque) {
                if (estoque <= 30)
                    return 'red--text';
                if (estoque <= 100)
                    return 'orange--text';
                return 'green--text'
            }
        }
    }
</script>

<style scoped>

</style>