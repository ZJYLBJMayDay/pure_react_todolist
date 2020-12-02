import React from "react";

class Item extends React.Component {

  
  handOnClick = () => {
    const {changeMarked, item} = this.props;
    changeMarked(item);
  }

  render() {
    const { item } = this.props;
    return (
  
      <li key={item.id} onClick={this.handOnClick} className={`${item.isMarked ? "marked" : null}`}> {item.content}</li>
    );
  }
}



export default Item;