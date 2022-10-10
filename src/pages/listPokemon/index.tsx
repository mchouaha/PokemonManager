import { Fragment, FunctionComponent } from "react"
import { Link } from "react-router-dom"

import Card from "../../components/Card"
import Button from "../../components/Inputs/Button"
import { PokemonType } from "../../lib/interfaces"

type ListPokemonProps = {
    list: PokemonType[]
}

export const ListPokemon: FunctionComponent<ListPokemonProps> = ({list}) => {
        
    return (
        <Fragment>
        
            <Link to="/addPokemon">
                <Button label=" + Ajouter un Pokemon"/>
            </Link>

            <div className="list-pokemon" style={{'display': 'flex', 'flexWrap': 'wrap'}}>
                { list.map( (data) => <Card data={data} key={data.id}/>) }
            </div>
            
        </Fragment>
    )
}

export default ListPokemon