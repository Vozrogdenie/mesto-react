import React from 'react';
import headLogo from '../images/Mesto.png'
import '../index.css'

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

render() {
    return (
    <div class="header"> 
        <img class="header__logo" src={headLogo} alt="Логотип"/>
    </div>
    );
  }
}

export default Header