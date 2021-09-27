import React, { useState, useEffect } from "react";
import axios from "axios";

const MainSection = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    // axios
    //     .get('/posts') method 2

    const apikey = "a25f592a249f6c01045e6ff9fa01a1ec";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metric`
      )
      .then((res) => {
        const Alldata = res.data;

        setData(Alldata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  const main = data.weather && data?.weather[0].main;
  const icon = data.weather && data?.weather[0].icon;
  const locationName = data.name 
  const imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  console.log(data.name);
  const temper = data.main ? data?.main.temp : null;
if(temper>14){

}
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <h1>Get rich, without getting lucky.</h1>
        </div>
        <div className="col-sm-4 mt-5">
          <h5 className="alert text-dark col-8   alert-primary ">
            Get Weather details of your area
          </h5>
          <form onSubmit={fetchData}>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  name="query"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn bgButton text-light ">
                  Go
                </button>
              </div>
            </div>
          </form>
          <p className={`alert mt-3 w-50  ${(temper>15)?'alert-success':'alert-danger'} `}>  {locationName}</p>
          <img src={imgSrc} alt="" />
          <p>{main}</p>
         
        
          {temper} C
          
        </div>
      </div>
    </div>
  );
};
export default MainSection;
