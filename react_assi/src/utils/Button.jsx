import React from 'react'

const Button = ({ value, bgColor, textColor, border, href }) => {
  return (
    <a
      href={href || "#"}
      className={`
        px-6 m-3 py-2 rounded-full font-semibold
        ${bgColor ? bgColor : 'bg-cyan-400'}
        ${textColor ? textColor : 'text-gray-900'}
        ${border ? border : ''}
        hover:opacity-90 transition 
      
        
      `}
    >
      {value || 'Click'}
    </a>
  )
}

export default Button
