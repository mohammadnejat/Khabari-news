import React from 'react'

const ImgComp = (props) => {
  return (
    <div className='mx-auto overflow-hidden w-fit h-fit'>
        <img className={`hover:scale-[1.1] duration-500 text-center  ${props.width} ${props.height}`} src={props.img} alt="" />
    </div>
  )
}

export default ImgComp