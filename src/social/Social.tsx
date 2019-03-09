import * as React from 'react';
import { Link } from "react-router-dom";
const { SocialIcon } = require('react-social-icons');
const MailchimpSubscribe = require('react-mailchimp-subscribe');

const amberIcon = require('./Amber Icon.png');

import './Social.css';

class Social extends React.Component {
    render() {
        const url = "https://orchardofdreams.us20.list-manage.com/subscribe/post?u=838141e11c88604710b1febd7&amp;id=e232e9dbd9";
        return (
            <div id="Social" className="Social">
                <div>
                    <div>Add your email to our mailing list!</div>
                    <MailchimpSubscribe.default url={url}/>
                </div>
                <div className="social-media">
                    <SocialIcon url="https://twitter.com/OrdealOf" />
                    <SocialIcon url="https://www.facebook.com/ordealorchardofdreams" />
                </div>
                <div>
                    <a href="mailto:tiagomartins@orchardofdreams.com" target="_top">Send us an email, we would like to hear from you!</a>
                </div>
                <div>
                    For more information, details and goodies check our
                    <Link className="nav-link presskit-link" to="/press/">
                        presskit!
                    </Link>
                  </div>
                <div>
                    <img className="company-logo" src={amberIcon} />Developed by Amber Fragment
                </div>
            </div>
        );
    }
}

export default Social;
