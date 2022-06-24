const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      product: "Camiseta",
      image: './assets/images/t-shirt-green-bolivia.jpg',
      inStock: true,
      details: ['50% algodón', '30% lana', '20% poliéster'],
      variants: [
        { id: 5684, color: 'green' },
        { id: 5685, color: 'white' }
      ]
    };
  }
});
