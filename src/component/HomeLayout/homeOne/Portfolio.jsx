import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";


const PortfolioList = [
    {
        image: 'image-1',
        category: 'Meetup',
        title: 'Alguns meetups que já participamos'
    },
    {
        image: 'image-2',
        category: 'IGTV',
        title: 'Alguns vídeos do nosso IGTV'
    },
    {
        image: 'image-3',
        category: 'Live',
        title: 'Algumas das lives que já fizemos'
    },
    {
        image: 'image-4',
        category: 'Destaques',
        title: 'Nossos destaques do instagram'
    },
    {
        image: 'image-3',
        category: 'Podcast',
        title: 'Indicações de podcasts'
    },
    {
        image: 'image-4',
        category: 'Vídeos',
        title: 'Indicações de vídeos'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Nossos Trabalhos',
        description = 'Aqui nós deixamos um espaço para expor nossos trabalhos. Seja meetup, seja videos no instagram, etc.';
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
                                            <h4><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href={`/portfolio-details- ${index}`}>Acesse</a>
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