import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function MyComponent() {
    const [val,
        setVal] = useState("")
    const [data,
        setData] = useState([])
    const [buttonEvent, setButtonEvent] = useState("search");
    
        function button(){
        buttonEvent === "search" ? setButtonEvent("submit") : setButtonEvent("search")
        }
                  const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL
useEffect(()=>{
    const options = {
        params: {
            apiKey: API_KEY,
            query: `${val}`,
            addRecipeInformation: true,
            number: 12
        }
    };
    async function find() {
        try {
            await axios
                .get(API_URL + "/complexSearch", options)
                .then((result) => {
                    setData(result.data.results)
                })
                .catch(e => console.log(e))
        } catch (e) {
            console.log(e)
        }
    }
    find()
}, [buttonEvent])
    const submit = async(e)=>{
        e.preventDefault();
    }
 
    return ( <> 
      <div className="text-center  align-middle body bg-matte">
        <form className="pb-3 bg-red " onSubmit={submit} method="POST">
            <input
                className="input"
                type="text"
                name="name"
                style={{"font-family": 'Lora'}}
                placeholder="Search food recipes"
                value={val}
                onChange={e => setVal(e.target.value)}/>
            <button className="button mx-2" type="submit" onClick={button}>{buttonEvent}</button>
        </form>
          </div>
          <div className="body">
          <div className="row text-center align-middle pt-5">
         
            {data.map((e) => { 
             return  (
             <div className = "col-lg-3 col-md-4 p-3 h-anim mb-2 fs-6 " > 
             <Link to={`/food/${e.title}`} target="_self" className="card-link text-decoration-none vp-text fs-6" >
             <div className="card card-bg-orange rounded-3 pb-2">
                <img src={e.image} className="card-img-top" alt="img"/>
                <div className="card-body px-3">
                    <p className="card-text text-center" style={{"font-family": 'Lora'}}>{e.title}</p>
                </div>
            </div> </Link>
            </div>
             )
            })
          }
          </div> </div>
          </>
    
  );
}

export default MyComponent;