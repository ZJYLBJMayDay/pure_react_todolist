import React from 'react'

class InputAndEnter extends React.Component {

    handOnChange = (e) => {
        const { updateTypeValue, currentItem } = this.props;
        updateTypeValue(e.target.value, currentItem);
    }

    onKeyDown = (e) => {
        const { addTodo,typeValue } = this.props;
        console.log(e);
        if (typeValue && e.keyCode === 13) {
            addTodo();
            // orderNumberList();
        }
    }
        

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown)
    }

    render() {
        const { typeValue } = this.props;
        return (

            <input id="addValue" type="text" placeholder="come on!!!" value={typeValue} onChange={this.handOnChange}/>

        )
    }
}

export default InputAndEnter;