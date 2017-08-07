import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <h1>Welcome to Pictogram Fun !!!</h1>

                <i className="fa fa-universal-access home-main-icon" aria-hidden="true"/>

                <div className="home-section-sns">
                    <a href="https://www.instagram.com/pictogram.fun/" target="_blank">
                        <i className="fa fa-instagram sns-icon" aria-hidden="true"/>
                    </a>
                    <a href="https://twitter.com/pictogram_fun" target="_blank">
                        <i className="fa fa-twitter sns-icon" aria-hidden="true"/>
                    </a>
                </div>
            </div>
        );
    }
}
