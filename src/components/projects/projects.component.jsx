import React,{Component} from 'react';
import {Media} from 'reactstrap';



class Project extends Component{
  constructor(){
        super();
        this.state={
    projects:[
           {image:'/assets/images/commerce.jpg',name:'E-Commerce Store',description:'An E-commerce platform that displays collection of items.Items could be added to a cart and checked out and paid for by leveraging on a stripe platform.'},
           {image:'/assets/images/menu.jpg',name:'Restaurant Menu',description:'A react and node.js application that helps users select menus displayed in a restaurant, sequel to fetching data from a backend server.'},
           {image:'/assets/images/weather.jpg',name:'weather',description:'A weather application that analyzes and displays weather information of various various states in the US by leveraging a google weather API.'},
           {image:'/assets/images/youtube.jpg',name:'Youtube Search App', description:'A YouTube application that enables users search for various items they need information on. This application leverages on a third party youtube API.'}
           
          ]
       }
    }

    
       
  
  render(){
           const picture =this.state.projects.map(project=>{
           return(
            <div key={project.name} className='col-12 project'>

            <Media tag='li'>
              <Media left middle>
                 <Media object src={project.image} alt={project.name}/>
              </Media>
              <Media body className='ml-5'>
                  <Media heading>{project.name}</Media>
                  <p>{project.description}</p>
               </Media>
           </Media>
           </div>
           );
       })
        return(
         <React.Fragment>
            
          <div className='row'>
            <Media list>
              {picture}
            </Media>
          </div>
      
          
          </React.Fragment>
        );
  }
     
  
}

export default Project;