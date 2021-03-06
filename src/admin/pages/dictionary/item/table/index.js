import React from 'react'
import {Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import Delete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'


export default React.createClass({
  getInitialState() {
    return {type: '_id', order: 1}
  },

  handleSort(newType) {
    this.setState(({type, order}) => ({type: newType, order: newType == type ? order * -1 : 1}))
  },

  render () {
    const items = this.props.items
      .filter(({name}) => name.indexOf(this.props.search) > -1)
      .sort((a, b) => a[this.state.type] > b[this.state.type] ? this.state.order : this.state.order * -1)
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn tooltip='Number' style={{width: '10%'}}>№</TableHeaderColumn>
              <TableHeaderColumn tooltip='Id'>
                <span style={{cursor: 'pointer'}} onClick={() => this.handleSort('_id')} >
                  Id {this.state.type == '_id' && (this.state.order == -1 ? <span>&#x25B4;</span> : <span>&#x25BE;</span>)}
                </span>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip={this.props.name}>
                <span style={{cursor: 'pointer'}} onClick={() => this.handleSort('name')}>
                  {this.props.name} {this.state.type == 'name' && (this.state.order == -1 ? <span>&#x25B4;</span> : <span>&#x25BE;</span>)}
                </span>
              </TableHeaderColumn>
              <TableHeaderColumn tooltip='Edit' style={{width: '15%'}}>Edit</TableHeaderColumn>
              <TableHeaderColumn tooltip='Delete' style={{width: '15%'}}>Delete</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody showRowHover={true} stripedRows={false} displayRowCheckbox={false}>
            {
              items.slice(0, this.props.count).map((item, index) => (
                <TableRow key={index}>
                  <TableRowColumn style={{width: '10%'}}>{index + 1}</TableRowColumn>
                  <TableRowColumn>{item._id}</TableRowColumn>
                  <TableRowColumn>{item.name}</TableRowColumn>
                  <TableRowColumn style={{width: '15%'}}>
                    <IconButton onTouchTap={() => this.props.handleEdit(item)}><ModeEdit /></IconButton>
                  </TableRowColumn>
                  <TableRowColumn style={{width: '15%'}}>
                    <IconButton onTouchTap={() => this.props.handleRemove(item._id)}><Delete /></IconButton>
                  </TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
        {
          this.props.count < items.length &&
          <FlatButton
            label='More'
            secondary
            style={{width: '100%'}}
            onClick={this.props.handleMore} />
        }
      </div>
    )
  }
})