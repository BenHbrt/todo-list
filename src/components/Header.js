import {ReactComponent as Calendar} from '../img/calendar.svg';
import {ReactComponent as Kanban} from '../img/kanban.svg';
import {ReactComponent as Light} from '../img/light_mode.svg';
import {ReactComponent as Dark} from '../img/dark_mode.svg';
import { useContext } from 'react';
import { DisplayContext, LightContext } from '../App';
import Switch from "react-switch";

const Header = () => {

    const [displaySelect, setDisplaySelect] = useContext(DisplayContext);
    const [isLight, setIsLight] = useContext(LightContext);

    const clickHandler = (target) => {
        if (target !== displaySelect) {
            setDisplaySelect(target);
        } else {
            return null;
        };
    };

    return (
        <div className={`header ${isLight ? null : 'dark' }`}>
            
            <div className="header_displaySelector">
                <div className={`${displaySelect === 'calendar' ? 'selected' : null}`} onClick={() => clickHandler("calendar")}>
                    <Calendar height={`${displaySelect === 'calendar' ? '40' : '35'}`} width={`${displaySelect === 'calendar' ? '40' : '35'}`} style={{stroke: "black", fill: "black", strokeWidth: "10"}} />
                </div>
                <div className={`${displaySelect === 'kanban' ? 'selected' : null}`} onClick={() => clickHandler("kanban")}>
                    <Kanban height={`${displaySelect === 'kanban' ? '40' : '35'}`} width={`${displaySelect === 'kanban' ? '40' : '35'}`} style={{stroke: "black", fill: "black", strokeWidth: "1"}} />
                </div>
            </div>
            <h1>Todo List</h1>
            <div className="header_lightSelector">
                <Dark style={{stroke: `${isLight ? "black" : "#F0F4F8"}`, fill: `${isLight ? "black" : "#F0F4F8"}`}}/>
                <Switch    
                    checked={isLight}
                    onChange={() => setIsLight(!isLight)}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor="#888"
                /> 
                <Light style={{stroke: `${isLight ? "black" : "#F0F4F8"}`, fill: `${isLight ? "black" : "#F0F4F8"}`}}/>
            </div>
        </div>
    );
};

export default Header;