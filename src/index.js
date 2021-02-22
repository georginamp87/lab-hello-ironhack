import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './style.css'
// import { ReactComponent as Logo } from './ironhack-logo.svg'
// import {ReactComponent as MenuTop } from './menu-top.svg'
// import { ReactComponent as ReactLogo } from './react-logo.svg'
// import icon1 from './icon1.png'
// import icon2 from './icon2.png'
// import icon3 from './icon3.png'
// import icon4 from './icon4.png'


class App extends Component {
    render () {
        return (
            <React.Fragment>
                <header>
                    <img src="/images/ironhack-logo.svg"/>
                    <img className="menuTop" src="/images/menu-top.svg"/>
                </header>
                <div>
                    <p><h1>Say hello to </h1></p><p><h1>ReactJS</h1></p>
                    <img className="logo" src="/images/react-logo.svg"/>
                    <p>You will learn how to use</p>
                    <p>the most popular frontend library,</p>
                    <p>and become a super Ninja developer.</p>
                    <button>Awesome!</button>
                </div>
                <footer>
                    <span><img src="/images/icon1.png"/></span>
                    <span><img src="/images/icon2.png"/></span>
                    <span><img src="/images/icon3.png"/></span>
                    <span><img src="/images/icon4.png"/></span>
                </footer>
            </React.Fragment>
        )
    }
}


ReactDOM.render( <App />, document.querySelector('#myApp'))