import React from 'react';
import packageJson from '../../package.json';

export default class About extends React.Component {
    render() {
        return (
            <div id="about">
                <p>{packageJson.description}</p>
            </div>
        );
    }
}
