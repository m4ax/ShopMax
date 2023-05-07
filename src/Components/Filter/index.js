const products = [
    {
      id: 1,
      name: 'Apple iPhone 13',
      brand: 'Apple',
      category: 'Electronics',
      price: 999,
      description: 'The latest iPhone model with a powerful A15 Bionic chip and 5G support.',
      imageUrl: 'https://example.com/iphone-13.jpg'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22',
      brand: 'Samsung',
      category: 'Electronics',
      price: 899,
      description: 'The newest Samsung Galaxy phone with a stunning AMOLED display and 5G support.',
      imageUrl: 'https://example.com/galaxy-s22.jpg'
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4',
      brand: 'Sony',
      category: 'Electronics',
      price: 349,
      description: 'Industry-leading noise-canceling wireless headphones with incredible sound quality.',
      imageUrl: 'https://example.com/sony-headphones.jpg'
    },
    {
      id: 4,
      name: 'Instant Pot Duo',
      brand: 'Instant Pot',
      category: 'Kitchen Appliances',
      price: 99,
      description: 'The versatile 7-in-1 pressure cooker, slow cooker, and more for easy and delicious meals.',
      imageUrl: 'https://example.com/instant-pot.jpg'
    },
    {
      id: 5,
      name: 'Ninja Professional Blender',
      brand: 'Ninja',
      category: 'Kitchen Appliances',
      price: 89,
      description: 'A powerful blender with a sleek design for smoothies, soups, and more.',
      imageUrl: 'https://example.com/ninja-blender.jpg'
    },
    // ... more products
  ];


function logProducts() {

    return products.map((product) =>
    console.log(product.map))
}

logProducts()