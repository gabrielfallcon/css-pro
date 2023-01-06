import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Home(props: any) {
  const {push} = useRouter();
  useEffect(() => {
    push('/css-pro/pre-inscricao');
  }, []);
  return <></>
}
