import { Main, Header, Blur, Section, BoxForm } from "./styles";
import { useForm } from 'react-hook-form';
import { Button } from "../../components/Button";
import { Input } from "../../components/Forms/Input";
import { Counter } from "../../components/Counter";

const PreInscricao = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data)
  return (
    <Main>
      <Header>
        <img src="/images/logo-css-pro.png" alt="CSS Pro" />
        <img src="/images/logo-dev-ajuda.png" alt="DevAjuda" width={189}/>
      </Header>

      <Section> 
        <BoxForm>
          <h1 className="titleForm">
            <span>Pré inscrição </span> <br /> do curso CSS PRO
          </h1>

          <p className="descriptionForm">
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
        </BoxForm>

        <img 
          src="/images/art-animate.png" 
          alt="CSS Pro" 
          className="image-art"
        />
      </Section>
      
      <Counter />

      <Blur color="blue" dimension={227} positionBlur="top-left"/>
      <Blur color="blue" dimension={273} positionBlur="top-right"/>
      <Blur color="green" dimension={229} positionBlur="bottom-left"/>
      <Blur color="green" dimension={227} positionBlur="bottom-right"/>
    </Main>
  )
}

export default PreInscricao;