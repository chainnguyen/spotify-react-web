import { Section } from '@/pages'
import { WrapperResolveGuard } from '@/router/guards'

export default [
  {
    path: 'section',
    element: (
      <WrapperResolveGuard isPublic>
        <Section />
      </WrapperResolveGuard>
    ),
    children: [{ path: ':sectionId', element: <Section /> }],
    meta: { role: [] },
  },
]
