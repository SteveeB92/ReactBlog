import React from 'react';
import NavigationContainer from './NavigationContainer';
import MastheadStyle from './css/Masthead.css';

export default class Masthead extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className={MastheadStyle.masthead}>
                <NavigationContainer />
            </div>
        );
    }
}