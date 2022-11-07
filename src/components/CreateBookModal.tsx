import { Dialog } from '@headlessui/react';
import { Dispatch, SetStateAction } from 'react';

import { Book } from '../interfaces';

const CreateBookModal = ({
  isOpen,
  setIsOpen,
  createBookFn,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  createBookFn: (book: Book) => void;
}) => {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>Add Book</Dialog.Title>
        <Dialog.Description>Use this form to add a book</Dialog.Description>

        <button type='button' onClick={() => setIsOpen(false)}>
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CreateBookModal;
