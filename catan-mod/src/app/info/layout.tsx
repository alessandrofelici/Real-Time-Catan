import { Suspense } from 'react'
type LayoutProps = {
    children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
    return <Suspense>{children}</Suspense>
}
