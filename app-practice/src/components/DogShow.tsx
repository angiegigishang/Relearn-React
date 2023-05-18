import React from "react";
import fetchData from "../fetchData";

const data = fetchData('https://dog.ceo/api/breeds/image/random')

const DogShow: React.FC = () => {
  const dogData = data.read()
  return (
    <img src={dogData.message} alt=""/>
  )
}

export default DogShow;