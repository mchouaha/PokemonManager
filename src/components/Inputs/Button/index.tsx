import { FunctionComponent } from "react"

type ButtonProps = {
    label: string
}

export const Button: FunctionComponent<ButtonProps> = ({label}) => {
    
    return (
        <div style={{
            'border': '1px solid',
            'padding': '5px',
            'width': 'fit-content',
            'margin': '5px'}}> {label} </div>
    );
};

export default Button