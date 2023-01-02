import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../../services/api';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';
import { useState } from 'react';
import Loading from '../../Loading';
import { AxiosError } from 'axios';

interface InputForm {
  name: string;
  email: string;
  phone?: string;
}

interface AxiosErrorMessage {
  message?: string;
}

const schema = yup.object({
  name: yup.string().required('É necessário o nome'),
  email: yup.string().required('É necessario o email'),
  phone: yup.string()
})


const PreSubscribeForm = () => {
  const [load, setLoad] = useState(false);
  const [existsUser, setExistsUser] = useState(false);
  const {push} = useRouter();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<InputForm>({
    resolver: yupResolver(schema)
  });

  const clearInputs = () => {
    setValue('name', '');
    setValue('email', '');
    setValue('phone', '');
  }

  const onSubmit = async (data: any) => {
    setLoad(true);

    try {
      const response = await api.post('subscribe', data);
      clearInputs()
      console.log(response, 'response');
      push('/success');
      
    } catch (err) {
      clearInputs()
      setExistsUser(true);
    }
    setLoad(false);
  }

  return (
    <>
      {!existsUser ? (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input 
            label="Nome" 
            {...register("name")} 
            isRequired 
            placeholder='Digite aqui seu primeiro nome' 
            error={errors.name?.message}
          />
          <Input 
            label="E-mail" 
            {...register("email")} 
            isRequired 
            placeholder='Digite aqui seu melhor e-mail' 
            error={errors.email?.message}
          />

          <Input label="Telefone" {...register("phone")} placeholder='Digite aqui seu telefone' />
          <p>{errors.phone?.message}</p>


          <Button type="submit">
            Concluir Pré Inscrição
          </Button>
        </form>
      ) : (
        <>
          <h2>
            Esse e-mail já esta sendo utilizado em outro cadastro
          </h2>
            <Button type="submit" onClick={() => {
              clearInputs()
              setExistsUser(false)
            }}>
            Tentar com outro E-mail
          </Button>
        </>
      )}
      {load && <Loading/>}
    </>
  )
}

export default PreSubscribeForm;