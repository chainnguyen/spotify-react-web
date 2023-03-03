import { PERMISSION } from './permission.enum'

export type IconType = 'home' | 'search' | 'library'

type Sidebar = {
  id: string
  icon: IconType
  content: string
  routePath: string
  childrenRoutes: string[]
  role: string[]
  dropdownItems?: Sidebar[]
}

export const SIDEBAR: Sidebar[] = [
  {
    id: 'home',
    icon: 'home',
    content: 'sidebar.home',
    routePath: '/',
    childrenRoutes: ['/'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
  {
    id: 'search',
    icon: 'search',
    content: 'sidebar.search',
    routePath: '/search',
    childrenRoutes: ['/search', '/genre', '/concerts'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
  {
    id: 'library',
    icon: 'library',
    content: 'sidebar.library',
    routePath: '/library',
    childrenRoutes: ['/library'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
]
