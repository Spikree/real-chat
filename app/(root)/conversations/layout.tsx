import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const conversationsLayout = ({children}: Props) => {
  return (
    <ItemList title='conversations'>Conversations page</ItemList>
  )
}

export default conversationsLayout