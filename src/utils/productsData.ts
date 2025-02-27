
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const productsData: Product[] = [
    { id: 1, name: 'Luxury Coat', description: 'Premium wool', image: 'product', price: 1990 },
    { id: 2, name: 'Tailored Suit', description: 'Modern aristocrat fit', image: 'product', price: 2490 },
    { id: 3, name: 'Silk Blouse', description: 'Luxurious silk', image: 'product', price: 1290 },
    { id: 4, name: 'Classic Trench', description: 'Timeless design', image: 'product', price: 1790 },
    { id: 5, name: 'Cashmere Sweater', description: 'Soft and warm', image: 'product', price: 2200 },
    { id: 6, name: 'Tailored Trousers', description: 'Elegant fit', image: 'product', price: 1500 },
    { id: 7, name: 'Leather Gloves', description: 'Genuine leather', image: 'product', price: 8900},
    { id: 8, name: 'Cashmere Scarf', description: 'Soft and cozy', image: 'product', price: 9900},
    { id: 9, name: 'Vintage Watch', description: 'A timeless piece', image: 'product', price: 4990 },
    { id: 10, name: 'Formal Shirt', description: 'Perfect for any occasion', image: 'product', price: 1300 },
    { id: 11, name: 'Classic Brogues', description: 'Handcrafted leather', image: 'product', price: 2200 },
    { id: 12, name: 'Chic Handbag', description: 'Elegant and spacious', image: 'product', price: 3500 },
  ];