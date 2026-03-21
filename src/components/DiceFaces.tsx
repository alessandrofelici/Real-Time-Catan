const FACE_NAMES = ['', 'one', 'two', 'three', 'four', 'five', 'six']

type DiceFacesProps = {
    dice: [number, number]
}

export default function DiceFaces({ dice }: DiceFacesProps) {
    const [die1, die2] = dice

    if (die1 === 0 || die2 === 0) return null

    return (
        <div style={{ display: 'flex', gap: 10 }}>
            <img
                src={`/images/dice-six-faces-${FACE_NAMES[die1]}.png`}
                width="80"
                height="80"
                alt={`Die ${die1}`}
            />
            <img
                src={`/images/dice-six-faces-${FACE_NAMES[die2]}.png`}
                width="80"
                height="80"
                alt={`Die ${die2}`}
            />
        </div>
    )
}
