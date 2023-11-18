import React from 'react'

const Title = (props) => {
    return (
        <div className='pb-6 '>
            <h1 className='relative pb-2 text-2xl font-bold border-b'>{props.title}</h1>
            <hr className='w-40 border-red-600 ' />
        </div>
    )
}

export default Title