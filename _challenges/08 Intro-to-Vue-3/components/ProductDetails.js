app.component('product-details', {
    props: {
        details: {
            type: Array,
            requred: false
        }
    },
    template:
    /*html*/
    `<ul>
    <h2>Product details</h2>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premuim) {
                return 'Free'
            }
                return 2.99
        }
    }
})