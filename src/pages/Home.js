import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'

const Home = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios('https://fakestoreapi.com/products')
      setProducts(data)
    }
    getData()
  }, [])





  return (
    <div className='cards'>
      {
        products.map((el,idx) => (
           <Card key={idx} name={el.title} price = {el.price} img = {el.image}/>
        ))
      }
    </div>

  )
}

export default Home
