// Example product data
var products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1.",
      price: "$99.99",
      image: "img/Jacques Marie Mage Five Year Anniversary Limited Edition Designs.jpg",
      whatsapp_link: "https://wa.me/1234567890"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2.",
      price: "$149.99",
      image: "img/Jacques Marie Mage Five Year Anniversary Limited Edition Designs.jpg",
      whatsapp_link: "https://wa.me/1234567891"
    },
    {
        id: 3,
        name: "Product 2",
        description: "Description of product 2.",
        price: "$149.99",
        image: "img/Jacques Marie Mage Five Year Anniversary Limited Edition Designs.jpg",
        whatsapp_link: "https://wa.me/1234567891"
      },
      {
        id: 4,
        name: "Product 2",
        description: "Description of product 2.",
        price: "$149.99",
        image: "img/Jacques Marie Mage Five Year Anniversary Limited Edition Designs.jpg",
        whatsapp_link: "https://wa.me/1234567891"
      },
      {
        id: 5,
        name: "Product 2",
        description: "Description of product 2.",
        price: "$149.99",
        image: "img/Jacques Marie Mage Five Year Anniversary Limited Edition Designs.jpg",
        whatsapp_link: "https://wa.me/1234567891"
      }
    // Add more products as needed
  ];
  
  function getProductById(productId) {
    return products.find(product => product.id === productId);
  }
  
  function getProductIdFromURL() {
    // Example: Extract product ID from URL like "/product.html?id=1"
    var urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
  }
  