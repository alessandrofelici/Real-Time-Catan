'use client'
import { useRouter } from 'next/navigation'

export default function Options() {
    const router = useRouter()

    function handleClick() {
        router.push('/info')
    }

    return (
        <div className="inputPage">
            <div className="formBox">
                <form>
                    <label>Player Count: </label>
                    <br></br>
                    <input type="text" className="form" />
                    <br></br>
                    <br></br>
                    <label>Roll Interval: </label>
                    <br></br>
                    <input type="text" className="form" />
                    <br></br>
                    <br></br>
                    <br></br>
                </form>
                <output></output>
                <button className="startButton" onClick={handleClick}>
                    Start
                </button>
            </div>
        </div>
    )
}
