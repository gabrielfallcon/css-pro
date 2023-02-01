import { useRouter } from "next/router";
import { useEffect } from "react";


const PreInscricao = () => {
  const {push} = useRouter();
  useEffect(() => {
    push('/css-pro');
  }, []);
  return <></>
}

export default PreInscricao;