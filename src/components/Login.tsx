/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  name: z.string().email(),
});

type FormData = {
  userName: string;
  password: string;
};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  function handleSave(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
  }

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className='grid h-screen w-full grid-cols-1 sm:grid-cols-2'>
      <div className='relative hidden sm:block'>
        <Image
          className='h-full w-full object-cover'
          src='/images/socalgas.jpg'
          alt=''
          fill={true}
          quality={100}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className='flex flex-col justify-center bg-gray-800'>
        <form
          onSubmit={onSubmit}
          className='mx-auto w-full max-w-[450px] rounded-lg bg-gray-900 p-8 px-8'
        >
          <h2 className='text-center text-2xl font-bold dark:text-white'>
            Log In to My Account
          </h2>
          <div className='flex flex-col py-2 text-gray-400'>
            <label>Email Address / Username:</label>
            <input
              title='Username'
              className='mt-2 rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='text'
              {...register('userName')}
            />
          </div>
          <div className='flex flex-col py-2 text-gray-400'>
            <label>Password</label>
            <input
              title='Password'
              className='mt-2 rounded-lg bg-gray-700 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
              type='password'
              {...register('password')}
            />
          </div>
          <div className='flex justify-between py-2 text-gray-400'>
            <p className='flex items-center'>
              <input title='Remember Me' className='mr-2' type='checkbox' />{' '}
              Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <button
            type='submit'
            className='my-5 w-full rounded-lg bg-teal-500 py-2 font-semibold text-white shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40'
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
