import { ChangeEventHandler, Fragment, FunctionComponent } from "react"

type TextAreaProps = {
    handleInputChange: ChangeEventHandler<HTMLTextAreaElement>
    label: string
    name: string
}

export const TextArea: FunctionComponent<TextAreaProps> = ({handleInputChange, label, name}) => {
    
    return (
        <Fragment>
            <label>{label}</label>
            <textarea name={name} onChange={handleInputChange} style={{ 'height': '100%'}}/>
        </Fragment>
    )
};

export default TextArea;