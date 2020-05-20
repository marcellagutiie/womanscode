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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
                                            <span className="text link-name"> - Margaret Hamilton</span>
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
                                            <span className="text link-name"> - Karen Spark Jones</span>
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
                                            <span className="text link-name"> - Evely Boyd Granville</span>
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
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
                                        <a className="btn-transparent rn-btn-dark" href="/service">
                                            <span className="text link-name"> - Sheryl Sandberg</span>
                                        </a>  
                                    </div>
                                </div>
                            </TabPanel>
                            
                            <TabList className="testimonial-thumb-wrapper">
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-7.jpg" alt="Testimonial Images"/>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-8.jpg" alt="Testimonial Images"/>
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