import React from 'react'


class MyReadingList extends React.Component {

  handleDelete() {
    this.props.onDelete(this.props.currentList)
  }

  render(){
    return (
      <li className="item">
        <div className="reading-info">
          <div className="section-title" >
            <span className="label-title label"> Title: </span>

            <span className="entry title">{this.props.singleList.Title} </span>
          </div>
          <div className="section-author">
            <span className="label-author label" > Author: </span>
            <span className="entry author"> {this.props.singleList.Author}</span>
          </div>
          <div className="section-type">
            <span className="label label-type"> Type: </span>
            <span className="entry type"> {this.props.singleList.Type}</span>
          </div>
          <div className="section-info">
            <span className="label label-info"> Info: </span>
            <a className="entry info" href={this.props.singleList.Info}> {this.props.singleList.Info} </a>
          </div>
        </div>
        <button className="btn btn-primary" onClick={this.handleDelete.bind(this)}>
        Delete </button>

      <div className="end-line"> </div>
      </li>
    )
  }
}

module.exports = MyReadingList;
