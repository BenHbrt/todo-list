import {ReactComponent as Calendar} from '../img/calendar.svg';
import {ReactComponent as Kanban} from '../img/kanban.svg';
import { useContext } from 'react';
import { DisplayContext } from '../App';

const Header = () => {

    const [displaySelect, setDisplaySelect] = useContext(DisplayContext);

    const clickHandler = (target) => {
        if (target !== displaySelect) {
            setDisplaySelect(target);
        } else {
            return null;
        };
    };

    return (
        <div className="header">
            
            <div className="header_displaySelector">
                <div className={`${displaySelect === 'calendar' ? 'selected' : null}`} onClick={() => clickHandler("calendar")}>
                    <Calendar height={`${displaySelect === 'calendar' ? '40' : '35'}`} width={`${displaySelect === 'calendar' ? '40' : '35'}`} style={{stroke: "black", fill: "black", strokeWidth: "10"}} />
                </div>
                <div className={`${displaySelect === 'kanban' ? 'selected' : null}`} onClick={() => clickHandler("kanban")}>
                    <Kanban height={`${displaySelect === 'kanban' ? '40' : '35'}`} width={`${displaySelect === 'kanban' ? '40' : '35'}`} style={{stroke: "black", fill: "black", strokeWidth: "1"}} />
                </div>
            </div>
            <h1>Todo List</h1>
            <div className="light-selector">
            
            </div>
        </div>
    );
};

export default Header;