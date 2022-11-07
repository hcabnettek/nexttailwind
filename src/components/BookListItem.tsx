import {
  BookOpenIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

import { Book } from '../interfaces';

const BookListItem = ({ book }: { book: Book }) => {
  return (
    <div className='w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/4'>
      <a
        href=''
        className='c-card block overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl'
      >
        <div className='grid place-items-center'>
          <BookOpenIcon className='h-[8rem] w-[8rem] text-gray-400' />
        </div>
        <div className='p-4'>
          <h3 className='mt-2 mb-2  font-bold'>{book.title}</h3>
          <p className='text-sm'>
            {book.authors.map((author) => (
              <span className='block' key={`${author}`}>
                {author}
              </span>
            ))}
          </p>
        </div>
        <div className='border-t border-b p-4 text-xs text-gray-700'>
          <span className='mb-1 flex items-center'>
            <ClockIcon className='h-3 w-3 text-gray-400' />
            &nbsp;
            {book.year}
          </span>
          <span className='mb-1 flex items-center'>
            <CurrencyDollarIcon className='h-3 w-3 text-gray-400' />
            &nbsp;
            {book.price}
          </span>
        </div>
      </a>
    </div>
  );
};

export default BookListItem;
