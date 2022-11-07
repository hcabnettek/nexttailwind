import useBooks from '@/hooks/useBooks';

import BookList from '@/components/BookList';
import Layout from '@/components/layout/Layout';
import Menu from '@/components/Menu';

export default function Books() {
  const { booksData, booksDataError, createBook } = useBooks();

  function createBookFn() {
    createBook(`New Book`, [`Chris Kettenbach`], 2022, 99.99);
  }
  return (
    <Layout>
      <Menu createBookFn={createBookFn} />
      <BookList books={booksData} />
    </Layout>
  );
}
