import React from 'react'

const BoxIcons = (props) => {
    return (
        <>
            <div className='p-2 transition duration-500 border border-white cursor-pointer hover:bg-red-600 hover:border-red-600'>
                {props.icon}
            </div>
        </>
    )
}

export default BoxIcons