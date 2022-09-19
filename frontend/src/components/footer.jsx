/* footer component */
import React, { Component } from 'react';
import '../styles/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="footer-parent">
                <div className="footer">
                    <p>Email us: <a href="mailto:alaa.aoun1996001@gmail.com">alaa.aoun1996001@gmail.com</a></p>
                    <p>Call us: (+216) 50 948 502</p>
                    <p>Visit us: Wasselni, Orange Digital Center, Tunisie Lac1</p>
                </div>
            </div>
        )
    }
}
