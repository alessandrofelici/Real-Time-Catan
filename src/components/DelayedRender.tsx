'use client'
import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'

type DelayedRenderProps = {
    children: React.ReactNode
    delay?: number
}

export default function DelayedRender({ children, delay = 1250 }: DelayedRenderProps) {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), delay)
        return () => clearTimeout(timer)
    }, [delay])

    if (!ready) return <LoadingSpinner />
    return <>{children}</>
}
