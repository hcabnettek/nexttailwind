export interface Book {
  id: string;
  title: string;
  authors: string[];
  year: number;
  price: number;
}

export interface InventoryItem {
  bookId: string;
  amount: number;
}

export interface BookOrder {
  items: BookOrderItem[];
}

export interface BookOrderItem {
  bookId: string;
  quantity: number;
}
