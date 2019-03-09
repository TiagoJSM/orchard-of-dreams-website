import * as React from 'react';

import './Trailer.css';

class Trailer extends React.Component {
    render() {
        return (
            <div id="Trailer" className="Trailer">
                <iframe 
                    width="640" 
                    height="480" 
                    src="https://www.youtube.com/embed/mRdQojVff5k" 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}

export default Trailer;
