import React, { Component } from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'Instagram',
        description: 'Nós utilizamos o instagram como canal de conversa. Fazemos lives, IGTVs e stories com dicas, conselhos, notícias, sobre o mundo de mulheres e tecnologia.'
    },
    {
        icon: <FiLayers />,
        title: 'Meetup',
        description: 'Fazemos meetups para falarmos sobre o mercado de trabalho, novas tecnologias, area acadêmica, assuntos técnicos e não técnicos. Todos são bem-vindos.'
    },
    {
        icon: <FiUsers />,
        title: 'Madrinhas',
        description: 'Nomeamos madrinhas para auxiliar mais de perto pessoas que solicitem esse tipo de ajuda.'
    },
    {
        icon: <FiMonitor />,
        title: 'Network',
        description: 'Nossa rede é uma ótima oportunidade de fazer network e conhecer novas pessoas!'
    }
]

class ServiceTwo extends Component{
    render(){
        let title = 'Serviços',
        description = 'Esses sãos os serviços que prestamos atualmente. Para mais detalhes, ';
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
                            <h2 className="title">{title}</h2>
                            <p>{description}</p>
                            <div className="service-btn">
                                <a className="btn-transparent rn-btn-dark" href="/service"><span className="text">Quer ajudar a gente? Chega mais!</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-12 mt_md--50">
                        <div className="row service-one-wrapper">
                            {ServiceList.map( (val , i) => (
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
                                    <a href="/service-details">
                                        <div className="service service__style--2">
                                            <div className="icon">
                                                {val.icon}
                                            </div>
                                            <div className="content">
                                                <h3 className="title">{val.title}</h3>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceTwo;
