import clsx from "clsx";
import { Button } from "../../components/Button";
import { FiCheck } from "react-icons/fi";

import styles from "./styles.module.scss";
import CardModule from "../../components/Dropdown/cardModules";
import DropdownList from "../../components/Dropdown/dropList";
import Footer from "../../components/Footer";
import route from "next/router";
import { Blur } from "../../components/Blur";
import { Card } from "../../components/Card";

import Slider, { Settings } from "react-slick";
import { Arrow } from "../../components/Arrow";
import { Header } from "../../components/Header";

const CssPro = () => {
  const redirectPrice = () => {
    route.push('/css-pro#pricing');
  }

  const settings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    nextArrow: <Arrow typeArrow="next" />,
    prevArrow: <Arrow typeArrow="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };

  return (
    <>
      <Header isHomePage/>
      <div className={styles.targ}>
        <p>
          <span>URGENTE: </span> Diversos relatos de pessoas que estão migrando de suas áreas atuais para dev frontend e iniciantes estão de olho nos salários triplicados no começo de suas carreiras.
        </p>
      </div>

      <section className={styles.sectionOnboarding} id="onboading">
        <div className={styles.boxOnboarding}>
          <h2 className={styles.subtitle}>Inscrição</h2>
          <h1 className={styles.title}>
            <span>Curso Forma Front</span>
            <br />O único apto para a vaga
          </h1>
          <Button onClick={redirectPrice}>QUERO TRIPLICAR MEU SALÁRIO</Button>

          <span className={styles.spanObs}>
            Obs: voce terá as ferramentas certa para ter um salário de 3k a 6k/mês
          </span>
        </div>

        <Blur 
          width="227px"
          height="217px"
          top="-50px"
          left="-170px"
          color="blue"
          toRenderOnly="desktop"
        />
        <Blur 
          width="273px"
          height="261px"
          top="-50px"
          right="-217px"
          color="blue"
          toRenderOnly="desktop"
        />
        <Blur 
          width="229px"
          height="219px"
          bottom="0"
          right="-195px"
          color="green"
          toRenderOnly="desktop"
        />
        <Blur 
          width="429px"
          height="410px"
          bottom="0"
          left="-281px"
          color="green"
          toRenderOnly="desktop"
        />
        <Blur 
          width="231px"
          height="231px"
          top="40%"
          left="-184px"
          color="blue"
          toRenderOnly="mobile"
        />
      </section>

      <section className={styles.sectionSalary}>
        <div className={clsx(styles.contentDefault, styles.contentSalary)}>
          <img src="/images/salary.png" alt="Salarys" />

          <div className={styles.boxText}>
            <span>Urgente</span>
            <h2 className={styles.subtitleDepositions}>
              Diversos relatos de pessoas que estão migrando de suas áreas atuais para dev frontend e iniciantes estão de olho nos salários triplicados no começo de suas carreiras.
            </h2>

            <p className={styles.descriptionDepositions}>
              Esses relatos estão acontecendo por causa da facilidade de entrada na área de Dev Frontend… Sem precisar de faculdade!
            </p>

            <strong>
              Você quer ganhar de 3.000 a 5.000 Reais COMO DEV FRONTEND?
            </strong>

            <p>
              Tudo isso sem precisar pagar mensalmente um valor fixo igual uma faculdade e com sua duração de 2 á 4 anos…
            </p>

            <p>
              Com apenas um curso digital com um único valor muito abaixo, e com duração de 3 meses você já estará apto, para mudar de carreira ou para você iniciante triplicar seu salário. 
            </p>

            <p>
              Esse Jovem abaixo é apenas um dos relatos que você pode ver…  
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionMessageCase}>
        <img
          src="/images/faixa.svg"
          alt=""
          className={clsx(styles.faxMessageCase, styles.faixaTop)}
          loading="lazy"
        />
        <img
          src="/images/faixa.svg"
          alt=""
          className={clsx(styles.faxMessageCase, styles.degTop)}
          loading="lazy"
        />
        <img
          src="/images/faixa.svg"
          alt=""
          className={clsx(styles.faxMessageCase, styles.degBottom)}
          loading="lazy"
        />
        <div className={styles.boxCase}>
          <span>
            PEÇO QUE VOCÊ PRESTE MUITO ATENÇÃO NAS PRÓXIMAS LINHAS ABAIXO.
            PORQUE PODE MUDAR O RUMO DA SUAS PRÓXIMAS ENTREVISTAS OU SEU FUTURO
            NA EMPRESA QUE VOCÊ ESTÁ.
          </span>

          <p>
            Caro leitor, Primeiro quero contar uma pequena história, para você
            ter a maior compreensão de QUEM TEM A DOMINÂNCIA DO CSS ESTARÁ EM
            DESTAQUE DOS DEMAIS.
          </p>

          <p>
            Certo jovem de 17 anos de idade que não sabia o que fazer da vida,
            entrou na carreira de programador SÓ POR CAUSA DO DINHEIRO, e ser
            dev Frontend te proporciona essa realidade e tudo certo escolher uma
            profissão por causa da remuneração.
          </p>

          <p>
            Foram os 3 anos mais difíceis da vida desse jovem… Até que esse
            jovem ganhou uma bolsa de um curso de frontend… Foi onde tudo mudou…
            Desde então ele se aperfeiçoou em HTML CSS e JS.
          </p>

          <p>
            Antes de ter compreendido a real importância do HTML, CSS e JS e seu peso nas
            horas das entrevistas, ele foi recusado em diversas que fez… De 50
            entrevistas que ele fez, 49 ele foi recusado.
          </p>

          <p>
            Até que… Um certo dia em uma entrevista já sabendo utilizar as stacks a seu
            favor com uma linguagem de javascript simples, e a linha mestre dele
            ser reprovado ou recrutado foi trabalhar bem e de forma simples o
            HTML, CSS e JS com alguns extras!…
          </p>

          <p>
            Foi nesse momento que ele pode contar para seus pais que triplicou
            seu salário.
          </p>

          <p>E esse jovem sou eu: Gabriel da Silva Nascimento</p>

          <p>O criador Forma Front…</p>

          <p>
            Eu vivi essa experiência… Sabe o porque eu disse tudo isso a você?
          </p>

          <p>
            Porque, eu queria que VOCÊ soubesse que tudo isso só aconteceu por
            saber utilizar HTML, CSS e JS de forma simples e prática e que me fez criar
            oportunidades que me fez destacar dos outros concorrentes…
          </p>

          <Button onClick={redirectPrice}>QUERO TRIPLICAR MEU SALÁRIO</Button>
        </div>

        <Blur 
          width="560px"
          height="536px"
          bottom="170px"
          left="-518px"
          color="green"
          toRenderOnly="desktop"
        />
        <Blur 
          width="387px"
          height="387px"
          bottom="450px"
          right="-319px"
          color="green"
          toRenderOnly="mobile"
        />
      </section>

      <section className={styles.sectionStacks}>
        <div className={clsx(styles.contentDefault, styles.contentStacks)}>
          <img src="/images/stack.png" alt="Stacks" />

          <div className={styles.boxText}>
            <p>
              Você, iniciante com em HTML, CSS, JS e Git, ou você que não sabe nada dessas linguagens...
            </p>

            <h2>Você conseguirá triplicar seu salário</h2>

            <p>
              Dev Frontend é a única profissão que te dá a oportunidade de mudar de área sem comprometer sua renda todos os meses igual uma faculdade.
            </p>

            <p>
              Essas ferramentas, HTML, CSS, JS e Git, são a chave para você trocar de profissão ou triplicar o seu salário.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionDepositions}>
        <div className={clsx(styles.contentDefault, styles.contentDeposition)}>
          <div className={styles.boxTextDeposition}>
            <h2 className={styles.subtitleDepositions}>Depoimentos</h2>

            <p className={styles.descriptionDepositions}>
              Esses já fazem parte do Forma Front o único apto para vaga…
            </p>
          </div>
          <Slider {...settings}>
            <Card 
              img="/images/keverton.jpg"
              name="Keverton Reis"
              description=" Sou aluno da turma inicial do projeto de capacitação do Gabriel, pude aprender de forma simples e objetiva sobre o CSS e como funciona, suas particularidades e como utiliza-lo da melhor maneira. Isso tudo em poucas aulas, imagina com o Forma Front!"
            />
            <Card 
              img="/images/guilherme.jpeg"
              name="Guilherme Moreira"
              description="O curso é incrível, didática boa e fácil de entender os conceitos básico de front-end, antes eu patinava e ficava 'chutando', agora consigo saber com exatidão o que usar em cada situação. Recomendo muito."
            />
            <Card 
              img="/images/daniel.png"
              name="Daniel Silva"
              description="Sou aluno da primeira turma do curso e fiquei surpreso com o quanto aprendi. O Gabriel é incrível e explica tudo de maneira clara. As atividades práticas ajudaram a fixar o conhecimento. Recomendo esse curso a todos."
            />
            <Card 
              img="/images/arthur.jpeg"
              name="Arthur Gabriel"
              description="No começo, não dava a devida atenção para o css e tive dificuldades, mas na época, o Gabriel estava na mesma squad que eu e pode me orientar em como o estudo e compreendimento do css é essencial no dia a dia de um dev. Tudo comeca pelo css, sendo a base para o desenvolvimento."
            />
            <Card 
              img="/images/kevin.png"
              name="Kevin Silva"
              description="Eu sem nenhuma experiência ou curso na área de programação, consegui compreender sobre CSS, e colocar em prática nas atividades exigidas isso em poucas aulas."
            />
          </Slider>
        </div>

        <Blur 
          width="474px"
          height="453px"
          top="450px"
          left="-220px"
          color="blue"
          toRenderOnly="desktop"
        />
        <Blur 
          width="560px"
          height="536px"
          bottom="170px"
          right="-317px"
          color="green"
          toRenderOnly="desktop"
        />
        <Blur 
          width="250px"
          height="250px"
          top="0"
          left="-275px"
          color="green"
          toRenderOnly="mobile"
        />
        <Blur 
          width="250px"
          height="250px"
          top="423px"
          right="-319px"
          color="blue"
          toRenderOnly="mobile"
        />
      </section>

      <section className={styles.sectionModules}>
        <div className={styles.contentDefault}>
          <p className={styles.description}>
            Eles se destacam por causa que encontraram dentro da metodologia <span>Forma Front:</span>
          </p>

          <div className={styles.listCards}>
            <CardModule 
              srcImg="/images/html.png"
              title="HTML do básico ao avançado"
              description="Neste módulo, você irá aprender como criar tabelas, formulários e estilos em HTML, além disso, poderá criar páginas da web visualmente atraentes e interativas que vão impressionar seus visitantes!"
            />
            <CardModule 
              srcImg="/images/css.png"
              title="CSS do básico ao avançado"
              description="Aqui você aprenderá a estilizar seu site com propriedades, Flexbox, Grid, Pseudo class, animações e responsividade.  
              Com isso, você será capaz de criar designs impressionantes e responsivos para o seu site."
            />
            <CardModule 
              srcImg="/images/gitgithub.png"
              title="Git e Github"
              isImgSize
              description="Neste módulo, você aprenderá a trabalhar com o sistema de controle de versão mais popular do mundo. Poderá gerenciar seu código de forma eficiente, colaborar com outros desenvolvedores e controlar diferentes versões do seu projeto."
            />
            <CardModule 
              srcImg="/images/js.png"
              title="Javascript Básico ao intermediário"
              description="Neste curso, você aprenderá as estruturas fundamentais da linguagem, como condicionais, loops, funções, escopo, arrays e objetos, aprenderá a trabalhar com eventos e manipulação do DOM, AJAX e interação com APIs."
            />
            <CardModule 
              srcImg="/images/criandoProjeto.png"
              title="Criação de Projetos"
              description="Precisamos colocar em prática o que aprendemos no passo a passo, e para isso temos um modulo para criarmos projetos e emfim fazer a mágica acontecer, serão vários projetos para que você tenha uma visão de como é o dia a dia de um desenvolvedor Front-end."
            />
            <CardModule 
              srcImg="/images/desafios.png"
              title="Desafios técnicos"
              description="Para que você extraia o melhor do curso, você precisa de desafios para aprimorar todo conheicmento aprendido e de fato ter uma experiencia de desafio, isso te tornará mais eficaz em seus projetos."
            />
            <CardModule 
              srcImg="/images/guiaSucesso.png"
              title="Guia para o sucesso"
              description="A pior coisa é você ter munição e não saber como atirar! E pra isso esse módulo te ajudará em vender seus projetos, dicas de como conseguir a primeira oportunidade, como criar networking para aumentar seu valor de mercado e muito mais."
            />
            <CardModule 
              srcImg="/images/comunidade.png"
              title="Comunidade no discord"
              description="Em nossa comunidade você poderá criar network com nossos alunos, terá acesso a oportunidades de vagas para que você possa aplicar para entrevistas... Não fique de fora!"
            />

          </div>

          <Button  onClick={redirectPrice}>QUERO TER ACESSO AGORA</Button>
        </div>
      </section>

      <section className={styles.sectionPrice} id="pricing">
        <div className={clsx(styles.boxTextPrice, styles.boxMobile)}>
          <p>
            Tudo isso com o menor preço de qualquer site de emprego que você
            possa contratar.
          </p>
          <p>
            Apenas um valor único para você usar o resto da sua vida. Sem
            preocupação se você vai ou não conseguir um emprego. Com Forma Front
            você garante sua vaga… Ou destaque.
          </p>

          <h3>
            Chegou sua hora de se destacar e conseguir sua vaga no mercado de
            trabalho.
          </h3>

          <ul className={styles.listCredit}>
            <li>
              <FiCheck color="#05FF00" /> <span>Com o auxílio do Forma Front</span>
            </li>
            <li>
              <FiCheck color="#05FF00" /> <span>ZERO insegurança</span>
            </li>
            <li>
              <FiCheck color="#05FF00" /> <span>ZERO medo</span>
            </li>
          </ul>
        </div>
        <div className={styles.contentColor}>
          <div className={styles.contentDefault}>
            <div className={clsx(styles.boxTextPrice, styles.boxDesktop)}>
              <p>
                Tudo isso com o menor preço de qualquer site de emprego que você
                possa contratar.
              </p>
              <p>
                Apenas um valor único para você usar o resto da sua vida. Sem
                preocupação se você vai ou não conseguir um emprego. Com Forma Front
                você garante sua vaga… Ou destaque.
              </p>

              <h3>
                Chegou sua hora de se destacar e conseguir sua vaga no mercado
                de trabalho.
              </h3>

              <ul className={styles.listCredit}>
                <li>
                  <FiCheck color="#05FF00" />{" "}
                  <span>Com o auxílio do Forma Front</span>
                </li>
                <li>
                  <FiCheck color="#05FF00" /> <span>ZERO insegurança</span>
                </li>
                <li>
                  <FiCheck color="#05FF00" /> <span>ZERO medo</span>
                </li>
              </ul>
            </div>

            <div className={styles.contentPrice}>
              <img src="/images/forma-front-logo.png" alt="Logo" />

              <div className={styles.boxPrice}>
                <p>
                  De <span className={styles.risc}> R$ 497,00</span> por apenas
                </p>
                <p>
                  12x <span className={styles.price}>R$ 14,76</span>
                </p>
              </div>

              <ul className={styles.listCredit}>
                <li>
                  <FiCheck color="#05FF00" /> <span>Compra Segura</span>
                </li>
                <li>
                  <FiCheck color="#05FF00" /> <span>Satisfação Garantida</span>
                </li>
                <li>
                  <FiCheck color="#05FF00" />{" "}
                  <span>️Privacidade Protegida</span>
                </li>
              </ul>

              <Button onClick={() => {
                route.push('https://pay.kiwify.com.br/uAbUIZQ')
              }}>QUERO TER ACESSO AGORA</Button>
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
              Tudo isso para você! Você tem a sua segurança… De 7 dias para
              visitar nossa comunidade no discord totalmente gratuito.
            </p>
            <p>
              Se por acaso ver que não é para você a comunidade, fique a vontade
              de sair. Não iremos fazer qualquer pergunta ou mandar emails na
              caixa de spam para você.
            </p>
          </div>
        </div>

        <Blur 
          width="560px"
          height="560px"
          top="0"
          left="-600px"
          color="green"
          toRenderOnly="desktop"
        />
        <Blur 
          width="560px"
          height="536px"
          bottom="-560px"
          right="-446px"
          color="blue"
          toRenderOnly="desktop"
        />
        <Blur 
          width="250px"
          height="250px"
          top="0"
          left="-275px"
          color="blue"
          toRenderOnly="mobile"
        />
      </section>

      <section className={styles.sectionModules}>
        <div className={styles.contentDefault}>
          <h2 className={styles.titleModules}>
            Mas, preciso lembrá-lo de que…
          </h2>
          <p className={styles.description}>
            Você terá 7 módulos completos + Comunidade no discord que mostrará literalmente o passo á
            passo da carreira de Front-end:
          </p>

          <ul className={styles.listModules}>
            <li>
              <img src="/images/html.png" alt="module" />
              <span>HTML do básico ao avançado</span> 
            </li>
            <li>
              <img src="/images/css.png" alt="module" />
              <span>CSS do básico ao avançado</span>
            </li>
            <li>
              <img src="/images/js.png" alt="module" />
              <span>Javascript Básico ao intermediário</span>
            </li>
            <li>
              <img src="/images/gitgithub.png" className={styles.imgGit} alt="module" />
              <span>Git e Github</span>
            </li>
            <li>
              <img src="/images/criandoProjeto.png" alt="module" />
              <span>Criação de Projetos</span>
            </li>
            <li>
              <img src="/images/desafios.png" alt="module" />
              <span>Desafios técnicos</span>
            </li>
            <li>
              <img src="/images/guiaSucesso.png" alt="module" />
              <span>Guia para o sucesso</span>
            </li>
            <li>
              <img src="/images/comunidade.png" alt="" />
              <span>Comunidade no discord</span>
            </li>
          </ul>

          <Button onClick={redirectPrice}>QUERO TER ACESSO AGORA</Button>
        </div>
      </section>

      <section className={styles.sectionHistory}>
        <div className={styles.contentDefault}>
          <img src="/images/computador.svg" alt="" className={styles.imageComputer}/>

          <div className={styles.boxTextHistory}>
            <h2>Você lembra da história do jovem?</h2>

            <p>
              Eu só pude falar para meus pais que tripliquei o salário por saber dominar a simplicidade do HTML, CSS e JS ao meu favor…
            </p>

            <p>
              Se não fosse isso… Certamente eu seria reprovado novamente na entrevista de 50/50. Falando melhor seria reprovado em todas que fiz. Não por não saber dev Frontend mas sim por não dominar bem HTML CSS e JS e ser fiel a um layout.
            </p>

            <strong>
              Esse é o nome da nossa comunidade:
            </strong>

            <p>
              NOME: <strong className={styles.bolder}>Forma Front</strong>
            </p>

            <p>
              SOBRENOME: CSS… <strong className={styles.bolder}>O único apto para a vaga</strong>
            </p>

            <strong>
              Tendo tudo isso <span className={styles.color}>VOCÊ </span> será o <span className={styles.color}>DESTAQUE </span> e estará na frente dos demais para a <span className={styles.color}>VAGA</span>.
            </strong>
          </div>
        </div>

        <Blur 
          width="200px"
          height="200px"
          bottom="0"
          left="0"
          color="blue"
          toRenderOnly="desktop"
        />
        <Blur 
          width="150px"
          height="150px"
          top="0"
          right="0"
          color="green"
          toRenderOnly="mobile"
        />
      </section>

      <section className={styles.sectionHelp}>
        <div className={styles.contentDefault}>
          <div className={styles.boxTextImage}>
            <img
              src="/images/circulo.svg"
              alt=""
              className={styles.imageInsight}
            />
            <h2>
              Perguntas Frequentes
            </h2>
          </div>

          <div className={styles.listDropdownHelp}>
            <DropdownList 
              title="Esse método funciona para mim?" 
              description="R: Sim. Forma Front já foi testado e comprovado não somente por mim mesmo, que tripliquei o meu salário e sim por alunos que testaram e seguiram cada passo simples que antes eram totalmente complexos."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Esse curso tem certificado?" 
              description="R: Sim. Após o termino do curso você poderá emitir o certificado de conclusão de curso."
            />

            <div className={styles.separate} />
            <DropdownList 
              title="Como será entregue o produto?" 
              description="R: O produto será 100% online para você ter a maior compreensão de cada módulo, se você tiver dúvidas poderá rever as aulas novamente quando quiser."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Como eu vou receber esse produto?" 
              description="R: Assim que aprovado o pagamento, você receberá um e-mail de confirmação com os links de acesso à área de membros."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Posso compartilhar com um amigo?" 
              description="R: Não, o acesso é somente para um IP. (Identificação do produto)"
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Quais são as formas de pagamento?" 
              description="R: Boleto, Cartões de crédito e débito e PIX."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="A plataforma de pagamentos é segura?" 
              description="R: Sim. Segura e confiável."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Por quanto tempo eu terei acesso ao produto?" 
              description="R: Terá acesso vitalício."
            />
          </div>
        </div>
      </section>

      <Footer isHomePage/>
    </>
  );
};

export default CssPro;

export async function getServerSideProps() {
  const text = 'Seu texto aqui'

  return {
    props: {
      text,
    },
  }
}
