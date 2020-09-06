import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";


const PortfolioList = [
    {
        image: 'portfolio-1',
        category: 'Meetup',
        title: 'Em breve', 
        href: ""
    },
    {
        image: 'image-2',
        category: 'IGTV',
        title: 'IGTV',
        href: "https://www.instagram.com/womanscode/channel/"
    },
    {
        image: 'image-5',
        category: 'Destaques',
        title: 'Destaques',
        href: "https://www.instagram.com/stories/highlights/17844170543244985/"
    },
    {
        image: 'image-4',
        category: 'Filmes & Séries',
        title: 'Indicações de filmes e séries',
        href: "https://www.instagram.com/p/CEcoLqfDAy4/"
    },
    {
        image: 'image-1',
        category: 'Podcasts',
        title: 'Indicações de podcasts',
        href: "https://podprogramar.com.br/"
    },
    {
        image: 'image-2',
        category: 'Livros',
        title: 'Indicações de livros',
        href: "https://www.instagram.com/p/CEm-w3elGDN/"
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