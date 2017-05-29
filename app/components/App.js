import React from 'react';
<<<<<<< HEAD
import Masthead from './Masthead';

export default class App extends React.Component {
=======
import './App.css';

/*class App extends React.Component {
>>>>>>> 252ffe88fc2476df749ce8f00e025ffbc12ffbaf
    constructor(props) {
        super(props);
    }
    render() {
<<<<<<< HEAD
        return (
            <Masthead />
        );
    }
}
=======
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
>>>>>>> 252ffe88fc2476df749ce8f00e025ffbc12ffbaf
