import { useState } from "react"

//* Para la barra de busqueda le agregue que al dar enter, borra la busqueda por lo cual por defecto vuelve a mostrar
//* todas las tareas, ya que hace busquedas en tiempo real mientras el usuarios escribe busca y muestra las tareas
//* que contenga lo escrito por el usuario
interface Props {
    filter: (filtro: string) => void,
    filterActual: string,
    searchTask: (search: string) => void
}

export const CustomFilters = ({ filter, filterActual, searchTask }: Props) => {
    const filtros: string[] = ['Todos', 'Completadas', 'Pendientes']
    const [search, stateSearch] = useState('');
    return (
        <div className="filtros-container">
            {filtros.map((f) => (<button key={f} onClick={() => filter(f)} className={filterActual === f ? "filtro-boton-activo" : "filtro-boton"}>{f}</button>
            ))}
            <input placeholder="Buscar" className="form-control col"
                onChange={
                    (c) => {
                        searchTask(c.target.value);
                        stateSearch(c.target.value);
                    }}
                value={search}
                onKeyDown={(k) => { if (k.key === 'Enter') { searchTask(''); stateSearch(''); } }}
            />
        </div>

    )
}

