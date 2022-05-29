import React from "react";
import "../../style/main.scss"
class Main extends React.Component {

    render() {
        return (
            <>
                <div className="main">
                    <div className="header">
                        <h1>Mindful Music</h1>
                    </div>
                    <div className="container">
                        <div className="content">
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-font">
                                        <h1>Music</h1>
                                        <h5>
                                            <i>"Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife."</i>
                                            <br /> - Kahlil Gibran 
                                        </h5>
                                    </div>
                                    <div className="flip-card-end">

                                    </div>
                                </div>

                                <div className="flip-card-inner">
                                    <div className="flip-card-font">
                                        <h1>Piano</h1>
                                        <h5>
                                            <i>"The piano is an acoustic, stringed musical instrument invented in Italy"</i>
                                            
                                        </h5>
                                    </div>
                                    <div className="flip-card-end">

                                    </div>
                                </div>

                                <div className="flip-card-inner">
                                    <div className="flip-card-font">
                                        <h1>Guitar</h1>
                                        <h5>
                                            <i>"The guitar is a fretted musical instrument that typically has six strings"</i>
                                            
                                        </h5>
                                    </div>
                                    <div className="flip-card-end">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </>
            
        )
    }
}

export default Main