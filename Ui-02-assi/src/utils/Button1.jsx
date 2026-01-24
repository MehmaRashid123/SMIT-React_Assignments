import React from 'react'

const Button1 = ({ value, bgColor, textColor, border, href }) => {
  return (
    <a
      href={href || "#"}
      className={`
        inline-block px-8 py-3 m-3 italic text-lg tracking-tight
        border-2 border-[#f0c4c2]

        ${textColor ? textColor : 'text-[#f0c4c2]'}

        transition-all duration-500 ease-in-out
        hover:bg-[#f0c4c2]
        hover:text-white
      `}
    >
      {value || 'Click'}
    </a>
  )
}

export default Button1
