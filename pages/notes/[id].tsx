import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const NotePage : NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('id',id);
  return <div>Note: {id}</div>

}

export default NotePage;