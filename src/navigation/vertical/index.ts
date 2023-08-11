// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home',
    },
    {
      title: 'PDF Documents',
      path: '/pdf-documents',
      icon: 'tabler:file',
    },
    {
      title: 'Signed Documents',
      path: '/signed-documents',
      icon: 'tabler:file-check',
    },
    {
      title: 'Signature',
      path: '/signature',
      icon: 'tabler:signature',
    }
  ]
}

export default navigation
