import { FunctionComponent } from "react"
import { PokemonType } from "../../lib/interfaces"

import styles from './index.module.css'

type CardProps = {
    data: PokemonType
}

export const Card: FunctionComponent<CardProps> = ({data}) => {

    return (
        <div className={styles["card"]}>
            <img src={data.imageUrl} alt="Pokemon" className={styles["img-pokemon"]}/>
            
            <div className={styles["info"]}>

                <h3 className={styles["name"]}>{data.name}</h3>
                
                <p className={styles["description"]}>{data.description}</p>
                
                <table>
                    <tbody>
                        <tr>
                            <td>Taille: {data.size} cm</td>
                            <td>Poids: {data.weight} kg</td>
                        </tr>
                        <tr>
                            <td>Type: {data.type}</td>
                        </tr>
                    </tbody>    
                </table>

            </div>
        
        </div>
    )
}

export default Card