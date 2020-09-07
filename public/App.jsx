import React, { Component  } from "react";
import { HashRouter, Route } from "react-router-dom";
import MainDemo from "./src/dark/MainDemo"


class App extends Component{
    render(){
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route exact path="/" component={MainDemo} />
            </HashRouter>
        )
    }
}

export default App;
