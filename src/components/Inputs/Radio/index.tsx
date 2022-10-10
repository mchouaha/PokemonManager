import { ChangeEventHandler, FunctionComponent } from "react"

type RadioProps = {
    handleInputChange: ChangeEventHandler<HTMLInputElement>
    label: string
    name: string
    value: string
}

export const Radio: FunctionComponent<RadioProps> = ({handleInputChange, label, name}) => {
    
    return (
        <div>
            <input type="radio" name={name} value="feu" onChange={handleInputChange} />
            <label>{label}</label>
        </div>
    )
}

export default Radio