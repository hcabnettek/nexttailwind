import BookListItem from '@/components/BookListItem';

import { Book } from '../interfaces';

const BookList = ({ books }: { books: Book[] }) => {
  return (
    <div className='-mx-4 flex flex-wrap'>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
