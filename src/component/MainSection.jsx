import React, { useState, useEffect } from 'react';
import axios from "axios";

const MainSection=()=>{
    const [data, setData] = useState([]);
    const [name,setName]=useState('');
    const [headingText, setHeading] = useState("");
    const myname = "Lagos";
   
    function location(myname){
if(myname!=="Lagos"){
return myname=headingText;
}
    }
    location();
    axios.defaults.baseURL =`https://api.openweathermap.org/data/2.5/weather?q=${myname}&appid=a25f592a249f6c01045e6ff9fa01a1ec&units=metric`;
    
  
  
    const fetchData = () => {
        axios
            .get('/posts')
            .then((res) => {
               
                const Alldata=res.data
            
                setData(Alldata);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);
   
    const main=data.weather && data?.weather[0].main
    const icon= data.weather && data?.weather[0].icon
    const locationName=data.name ? data.name :null;
    const imgSrc=`http://openweathermap.org/img/wn/${icon}@2x.png`
   console.log(data.name)
    const temper=data.main ? data?.main.temp:null;
    function handleChange(event) {
const va=event.target.value;
setName(va);
    }
    function handleSubmit(event){
setHeading(name);
event.preventDefault();
    }
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-8"><h1>Get rich, without getting lucky.</h1></div>
            <div className="col-sm-4 mt-5">
            <h5 className="alert text-dark col-8   alert-primary ">Get Weather details of your area</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                        <input type="text" onChange={handleChange} value={name} className="form-control"/>
                        </div>
                        <div className="col-6"><button type="submit" className="btn bgButton text-light ">Go</button></div>
                    </div>
                </form>
          <img src={ imgSrc} alt="" />             
         <p>{main}</p>
         {temper}
          <p className="badge badge-secondary">{locationName}</p>
            </div>
        </div>
    
    </div>
)
}
export default MainSection;