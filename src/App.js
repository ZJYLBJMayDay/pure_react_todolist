import './App.css';
import React from 'react'
import InputAndEnter from './InputAndEnter';
import List from './List'
import Search from './Search'
import Header from './Header'
import Classify from './Classify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      searchText: "",
      listData: [],
      originalTodoText: "",
      isSearch: false,
      isAll: true,
      isProcessing: false,
      isDone: false,
      searchData: [],
      processingData: [],
      doneData: []
    }
  }

  showProcessingList = () => {
    const newList = this.state.listData.filter((each) => {
      if(each.isMarked === false) {
        return each;
      }
    });
    console.log(newList);
    this.setState({     
      isProcessing:true,
      isAll: false,
      isDone: false,
      processingData: newList
    });
  }

  showDoneList = () => {
    const newList = this.state.listData.filter((each) => {
      if(each.isMarked) {
        return each;
      }
    });
    this.setState({  
      isDone:true, 
      isAll: false,
      isProcessing: false,
      doneData: newList
    });
  }

  showAllData = () => {
    this.setState({
      isAll:true
    });
  }

  changeMarked = (item) => {
    if (item) {
      const newList = this.state.listData.map((each) => {
        if (each.id === item.id) {
          each.isMarked = true;
        }
        return each;
      });
      this.setState({
        listData: newList
      })
    }
  }

  updateTypeValue = (newValue, item) => {
    if (item) {
      const newList = this.state.listData.map((each) => {
        if (each.id === item.id)
          each.content = newValue;
        return each;
      });

      this.setState({
        listData: newList
      });
    } else {
      this.setState({
        inputText: newValue
      });
    }
  };

  updateNumberText = (newNumber, item) => {
    const newList = this.state.listData.map((each) => {
      if (each.id === item.id) {
        each.number = newNumber;
      }
      return each;
    });
    this.setState({
      listData: newList
    })

    this.orderNumberList();
  };

  updateSearchText = (newSearch) => {
    if (newSearch) {
      this.setState({
        searchText: newSearch,
        isSearch:true,
        isAll: false
      });
    } else {
      this.setState({
        searchText: ""
      })
    }
    this.searchList(newSearch);
  };

  searchList = (newSearch) => {
    const newList = this.state.listData.filter((each) => {
      if (newSearch !== "" && each.content.includes(newSearch)) {
        return each;
      }
    });
    this.setState({
      searchData: newList
    });

    if (newSearch === "") {
      this.setState({
        searchData: this.state.listData
      })
    }

  };

  compareNumber(number) {
    return function (obj1, obj2) {
      return obj1[number] - obj2[number];
    };
  }

  addTodo = () => {
    const newItem = {
      id: Math.random() * 100,
      content: this.state.inputText,
      isEdit: false,
      number: 1,
      searchText: "",
      isMarked: false
    }
    if (newItem.content) {
      this.setState({
        listData: [...this.state.listData, newItem],
        inputText: ""
      });

    } else alert("please type to do");
    this.orderNumberList();


  };

  orderNumberList = () => {
    const newList = this.state.listData.sort(this.compareNumber('number'));
    this.setState({
      listData: newList
    });
  }

  delTodo = (item) => {
    this.setState({
      listData: this.state.listData.filter((each) =>
        each.id !== item.id
      )
    });
  };

  editTodo = (item) => {
    const newList = this.state.listData.map((each) => {
      if (each.id === item.id) {
        each.isEdit = true;
        this.setState({
          originalTodoText: item.content
        });
      }
      return each;
    });

    this.setState({
      listData: newList
    });
  };

  saveEdit = (item) => {
    const newList = this.state.listData.map((each) => {
      if (each.id === item.id) {
        each.isEdit = false;
      }
      return each;
    });
    this.setState({
      listData: newList
    });
  };

  cancelEdit = (item) => {
    const newList = this.state.listData.map((each) => {
      if (each.id === item.id) {
        each.content = this.state.originalTodoText;
        each.isEdit = false;
      }
      return each;
    });


    this.setState({
      listData: newList
      
    });
  };

  render() {
    const { listData, inputText, searchText, searchData, processingData, doneData,isSearch, isAll, isProcessing } = this.state;
    const dataList =( isAll ? listData : (isSearch ? (searchData) : (isProcessing ? (processingData) : (doneData))));
    return (
      <div className="App">
        {

          listData.length === 0 ? (<Header />) : (
            <div>
              <Search typeValue={searchText} updateSearchText={this.updateSearchText} />
              <List
                list={dataList}
                delTodo={this.delTodo}
                editTodo={this.editTodo}
                cancelEdit={this.cancelEdit}
                saveEdit={this.saveEdit}
                updateTypeValue={this.updateTypeValue}
                typeValue={inputText}
                updateNumberText={this.updateNumberText}
                changeMarked={this.changeMarked}
              />
              
            </div>
          )
        }
        <div>
          {listData.length !== 0 ? <Classify showProcessingList={this.showProcessingList} showAllData={this.showAllData} showDoneList={this.showDoneList}/> : ""
          }
          <InputAndEnter typeValue={inputText} updateTypeValue={this.updateTypeValue} addTodo={this.addTodo} orderNumberList={this.orderNumberList} />
        </div>

      </div>
    )
  }
}

export default App;
