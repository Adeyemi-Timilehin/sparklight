import Avatar from "./Avatar.jsx"
const LastSections =()=> {
    return(
        <div className="lastsection container-fluid">
           <div className="row">
               <div className="col-5 offset-2 md">
                   <h2>Take control of your lifetime wealth</h2>
                   <p>Long term security and manage private data safely from any location or device.</p>
                <p className="p1" style={{ display:"inline-block" }}></p>
                <p className="p4"style={{ display:"inline-block" }}></p>
                <p>No credit card required.</p>
               </div>
               <div className="col-5">
                 <Avatar img={"p3.png"}/>
               </div>
           </div>
        </div>
    )
};
export default LastSections