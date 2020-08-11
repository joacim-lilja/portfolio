import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="content">
                    <h1 className="pagetitle">About Me</h1>
                    <h2>22 year old soon to be software engineer living in Huskvarna, Sweden</h2>
                    <p>My spare time is spent walking my dog, playing games or developing cutting edge pasta
                    code, and hanging out with friends. I am heading into my last semester at Jönköping University
                    in the Mobile Platforms program. I am really interested in all kinds of technologies, ranging
                    from everything between cars and spaceships.</p>

                    <p>If I were to describe me as a person, I would say that I can be a bit shy, although not afraid
                        to talk to people, and i have a hard time not trying to help out people who could need it,
                        wether it be work or personal struggles.</p>
                    
                    <p>I love to find out how things work wether it's hardware or software, and have a quite easy time
                        learning new things.</p>
                    <div style={{"height" : "1000px"}}></div>
                    <p>I am very open to criticism, wether it be negative or positive, as I would see it as a chance to
                        improve and develop both my skills and me as a person.</p>
                </div>
            </div>
        );
    }
}