import React from 'react';
import RecentAritcles from '../Slider/RecentArticlesSliderPage'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function WithHeaderAndQuoteExample() {
  const classes = useStyles();
  return (
    <div>
    <h5><b><u>Latest Articles Post</u></b></h5>
    <br/>

   <Grid container spacing={3}>
      <span id='div-recent-Page'>
        <Grid item xs={12}>
              <Paper className={classes.paper}>
                  
              </Paper>
         </Grid>
         </span>     
      </Grid>   
    </div> 
  );
}

export default WithHeaderAndQuoteExample;