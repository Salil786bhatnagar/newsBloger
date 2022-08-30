import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'
import {postData,postDataAndImage,getData} from './FetchNodeServices'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Avatar from '@material-ui/core/Avatar';
import Swal from 'sweetalert2'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [getUserid, setUserid]=useState('');
  const [getName, setName]=useState('');
  const [getLname, setLname]=useState('');
  const [getEmail, setEmail]=useState('');
  const [getPassword, setPassword]=useState('');
  const [getImg, setImg]=useState({icon:'',file:''});
  const [getSetmessage, setMessage]=useState('');

  /* handle in icon*/
  const handleIcon=(e)=>{
    setImg({icon: URL.createObjectURL(e.target.files[0]),file:e.target.files[0]})

   }

  const hadleSubmit =async(e)=>{
    //  let body = {'userid'  : getUserid,
    //              'name'    : getName,
    //              'lname'   : getLname,
    //              'email'   : getEmail,
    //              'password':getPassword}
     
    //   let result = await postData ('reg/registration',body);

   var  formData = new FormData()
        formData.append('userid',getUserid)
        formData.append('name',getName)
        formData.append('lname',getLname)
        formData.append('email',getEmail)
        formData.append('password',getPassword)
        formData.append('img',getImg.file)
    var config={header:{'content-type':'multipart/form-data'}}
    var result = await postDataAndImage('reg/registration',formData,config)   

      if(result){
        //  setMessage("Record Submitted");
        Swal.fire({
          icon: 'success',
          title: 'Registration Success',
          // text: 'Something went wrong!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })

      }else{
        // setMessage("Fail to Submit Record")
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
                
     }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {getSetmessage}
        <Typography component="h1" variant="h5">
          Sign up
        </Typography><br/>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e)=>setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e)=>setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </Grid>
           
            <Grid item xs={6} sm={6} md={6} lg={6}>
                          <img src=""  width='12' height='12' className={classes.valImgicon}  />  
                          <input
                          accept="image/*"
                          className={classes.input}
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={(e)=>handleIcon(e)}
                          style={{display:'none'}}
                        />
                        <label htmlFor="contained-button-file">
                          <Button variant="contained" color="primary" component="span" className={classes.uploadbtn1} startIcon={<CloudUploadIcon / >}>
                            Upload Icon
                          </Button>
                        </label>
                        <Grid item xs={6} className={classes.container}>
                        <Avatar id="user-icon" alt="Remy Sharp" variant='rounded' style={{width:70,height:50}} src={getImg.icon} />
                      </Grid>
                      </Grid>   



            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>hadleSubmit()}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to='/LogForm' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}