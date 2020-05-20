import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Quanto mais estudo, mais sinto que minha mete nisso é insaciável.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://canaltech.com.br/curiosidades/mulheres-historicas-ada-lovelace-a-primeira-programadora-de-todos-os-tempos-71395/" >
                                            <span className="text link-name"> - Ada Lovelace</span>
                                        </a>                         
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>A frase mais perigosa da nossa linguagem é: Porque sempre se fez assim.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://canaltech.com.br/internet/mulheres-historicas-conheca-a-historia-de-grace-hopper-a-vovo-do-cobol-72559/" >
                                            <span className="text link-name"> - Grace Hopper</span>
                                        </a>        
                                     </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Racismo e sexismo também são burrices econômicas.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://exame.com/pme/da-discriminacao-ao-empreendedorismo-nina-silva-e-o-movimento-black-money/" >
                                            <span className="text link-name"> - Nina Silva</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>O que melhor funciona para mim quando quero aprender sobre algo novo é não deixar o medo atrapalhar.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://epocanegocios.globo.com/Mundo/noticia/2019/07/conheca-historia-de-margaret-hamilton-programadora-que-salvou-missao-lua.html" >
                                            <span className="text link-name"> - Margaret Hamilton</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Aceitamos a educação como meio de superar as limitações que a sociedade preconceituosa tentou colocar sobre nós.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://www.geledes.org.br/eveliyn-boyd-granville-mulher-negra-e-phd-em-matematica/" >
                                            <span className="text link-name"> - Evelyn Boyd Granville</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                 <div className="inner">
                                        <p>Eu acho que as mulheres são capazes de olhar para os aspectos mais amplos da computação.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://revistagalileu.globo.com/Tecnologia/noticia/2019/02/conheca-karen-sparck-jones-criadora-do-conceito-dos-sites-de-busca.html" >
                                            <span className="text link-name"> - Karen Sparck Jones</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Eu não aprendi a ficar quieta quando tenho uma opinião</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://www.britannica.com/biography/Ursula-Burns" >
                                            <span className="text link-name"> - Ursula Burns</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>No futuro não haverá mais líderes femininas. Haverá apenas líderes.</p>
                                    </div>
                                    <div className="author-info">
                                        <a className="btn-transparent rn-btn-dark" target="_blank"  href="https://canaltech.com.br/celebridade/sheryl-sandberg/" >
                                            <span className="text link-name"> - Sheryl Sandberg</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/ada.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/grace-hopper.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/nina-silva.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/margaret-hamilton.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/evelyn-boyd.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/karen-sparck.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/ursula-burns.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/women/sheryl-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;