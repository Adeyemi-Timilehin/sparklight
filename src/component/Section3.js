import React from "react";
import Avatar from "./Avatar"
const Section3=()=>{
    return(
        
        <div className="section3 mx-5">
        <div className="row offset-2">
        <div className="col-5">
        <Avatar imgSrc={"p.png"} />
        </div>
        <div className="col-5">
        <h3 className="section3__heading">Why Endplan?</h3>
        <p>Estate planning isn’t just about passing on money when you die – it’s also about managing your assets and building wealth today.</p>
        <div className="section3__subpara">
            <p>Secured with latest technologies.</p>
            <p>Safe file sharing and records.</p>
            <p>Tested with best practices in mind.</p>
            
        </div>
        </div>
        </div>
        <div  className="text-center mx-auto section3_submain">   <h3>Why Us?</h3>
        <p>Built by a team of traders, investors, DeFi enthusiasts, technologists, designers for you.</p>
       <Avatar imgr={"p2.png" } />
        </div>
     
        </div>

    )
}
export default  Section3;