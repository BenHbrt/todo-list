import { demoData, demoColumns } from '../data/demoData';
import { dateString } from '../data/dateFunctions';
import { sortKanban } from '../data/taskFunctions';
import { useContext } from 'react';
import { LightContext } from '../App';

const Calendar = () => {

    const data = sortKanban(demoColumns, demoData);
    const [isLight] = useContext(LightContext);

    console.log(data);

    return (
        <div className={`kanban ${isLight ? null : 'dark' }`}>
            {
                demoColumns.map((col, i) => {
                    return (
                        <div className="kanban_column" key={i}>
                            <div className="kanban_column_title title">{col}</div>
                            <div className="kanban_column_container">
                                {
                                    data[col].map((task, i) => {
                                        return (
                                            <div className="taskCard" key={i}>
                                                <div>{task.title}</div>
                                                <div>{dateString(task.dueDate)}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Calendar;