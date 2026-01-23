import React from 'react'

const Button1 = ({ value, bgColor, textColor, border, href }) => {
  return (
    <a
      href={href || "#"}
      className={`
        inline-block px-8 py-3 m-3 transition-all duration-300 italic text-lg tracking-tight
        border-2 border-[#f0c4c2] 
        
        /* 1. Yahan humne dynamic classes ko simplify kiya */
        ${textColor ? textColor : ' text-[#f0c4c2]'}
        
        /* 2. Hover fix: background aur text dono change honge */
        hover:bg-[#f0c4c2] hover:text-white
      `}
    >
      {value || 'Click'}
    </a>
  )
}

export default Button1