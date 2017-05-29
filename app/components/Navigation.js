import React from 'react';
import NavigationItem from './NavigationItem';
import NavigationStyle from './css/Navigation.css';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        return (
            <nav className={NavigationStyle.blogNav}>
                <NavigationItem isActive="1" name="Home" />
                <NavigationItem isActive="0" name="New Features" />
                <NavigationItem isActive="0" name="Press" />
                <NavigationItem isActive="0" name="New Hires" />
                <NavigationItem isActive="0" name="About" />
            </nav>
        );
    }
}                