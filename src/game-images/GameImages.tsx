import * as React from 'react';
import Lightbox from 'react-images';

import './GameImages.css';

const img1 = require('../images/img1.jpg');
const img2 = require('../images/img2.jpg');
const img3 = require('../images/img3.jpg');
const img4 = require('../images/img4.jpg');
const img5 = require('../images/img5.jpg');
const img6 = require('../images/img6.jpg');
const img7 = require('../images/img7.jpg');
const img8 = require('../images/img8.jpg');
const img9 = require('../images/img9.jpg');

type State = {
    isOpen: boolean;
    currentImage: number;
};

class GameImages extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isOpen: false,
            currentImage: 0,
        };
    }

    render() {
        const imgSrcs = [
            img1, img2, img3, img4, img5, img6, img7, img8, img9
        ];
        return (
            <div id="GameImages" className="GameImages">
                <div className="image-grid">
                    {imgSrcs.map((src, idx) => (
                        <img 
                            key={`GameImages${idx}`} 
                            className="image" 
                            src={src}
                            onClick={() => this.openLightbox(idx)} />
                    ))}
                </div>
                <Lightbox
                    currentImage={this.state.currentImage}
                    isOpen={this.state.isOpen}
                    images={imgSrcs.map(src => ({ src }))}
                    onClose={this.closeLightbox}
                    onClickPrev={() => this.gotoPrevLightboxImage(imgSrcs.length)}
                    onClickNext={() => this.gotoNextLightboxImage(imgSrcs.length)}
                    showThumbnails
                    />
            </div>
        );
    }

    openLightbox = (idx: number) => {
        this.setState(() => ({ isOpen: true, currentImage: idx }));
    }

    closeLightbox = () => {
        this.setState(() => ({ isOpen: false }));
    }

    gotoPrevLightboxImage = (imgCount: number) => {
        this.setState((state) => ({ 
            currentImage: state.currentImage === 0 ? imgCount - 1 : state.currentImage - 1 
        }));
    }

    gotoNextLightboxImage = (imgCount: number) => {
        this.setState((state) => ({ 
            currentImage: state.currentImage === (imgCount - 1) ? 0 : state.currentImage + 1 
        }));
    }
}

export default GameImages;
