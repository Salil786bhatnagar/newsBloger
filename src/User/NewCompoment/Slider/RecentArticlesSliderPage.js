import React,{useState,useEffect} from "react";
import Avatar from '@material-ui/core/Avatar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { getData,ServerURL,postData} from '../FetchServices';
import {makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyle = makeStyles((theme)=>({
  media:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: 1,
    width: 190,
    height: 210,
    margin: 15,
    borderRadius:12,
    maxHeight: '175px', 
    // padding: '10px 10px 10px 10px', 
    // background:'#f3f9f3',
    border: '1px solid rgba(111,114,132,.25)',
  },

  pslider:{
    width:'96%'
  },
  text:{
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    padding: 20,
    // textAlign:'center',
  },
  toproot: {
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    padding:5,
    width:'auto',
    height:'auto',
    margin:5,
    border:'1px solid #dcdde1',
    borderRadius:8,
         },

  topmedia: {
    display:'flex',
    width:150,
    height:150,
  
  },
  text:{
    display:'flex',
    paddingTop:10, 
    position: 'relative',
    left: '30%',
    fontSize:'15px',
    fontFamily: 'JioBold',
    lineHeight: '15px',
    textAlign: 'left',
    letterSpacing: '.01px',
    color: '#000',
    },
    cartbtn:{
      padding:5,
      width:150,
    },
})) 

export default function RecentNeswSliderPage() {
  const classes = useStyle();
  var settings = {
    // dots: false,
    // infinite: true,
    // speed: 300,
    // slidesToShow:6,
    // slidesToScroll:4,
    // arrow:true,

    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  

    // slidesToShow: 3,
    // slidesToScroll: 1,
    // asNavFor: '.slider-for',
    // dots: true,
    // centerMode: true,
    // focusOnSelect: true
   
    
  };
  
  const[getNewTopList, setBrandNewList]=useState();

  
  
 return(
  <div className={classes.pslider}>
  <Grid container spacing={3}>
        <Grid item xs={12}>
             
              <Slider {...settings}>
                    <div>
                      
                        <img src="images/2_b.jpg" alt="1" width="100%" height="438px"/>
                         <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                      
                    </div>
                    <div>
                      <img src="images/2_b.jpg" alt="1" width="100%" height="438px"/>
                      <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                    </div>
                    <div>
                      <img src="images/3_b.jpg" alt="1" width="100%" height="438px"/>
                      <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                    </div>
                    <div>
                    <img src="images/4_b.jpg" alt="1" width="100%" height="438px"/>
                    <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                    </div>
                    <div>
                      <img src="images/5_b.jpg" alt="1" width="100%" height="438px"/>
                      <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                    </div>
                    <div>
                    <img src="images/2_b.jpg" alt="1" width="400%" height="438px"/>
                    <figcaption>
                         <span>
                         Emmet is great for that. With it installed in the code editor you are using, you can type “lorem” and then tab and it will expand into a paragraph of Lorem Ipsum placeholder text. But it can do more! You can control how much you get, place it within HTML structure as it expands, and get different bits of it in repeated elements.
                         </span>
                         </figcaption>
                    </div>
                  </Slider>
         
         </Grid>  
      </Grid>   
    
  </div> 
 )
 
 
}
