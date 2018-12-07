import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


class RadioButtonsGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedValue: '',
    };


    this.handleChange = this.handleChange.bind(this);

}



  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };








  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
      <Card className="styleList">
        <FormControl component="fieldset" className="mfForm">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className="radiogroupdiv"
            value={this.props.value}
            onChange={this.props.onGenderChange}
          >
            <FormControlLabel
            checked={this.state.selectedValue === 'female'}
              value="female"
              name="gender"
              control={<Radio color="primary" />}
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
            checked={this.state.selectedValue === 'male'}
            name="gender"
              value="male"
              control={<Radio color="primary" />}
              label="Male"
              labelPlacement="start"
            />

          </RadioGroup>
        </FormControl>

      </Card>
      </React.Fragment>
    );
  }
}


export default RadioButtonsGroup;
