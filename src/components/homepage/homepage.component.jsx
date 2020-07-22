import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';



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
             <CardImg width='30%' src ={ image.image} alt={image.name}/>
                <CardImgOverlay>
                 <CardTitle>{image.name}</CardTitle>
             </CardImgOverlay>
           </Card>
           </div>
           );
       })
        return(
         <React.Fragment>
            
          <div className='row'>
                <div className='col-12 col-md-6'>
                      <h1 className='name'>Ikpeama Stanley</h1>
                      <p>A detailed oriented user-centric engineer,
                            with a knack for analyzing and solving problems to meet stipulated design patterns.
                      </p>
                      </div>
              {picture}
               
          </div>
      
          
          </React.Fragment>
        );
  }
     
  
}

export default withRouter(HomePage);