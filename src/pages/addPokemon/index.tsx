import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"

import InputField from "../../components/Inputs/InputField"
import Radio from "../../components/Inputs/Radio"
import TextArea from "../../components/Inputs/TextArea"

import { PokemonType } from "../../lib/interfaces"

import styles from './index.module.css'

type AddPokemonProps = {
    addPokemon: Function
}

export const AddPokemon: FunctionComponent<AddPokemonProps> = ({addPokemon}) => {

    const navigate = useNavigate()

    const newPokemon: PokemonType = {
        id: Math.floor(Math.random() * 250),
        name:'',
        description: '',
        size: 0,
        weight: 0,
        type: '',
        imageUrl: ''
    }

    const goBack = () => navigate('/')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        switch (event.target.name) {
            case 'name':
                newPokemon.name = event.target.value
              break;

            case 'description':
                newPokemon.description = event.target.value
              break;
            
            case 'size':
                newPokemon.size = parseInt(event.target.value) 
              break;

            case 'weight':
                newPokemon.weight = parseInt(event.target.value) 
                break;

            case 'type':
                newPokemon.type = event.target.value
                break;

            case 'imageUrl':
                newPokemon.imageUrl = event.target.value
                break;
        }
    } 

    const savePokemon = () => {
        addPokemon(newPokemon)
        goBack()
    }

    return (
        <div style={{'margin': '0 1em'}}>

            <h1>Nouveau Pokémon</h1>
            
            <form>
                <div className={styles['field']} style={{'width': '48vw'}}>
                    <InputField label={'Nom'} name={"name"} handleInputChange={handleInputChange}/>
                </div>

                <br/>

                <div style={{'display': 'flex', 'justifyContent': 'space-between', 'height': '9em'}}>
                    <div style={{'width': '49%'}} className={styles['field']}>
                        <TextArea label={'Description'} name={'description'} handleInputChange={handleInputChange}/>
                    </div>

                    <div className={styles['field']} style={{ 'width': '49%', 'justifyContent': 'space-between' }}>
                        <div className={styles['field']}>
                            <InputField label={'Image'} name={"imageUrl"} handleInputChange={handleInputChange}/>
                        </div>

                        <br/>

                        <div style={{'display': 'flex', 'justifyContent': 'space-between'}}>
                            <div style={{'width': '48%'}} className={styles['field']}>
                                <InputField label={'Taille'} name={"size"} handleInputChange={handleInputChange} adornment={"cm"}/>
                            </div>

                            <div style={{'width': '48%'}} className={styles['field']}>
                                <InputField label={'Poids'} name={"weight"} handleInputChange={handleInputChange} adornment={"kg"}/>
                            </div>
                        </div> 
                    </div>
                </div>

                <br/>
                
                <div>
                    <label>Type</label>
                   
                    <div className={styles["radio-toolbar"]}>

                        <Radio label={"Feu"} name={"type"} value={"feu"} handleInputChange={handleInputChange}/>
                       
                        <Radio label={"Glace"} name={"type"} value={"glace"} handleInputChange={handleInputChange}/>

                        <Radio label={"Électricité"} name={"type"} value={"electric"} handleInputChange={handleInputChange}/>

                        <Radio label={"Vent"} name={"type"} value={"Vent"} handleInputChange={handleInputChange}/>
        
                    </div>
                  
                </div>

                <br/>

                <div className={styles["actions-buttons"]}>
                    <div onClick={savePokemon}>Enregistrer</div>
                    <div onClick={goBack}>Go Back</div>
                </div>  

            </form>
        </div>
    )
}

export default AddPokemon