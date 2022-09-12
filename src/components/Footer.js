import React from 'react';

class Footer extends React.Component{
    constructor(props) {
        super(props);
    }

render() {
    return (
    <footer class="footer">
        <p class="footer__town">&copy;2022 Mesto Russia</p>
    </footer>
    );
  }
}

export default Footer