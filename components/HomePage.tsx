'use client';

import { FC } from 'react';
import { User } from '@/types';
import { fetchUserData } from '@/server/services';
import { useQuery } from '@tanstack/react-query';

type Props = {
  userData: User[];
};

const HomePage: FC<Props> = ({ userData }) => {
  const { data: users, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUserData,
    initialData: userData,
    enabled: false,
  });

  if (error) {
    return <>error: {error.message}</>;
  }

  if (users.length === 0) {
    return <>No data to show</>;
  }

  return (
    <div className='p-5 bg-slate-100'>
      <ul className='overflow-auto'>
        {users.map((user) => (
          <li key={user.username} className='mb-4'>
            <h3 className='text-lg font-bold mb-2 flex items-center'>
              {user.name} <span className='text-sm text-gray-500 ml-1'>(@{user.username})</span>
            </h3>
            <p className='text-md mb-1 whitespace-nowrap'>
              <span className='mr-1 font-semibold'>Groups:</span>
              {user.groups.length > 0 ? user.groups.join(', ') : 'None'}
            </p>
            <p className='text-md mb-1 whitespace-nowrap'>
              <span className='mr-1 font-semibold'>Projects:</span>
              {user.projects.length > 0 ? user.projects.join(', ') : 'None'}
            </p>
          </li>
        ))}
        <li className='text-md my-6'>
          <span className='font-semibold'>Total Users:</span> {users.length}
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
