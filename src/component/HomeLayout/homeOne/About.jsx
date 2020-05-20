import React, { Component } from "react";

class About extends Component{
    render(){
        let title = 'Sobre',
        description = "A Woman's Code é uma rede de apoio para nós mulheres de tecnologia, mulheres de código. Somos todas por uma.";
        return(
            <React.Fragment>
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">

                            <div className="col-lg-5 col-md-12">
                                <div className="thumbnail">
                                    <img className="w-100" src="/assets/images/about/about.png" alt="mulheres juntas em circulo"/>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12">
                                <div className="about-inner inner">
                                    <div className="section-title">
                                        <h2 className="title">{title}</h2>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="row mt--30 mt_sm--10">
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Marcella G.</h3>
                                                <p>Desenvolvedora front-end, 22 anos, fundadora da Woman's Code.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                            <div className="about-us-list">
                                                <h3 className="title">Larissa M.</h3>
                                                <p>Desenvolvedora back-end, 23 anos, co-fundadora da Woman's Code.</p>
                                            </div>
                                        </div>
                                        <div className="service-btn row mt--30 mt_sm--10 about-link">
                                            <a className="btn-transparent rn-btn-dark" href="/about"><span className="text">Para maiores informações, clique aqui</span></a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default About;