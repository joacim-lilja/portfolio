import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="content">
                <h2 className="pagetitle">Contact Information</h2>
                <ul id="contactlist">
                    <li >
                        Email address:
                    </li>
                    <li>
                        Phone number:
                    </li>
                    <li>
                        Joacim.Lilja@outlook.com
                    </li>
                    <li>
                        +46727279734
                    </li>
                </ul>
            </div>
        );
    }
}