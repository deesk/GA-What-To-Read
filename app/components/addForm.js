
import React from 'react'

class AddForm extends React.Component {

  handleAdd(e) {
    var tempReading = {
      Title: this.refs.inputTitle.value,
      Author: this.refs.inputAuthor.value,
      Type: this.refs.inputType.value,
      Info: this.refs.inputNote.value
    }
    e.preventDefault();
    this.props.addList(tempReading);
  }

  toggleFormDisplay() {
    this.props.handleToggle();
  }

  render() {
    var displayFormBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    }

    return(
      <div>
        <h2 className="add-list" onClick={this.toggleFormDisplay.bind(this)}> Add Reading List </h2>
        <div className="form" style={ displayFormBody }>
          <div className="form-body" >
            <form onSubmit={ this.handleAdd.bind(this) }>
              <div className="form-group row">
                <label htmlFor="example-text-input" className="col-2 col-form-label">Title</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="example-text-input" ref="inputTitle"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="example-search-input" className="col-2 col-form-label">Author</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="example-search-input" ref="inputAuthor"/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="example-search-input" className="col-2 col-form-label">Type</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="example-search-input" ref="inputType" />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="example-search-input" className="col-2 col-form-label">Note</label>
                <div className="col-10">
                  <input className="form-control" type="text" id="example-search-input" ref="inputNote" />
                </div>
              </div>
              <button type="submit" className="btn btn-danger">Add to List</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = AddForm
