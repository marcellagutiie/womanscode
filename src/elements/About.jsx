import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Header from "../component/header/Header";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import Footer from "../component/footer/Footer";

class About extends Component{
    render(){
        let title = 'Senta que lá vem história',
        description = "A woman’s code nasceu de um sonho. Um sonho que me acompanha desde 2016: Ter voz e ajudar o meu plural. Nós, quanto mulheres na tecnologia, somos plural. Quando eu estava no meu primeiro emprego como desenvolvedora, meu chefe me colocava muito medo. Eu não podia usar o google como pesquisa, que ele me chamava de 'programadora crtl c ctrl v'. Ele era tão rude, que todas as vezes que ele ia me perguntar alguma dúvida, minha boca secava, minhas mãos tremiam e suavam. Ele falava que eu nunca seria boa e nunca teria outro emprego porque ninguém me aceitaria sendo tão ruim como eu era. Eu chorava no banheiro da empresa todos os dias. Tive a notícia que minha avó faleceu no meio do horário de expediente. Meu colega de trabalho disse 'chora mais baixo que ta atrapalhando o escritório', enquanto meu chefe disse  “tá né, pode sair hoje. Você tá chorando demais. mas te espero aqui amanhã”. Tive vontade de desistir porque poxa, eu me sentia em um ambiente completamente hostil, eu não era bem-vinda. Foi quando eu descobri que eu não estou sozinha. Milhares de mulheres sofrem com isso todos os dias. Aprendi com minhas dificuldades e coloquei como objetivo de vida, reduzir ao máximo que eu puder o número de mulheres que pensam que estão sozinhas nessa. Pensei então que a forma com que eu faria isso, seria fazendo palestras. Comecei falando para 10 pessoas e de repente estava falando com 100. Com muito esforço e trabalho, uma menina de 16 anos que chorava no banheiro por ser humilhada pelos colegas, estava palestrando em um evento gigante, onde a sala não tinha mais espaço para ninguém entrar. Não tinha espaço no chão, não tinha espaço na porta e ainda tinha uma galera chateada por não conseguir entrar. Hackeei minha zona de conforto. Sai do meu espaço onde não tinha voz, para falar por quem não conseguia mostrar sua voz e incentivá-las a ter voz.  Quando eu percebi que palestras eram pouco pra mim. Decidi que eu queria mais. Foi assim que nasceu a woman’s code, uma rede de apoio para mulheres. Entendemos que se somos uma rede de apoio para mulheres, nós precisamos apoiá-las em diversas áreas. Vamos oferecer cursos, para que você possa desenvolver novas habilidades. Vamos realizar eventos onde podemos nos unir e fazer networking. Você terá uma madrinha para chamar caso não queira se expor muito. Queremos ser o seu apoio, queremos gerar conhecimento e empregos, queremos gerar vozes. Somos todas por uma. Nós carregamos o peso do gênero. Carregamos nosso plural conosco. Quando uma mulher sofre, todas sofrem juntas. Quando uma mulher vence, todas vencem juntas. Quando uma mulher luta, todas lutam juntas. O triângulo é a forma geométrica mais forte. Onde a base, dá sustentação para a ponta. Somos base, somos ponta, somos todas por uma.";
        return(
            <React.Fragment>
                <PageHelmet pageTitle='Sobre' />

                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                {/* Start Breadcrump Area */}
                <Breadcrumb title={'Sobre'}   />
                {/* End Breadcrump Area */}

                {/* Start About Area  */}
                <div className="rn-about-area ptb--120 bg_color--1">
                    <div className="rn-about-wrapper">
                        <div className="container">
                            <div className="row row--35 align-items-center">
                                <div className="col-lg-12">
                                    <div className="about-inner inner">
                                        <div className="section-title">
                                            <h2 className="title">{title}</h2>
                                            <p className="description">{description}</p>
                                        </div>
                                        <div className="row mt--30">
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">União</h3>
                                                    <p>Somos todas por uma. Juntas podemos deixar o triângulo mais forte, podemos ir mais longe, ter mais voz.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Equilíbrio</h3>
                                                    <p>O equilíbrio entre a vida corrida dos códigos, nossa saúde mental, nossos sonhos.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                                <div className="about-us-list">
                                                    <h3 className="title">Diversidade</h3>
                                                    <p>Queremos pessoas diversas conosco. Queremos dar visibilidade para todo mundo, fugindo de esteriótipos e lutando pelo fim de qualquer tipo de preconceito. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area  */}

                {/* Marcella  */}
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/2.png" alt="Marcella"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h3 className="title">Marcella Gutierrez - Founder</h3>
                                    <p>Oieeeeeeeeee! Sou a Marcella Gutierrez, tenho 22 anos. Eu A-M-O Star Wars, amo piadas 
                                        sem graça e sou muito apaixonada por Anne With An E (assistam pf). Já quis ser jornalista,
                                         astronauta, comentarista de futebol, e acabei me encontrando sendo dev front-end. Sou calma 
                                         quando preciso, energética demais a maior parte do tempo e sempre tentando sorrir.⠀
                                         Já organizei eventos gigantes, já organizei cursos, já dei aula, já fui back-end, já dei palestra 
                                         para mais de 700 pessoas no total e hoje to aqui fundando meu sonhos, também conhecido como
                                          Woman’s Code. Curiosidade que não tá no meu LinkedIn nem no meu Instagram: Meu maior sonho 
                                          (além da WC) é visitar um país de cada continente e pintar na tatuagem de mapa mundi 
                                          (da Marcella do futuro) cada continente conforme eu for visitando.⠀Essa sou eu resumida. 
                                          Espero conhecer vocês melhor! Com carinho, café e código, Marcella.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Larissa  */}
                <br/>
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/1.png" alt="Marcella"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h3 className="title">Larissa Maia - Co-Founder</h3>
                                    <p>Eii! Prazer, Larissa, 23 aninhos e sou de BH. Quando estava no ensino médio eu só sabia o que eu NÃO queria ser. 
                                        Me formei em sistemas de informação na UFMG e hoje trabalho numa empresa de tecnologia para mineração. 
                                        No começo da faculdade fui apresentada ao mundo do marketing e virou minha paixão. Curto algumas coisas de psicologia também. 
                                        Blogueira nas horas vagas HAHAHA. 
                                        Tenho um (grande) lado artístico, amo desenhar, pintar, fotografar e maquiar. 
                                        Escrevendo esse texto vi que provavelmente meu defeito é querer aprender sobre tudo um pouco. 
                                        Sou a voz da razão na vida dos meus amigos e a própria paz em pessoa. Tenho preguiça de brigas, acho graça de praticamente tudo mas láaaa no fundo eu tenho um coração mole. 
                                        Por último mas não menos importante, amo doguinhos (em especial aquela bola de pelo preta do lado esquerdo da foto). 
                                        A woman’s code é minha oportunidade de juntar e misturar tudo isso e aplicar  num projeto nobre e que tem um propósito muito maior do que eu.  
                                        Curiosidade que não tá no LinkedIn, nem no Instagram: odeio café (A xícara foi só pra ficar bonitinho) :)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Victória  */}
                <br/>
                <div className="container">
                    <div className="row row--35 align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="thumbnail">
                                <img className="w-100" src="/assets/images/about/3.png" alt="Marcella"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="about-inner inner">
                                <div className="section-title">
                                    <h3 className="title">Victória Ribeiro - Embaixadora</h3>
                                    <p>Oi! meu nome é Victória (vic para os íntimos) e tenho 21 anos. 
                                        Sou apaixonada pela comunicação e por pessoas. Mesa de bar rodeada por amigos e família,
                                        com certeza está no meu top 3 de lugares favoritos. Sou aquela que ri alto, que fala gesticulando 
                                        (muito) e que faz amizade até no ponto do ônibus. Fiz o técnico em informática integrado com o 
                                        ensino médio e, logo de cara, me apaixonei pelo mundo dos códigos. Já sai de lá com a certeza
                                        que seria desenvolvedora. Sabe aquela duvidazinha de qual faculdade escolher? Nunca tive, 
                                        sempre soube que Tecnologia da Informação era meu lugar. Porém, quando entrei no Inter,
                                        ainda como menor aprendiz, em 2016, a vida me surpreendeu com uma visão completamente diferente
                                        dentro da Tecnologia e me fez mudar completamente minha visão de carreira. Conheci a parte 
                                        corporativa e de governança de TI que me fizeram ver que Tecnologia da Informação não é só sobre 
                                        bits e códigos. Hoje sou analista de TI Corporativa e completamente apaixonada pelo o que faço.
                                        E estou muito feliz em poder se embaixadora dessa iniciativa maravilhosa e espero poder 
                                        contribuir muito com o meu melhor!
                                    </p>
                                </div>
                            </div>
                        </div>
                         {/* Start Back To Top */}
                        <div className="backto-top">
                            <ScrollToTop showUnder={160}>
                                <FiChevronUp />
                            </ScrollToTop>
                        </div>
                        {/* End Back To Top */}
                        
                        <Footer />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About