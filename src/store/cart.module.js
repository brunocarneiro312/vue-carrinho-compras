/**
 * --------------------------------------
 * Define o estado do carrinho de compras
 * --------------------------------------
 * @author bruno.carneiro
 */
export const cartModule = {
    state: {
        items: [],
    },
    mutations: {

        // Altera o conteúdo do carrinho
        setCart(state, cart) {
            if (cart) {
                cart.forEach(item => state.items.push(item));
            }
        },

        // Obtém carrinho do localStorage
        getCart(state) {
            state.items = JSON.parse(window.localStorage.getItem('cart'))
        },

        // Adiciona item ao carrinho
        addItem(state, item) {
            state.items.push(item);
            window.localStorage.setItem('cart', JSON.stringify(state.items));
        }
    },
    actions: {

        setCart(context, cart) {
            context.commit('setCart', cart);
        },

        addItem(context, item) {

            // Primeiro temos que verificar se ainda existem itens no estoque
            if (item.estoque <= 0) {
                return; // lançar uma exceção
            }

            // Em seguida vamos comitar a alteração de estado
            context.commit('addItem', item);
        }
    },
    getters: {

        // Retorna a quantidade de elementos no carrinho
        count: state => {
            return state.items.length;
        },

        // Retorna a soma do preço dos items no carrinho
        total: state => {
            return state.items.length > 0
                ? state.items.reduce((acumulador, elemento) => acumulador += elemento['price'], 0)
                : 0;
        }
    }
}