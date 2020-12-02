import React from 'react';

class Button extends React.Component {
    handOnClick = () => {
        const {
            // typeValue,
            // addTodo,
            delTodo,
            editTodo,
            saveEdit,
            cancelEdit,
            originalList,
            text,
            currentItem
        } = this.props;
        switch (text) {
            case "delete":
                delTodo(currentItem);
                break;
            case "edit":
                editTodo(currentItem);
                break;
            case "save":
                saveEdit(currentItem);
                break;
            case "cancel":
                cancelEdit(currentItem,originalList);
                break;
            default:
                return "";
        }
    };

    render() {
        const { text, setDisabled } = this.props;
        return (
            <button onClick={this.handOnClick} disabled={setDisabled}>
                { text }
            </button>
        );
    }
}

export default Button;