import { ChangeEventHandler, Fragment, FunctionComponent } from "react"

import styles from './index.module.css'

type TextAreaProps = {
    handleInputChange: ChangeEventHandler<HTMLInputElement>
    label: string
    name: string
    adornment?: string
}

export const InputField: FunctionComponent<TextAreaProps> = ({handleInputChange, label, name, adornment}) => {
    
    return (
        <Fragment>
            <label>{label}</label>

            { adornment?.length ? 
                <div className={styles["adornment"]}>
                    <input type="text" name={name} onChange={handleInputChange}/> 
                    <span>{adornment}</span>
                </div> : 

                <input type="text" name={name} onChange={handleInputChange}/>
            }
        </Fragment>
    )
}

export default InputField