
import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


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
      <div className="blogsearchpaper">
      <form onSubmit={this.props.handleSubmit}>


        <TextField label="Enter location"  name="city" onChange={this.handleChange} defaultValue="Chicago" variant="outlined" />

             <Button variant="contained" type="submit">Search</Button>


           </form>
         </div>
    );
  }
}


export default Search;
