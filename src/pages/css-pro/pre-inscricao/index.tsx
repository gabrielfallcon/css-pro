import { useRouter } from "next/router";
import { useEffect } from "react";


export default function PreInscricao(props: any) {
  const {push} = useRouter();
  useEffect(() => {
    push('/css-pro');
  }, []);
  return <></>
}

