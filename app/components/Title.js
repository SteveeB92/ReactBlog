import React from 'react';
import TitleStyle from './css/Title.css';

export default class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: props.name};
    }

    render() {
        return (
            <h1 className={TitleStyle.title}>{this.state.name}</h1>
        );
    }
}