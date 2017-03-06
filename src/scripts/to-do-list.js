import React from 'react'

export const ToDoList = React.createClass({

  getInitialState: function(){
    return {
      toDoItems: []
    }
  },
  _removeItem: function(index){
    let newArray = []
    let filteredItemsArray = this.state.toDoItems.filter(function(object, indexToRemove){
    if (index !== indexToRemove){
      newArray.push(object)
      return true
    }
  })
    this.setState({
      toDoItems: newArray
    })
  },

  _updateTheItems: function(newItem){
    let itemsArrayCopy = this.state.toDoItems.map(function(copy){
      return (
        copy
      )
  })
  itemsArrayCopy.push(newItem)
  this.setState({
    toDoItems: itemsArrayCopy
    })
  },
  render: function(){
    return (
      <div>
        <h3 className='header'>Todo List</h3>
        <InputItem _updateItemCb={this._updateTheItems}/>
        <p className='input-border'></p>
        <ToDoBox itemList={this.state.toDoItems} removeCb={this._removeItem}/>
      </div>
    )
  }
})

const InputItem = React.createClass({

  _handleNewItem: function(){

    let newItemObj = {
      item: this.refs.itemInput.value
    }

  this.props._updateItemCb(newItemObj)
  this.refs.itemInput.value = ''

},

  render: function(){
    return (
      <div className='input-bar'>
        <input className='input-field' ref='itemInput' type='text' placeholder='Todo item'/>
        <button className='btn' onClick={this._handleNewItem}>+</button>
      </div>
    )
  }
})

const ListItem = React.createClass({


  _handleItemClick: function(itemsObj, index){

    this.props.removeCb(this.props.position)
  },

  render: function(){


    return (
      <li className='block'>
        <input type='checkbox' value='on'></input>
        <p className='block'>{this.props.userData.item}</p>
        <p className='block delete-button' onClick={this._handleItemClick}>X</p>
      </li>

    )
  }
})

const ToDoBox = React.createClass({

  _createToDoListItems: function(arrayOfListObjects){

    let component = this
    let jsxArray = arrayOfListObjects.map(function(listObj, index){

      return (
          <ListItem position={index} userData={listObj} removeCb={component.props.removeCb}/>
      )
    })
    return jsxArray
  },
  render: function(){
    return (
      <div>
        <ul className="items-container">
          {this._createToDoListItems(this.props.itemList)}
        </ul>
      </div>
    )
  }
})
