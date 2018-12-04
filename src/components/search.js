
import React from 'react';
import Button from '@material-ui/core/Button';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);

  }


  handleChange(event) {
   this.setState({value: event.target.value});

 }



  render() {

    return (

      <form onSubmit={this.props.handleSubmit}>
        <legend>Enter location:</legend>
        <textarea  name="city" onChange={this.handleChange} />

             <button>Search</button>


           </form>
    );
  }
}


export default Search;
