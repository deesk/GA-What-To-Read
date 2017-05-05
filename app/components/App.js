import React from 'react'
import $ from 'jquery'
import _ from 'lodash'

import MyReadingList from './readingList'
import AddForm from './addForm'

class AppInterface extends React.Component {

  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.state = {
      formBodyVisible: false,
      readingList:[]
    }
  }

  componentDidMount() {
    this.serverRequest = $.get('./data.json', function(result){
      var tempReadingList = result;
      this.setState({
        readingList: tempReadingList
      });
    }.bind(this));
  }

  componentsWillUnmount() {
    this.serverRequest.abort();
  }

  deleteMessage(list) {
    var allReadings = this.state.readingList;
    var updatedList = _.without(allReadings, list);
    this.setState ({
      readingList: updatedList
    })
  }

  addItem(tempReading) {
    console.log(this)
    var tempList = this.state.readingList;
    tempList.push(tempReading);

    this.setState({
      readingList: tempList,
      formBodyVisible: false
    })
  }

  toggleAddDisplay() {
    var tempVisibility = !this.state.formBodyVisible;
    this.setState({
      formBodyVisible: tempVisibility
    });
  }

  render() {
    var filteredLists = this.state.readingList;
    filteredLists = filteredLists.map(function(list, index){
      return (
        <MyReadingList
          key = { index }
          singleList = { list }
          currentList = { list }
          onDelete = { this.deleteMessage } />
      )
    }.bind(this));

    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="#">
            <img src="http://icon-icons.com/icons2/505/PNG/512/child-reading-book_icon-icons.com_49293.png" width="100" height="100" className="d-inline-block align-top" alt="" />
            <span className="name"> What To Read </span>
          </a>
        </nav>

        <div className="app-interface">
          <AddForm
            formVisible = { this.state.formBodyVisible }
            addList = { this.addItem }
            bodyVisible = { this.state.formBodyVisible }
            handleToggle = { this.toggleAddDisplay }/>
          <ul className="item-list">
            { filteredLists }
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = AppInterface
