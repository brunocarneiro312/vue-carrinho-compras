<template>
    <v-app>
        <v-content>
            <div class="px-5 py-5">
                <router-view />
            </div>
        </v-content>
    </v-app>
</template>

<script>
    export default {
        name: 'App',

        components: {

        },

        data: () => ({

        }),
    };
</script>
