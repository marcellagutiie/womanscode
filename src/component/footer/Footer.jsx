import React, { Component } from "react";
import { FaInstagram ,FaFacebookF, FaLinkedin } from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/womanscode'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/womanscode'},
    {Social: <FaLinkedin /> , link: 'https://www.linkedin.com/in/woman-s-code'},
]
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <footer className="footer-area">
                    <div className="footer-wrapper">
                        <div className="row align-items-end row--0">
                            <div className="col-lg-6">
                                <div className="footer-left">
                                    <div className="inner">
                                        <h2>Vamos <br /> conversar!</h2>
                                        <a className="rn-button-style--2" href="mailto:womanscodelm@gmail.com">
                                            <span>Contato</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="footer-right" data-black-overlay="6">
                                    <div className="row">
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12">
                                            <div className="footer-link">
                                                <h4>Links úteis</h4>
                                                <ul className="ft-link">
                                                    <li><a href="/">Em breve Meetups</a></li>
                                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeLON2oMMrKSssZQmDvchAs1oQHdewJMmJoBxI_HHUO5sIy0w/viewform?usp=pp_url">Quero ajudar!</a></li>
                                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSe3qBxE5CgsKTD4QanFUv9zYw9u4YYLybHNF2kRoeE-2VTdSw/viewform?usp=pp_url">Tenho um problema :( </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}
                                        {/* Start Single Widget  */}
                                        <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                                            <div className="footer-link">
                                                <h4>Me da um oizin</h4>
                                                <ul className="ft-link">
                                                    <li><a href="mailto:womanscode@gmail.com">womanscodelm@gmail.com</a></li>
                                                </ul>

                                                <div className="social-share-inner">
                                                    <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                                                        {SocialShare.map((val , i) => (
                                                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                                        ))}
                                                    </ul>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* End Single Widget  */}

                                        <div className="col-lg-12">
                                            <div className="copyright-text">
                                                <p>Copyright © 2020 Woman's Code. Todos os direitos reservados.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}
export default Footer;