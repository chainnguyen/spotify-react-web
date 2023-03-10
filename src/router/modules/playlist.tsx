import { Playlist } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'playlist',
    element: (
      <WrapperResolveGuard isPublic>
        <Playlist />
      </WrapperResolveGuard>
    ),
    children: [{ path: ':playlistId', element: <Playlist /> }],
    meta: { role: [] },
  },
]
