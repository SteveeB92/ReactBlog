import React from 'react';
import HeaderStyles from './css/Header.css';
import TitleComp from './Title';
import SubTitle from './SubTitle';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {title: props.title, subTitle: props.subTitle};
    }

    render()
    {
        return (
            <div className={HeaderStyles.header}>
                <TitleComp name={this.state.title} />
                <SubTitle name={this.state.subTitle}/>
            </div>
        );
    };
}