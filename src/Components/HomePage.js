import React, { Component } from 'react';

class HomePage extends Component {
    state = {  }

    handleClick = () => {

    }

    render() { 
        return ( 
            <div className="container" id ='quote-box'>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mx-auto">
                            <div className="card-body p-5" id = 'text'>
                                <div className="card-textd">
                                    <div className="container">
                                        <div className="row">
                                            <blockquote className="blockquote mb-0">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer className="blockquote-footer float-right" id = 'author'>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'container'>
                                    <div className="row mx-auto">
                                        <a href="https://twitter.com" id = 'tweet_quote' className="card-link pl-5"><i className="fab fa-twitter-square "></i></a>
                                        <a href="https://www.tumblr.com/login" className="card-link" id ='tumblr'><i className="fab fa-tumblr-square"></i></a>
                                        <button type = 'button' className="btn float-right">New Quote</button>
                                    </div>

                                </div>
                           </div>
                        </div>
                    </div>    
                </div>
            </div>
         );
    }
}
 
export default HomePage;