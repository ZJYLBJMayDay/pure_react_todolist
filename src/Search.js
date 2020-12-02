import React from 'react';


class Search extends React.Component {
    handOnChange = (e) => {
        const { updateSearchText} = this.props;
        updateSearchText(e.target.value);
    };

    render() {
        const { typeValue } = this.props;
        return <input type="text" placeholder="search the to do list" value={typeValue} onChange={this.handOnChange}/>
    }
}

export default Search;