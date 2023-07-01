const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        incrementCart(id) {
            this.cart.push(id)
        },
        decrementCart(id) {
            let index =  this.cart.indexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1);
              }
        }
    }
  }) 
  