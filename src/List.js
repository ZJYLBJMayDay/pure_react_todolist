import React from 'react'
import InputAndEnter from './InputAndEnter';
import Number from './Number'
import Button from './Button'
import Item from './Item'

class List extends React.Component {

    render() {
        const {list,delTodo,editTodo,updateTypeValue,saveEdit,cancelEdit,updateNumberText,changeMarked} = this.props;
        return(
            <ol>
                {list.map((item) => {
                    return (
                        <div key={item.id}>
                            <Number currentNumber={item} typeValue={item.number} updateNumberText={updateNumberText} />
                            {item.isEdit ? (
                                <InputAndEnter currentItem={item} typeValue={item.content} updateTypeValue={updateTypeValue} />
                            ) : (
                                <Item item={item} changeMarked={changeMarked}/>
                            )}

                            {item.isEdit ? (
                                <>
                                    <Button text="cancel" currentItem={item} cancelEdit={cancelEdit} originalList={list}/>
                                    <Button text="save" currentItem={item} saveEdit={saveEdit} />
                                </>
                            ) : (
                                <Button text="edit" setDisabled={`${item.isMarked ? "disabled" : ""}`}  editTodo={editTodo} currentItem={item}/>
                            )}

                            <Button text="delete" delTodo={delTodo} currentItem={item}/>
                        </div>
                    );
                })}
            </ol>
        );
    }
}

export default List;