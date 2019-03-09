import * as React from 'react';

import './GameDescription.css';

const elarcs = require('./Elarcs.png');
const azra = require('./Azra.png');

class GameDescription extends React.Component {
    render() {
        return (
            <div id="GameDescription" className="GameDescription">
                <img src={elarcs} />
                <div className="text-container">
                    <div className="text-description">
                        Ordeal: Orchard of Dreams is a colorful and fun platformer full of dangers, treasures and peculiar characters.
                    </div>
                    <div className="text-description">
                        Join Elarcs and his friends to unveil the mysteries of his land, uncover a secret from the past and defeat the king of thieves.
                    </div>
                    <div className="text-description">
                        This is our first project, created with a lot of love, we hope you enjoy playing it as much as we enjoyed creating it!
                    </div>
                </div>
                <img src={azra} />
            </div>
        );
    }
}

export default GameDescription;
