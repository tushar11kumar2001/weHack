import React from 'react'

const Card = ({res,title,img,unit,value}) => {
  return (
    <div className='w-72 h-56 shadow-xl rounded-lg p-5'>
    <img src={img} alt="bmi image" className='w-20 h-20 '/>
    <h1 className='mt-[-15px] font-bold text-gray-500 text-xl'>{title}</h1>
    <p className='mt-5 text-2xl font-bold'>{res?res:"--"} {unit?unit:"--"} </p>
    <p className='font-semibold text-gray-500'>{value?value:"--"}</p>

</div>
  )
}

export default Card
