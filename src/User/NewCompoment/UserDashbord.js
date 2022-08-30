import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Head/Header'
import UserDetailsPage from './UserDetails/UserDetailsPage';
import BasicPostPage from './Basicpost/BasicPostPage';
import CurrentPostPage from './CurrentPost/CurrentPostPage';
import Footer from './Footer/Footer';
import RecentPage from './RecentPost/RecentPage';
import LatestArticles from './LatestArticles/LatestArticlesPage'
import PopularPostPage from './PopularPost/PopularPostPage'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecentArticlesSlider from './Slider/RecentArticlesSliderPage';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function UserDashbord() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <span><Header/></span>
      </div>
      <Grid container spacing={3}>
          <Grid item xs={3}>
           <div className='div-one-class'>
           <span><UserDetailsPage/></span>
           </div>
          </Grid> 

         <Grid item xs={9}>
         <div id="div-recent-post">
          <Paper className={classes.paper}><span><RecentPage/></span></Paper>
         </div>
          
        </Grid>

        {/* <Grid item xs={3}>
          <Paper className={classes.paper}><span><RecentNeswSliderPage/></span></Paper>
        </Grid> */}
      </Grid>
      <hr/>
      {/* Leftpost Middil Post Right Post */}
      <Grid container spacing={3}>
          <Grid item xs={6}>
            <div className='div-three-class'>
              <Paper className={classes.paper}><span><BasicPostPage/></span></Paper>
            </div>
          </Grid>
          <Grid item xs={6}>
           <div className='div-two-class'>
             <Paper className={classes.paper}><span><CurrentPostPage/></span></Paper>
            </div>  
          </Grid>
      </Grid>
    <div>
      <br/><hr/>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.paper}><span><RecentArticlesSlider/></span></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><span><PopularPostPage/></span></Paper>
        </Grid>
      </Grid>
    </div>
      {/* <div className='div-sidebar'>
        <span><Sidebar/></span>
      </div>
      <div className='div-slider'>
        <span><Slider/></span>
      </div> */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <div className='div-footer'>
              <Paper className={classes.paper}><Footer/></Paper>
            </div>  
         </Grid>
      </Grid>   
    </div>
  )
}
