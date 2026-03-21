type ProgressBarProps = {
    progress: number
    width?: number
    height?: number
    color?: string
    backgroundColor?: string
}

export default function ProgressBar({
    progress,
    width = 255,
    height = 20,
    color = '#f1d089',
    backgroundColor = 'rgba(255, 255, 255, 0.2)',
}: ProgressBarProps) {
    const clamped = Math.min(Math.max(progress, 0), 1)

    return (
        <div style={{
            width,
            height,
            backgroundColor,
            borderRadius: height / 2,
            overflow: 'hidden',
        }}>
            <div style={{
                width: `${clamped * 100}%`,
                height: '100%',
                backgroundColor: color,
                borderRadius: height / 2,
                transition: 'width 0.1s linear',
            }} />
        </div>
    )
}
