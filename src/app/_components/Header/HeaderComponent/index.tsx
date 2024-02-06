import React from 'react'
import { Header } from '../../../../payload/payload-types'
import { usePathname } from 'next/navigation'

const HeaderComponent = ({ header }: { header: Header }) => {
    const pathname = usePathname()
  return (
<>
<div>
    salam
</div>
</>
  )
}

export default HeaderComponent