import clsx from "clsx";
import { Button } from "../../components/Button";
import { FiCheck } from "react-icons/fi";

import styles from "./styles.module.scss";
import DropdownModules from "../../components/Dropdown/dropModules";
import DropdownList from "../../components/Dropdown/dropList";
import Footer from "../../components/Footer";
import route from "next/router";
import { Blur } from "../../components/Blur";
import { Card } from "../../components/Card";

import Slider, { Settings } from "react-slick";

const CssPro = () => {
  const redirectPrice = () => {
    route.push('/css-pro#pricing');
  }

  const settings: Settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
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
      <div className={styles.targ}>
        <p>
          <span>URGENTE:</span> O único triplicador de salário de dev Frontend
          que poucos grupos seletos de pessoas dominam corretamente, e você pode
          fazer parte desse grupo. Sem precisar… Pós graduação ou qualquer curso
          de longo tempo. Eu chamo de:{" "}
          <strong>CSS… O único apto para a vaga.</strong>
        </p>
      </div>

      <section className={styles.sectionOnboarding} id="onboading">
        <div className={styles.animationOnboarding}>
          <img src="/images/Capa-animation.svg" alt="" />
        </div>
        <div className={styles.boxOnboarding}>
          <h2 className={styles.subtitle}>Inscrição</h2>
          <h1 className={styles.title}>
            <span>Curso CSS PRO</span>
            <br />O único apto para a vaga
          </h1>
          <Button onClick={redirectPrice}>QUERO TRIPLICAR MEU SALÁRIO</Button>

          <span className={styles.spanObs}>
            Obs: O profissional precisará de conhecimento básico de lógica de
            programação para ter 10x a maior chance de conseguir qualquer vaga
            se…Dominar a simplicidade do CSS
          </span>
        </div>

        <Blur 
          width="229px"
          height="219px"
          bottom="0"
          right="-195px"
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
            Desde então ele dominou o TEMIDO CSS.
          </p>

          <p>
            Antes de ter compreendido a real importância do CSS e seu peso nas
            horas das entrevistas, ele foi recusado em diversas que fez… De 50
            entrevistas que ele fez, 49 ele foi recusado.
          </p>

          <p>
            Até que… Um certo dia em uma entrevista já sabendo usar o CSS a seu
            favor com uma linguagem de javascript simples, e a linha mestre dele
            ser reprovado ou recrutado foi trabalhar bem e de forma simples o
            CSS…
          </p>

          <p>
            Foi nesse momento que ele pode contar para seus pais que triplicou
            seu salário.
          </p>

          <p>E esse jovem sou eu: Gabriel da Silva Nascimento</p>

          <p>O criador CSS PRO…</p>

          <p>
            Eu vivi essa experiência… Sabe o porque eu disse tudo isso a você?
          </p>

          <p>
            Porque, eu queria que VOCÊ soubesse que tudo isso só aconteceu por
            saber dominar o CSS de forma simples e prática e que me fez criar
            oportunidades que me fez destacar dos outros concorrentes…
          </p>

          <Button onClick={redirectPrice}>QUERO TRIPLICAR MEU SALÁRIO</Button>
        </div>

        <div className={styles.exposedCSS}>
          <h2>
            Dominar o CSS ao seu favor é mais simples do que você pensa…
            Explico!
          </h2>

          <div className={styles.exposedCSSDescriptionBox}>
            <span className={styles.exposedCSSDescription}>
              Como você e eu já sabemos que, ser programador é saber codificar…
              Isso é a base de todos dev Frontend.
            </span>

            <span className={styles.exposedCSSDescription}>
              PORÉM, DOIS FATORES FARÃO VOCÊ MUDAR DE PERCEPÇÃO. E JÁ TE DARÃO
              UMA DIREÇÃO AONDE IR…
            </span>
          </div>

          <div className={styles.boxTag}>
            <div className={styles.tag}>
              <strong>Saber codificar. </strong>Sem novidades por aqui…
            </div>

            <div className={styles.tag}>
              <strong>Saber usar CSS </strong>para se vender nas entrevistas e
              vender
            </div>
          </div>

          <span className={styles.exposedCSSDescription}>
            PS: SE VOCÊ É DEV FRONTEND O PRIMEIRO FATOR NÃO SERÁ UM PROBLEMA PRA
            VOCÊ.
          </span>
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

      <section className={clsx(styles.sectionInsight, styles.sectionDefault)}>
        <div className={styles.contentDefault}>
          <div className={styles.boxTextInsight}>
            <img
              src="/images/circulo.svg"
              alt=""
              className={styles.imageInsight}
            />
            <h2>
              Olhe para esta página <br />
              que você está agora… <br />
              <span>O Que você vê???</span>
            </h2>
          </div>

          <div className={styles.boxDescriptionInsight}>
            <p>Certamente você não está vendo códigos de programação…</p>
            <p>
              E sim uma beleza que atrai olhares das pessoas… Esse é o clímax de
              um dev Frontend e que toda empresa procura para repassar pro
              cliente final.
            </p>
            <p>
              É sobre isso! <span>Experiência…</span> E isso se faz com CSS de
              forma simples, prática e rápida.
            </p>
            <p>Porém…</p>
            <p>
              Muitos dev Frontend não dão importância para o CSS e têm a
              necessidade de voltar para dominar se querem algum destaque… E
              para os iniciantes parece algo de 7 cabeças de se aprender, mas o
              fato é que o CSS é mais simples do que você possa imaginar a com
              didática correta.
            </p>

            <Button onClick={redirectPrice}>QUERO TRIPLICAR MEU SALÁRIO</Button>
          </div>
        </div>
      </section>

      <section className={styles.sectionDepositions}>
        <div className={styles.contentDefault}>
          <img src="/images/cafe.svg" alt="cafe" />

          <div className={styles.boxTextDeposition}>
            <h2 className={styles.subtitleDepositions}>Tenho que ser sincero com você!</h2>

            <p className={styles.descriptionDepositions}>
              Sabendo CSS você vai conseguir 10x mais rápido passar em uma
              entrevista ou ser reconhecido por seus trabalhos…
            </p>
            <p className={styles.descriptionDepositions}>
              Como você pode ver nesses depoimentos abaixo… O CSS está sendo o
              precursor no destacamento e esclarecedor em todos os sentidos.
            </p>
          </div>
        </div>

        <div className={clsx(styles.contentDefault, styles.contentDeposition)}>
          <div className={styles.boxTextDeposition}>
            <h2 className={styles.subtitleDepositions}>Depoimentos</h2>

            <p className={styles.descriptionDepositions}>
              Esses já fazem parte do CSS… o único apto para vaga…
            </p>
          </div>
          <Slider {...settings}>
            <Card 
              img="/images/keverton.jpg"
              name="Keverton Reis"
              description=" Sou aluno da turma inicial do projeto de capacitação do Gabriel, pude aprender de forma simples e objetiva sobre o CSS e como funciona, suas particularidades e como utiliza-lo da melhor maneira. Isso tudo em poucas aulas, imagina com o CSS PRO!"
            />
            <Card 
              img="/images/guilherme.jpeg"
              name="Guilherme Moreira"
              description="O curso é incrível, didática boa e fácil de entender os conceitos básico de CSS, antes eu patinava e ficava 'chutando' os estilos, agora consigo saber com exatidão o que usar em cada situação. Recomendo muito."
            />
            <Card 
              img="/images/keverton.jpg"
              name="Kevin"
              description=" Sou aluno da turma inicial do projeto de capacitação do Gabriel, pude aprender de forma simples e objetiva sobre o CSS e como funciona, suas particularidades e como utiliza-lo da melhor maneira. Isso tudo em poucas aulas, imagina com o CSS PRO!"
            />
            <Card 
              img="/images/keverton.jpg"
              name="Daniel"
              description=" Sou aluno da turma inicial do projeto de capacitação do Gabriel, pude aprender de forma simples e objetiva sobre o CSS e como funciona, suas particularidades e como utiliza-lo da melhor maneira. Isso tudo em poucas aulas, imagina com o CSS PRO!"
            />
             <Card 
              img="/images/keverton.jpg"
              name="Isabela"
              description=" Sou aluno da turma inicial do projeto de capacitação do Gabriel, pude aprender de forma simples e objetiva sobre o CSS e como funciona, suas particularidades e como utiliza-lo da melhor maneira. Isso tudo em poucas aulas, imagina com o CSS PRO!"
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
          <h2 className={styles.titleModules}>
            Esses já fazem parte do CSS... O ÚNICO APTO PARA A VAGA...
          </h2>
          <p className={styles.description}>
            Eles se destacam por causa que encontraram dentro da metodologia <span>CSS PRO:</span>
          </p>

          <div className={styles.listDropdown}>
            <DropdownModules 
              title="Introdução HTML e CSS"
              subtitle="Não importa se você não sabia de nada. Aqui você sairá sem nenhuma dúvida se quer."
              description="Irei te mostrar os primeiros passos com HTML, no caso de você não ter conhecimento com HTML terá o mínimo de conheicmento para absorver o máximo do CSS."
            />
            <DropdownModules 
              title="O mapa"
              subtitle="Aqui iremos mostrar como iniciar uma estrutura de elemento de tela."
              description="Uma das parte mais importantes de uma ótima estilização é de fato a estruturação de seu HTML, com isso conseguimos ter uma maior flexibilidade para criar sites responsivos, deixar nosso layout o mais fiel possivel ao layout garantindo uma grande expriência ao usuário final. Tudo se trata de experiência... Focar nos mínimos detalhes como esse é um dos pontos que te torna um dev com destaque!"
            />
            <DropdownModules 
              title="As propriedades do CSS"
              subtitle="Flexbox, Grid e entre outras que grandes desenvolvedores utilizam em Frontend."
              description="Aqui passaremos pelas propriedades que iremos utilizar no CSS ao decorrer do curso, não vou te passar um wikpédia de informações, mas sim te passar todas as propriedades que você de fato vai utilizar todos os dias como desenvolvedor!"
            />
             <DropdownModules 
              title="Medidas em CSS"
              subtitle="Aqui falarei um pouco sobre todas as medidas que podemos utilizar com CSS e as dias diferenças e quando usar cada uma."
              description="Precisamos entender como podemos dimenssionar nossos elementos em tela e tomar a decisão certo ao utilizar uma unidade de medida em CSS, nesse módulo você saberá para que serve as unidades de medidas e em que ocasiões utiliza-la."
            />
            <DropdownModules 
              title="Cada vez VOCÊ está um passo à frente"
              subtitle="Pseudo class em CSS e por que utilizá-los."
              description="CSS além de suas animações... Conseguimos determinar algum evento para o nosso site após uma ação do usuário, seja em um botão, uma div etc.. Com este módulo você será capaz de controlar as ações do usuário e promover alguma experiência ao usuário após tal feito."
            />
            <DropdownModules 
              title="A mágica"
              subtitle="Animações em CSS."
              description="Aqui veremos sobre transform e keyframes.. Como conseguimos controlar as animações dentro de nosso site, mudando elementos de posição, controlando seu percurso, de fato tendo tudo na palma de sua mão!"
            />
            <DropdownModules 
              title="Responsividade em CSS"
              subtitle="Aqui iremos explorar como é possivel flexibilizar um site para ser visivel atravéz de dispositivos móveis"
              description="Não dá pra te falar que apenas um site fica bom se você desenvolve-lo para web, é necessário desenvolver para mobile também! Nesse módulo você aprenderá como tornar um site responsivo."
            />
            <DropdownModules 
              title="Mãos a obra!"
              subtitle="Aqui iremos juntar tudo que aprendemos nos módulos anteriores em projetos práticos, para você conseguir aprender de forma mais simples e rápida tudo o que diz a respeito do CSS."
              description="Neste módulo criaremos projetos juntos para que você desenvolva sites incriveis com todos os recursos que aprendeu nos módulos anteriores."
            />
            <DropdownModules 
              title="Insegurança!? Só se for para subir no palco para falar dos grandes projetos que VOCÊ fez."
              subtitle="Você encontrará neste módulo desafios técnicos que o farão ser capaz de fazer qualquer com suas próprias mãos."
              description="Não adianta... O domínio vem com a prática de se desafiar com coisas novas... Aqui não será diferente!"
            />
            <DropdownModules 
              title="Guia para o sucesso"
              subtitle="Te mostrarei como você pega tudo isso que te ensinei até aqui e transforme em uma arma secreta para que você tenha vantagens em ser reconhecido na sua empresa, na entrevista etc... "
              description="Muitos desenvolvedores não dão a mínima ao CSS, o problema é que está deixando de aproveitar oportunidades que provavelmente se abriria... O CSS não faz tudo sózinho é importante você ter isso em mente. Mas com ele você já é visto de outra forma!"
            />
            <DropdownModules 
              title="Comunidade no Discord"
              subtitle="Faça parte da comunidade CSS Ninja para tirar dúvidas, networking e oportunidades no mercado!"
              description="Em nossa comunidade você poderá criar network com nossos alunos, terá acesso a oportunidades de vagas para que você possa aplicar para entrevistas... Não fique de fora!"
            />
            <DropdownModules 
              title="Não sou médico mas faço PLANTÃO"
              subtitle="Aqui poderá tirar toda sua dúvida para você virar um NINJA DO CSS."
              description="Dentro de nossa comunidade teremos um canal para tirar dúvidas online toda sexta-feira! você não será abandonado, eu estarei aqui para segurar na sua mão, meu sucesso é ver o seu!"
            />

            <Button onClick={redirectPrice}>QUERO TER ACESSO AGORA</Button>
          </div>
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
            preocupação se você vai ou não conseguir um emprego. Com CSS PRO
            você garante sua vaga… Ou destaque.
          </p>

          <h3>
            Chegou sua hora de se destacar e conseguir sua vaga no mercado de
            trabalho.
          </h3>

          <ul className={styles.listCredit}>
            <li>
              <FiCheck color="#05FF00" /> <span>Com o auxílio do CSS PRO</span>
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
                preocupação se você vai ou não conseguir um emprego. Com CSS PRO
                você garante sua vaga… Ou destaque.
              </p>

              <h3>
                Chegou sua hora de se destacar e conseguir sua vaga no mercado
                de trabalho.
              </h3>

              <ul className={styles.listCredit}>
                <li>
                  <FiCheck color="#05FF00" />{" "}
                  <span>Com o auxílio do CSS PRO</span>
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
              <img src="/images/logo-css-pro.png" alt="Logo" />

              <div className={styles.boxPrice}>
                <p>
                  De <span className={styles.risc}> R$ 497,00</span> por apenas
                </p>
                <p>
                  12x <span className={styles.price}>R$ 19,78</span>
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
            Você terá 9 módulos completos + Comunidade no discord + suporte ao vivo que mostrará literalmente o passo á
            passo do CSS:
          </p>

          <div className={styles.listDropdown}>
            <DropdownModules 
              title="Introdução HTML e CSS"
              subtitle="Não importa se você não sabia de nada. Aqui você sairá sem nenhuma dúvida se quer."
              description="Irei te mostrar os primeiros passos com HTML, no caso de você não ter conhecimento com HTML terá o mínimo de conheicmento para absorver o máximo do CSS."
            />
            <DropdownModules 
              title="O mapa"
              subtitle="Aqui iremos mostrar como iniciar uma estrutura de elemento de tela."
              description="Uma das parte mais importantes de uma ótima estilização é de fato a estruturação de seu HTML, com isso conseguimos ter uma maior flexibilidade para criar sites responsivos, deixar nosso layout o mais fiel possivel ao layout garantindo uma grande expriência ao usuário final. Tudo se trata de experiência... Focar nos mínimos detalhes como esse é um dos pontos que te torna um dev com destaque!"
            />
            <DropdownModules 
              title="As propriedades do CSS"
              subtitle="Flexbox, Grid e entre outras que grandes desenvolvedores utilizam em Frontend."
              description="Aqui passaremos pelas propriedades que iremos utilizar no CSS ao decorrer do curso, não vou te passar um wikpédia de informações, mas sim te passar todas as propriedades que você de fato vai utilizar todos os dias como desenvolvedor!"
            />
             <DropdownModules 
              title="Medidas em CSS"
              subtitle="Aqui falarei um pouco sobre todas as medidas que podemos utilizar com CSS e as dias diferenças e quando usar cada uma."
              description="Precisamos entender como podemos dimenssionar nossos elementos em tela e tomar a decisão certo ao utilizar uma unidade de medida em CSS, nesse módulo você saberá para que serve as unidades de medidas e em que ocasiões utiliza-la."
            />
            <DropdownModules 
              title="Cada vez VOCÊ está um passo à frente"
              subtitle="Pseudo class em CSS e por que utilizá-los."
              description="CSS além de suas animações... Conseguimos determinar algum evento para o nosso site após uma ação do usuário, seja em um botão, uma div etc.. Com este módulo você será capaz de controlar as ações do usuário e promover alguma experiência ao usuário após tal feito."
            />
            <DropdownModules 
              title="A mágica"
              subtitle="Animações em CSS."
              description="Aqui veremos sobre transform e keyframes.. Como conseguimos controlar as animações dentro de nosso site, mudando elementos de posição, controlando seu percurso, de fato tendo tudo na palma de sua mão!"
            />
            <DropdownModules 
              title="Responsividade em CSS"
              subtitle="Aqui iremos explorar como é possivel flexibilizar um site para ser visivel atravéz de dispositivos móveis"
              description="Não dá pra te falar que apenas um site fica bom se você desenvolve-lo para web, é necessário desenvolver para mobile também! Nesse módulo você aprenderá como tornar um site responsivo."
            />
            <DropdownModules 
              title="Mãos a obra!"
              subtitle="Aqui iremos juntar tudo que aprendemos nos módulos anteriores em projetos práticos, para você conseguir aprender de forma mais simples e rápida tudo o que diz a respeito do CSS."
              description="Neste módulo criaremos projetos juntos para que você desenvolva sites incriveis com todos os recursos que aprendeu nos módulos anteriores."
            />
            <DropdownModules 
              title="Insegurança!? Só se for para subir no palco para falar dos grandes projetos que VOCÊ fez."
              subtitle="Você encontrará neste módulo desafios técnicos que o farão ser capaz de fazer qualquer com suas próprias mãos."
              description="Não adianta... O domínio vem com a prática de se desafiar com coisas novas... Aqui não será diferente!"
            />
            <DropdownModules 
              title="Guia para o sucesso"
              subtitle="Te mostrarei como você pega tudo isso que te ensinei até aqui e transforme em uma arma secreta para que você tenha vantagens em ser reconhecido na sua empresa, na entrevista etc... "
              description="Muitos desenvolvedores não dão a mínima ao CSS, o problema é que está deixando de aproveitar oportunidades que provavelmente se abriria... O CSS não faz tudo sózinho é importante você ter isso em mente. Mas com ele você já é visto de outra forma!"
            />
            <DropdownModules 
              title="Comunidade no Discord"
              subtitle="Faça parte da comunidade CSS Ninja para tirar dúvidas, networking e oportunidades no mercado!"
              description="Em nossa comunidade você poderá criar network com nossos alunos, terá acesso a oportunidades de vagas para que você possa aplicar para entrevistas... Não fique de fora!"
            />
            <DropdownModules 
              title="Não sou médico mas faço PLANTÃO"
              subtitle="Aqui poderá tirar toda sua dúvida para você virar um NINJA DO CSS."
              description="Dentro de nossa comunidade teremos um canal para tirar dúvidas online toda sexta-feira! você não será abandonado, eu estarei aqui para segurar na sua mão, meu sucesso é ver o seu!"
            />

            <Button onClick={redirectPrice}>QUERO TER ACESSO AGORA</Button>
          </div>
        </div>
      </section>

      <section className={styles.sectionHistory}>
        <div className={styles.contentDefault}>
          <img src="/images/computador.svg" alt="" className={styles.imageComputer}/>

          <div className={styles.boxTextHistory}>
            <h2>Você lembra da história do jovem?</h2>

            <p>
              Eu só pude falar para meus pais que tripliquei o salário por saber dominar a simplicidade do CSS ao meu favor…
            </p>

            <p>
              Se não fosse isso… Certamente eu seria reprovado novamente na entrevista de 50/50. Falando melhor seria reprovado em todas que fiz. Não por não saber dev Frontend mas sim por não dominar bem CSS e ser fiel a um layout.
            </p>

            <strong>
              Esse é o nome da nossa comunidade:
            </strong>

            <p>
              NOME: <strong className={styles.bolder}>CSS PRO</strong>
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
              description="R: Sim. CSS PRO já foi testado e comprovado não somente por mim mesmo, que tripliquei o meu salário e sim por alunos que testaram e seguiram cada passo simples que antes eram totalmente complexos."
            />
            <div className={styles.separate} />

            <DropdownList 
              title="Esse curso tem certificado?" 
              description="R: Sim. Após o termino do curso você poderá emitir o certificado de conclusão de curso."
            />

            <div className={styles.separate} />
            <DropdownList 
              title="Como será entregue o produto?" 
              description="R: O produto será 100% online para você ter a maior compreensão de cada módulo, se você tiver dúvidas poderá rever as aulas novamente quando quiser. Além disso teremos os nossos plantões ao vivo."
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
              description="R: Terá acesso vitalício e as gravações dos plantões. Caso tenha dúvidas sobre algo que foi dito nos plantões poderá rever quantas vezes você quiser."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CssPro;
