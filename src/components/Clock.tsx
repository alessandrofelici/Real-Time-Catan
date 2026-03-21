type ClockProps = {
    time: number
    pause: boolean
    onPause: () => void
}

export default function Clock({ time, pause, onPause }: ClockProps) {
    return (
        <div className="section">
            <h1>clock</h1>
            <button className="timer" onClick={onPause}>
                <p className="count">{pause ? '❚❚' : time}</p>
            </button>
        </div>
    )
}
