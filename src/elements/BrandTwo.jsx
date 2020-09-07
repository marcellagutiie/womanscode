import React, { Component } from "react";

class BrandTwo extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="section-title">
                <h2>Nossos valores</h2>
                <p>Nossos principais valores são: 
                    União - pois somos todos por uma, Equilíbrio - para consiliar nossa vida,
                    nossa saúde mental sem deixar nossa carreira de lado e 
                    Diversidade afinal o estereótipo não nos define.</p>
                </div>
                
                <ul className="brand-style-2">
                    <li>
                        <img src="/assets/images/brand/1.png" alt="União"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/2.png" alt="Equilíbrio"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/3.png" alt="Diversidade"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default BrandTwo;