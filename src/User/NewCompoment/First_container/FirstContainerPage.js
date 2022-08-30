import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BasicPost from '../../NewCompoment/Basicpost/BasicPostPage';
import UserDetails from '../../NewCompoment/UserDetails/UserDetailsPage';
import CurrentPost from '../../NewCompoment/CurrentPost/CurrentPostPage';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function First_Container () {
  const classes = useStyles();

  return (
    <div className={classes.root}> 
      <Grid container spacing={5}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
        <Grid item xs={3}>
          <Paper className={classes.paper}><UserDetails/></Paper>
        </Grid>
        <Grid item xs={5}>
        <CurrentPost/>
        </Grid>
        <Grid item xs={4}>
          <CurrentPost/>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}