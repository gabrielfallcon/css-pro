import clsx from "clsx";
import { Button } from "../../components/Button";
import { FiCheck } from 'react-icons/fi';

import styles from "./styles.module.scss";

const CssPro = () => {
  return (
    <>
      <div className={styles.targ}>
        <p>
          <span>URGENTE:</span>  O único triplicador de salário de dev Frontend que poucos grupos seletos de pessoas dominam corretamente, e você pode fazer parte desse grupo. Sem precisar… Pós graduação ou qualquer curso de longo tempo. Eu chamo de: <strong>CSS… O único apto para a vaga.</strong>
        </p>
      </div>

      <section className={styles.sectionOnboarding}>
        <div className={styles.animationOnboarding}>
          <img src="/images/Capa-animation.svg" alt="" />
        </div>
        <div className={styles.boxOnboarding}>
          <h2 className={styles.subtitle}>Inscrição</h2>
          <h1 className={styles.title}>
            <span>Curso CSS PRO</span><br/>
            O único apto para a vaga
          </h1>
          <Button>QUERO TRIPLICAR MEU SALÁRIO</Button>

          <span className={styles.spanObs}>
            Obs: O profissional precisará de conhecimento básico de lógica de programação para ter 10x a maior chance de conseguir qualquer vaga se…Dominar a simplicidade do CSS
          </span>
        </div>
      </section>

      <section className={styles.sectionMessageCase}>
        <div className={styles.boxCase}>
          <span>
            PEÇO QUE VOCÊ PRESTE MUITO ATENÇÃO NAS PRÓXIMAS LINHAS ABAIXO. PORQUE PODE MUDAR O RUMO DA SUAS PRÓXIMAS ENTREVISTAS OU SEU FUTURO NA EMPRESA QUE VOCÊ ESTÁ.
          </span>

          <p>
            Caro leitor, Primeiro quero contar uma pequena história, para você ter a maior compreensão de QUEM TEM A DOMINÂNCIA DO CSS ESTARÁ EM DESTAQUE DOS DEMAIS.
          </p>

          <p>
            Certo jovem de 17 anos de idade que não sabia o que fazer da vida, entrou na carreira de programador SÓ POR CAUSA DO DINHEIRO, e ser dev Frontend te proporciona essa realidade e tudo certo escolher uma profissão por causa da remuneração.
          </p>

          <p>
            Foram os 3 anos mais difíceis da vida desse jovem… Até que esse jovem ganhou uma bolsa de um curso de frontend… Foi onde tudo mudou… Desde então ele dominou o TEMIDO CSS.
          </p>

          <p>
            Antes de ter compreendido a real importância do CSS e seu peso nas horas das entrevistas, ele foi recusado em diversas que fez… De 50 entrevistas que ele fez, 49 ele foi recusado.
          </p>

          <p>
            Até que… Um certo dia em uma entrevista já sabendo usar o CSS a seu favor com uma linguagem de javascript simples, e a linha mestre dele ser reprovado ou recrutado foi trabalhar bem e de forma simples o CSS…
          </p>

          <p>
            Foi nesse momento que ele pode contar para seus pais que triplicou seu salário.
          </p>

          <p>
            E esse jovem sou eu: Gabriel da Silva Nascimento
          </p>

          <p>
            O criador CSS PRO…
          </p>

          <p>
            Eu vivi essa experiência… Sabe o porque eu disse tudo isso a você?
          </p>

          <p>
            Porque, eu queria que VOCÊ soubesse que tudo isso só aconteceu por saber dominar o CSS de forma simples e prática e que me fez criar oportunidades que me fez destacar dos outros concorrentes…
          </p>

          <Button>QUERO TRIPLICAR MEU SALÁRIO</Button>
        </div>

        <div className={styles.exposedCSS}>
          <h2>
            Dominar o CSS ao seu favor é mais simples do que você pensa… Explico!
          </h2>

          <div className={styles.exposedCSSDescriptionBox}>
            <span className={styles.exposedCSSDescription}>
              Como você e eu já sabemos que, ser programador é saber codificar… Isso é a base de todos dev Frontend.
            </span>

            <span className={styles.exposedCSSDescription}>
              PORÉM, DOIS FATORES FARÃO VOCÊ MUDAR DE PERCEPÇÃO. E JÁ TE DARÃO UMA DIREÇÃO AONDE IR…
            </span>
          </div>

          <div className={styles.boxTag}>
            <div className={styles.tag}>
              <strong>Saber codificar. </strong>Sem novidades por aqui…
            </div>

            <div className={styles.tag}>
              <strong>Saber usar CSS </strong>para se vender nas entrevistas e vender
            </div>
          </div>

          <span className={styles.exposedCSSDescription}>
            PS: SE VOCÊ É DEV FRONTEND O PRIMEIRO FATOR NÃO SERÁ UM PROBLEMA PRA VOCÊ.
          </span>
        </div>
      </section>

      <section className={clsx(styles.sectionInsight, styles.sectionDefault)}>
        <div className={styles.contentDefault}>
          <div className={styles.boxTextInsight}>
            <h2>
              Olhe para esta página <br />
              que você está agora… <br />
              <span>O Que você vê???</span> 
            </h2>
          </div>

          <div className={styles.boxDescriptionInsight}>
            <p>
              Certamente você não está vendo códigos de programação…
            </p>
            <p>
              E sim uma beleza que atrai olhares das pessoas… Esse é o clímax de um dev Frontend e que toda empresa procura para repassar pro cliente final.
            </p>
            <p>
              É sobre isso! <span>Experiência…</span>  E isso se faz com CSS de forma simples, prática e rápida.
            </p>
            <p>
              Porém…
            </p>
            <p>
              Muitos dev Frontend não dão importância para o CSS e têm a necessidade de voltar para dominar se querem algum destaque… E para os iniciantes parece algo de 7 cabeças de se aprender, mas o fato é que o CSS é mais simples do que você possa imaginar a com didática correta.
            </p>

            <Button>QUERO TRIPLICAR MEU SALÁRIO</Button>
          </div>
        </div>
      </section>

      <section className={styles.sectionDepositions}>
        <div className={styles.contentDefault}>
          <img src="/images/cafe.svg" alt="cafe" />

          <div className={styles.boxTextDeposition}>
            <h2>Tenho que ser sincero com você!</h2>

            <p>
              Sabendo CSS você vai conseguir 10x mais rápido passar em uma entrevista ou ser reconhecido por seus trabalhos…
            </p>
            <p>
              Como você pode ver nesses depoimentos abaixo… O CSS está sendo o precursor no destacamento e esclarecedor em todos os sentidos.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionPrice}>
        <div className={clsx(styles.boxTextPrice, styles.boxMobile)}>
          <p>
            Tudo isso com o menor preço de qualquer site de emprego que você possa contratar.
          </p>
          <p>
            Apenas um valor único para você usar o resto da sua vida. Sem preocupação se você vai ou não conseguir um emprego. Com CSS PRO você garante sua vaga… Ou destaque.
          </p>

          <h3>
            Chegou sua hora de se destacar e conseguir sua vaga no mercado de trabalho.
          </h3>

          <ul className={styles.listCredit}>
            <li>
              <FiCheck color="#05FF00"/> <span>Com o auxílio do CSS PRO</span>
            </li>
            <li>
              <FiCheck color="#05FF00"/> <span>ZERO insegurança</span>
            </li>
            <li>
              <FiCheck color="#05FF00"/> <span>ZERO medo</span>
            </li>
          </ul>
        </div>
        <div className={styles.contentColor}>
          <div className={styles.contentDefault}>
            <div className={clsx(styles.boxTextPrice, styles.boxDesktop)}>
              <p>
                Tudo isso com o menor preço de qualquer site de emprego que você possa contratar.
              </p>
              <p>
                Apenas um valor único para você usar o resto da sua vida. Sem preocupação se você vai ou não conseguir um emprego. Com CSS PRO você garante sua vaga… Ou destaque.
              </p>

              <h3>
                Chegou sua hora de se destacar e conseguir sua vaga no mercado de trabalho.
              </h3>

              <ul className={styles.listCredit}>
                <li>
                  <FiCheck color="#05FF00"/> <span>Com o auxílio do CSS PRO</span>
                </li>
                <li>
                  <FiCheck color="#05FF00"/> <span>ZERO insegurança</span>
                </li>
                <li>
                  <FiCheck color="#05FF00"/> <span>ZERO medo</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentPrice}>
              <img src="/images/logo-css-pro.png" alt="Logo" />

              <div className={styles.boxPrice}>
                <p>De <span className={styles.risc}> R$ 450,00</span>  por apenas</p>
                <p>6x <span className={styles.price}>R$ 32,99</span></p>
              </div>

              <ul className={styles.listCredit}>
                <li>
                  <FiCheck color="#05FF00"/> <span>Compra Segura</span>
                </li>
                <li>
                  <FiCheck color="#05FF00"/> <span>Satisfação Garantida</span>
                </li>
                <li>
                  <FiCheck color="#05FF00"/> <span>️Privacidade Protegida</span>
                </li>
              </ul>

              <Button>QUERO TER ACESSO AGORA</Button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSatisfation}>
        <div className={styles.contentDefault}>
          <div className={styles.boxImageSatisfation}>
            <img src="/images/garantia.svg" alt="" />
            <h3>Satisfação Garantida ou seu dinheiro de volta!</h3>
          </div>

          <div className={styles.boxTextSatisfation}>
            <p>
              Tudo isso para você! Você tem a sua segurança… De 7 dias para visitar nossa comunidade no discord totalmente gratuito.
            </p>
            <p>
              Se por acaso ver que não é para você a comunidade, fique a vontade de sair. Não iremos fazer qualquer pergunta ou mandar emails na caixa de spam para você.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CssPro;
