import * as React from 'react';

import './Divider.css';

const endings = require('./endings.png');

class Divider extends React.Component {
    render() {
        return (
            <div className="Divider">
                <img src={endings} />
                <div className="divider-bar" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/frame.png)`}} />
                <img src={endings} />
            </div>
        );
    }
}

export default Divider;
