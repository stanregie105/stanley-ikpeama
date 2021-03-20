import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import './homepage.css';


class HomePage extends Component{
  constructor(){
        super();
        this.state={
         isNavOpen: false,

          profile:[
              {image:'/assets/images/20200708_191726.jpg',name:'Stanley'}        
          ]
        }

    }
       
  
  render(){
           const picture =this.state.profile.map(image=>{
           return(
            <div key={image.name} className='col-12 col-md-6 profile'>

                <Card >
             <CardImg width='30%' src ={ image.image} alt={image.name} className='mago'/>
                <CardImgOverlay>
                 <CardTitle>{image.name}</CardTitle>
             </CardImgOverlay>
           </Card>
           </div>
           );
       })
        return(
         <React.Fragment>
            
          <div className='row bloke'>
                <div className=' col-md-6 bond'>
                      <h1 className='name'>Ikpeama Stanley</h1>
                      <p>A detailed oriented user-centric engineer,
                            with a knack for analyzing and solving problems to meet stipulated design patterns.
                      </p>
                      </div>
                      <div className='col-md-6 card-top'>
                         {picture}
                       </div>
               
          </div>
      
          
          </React.Fragment>
        );
  }
     
  
}

export default withRouter(HomePage);