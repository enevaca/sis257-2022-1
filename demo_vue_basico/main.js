const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      cart: 0,
      product: "Camiseta",
      image: './assets/images/t-shirt-green-bolivia.jpg',
      inStock: true,
      details: ['50% algodón', '30% lana', '20% poliéster'],
      variants: [
        { id: 5684, color: 'green', image: './assets/images/t-shirt-green-bolivia.jpg' },
        { id: 5685, color: 'white', image: './assets/images/t-shirt-white-bolivia.jpg' }
      ]
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    }
  }
});
