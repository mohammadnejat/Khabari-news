import React from 'react'

const TopBarIcons = (props) => {
    return (
        <>
            <div className='flex items-center justify-center mt-1 text-center text-red-600 duration-500 bg-white rounded-full cursor-pointer hover:mt-0 hover:text-white hover:bg-red-600 w-7 h-7'>
                <span className=''>
                    {props.icon}
                </span>
            </div>
        </>
    )
}

export default TopBarIcons