import React from 'react'

export default function Bar({ value: { icon, name, level } }) {
    const bar__width = `${level}`
    return (
        <div className='bar'>
            <div className="bar__wrapper" style={{
                'width': bar__width
            }}>
            <span className="bar__name">
              <span className='bar__icon'>{icon}</span> {name}
            </span>
            <span> {level}</span>
            </div>
        </div> 
    )
}
