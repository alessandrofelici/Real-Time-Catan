import { Suspense } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import DelayedRender from '@/components/DelayedRender'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <DelayedRender>{children}</DelayedRender>
        </Suspense>
    )
}
