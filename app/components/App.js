import React from 'react';
import Masthead from './Masthead';
import MainBodyContainer from './MainBodyContainer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Masthead />
                <MainBodyContainer/>
            </div>
        );
    }
}