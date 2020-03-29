import React from 'react';
import ContainerStyles from './css/Container.css';
import Header from './Header';

export default class MainBodyContainer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={ContainerStyles.container}>
                <Header title="Title" subTitle="Sub Title" />  
            </div>
        );
    };
}