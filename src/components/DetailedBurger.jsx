import Header from './Header';
import '../App.css'
import data from '../staticData/toppings.json'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function DetailedBurger() {
    const [ topping, setIt ] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const singleBurger = data.toppings.find((topping) => topping.id === parseInt(id));
        setIt(singleBurger);
    }, [id]);

  return (
    <>
    <Header></Header>
    <h3 style={{color: 'brown'}}>Your burger:</h3>
    <div className="card-detail">
        <div className="card-d">
            <h2>{topping.title}</h2>
            <img src={topping.img}/>
        </div>
    </div>

    </>
  )
}

export default DetailedBurger