import React from 'react'
import TextField from 'material-ui/lib/text-field'
import FlatButton from 'material-ui/lib/flat-button'
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import Snackbar from 'material-ui/lib/snackbar'
import capitalize from '../../../../../tools/capitalize'
import dateFormat from 'dateformat'

export default React.createClass({

  getInitialState() {
    let item = this.props.item
    return {
      item: this.props.item,
      open: false,
      autoHideDuration: 5000
    }
  },

  componentWillReceiveProps(nextProps) {
    this.setState({item: nextProps.item})
  },

  handleTextFieldChange(event) {
    event.preventDefault()
    event.stopPropagation()
    let item = this.state.item
    item[event.target.name] = event.target.value
    this.setState({item})
  },

  handleDateChange(event, date) {
    let item = this.state.item
    item.dob = date
    this.setState({item})
  },

  handleClose() {
    this.setState({open: false})
  },

  handleUndo() {
    clearTimeout(this.undo)
    delete this.undo
    this.handleClose()
  },

  handleEdit() {
    this.setState({open: true})
    this.undo = setTimeout(() => {
      this.props.Api.editItem(this.props.item._id, this.state.item)
    }, this.state.autoHideDuration)
  },

  render() {
    const name = capitalize(this.props.name.toLowerCase())
    const alias = name.toLowerCase()
    const textFieldStyle = {width: '98%', marginLeft: '1%', marginRight: '1%'}
    return (
      <div>
        <TextField
          hintText={`enter ${alias} name`}
          floatingLabelText={`${name} name`}
          style={{minWidth: '50%'}}
          inputStyle={textFieldStyle}
          hintStyle={textFieldStyle}
          floatingLabelStyle={textFieldStyle}
          value={this.state.item.name}
          name='name'
          onChange={this.handleTextFieldChange}
        />
        <TextField
          disabled={true}
          floatingLabelText='Created at'
          style={{minWidth: '50%'}}
          inputStyle={textFieldStyle}
          hintStyle={textFieldStyle}
          floatingLabelStyle={textFieldStyle}
          value={dateFormat(new Date(this.state.item.createdAt), "dddd, mmmm dS, yyyy, hh:MM:ss")}
          name='createdAt' />
        <TextField
          hintText={`enter ${alias} mobile`}
          floatingLabelText='Mobile'
          style={{minWidth: '50%'}}
          inputStyle={textFieldStyle}
          hintStyle={textFieldStyle}
          floatingLabelStyle={textFieldStyle}
          value={this.state.item.telephone || ''}
          name='telephone'
          onChange={this.handleTextFieldChange} />
        <DatePicker
          hintText="Landscape Dialog"
          mode="landscape"
          textFieldStyle={{height: '72px'}}
          style={{display: 'inline-block', minWidth: '50%', boxSizing: 'border-box', verticalAlign: 'top'}}
          value={this.state.item.dob ? new Date(this.state.item.dob) : ''}
          onChange={this.handleDateChange} />
        <TextField
          hintText={`${alias} location`}
          floatingLabelText='City'
          style={{minWidth: '50%'}}
          inputStyle={textFieldStyle}
          hintStyle={textFieldStyle}
          floatingLabelStyle={textFieldStyle}
          value={this.state.item.city || ''}
          name='city'
          onChange={this.handleTextFieldChange} />
        <TextField
          multiLine
          fullWidth
          hintText={`enter information about ${alias}`}
          floatingLabelText='About'
          inputStyle={textFieldStyle}
          hintStyle={textFieldStyle}
          floatingLabelStyle={textFieldStyle}
          name='about'
          value={this.state.item.about || ''}
          onChange={this.handleTextFieldChange} />
        <FlatButton
          label='Update'
          primary={true}
          style={{width: '100%'}}
          onTouchTap={() => this.handleEdit()}/>
        <Snackbar
          open={this.state.open}
          message={`${name} will be updated in 5s`}
          action='undo'
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleUndo}
          onRequestClose={this.handleClose}
        />
      </div>
    )
  }
})
