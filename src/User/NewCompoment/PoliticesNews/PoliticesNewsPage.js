import React,{useState,useEffect} from 'react'
import Header from '../Head/Header'
import UserDetailsPage from '../UserDetails/UserDetailsPage';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/Footer';
import { getData,ServerURL,postDataAndImage } from '../FetchNodeServices';
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
export default function SportsNewsPage() {
    const classes = useStyles();
    const [getFetchData, setFetchData]=useState([]);
    

     useEffect(()=>{
      const handleFetch=async()=>{
        const list = await getData('poli/displaypoliticesData');
        setFetchData(list);
      }
      handleFetch()
     },[])

  return (
    <div>
        <div>
            <Header/>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
           <div className='div-one-class'>
           <span><UserDetailsPage/></span>
           </div>
          </Grid> 

         <Grid item xs={9}>
          <Paper className={classes.paper} id='paper-div'>
           <span>
            <h5>
              <b><u>Politices News</u></b>
             </h5>
            </span>
            <br/><hr/>
            {
              getFetchData.map((item)=>{
                return(
                  <>
                  <div className='div-sport-main'>

                    <div className='div-title'>
                      {item.title}
                    </div><br/>

                    <div className='div-img'>
                    <img src={`${ServerURL}/images/${item.image}`}/>
                    </div><br/>

                    <div className='div-disc'>
                      {item.discription}
                    </div>

                 </div>
                  </>
                )
              })
            }
            </Paper>
        </Grid>

        {/* <Grid item xs={3}>
          <Paper className={classes.paper}><span><RecentNeswSliderPage/></span></Paper>
        </Grid> */}
      </Grid>
      <br/>
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
