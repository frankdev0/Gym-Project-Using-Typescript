import React from 'react'

type Props = {
    children: React.ReactNode
}

const HText = ({children}: Props) => {
  return (
    <div>
         <h1 className="basis-3/5 font-montserrat font-bold text-3xl"> {children}</h1>
    </div>
  )
}

export default HText