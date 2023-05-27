import React from 'react'
import ReactPlayer from "react-player";
import { Carousel } from 'react-bootstrap';


export default function Video() {
    const videos=[
        {
            title:"https://www.youtube.com/watch?v=_mpWFrYDBMk"
            },
            {
                title:"https://www.youtube.com/watch?v=kQFUYaEk0Gw&t=11s"
                },
                {
                    title:"https://www.youtube.com/watch?v=OUm2SIVGy7A"
                    }
                    
                        
    ]
  return (

    <div>
        <div class="row">
       
            
        
        {
            
           
           videos.map(item =>(
            <div class="col-sm-3 "><ReactPlayer url={item.title} /></div>
               
                   
                   
               
           )
       )}
       
    
   
  
  
  </div>
         
        
       
      
    </div>
  )
}
