var app = new Vue ({
  el: "#app",
  data: {
    product: 'Socks',
    image: "img/vmSocks-green.jpg",
    inventory: 100,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: 'green',
        variantImage: "./img/vmSocks-green.jpg"
      },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: "./img/vmSocks-blue.jpg"
      }
    ],
    cart: 0,
  },
    methods: {
      addToCart() {
        this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      }
    }
})