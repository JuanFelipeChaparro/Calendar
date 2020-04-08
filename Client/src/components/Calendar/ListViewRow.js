import React from 'react';
import { Badge } from 'react-bootstrap';
import { getMonth, getDay } from '../../utils/DateFormatter';
import { getTitleProper, getOwnerProper } from '../../utils/TextFormatter';

const getGeoIcon = () => (
    <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
    </svg>
);

const ListViewRow = ({event}) => {
    let { location, owner, date } = event;
    const month = getMonth(date.startDate).toUpperCase();
    const day = getDay(date.startDate);

    location = getTitleProper(location);
    owner = getOwnerProper(owner);

    return (
        <tr>
            <td>
                <p className="date-row-table"><span className="blank-space">{day}</span>{month}</p>
            </td>
            <td>
                <p className="title-row-table">{event.title}<span className="blank-space link-style">{getGeoIcon()} {location}</span></p>
            </td>
            <td>
                {event.description}
            </td>
            <td>
                {event.type}
            </td>
            <td>
                <Badge variant="info">{owner}</Badge>
            </td>
        </tr>
    );
};

export default ListViewRow;