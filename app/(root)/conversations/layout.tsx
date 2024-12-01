import React from 'react'

type Props = React.PropsWithChildren<{}>

const conversationsLayout = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default conversationsLayout