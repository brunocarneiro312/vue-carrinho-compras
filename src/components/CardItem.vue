<template>
    <div>
        <v-hover>
            <template v-slot:default="{ hover }">
                <v-card tile>
                    <v-img :src="urlImg"
                           style="background-size: cover">
                        <v-fade-transition>
                            <v-overlay v-if="hover"
                                       absolute
                                       opacity=".7"
                                       color="#036358">
                                <v-btn tile>Detalhes</v-btn>
                            </v-overlay>
                        </v-fade-transition>
                    </v-img>
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
            </template>
        </v-hover>
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