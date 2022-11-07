import { BookOpenIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

import CreateBookModal from '@/components/CreateBookModal';

import { Book } from '../interfaces';

export interface MenuProps {
  createBookFn: (book: Book) => void;
}
const Menu = ({ createBookFn }: MenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <nav>
        <ul className='mb-3 flex items-center border border-red-500 bg-gray-200 bg-white p-3'>
          <li className=' ml-auto'>
            <a
              href='#'
              onClick={() => openModal()}
              className='flex items-center rounded-full px-3'
            >
              <BookOpenIcon className='block h-6 w-6' aria-hidden='true' />
              <span className='hidden text-sm md:block'>Add Book</span>
            </a>
          </li>
        </ul>
      </nav>
      <CreateBookModal
        isOpen={false}
        setIsOpen={setIsOpen}
        createBookFn={createBookFn}
      />
    </>
  );
};

export default Menu;
