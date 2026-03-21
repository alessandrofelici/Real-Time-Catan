'use client'

type OptionSwitchProps = {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export default function OptionSwitch({ label, checked, onChange }: OptionSwitchProps) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: '12px 0',
            }}
        >
            <span style={{ fontSize: 18 }}>{label}</span>
            <button
                type="button"
                onClick={() => onChange(!checked)}
                style={{
                    width: 50,
                    height: 28,
                    borderRadius: 14,
                    border: 'none',
                    backgroundColor: checked ? 'var(--accent-green)' : '#ccc',
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                }}
            >
                <div
                    style={{
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 3,
                        left: checked ? 25 : 3,
                        transition: 'left 0.2s',
                    }}
                />
            </button>
        </div>
    )
}
