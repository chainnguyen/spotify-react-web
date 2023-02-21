import { PERMISSION } from './permission.enum'

type SidebarEnum = {
  id: string
  icon: string
  title: string
  dropdown: boolean
  routePath: string
  childrenRoutes: string[]
  role: string[]
  dropdownItems?: SidebarEnum[]
}

export const SIDEBAR: SidebarEnum[] = [
  {
    id: 'home',
    icon: 'dashboard',
    title: 'home.sidebar_name',
    dropdown: false,
    routePath: '/',
    childrenRoutes: ['/'],
    role: [PERMISSION.ADMIN],
  },
  {
    id: 'search',
    icon: 'form',
    title: 'search.sidebar_name',
    dropdown: false,
    routePath: '/search',
    childrenRoutes: ['/search'],
    role: [PERMISSION.ADMIN],
  },
  {
    id: 'library',
    icon: 'table',
    title: 'library.sidebar_name',
    dropdown: false,
    routePath: '/library',
    childrenRoutes: ['/library'],
    role: [PERMISSION.ADMIN],
  },
]
