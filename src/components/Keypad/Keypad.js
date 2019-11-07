import React, {Component} from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className="Keypad">
                {/* Row 1 */}
                <KeypadRow>
                <Button type='primary'>C</Button>
                <Button type='primary'>&larr;</Button>
                <Button type='operator'>%</Button>
                <Button type='operator'>/</Button>
                </KeypadRow>

                {/* Row 2 */}
                <KeypadRow>
                <Button type='Num'>7</Button>
                <Button type='Num'>8</Button>
                <Button type='Num'>9</Button>
                <Button type='operator'>*</Button>
                </KeypadRow>

                {/* Row 3 */}
                <KeypadRow>
                <Button type='Num'>4</Button>
                <Button type='Num'>5</Button>
                <Button type='Num'>6</Button>
                <Button type='operator'>-</Button>
                </KeypadRow>

                {/* Row 4 */}
                <KeypadRow>
                <Button type='Num'>1</Button>
                <Button type='Num'>2</Button>
                <Button type='Num'>3</Button>
                <Button type='operator'>+</Button>
                </KeypadRow>

                {/* Row 5 */}
                <KeypadRow>
                <Button type='Num'>0</Button>
                <Button type='Num'>.</Button>
                <Button type='large'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;