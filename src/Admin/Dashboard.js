import React,{useState,useEffect} from 'react'
import Listitems from './Listitems'
import Index from './Index';
import CurrentPost from './CurrentPost';
import UserDetails from './UserDetails';
import BasicPost from './BasicPost';
import RecentNewsSlider from './RecentNeswSliderPost';
import RecentPost from './RecentPost';
import LatestArticles from './LatestArticlesPost';
import PopularPost from './PopularPost';
import UserTableInfo from './UserTableInfo';
import SportNewsData from './SportNewsData';
import PoliticesNewsData from './PoliticesNewsData'
import {getData,postData,postDataAndImage} from '../User/NewCompoment/FetchNodeServices'
export default function Dashboard(props) {
    const [ShowComponents, setComponet]=useState(<Index/>);

     const [getadmin,setAdmin]=useState([])

     const CheckSession=async()=>{
      var result=await getData('adminLog/chktoken')
      if(!result)
      {
       props.history.replace({pathname:'/SignupPage'})
      }
      else{
        var admin=JSON.parse(localStorage.getItem('admin'))
       console.log("ADMIN",getadmin)
       setAdmin(admin)
      }
    }
  
    useEffect(function(){
      CheckSession();
    },[])  
    

    const handleComponents=(ShowData)=>{
    switch(ShowData){
        case 0 :
        setComponet(<Index/>)
        break;
        case 1 :
        setComponet(<CurrentPost/>)
        break;
        case 2:
          setComponet(<UserDetails/>)
          break;
        case 3:
          setComponet(<BasicPost/>)
          break;
        case 4:
          setComponet(<RecentNewsSlider/>)
          break; 
        case 5:
          setComponet(<RecentPost/>)
          break;  
        case 6:
          setComponet(<LatestArticles/>)
          break;  
        case 7:
          setComponet(<PopularPost/>)
          break;  
        case 8:
          setComponet(<UserTableInfo/>)
          break;   
        case 9:
            setComponet(<SportNewsData/>)
            break;  
        case 10:
              setComponet(<PoliticesNewsData/>)
              break;     
            
        case 11:
          // var result= await getData('admin/logout')
          // props.history.replace({pathname:'/SignupPage'})
          props.history.replace({pathname:'/SignUp'});
          break; 
        default:
     }

    }



  return (
    <div>
       <h3 className='div-dashbord' style={{textAlign:'left'}}>Dashboard</h3>
     <div className='div-maincontainer'>
     <div className='div-left'>
         <Listitems handle_Components={handleComponents}/>
     </div>
     <div className='div-right'>
       {ShowComponents}
     </div>
     </div>
     

    </div>
  )
}
