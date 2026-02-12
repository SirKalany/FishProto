export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: string;
  imageUrl?: string;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: {
    productId: number;
    quantity: number;
    price: number;
  }[];
  notes?: string;
}

export interface Order {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalAmount: number;
  status: string;
  notes?: string;
  createdAt: string;
  orderItems: {
    id: number;
    quantity: number;
    price: number;
    product: Product;
  }[];
}