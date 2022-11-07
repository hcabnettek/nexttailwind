'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Book } from '../interfaces';

function useBooks() {
  const [booksData, setBooksData] = useState<Book[]>([]);
  const [booksDataError] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:8080/book-store/catalog/books`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const books: Book[] = await res.json();
      setBooksData(books);
    };

    getData();
  }, []);

  function createBook(
    title: string,
    authors: string[],
    year: number,
    price: number
  ) {
    const newBook: Book = {
      id: uuidv4(),
      title,
      authors,
      year,
      price,
    };
    setBooksData((oldBooks) => {
      return [...oldBooks, newBook];
    });
  }

  return { booksData, booksDataError, createBook };
}

export default useBooks;
