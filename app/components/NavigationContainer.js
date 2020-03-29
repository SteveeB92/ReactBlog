import React from 'react';
import Navigation from './Navigation';
import ContainerStyle from './css/Container.css'

export default class NavigationContainer extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <div className={ContainerStyle.container}>
                <Navigation />
            </div>
        );
    }
}                