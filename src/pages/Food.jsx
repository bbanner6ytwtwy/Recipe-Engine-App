import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Header from "../components/Header"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import { useParams } from 'react-router';
import PageLoader from '../components/Loader';
export default function Food() {
    const [data, setData] = useState([])
    const {foodName} = useParams();
    const API_KEY = import.meta.env.VITE_API_KEY
    const API_URL = import.meta.env.VITE_API_URL
        useEffect(()=>{
            const options = {
                params: {
                    apiKey: API_KEY,
                    query: foodName,
                    addRecipeInformation: true,
                    number: 1
                }
            };
            async function find() {
                try {
                    await axios
                        .get(API_URL + "/complexSearch", options)
                        .then((result) => {
                            setData(result.data.results) & console.log(result.data.results)
                        })
                        .catch(e => console.log(e))
                } catch (e) {
                    console.log(e)
                }
            }
            find()
        }, []) 
     
    return (
        <div>
        <PageLoader />
        <Header />
            {data.map((e)=>{
              return (<>
                <div className="body pb-3 bg-matte">
                  <h1 className="fw-bold pt-2 text-center fs-3" style={{"font-family": 'Lora'}}> {e.title} </h1>
                  <div className="row">
                   <div className="col-lg-6">
                   <img className="w-100 p-4 rounded" src={e.image} alt="img not in api, sorry"/>
                   </div>
                   <div className="col-lg-6 fs-6 p-5 pb-5">
                   <p>Vegan: {e.vegan + ""}</p>
                  <p>Very Healthy: {e.veryHealthy + ""}</p>
                  <p>Vegetarian: {e.vegetarian + ""}</p>
                  <p>Popular choice of meal: {e.veryPopular + ""}</p>
                  <p>Health score: {e.healthScore}</p>
                  <p>Gluten: {e.glutenFree + ""}</p>
                  <p>Dish type: {e.dishTypes + ""}</p>
                  <p>Diet: {e.diets + ""}</p>
                  <button className="btn btn-lg btn-dark"><a className="text-decoration-none link-light" href={e.sourceUrl}>Link to Meal prep Tutorial</a></button>
                   </div>
                  </div>
                </div>
              </>
              )
            })}
            <Contact />
            <Footer />
        </div>
    )
}
