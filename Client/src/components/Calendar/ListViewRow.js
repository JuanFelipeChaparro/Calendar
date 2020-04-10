import React from 'react';
import { Badge } from 'react-bootstrap';
import { getMonth, getDay } from '../../utils/DateFormatter';
import { getTitleProper, getOwnerProper, getProperDescription } from '../../utils/TextFormatter';
import { GeoIcon } from '../../utils/Icons';

const onClickRow = (setId, showModal, id) => {
    setId(id);
    showModal(true);
};

const ListViewRow = ({ event, setId, showModal }) => {
    let { location, owner, date, description } = event;
    const month = getMonth(date.startDate).toUpperCase();
    const day = getDay(date.startDate);

    location = getTitleProper(location);
    owner = getOwnerProper(owner);
    description = getProperDescription(description);

    return (
        <tr onClick={() => onClickRow(setId, showModal, event.id)}>
            <td>
                <p className="date-row-table"><span className="blank-space">{day}</span>{month}</p>
            </td>
            <td>
                <p className="title-row-table">{event.title}<span className="blank-space link-style word-break-all">{GeoIcon()} {location}</span></p>
            </td>
            <td>
                {description}
            </td>
            <td>
                {event.type}
            </td>
            <td>
                <Badge variant="primary">{owner}</Badge>
            </td>
        </tr>
    );
};

export default ListViewRow;