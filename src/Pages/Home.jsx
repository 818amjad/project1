import React from 'react'
import foodImg from '../assets/foodRecipe.png'

export default function Home() {
  return (
    <>
      <section className="home">
                <div className="left">
                    <h1>Food Recipe</h1>
                    <h5>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using , making it look like readable English. </h5>
                    
                </div>
                <div className="right">
                    <img src={foodImg} width="320px" height="300px"/>
                </div>
            </section>
    </>
  )
}
