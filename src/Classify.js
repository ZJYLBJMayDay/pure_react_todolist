import React from 'react'

class Classify extends React.Component {

    handOnAllClick = () => {
        const {showAllData} = this.props;
        showAllData();
    }

    handOnProcessingClick = () => {
        const {showProcessingList} = this.props;
        showProcessingList();
    }

    handOnDoneClick =  () => {
        const {showDoneList} = this.props;
        showDoneList();
    }

    render() {
        return (
            <div>
                <span className="firstSpan" onClick={this.handOnAllClick}>All</span>
                <span className="secondSpan" onClick={this.handOnProcessingClick}>Processing</span>
                <span className="thirdSpan" onClick={this.handOnDoneClick}>Done</span>
            </div>
        );
    }
}

export default Classify;