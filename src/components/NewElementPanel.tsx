import { useState } from "react"

interface Props {
  handleNewElement: (n: string) => void
}

export const NewElementPanel = ({ handleNewElement }: Props) => {

  const [state, setState] = useState('');
  const handleOnClick = () => {
    if (state.trim().length == 0) return;
    handleNewElement(state);
    setState("");
  }
  return (
    <>
      <div className="row g-3">
        <div className="col">
          <input placeholder="Nueva tarea.." className="form-control"
            onChange={(e) => setState(e.target.value)} value={state}
            onKeyDown={(k) => { if (k.key === 'Enter') handleOnClick() }}>
              </input>  </div>
        <div className="col"> <button onClick={handleOnClick} className="btn btn-outline-success ">Crear nueva tarea </button></div>
      </div>
    </>
  )
}

