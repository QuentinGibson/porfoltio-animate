import React from 'react';

function Footer() {
    return ( 
        <div className="section is-dark">
            <div className="container flexh-space-between">
                <div className="col lg-6 md-12">
                    <div className="c-heading4">
                        <h4 className="c-heading4__text">get in touch</h4>
                    </div>
                    <div>For work inquiries, or just to say hi 👋<br /><a href="mailto:quentingibson94@gmail.com">quentingibson94@gmail.com</a></div>
                </div>
                <div className="col lg-3 md-12">
                    <div className="c-heading4">
                        <h4 className="c-heading4__text">let&#x27;s connect</h4>
                    </div>
                    <div className="flexh-align-center">
                        <a href="#" className="fa-brand on-dark margin-right"></a>
                        <a href="#" className="fa-brand on-dark margin-right"></a>
                        <a href="#" className="fa-brand on-dark margin-right"></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;