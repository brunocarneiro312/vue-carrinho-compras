<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="item in saleItems" :key="item.id">
                <CardItem :title="item.name"
                          :summary="item.summary"
                          :url-img="item.urlImg"
                          :estoque="item.estoque"
                          :price="item.price" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import mock from '../assets/mock/mock-backend';

    import CardItem from "./CardItem";

    export default {
        name: "Canvas",
        components: {
            CardItem
        },
        data: function() {
            return {
                saleItems: []
            }
        },
        created() {
            this.saleItems = mock.saleItems;
        }
    }
</script>

<style scoped>

</style>