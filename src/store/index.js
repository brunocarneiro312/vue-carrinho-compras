import Vue from 'vue'
import Vuex from 'vuex'

import {cartModule} from './cart.module';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        cart: cartModule
    }
})
