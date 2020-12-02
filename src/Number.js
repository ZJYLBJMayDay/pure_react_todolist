import React from 'react';

class Number extends React.Component {
    handOnChange = (e) => {
        const { updateNumberText, currentNumber } = this.props;
        updateNumberText(e.target.value, currentNumber);
    };

    render() {
        const { typeValue } = this.props;
        return (
            <input type="number" value={typeValue} onChange={this.handOnChange}/>
        );
    };
}



export default Number;