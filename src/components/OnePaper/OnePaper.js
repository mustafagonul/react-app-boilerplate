import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class OnePaper extends React.Component {

  render() {
    const { classes } = this.props;
    
    return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            { this.props.children }
            </Paper>
          </Grid>
        </Grid>
    );
  }
}


export default withStyles(styles)(OnePaper);

