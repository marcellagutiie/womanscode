import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Meetup',
        title: 'Em breve', 
        href: ""
    },
    {
        image: 'image-2',
        category: 'IGTV',
        title: 'Em breve',
        href: ""
    },
    {
        image: 'image-3',
        category: 'Destaques',
        title: 'Em breve',
        href: ""
    },
    {
        image: 'image-4',
        category: 'Filmes & Séries',
        title: 'Indicações de filmes e séries',
        href: "indications"
    },
    {
        image: 'image-3',
        category: 'Podcasts',
        title: 'Indicações de podcasts',
        href: "indications"
    },
    {
        image: 'image-4',
        category: 'Livros',
        title: 'Indicações de livros',
        href: "indications"
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Conteúdo',
        description = 'Aqui nós deixamos um espaço para expor nossos trabalhos e indicações.';
        return(
            <React.Fragment>
                <div className="portfolio-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="portfolio-slick-activation mt--70 mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        <div className={`bg-blr-image ${value.image}`}></div>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <p><b>{value.category}</b></p>
                                            <h4><a href={`${value.href}`}>{value.title}</a></h4>

                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={`${value.href}`}>Acesse</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;