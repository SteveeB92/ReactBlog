import React from 'react';
import NavigationItemStyle from './css/NavigationItem.css'

export default class NavigationItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: props.name, class: props.isActive == 1 ? "blog-nav-item active" : "blog-nav-item"};
    }

    render() {
        return (
            <a className={NavigationItemStyle.blogNavItem} href="#">{this.state.name}</a>
        );
    }

}