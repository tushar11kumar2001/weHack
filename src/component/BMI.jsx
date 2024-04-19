import React, { useEffect, useState } from 'react'
import { bmiFinder } from '../utils/bmiFinder';
import Card from './Card';

const BMI = ({weight,height}) => {
    const [bmi,setBMI] = useState(null);
    useEffect(()=>{
        setBMI(bmiFinder(weight,height));
    },[])
  return <Card title="Body Mass Index" img={import.meta.env.VITE_BMI} unit="kg/m²" res={bmi}
  value={(bmi >= 0 && bmi <= 18.5)? "Underweight" : (bmi >= 18.5 && bmi <= 25)? "Normal" : (bmi >= 25 && bmi <= 30)? "Overweight" :  "Obesity"}/>
}

export default BMI
