import { demoData } from '../data/demoData';
import { orderByDate } from '../data/taskFunctions';
import { dateString } from '../data/dateFunctions';
import { useContext } from 'react';
import { LightContext } from '../App';

const Calendar = () => {

    const data = orderByDate(demoData);
    const [isLight] = useContext(LightContext);

    return (
        <div className={`calendar ${isLight ? null : 'dark' }`}>
            <div className="calendar_container">
            {
                data.map((item, i) => {
                    return (
                        <div className='calendar_day' key={i}>
                            <div className='calendar_day_date title'>{dateString(item.date)}</div>
                            {
                                item.tasks.map((task, i) => {
                                    return (
                                        <div className="taskCard" key={i}>
                                            <div>{task.title}</div>
                                            <div>{task.status}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Calendar;