export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  location: string;
}

export interface Product {
  id: string;  
  name: string;
  quantity: string;
  price: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  count: number;
}

export interface WishlistItem extends Product {}