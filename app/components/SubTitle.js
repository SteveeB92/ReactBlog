import React from 'react';
import ClassNames from 'classnames';
import SubTitleStyles from './css/SubTitle.css';
import LeadStyles from './css/Lead.css';

export default class SubTitle extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: props.name};
    }
    render(){
        return(
            <div className={ClassNames(SubTitleStyles.subTitle, LeadStyles.lead)}>{this.state.name}</div>
        );
    }
}