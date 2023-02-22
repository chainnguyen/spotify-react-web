import { PERMISSION } from './permission.enum'

export type IconType = 'home' | 'search' | 'library'

type SidebarEnum = {
  id: string
  icon: IconType
  content: string
  routePath: string
  childrenRoutes: string[]
  role: string[]
  dropdownItems?: SidebarEnum[]
}

export const SIDEBAR: SidebarEnum[] = [
  {
    id: 'home',
    icon: 'home',
    content: 'Home',
    routePath: '/',
    childrenRoutes: ['/'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
  {
    id: 'search',
    icon: 'search',
    content: 'Search',
    routePath: '/search',
    childrenRoutes: ['/search'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
  {
    id: 'library',
    icon: 'library',
    content: 'Your Library',
    routePath: '/library',
    childrenRoutes: ['/library'],
    role: [PERMISSION.ADMIN],
    dropdownItems: [],
  },
]
