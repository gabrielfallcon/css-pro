import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";
import { Input } from "../../components/Forms/Input";
import { Counter } from "../../components/Counter";
import api from "../../services/api";
import clsx from 'clsx';

import styles from './styles.module.scss';

const PreInscricao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const dataInfo: any = {
      email: 'gabriel.nascimenton@gmail.com',
      name: 'Gabriel Nascimento',
      phone: '11991280913'
    }

    await api.post('subscribe', dataInfo);
  }
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <img src="/images/logo-css-pro.png" alt="CSS Pro" />
        <img src="/images/logo-dev-ajuda.png" alt="DevAjuda" width={189}/>
      </header>

      <section className={styles.section}> 
        <div className={styles.boxForm}>
          <h1 className={styles.titleForm}>
            <span>Pré inscrição </span> <br /> do curso CSS PRO
          </h1>

          <p className={styles.descriptionForm}>
            Inscreva-se para ter vantagens exclusiva e a oportunidade de garantir sua vaga com antecedência.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Nome" {...register("name")} isRequired />
            <Input label="E-mail" {...register("email")} isRequired />
            <Input label="Telefone" {...register("phone")} />

            <Button type="submit">
              Concluir Pré Inscrição
            </Button>
          </form>
        </div>

        <img 
          src="/images/art-animate.png" 
          alt="CSS Pro" 
          className={styles.imageArt}
        />
      </section>
      
      <Counter />

      <div 
        className={clsx(
          styles.blur,
          styles.blue,
          styles.topLeft
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.blue,
          styles.topRight
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.green,
          styles.bottomLeft
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.green,
          styles.bottomRight
        )}
      />
    </main>
  )
}

export default PreInscricao;