import React, {Component} from 'react';
import './KeypadRow.css';
import Keypad from '../Keypad/Keypad';

class KeypadRow extends Component {
    render() {
        return (
            <div className="KeypadRow">
                {this.props.children}
            </div>
        );
    }
}

export default KeypadRow;