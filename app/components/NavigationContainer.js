import React from 'react';
import Navigation from './Navigation';
import NavigationContainerStyle from './css/NavigationContainer.css'

export default class NavigationContainer extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className={NavigationContainerStyle.container}>
                <Navigation />
            </div>
        );
    }
}                