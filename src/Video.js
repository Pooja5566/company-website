import React from 'react'
import ReactPlayer from "react-player";
import { Carousel } from 'react-bootstrap';


export default function Video() {
    const videos=[
        {
            title:"https://www.youtube.com/watch?v=EuA6cgy4DYE&t=605s"
            },
            {
                title:"https://www.youtube.com/watch?v=mfoNVNjUB4s&t=346s"
                },
                {
                    title:"https://www.youtube.com/watch?v=7kRKKMbjUvE&t=31s"
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
