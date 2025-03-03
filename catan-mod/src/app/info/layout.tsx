import { Suspense } from 'react'

type LayoutProps = {
    children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    return <Suspense fallback={<h1>Loading</h1>}>{children}</Suspense>
}
