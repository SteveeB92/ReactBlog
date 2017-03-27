import React from 'react';
import './App.css';

/*class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div></div>;
    }
}*/

var App = React.createClass({
    
    render : function () {
        return (
            <div class="blog-masthead">
                <div class="container">
                    <nav class="blog-nav">
                        <a class="blog-nav-item active" href="#">Home</a>
                        <a class="blog-nav-item" href="#">New features</a>
                        <a class="blog-nav-item" href="#">Press</a>
                        <a class="blog-nav-item" href="#">New hires</a>
                        <a class="blog-nav-item" href="#">About</a>
                    </nav>
                </div>
            </div>
        );
    }
});

export default App;
