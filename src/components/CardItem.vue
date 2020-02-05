<template>
    <div>
        <v-card tile>
            <v-img :src="urlImg"
                   style="background-size: cover"/>
            <v-row>
                <v-col cols="12" lg="8">
                    <v-card-title>
                        {{ title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ summary }}
                    </v-card-subtitle>
                </v-col>
                <v-col cols="12" lg="4" class="pt-md-0">
                    <v-card-text>
                        <div class="text-center">
                            <b>{{ estoque }}</b>
                        </div>
                        <div class="text-center">
                            <b>Disponíveis</b>
                        </div>
                    </v-card-text>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card-actions>
                        <v-btn class="mx-2"
                               text
                               small
                               tile
                               color="blue-grey lighten-1">
                            Detalhes <v-icon small class="ml-2">mdi-eye</v-icon>
                        </v-btn>
                        <v-btn class="mx-2"
                               small
                               tile
                               outlined
                               color="primary">
                            Adicionar <v-icon small class="ml-2">mdi-cart-plus</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "CardItem",
        props: {
            urlImg: String,
            title: String,
            summary: String,
            estoque: Number,
            price: Number
        }
    }
</script>

<style scoped>

</style>