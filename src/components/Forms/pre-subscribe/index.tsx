import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import api from '../../../services/api';
import { Button } from '../../Button';
import Input from '../../Input';
import styles from './styles.module.scss';
import {useRouter} from 'next/router';

interface InputForm {
  name: string;
  email: string;
  phone?: string;
}

const schema = yup.object({
  name: yup.string().required('É necessário o nome'),
  email: yup.string().required('É necessario o email'),
  phone: yup.string()
})


const PreSubscribeForm = () => {
  const {push} = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<InputForm>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: any) => {
    try {
      await api.post('subscribe', data);
      push('/success');
    } catch (err) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input label="Nome" {...register("name")} isRequired placeholder='Digite aqui seu primeiro nome'/>
      <p>{errors.name?.message}</p>
      <Input label="E-mail" {...register("email")} isRequired placeholder='Digite aqui seu melhor e-mail'/>
      <p>{errors.email?.message}</p>

      <Input label="Telefone" {...register("phone")} placeholder='Digite aqui seu telefone'/>
      <p>{errors.phone?.message}</p>

      <Button type="submit">
        Concluir Pré Inscrição
      </Button>
    </form>
  )
}

export default PreSubscribeForm;