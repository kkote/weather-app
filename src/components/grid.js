import React, { Component } from 'react';
import { Grid, Cell } from 'react-flexr';
import 'react-flexr/styles.css'

class Grids extends React.Component {
  render() {
    return (
     <Grid>

        <Cell size='2/3'>
        <Grid>
        <Cell>
           <span> Title </span>
        </Cell>
        <Cell size='1/3'>
           Subtitle
        </Cell> </Grid>

          1
        </Cell>
        <Cell >
          2
        </Cell>
        <Cell size='1/2'>
        3

          Fills Half
        </Cell>
         <Cell>
         4
          Fills Rest.. (Yay for Flexbox)
        </Cell>



        <Cell size={0.5} lap={0.25}>
          Fills a quarter on lap and half everywhere else
        </Cell>

        <Cell palm='3/12' lap='1/2'>
          Fills a quarter on palm (mobile), half on lap and dynamicly sized everywhere else
        </Cell>

        <Cell palm='hidden' size='1/2'>
          Hidden on palm, half width otherwise
        </Cell>
      </Grid>
    );
  }
}

export default Grids;