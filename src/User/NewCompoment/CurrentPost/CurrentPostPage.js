import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CurrentPostPage() {
  const classes = useStyles();

  return (
   <div>
     <h5><b><u>Current Post</u></b></h5><br/>
      <Grid container spacing={3}>
          <span id='div-curretn-Page'>
            <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    
                  </Paper>
            </Grid>
            </span>     
        </Grid> 
   </div>
  );
}