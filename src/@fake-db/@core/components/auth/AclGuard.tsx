// ** React Imports
import { ReactNode, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'



// ** Context Imports


// ** Component Import
import NotAuthorized from 'src/pages/401'
import BlankLayout from 'src/@core/layouts/BlankLayout'



interface AclGuardProps {
  children: ReactNode
  guestGuard: boolean
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const {  children, guestGuard } = props

 

  // ** Hooks

  const router = useRouter()

  // If guestGuard is true and user is not logged in or its an error page, render the page without checking access
  if (guestGuard || router.route === '/404' || router.route === '/500' || router.route === '/') {
    return <>{children}</>
  }

 


  // Render Not Authorized component if the current user has limited access
  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  )
}

export default AclGuard
