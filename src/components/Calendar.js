import demoData from '../data/demoData';
import { orderByDate } from '../data/functions';

const Calendar = () => {

    console.log(orderByDate(demoData));

    return (
        <div className="calendar">
            {
                demoData.map((item, i) => {
                    return <div key={i}>{item.title}</div>
                })
            }
        </div>
    );
};

export default Calendar;