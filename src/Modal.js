import React, { Component } from 'react';
import ReactModal from'react-modal';

export default class Modal extends Component {

  constructor(props) {
    super(props);
    this.saveCard = this.saveCard.bind(this);
  }

  get modalStyles() {
    return {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      },
      content: {
        position: 'absolute',
        top: '30%',
        left: '30%',
        right: '30%',
        bottom: 'auto',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
    }
  }
  
  saveCard(e) {
    e.preventDefault();

    const data = {
      title: this.title.value,
      description: this.description.value,
      selectItem: this.selectItem.value
    }

    this.props.updateCard(data);
  }

  render() {
    return (
      <div>
        <ReactModal isOpen={this.props.isOpen} contentLabel="Minimal Modal Example" style={this.modalStyles}>
          
          <form onSubmit={(e) => this.saveCard(e)}>
            <div className="form-group">
              <label>Title</label>
              <input ref={(input) => this.title = input} type="text" className="form-control" placeholder="Title"/>
            </div>
            
            <div className="form-group">
              <label>Description</label>
              <input ref={(input) => this.description = input} type="text" className="form-control" placeholder="Description"/>
            </div>
            
            <div className="form-group">
              <label>Select Item</label>
              <select ref={(input) => this.selectItem = input} className="form-control">
                <option value="item1">Item 1</option>
                <option value="item2">Item 2</option>
                <option value="item3">Item 3</option>
              </select>
            </div>
            
            <div>
              <button className="pull-right btn btn-success" type="submit">Save</button>
            </div>
          </form> 

          <button 
            className="pull-right btn btn-success" onClick={() => this.props.triggerModal(false)}>Close</button>
        </ReactModal>
      </div>
    );
  }
}


    
