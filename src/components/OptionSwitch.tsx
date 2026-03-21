type OptionSwitchProps = {
    label: string
    checked: boolean
    onChange: (checked: boolean) => void
}

export default function OptionSwitch({ label, checked, onChange }: OptionSwitchProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 300, padding: '8px 0' }}>
            <span>{label}</span>
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
        </div>
    )
}
