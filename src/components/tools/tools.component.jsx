import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

class Tools extends Component{
   constructor(props){
       super(props);

       this.state={
    images:[
           {image:'/assets/images/css.jpg',name:'css'},
           {image:'/assets/images/express.png',name:'express'},
           {image:'/assets/images/heroku.png',name:'heroku'},
           {image:'/assets/images/html.png',name:'html'},
           {image:'/assets/images/javascript.jpg',name:'javascript'},
           {image:'/assets/images/machine.png',name:'machine learning'},
           {image:'/assets/images/mongodb.jpg',name:'mongodb'},
           {image:'/assets/images/node.png',name:'node'},
           {image:'/assets/images/npm.png',name:'npm'},
           {image:'/assets/images/python.jpg',name:'python'},
           {image:'/assets/images/react.png',name:'react'},
           {image:'/assets/images/redux.png',name:'redux'},
          ]
       }
   }

   render(){
       const tools =this.state.images.map(image=>{
           return(
            <div key={image.name} className='col-12 col-md-3 tools'>

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
             {tools}
             </div>
            <div class="row">
               <div class="col-sm-12 my-auto">
               <a href='/contact'><button type="button" class="btn btn-secondary hit">Hit Me Up</button></a>

              </div>
         </div>
         </React.Fragment>
         
       );
   }
}

export default Tools;