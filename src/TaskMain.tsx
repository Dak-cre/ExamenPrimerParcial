import { useState } from 'react';
import { getData, setItem, removeTask, finishTask } from './service/service-database';
import { CustomFilters } from './components/CustomFilters';
import { CostumerHeader } from './components/CostumerHeader';
import { NewElementPanel } from './components/NewElementPanel';
import { createTask, type Task } from './interfaces/Task';
import { CustomList } from './components/CustomList';

export const TaskMain = () => {

    const [data, setState] = useState<Task[]>(getData);
    const [filtro, setFiltro] = useState('Todos');
    const [search, setSearch] = useState('');
    //  const filtertasks = (n:string) => setFiltro;
    return (
        <div className='center'>
            <CostumerHeader />
            <NewElementPanel handleNewElement={(s) => { const task = createTask(s); setItem(task); setState(getData()); }} />
            <CustomFilters filter={(s) => setFiltro(s)} filterActual={filtro} searchTask={ setSearch } />
            <CustomList tasks={data}
                search={search}
                removetask={(id) => { removeTask(id); setState(getData()); }}
                finishtask={(id) => { finishTask(id); setState(getData()); }}
                filterTask={filtro}
            />

        </div>
    )
}
