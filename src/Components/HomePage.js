import React, { Component } from 'react';

class HomePage extends Component {
    state = {  }

    handleClick = () => {

    }

    render() { 
        return ( 
            <div className="container d-flex justify-content-center" id ='quote-box'>
                <div className="row ">
                    <div className="d-flex flex-column ">
                        <div className="card ">
                            <div className="card-body p-5" id = 'text'>
                                <div className="card-textd">
                                    <div className="container">
                                        <div className="row">
                                            <blockquote className="blockquote mb-0">
                                                <p> <i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                <footer className="blockquote-footer text-right" id = 'author'>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'container'>
                                    <div className="d-flex flex-row">
                                        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer" id = 'tweet_quote' className="card-link  "><i className="fab fa-twitter-square "></i></a>
                                        <a href="https://www.tumblr.com/login" target='_blank' rel="noopener noreferrer" className="card-link " id ='tumblr'><i className="fab fa-tumblr-square"></i></a>
                                        <button type = 'button' className="btn text-nowrap">New Quote</button>
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