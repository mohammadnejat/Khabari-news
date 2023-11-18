import React from 'react'

const Text = (props) => {
    return (
        <>
            <div className='inline-block mx-2 my-1 w-fit'>
                <div className='hover:text-white hover:bg-[#FF661F] text-black border py-2 px-4 w-fit transition ease-in-out duration-500'>
                    <span>{props.text}</span>
                </div>
            </div>
        </>
    )
}

export default Text