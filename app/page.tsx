import { fetchUserData } from '@/server/services';
import HomePage from '@/components/HomePage';

export default async function Home() {
  const users = await fetchUserData();

  return (
    <div className='my-20 lg:mx-20 mx-10'>
      <HomePage userData={users} />
    </div>
  );
}
