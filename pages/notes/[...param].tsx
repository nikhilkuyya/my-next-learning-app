import type { NextPage } from 'next'
import { useRouter } from 'next/router';

const ParamPage : NextPage = () => {
 const router = useRouter();
 const {param} = router.query;
 console.log('param',param);
 return <div>{JSON.stringify(param)}</div>
}

export default ParamPage;