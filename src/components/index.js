 import React from'react'
import {connect} from 'react-redux'
import {create} from '../action'
class NameForm extends React.Component {
     state = {value: ''}
    handleChange=(event)=> {
        //console.log(this.state)
      this.setState({value: event.target.value});
    }
  
    handleSubmit=(event) =>{
    this.props.create(this.state.value)
    this.setState({value:''})
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Add:<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  const mapStateToProps=(state)=>{
    console.log(state)
    return {todo:state.todo}//name of combineReducer
}
  export default connect( mapStateToProps,{create})(NameForm)