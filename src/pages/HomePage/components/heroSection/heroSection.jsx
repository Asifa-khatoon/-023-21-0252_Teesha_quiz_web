import React from "react";

import image1 from "../../../../assets/images/div (1).svg"
import image2 from "../../../../assets/images/div (2).svg"

const HeroSection =()=>{
  
    return(
        <>

        <div className=""> 

        <img className="w-100" src={image1} alt="" />
        </div>
        <div className="bg-color">
            <div className="container py-2">

                <img className="w-100" src={image2} alt="" />
            </div>







        </div>
     

   

        </>
    )
};
export default HeroSection;