import React, { Component } from 'react';
//import { GET_EVENTS } from '../../queries';

class ListView extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    render() {
        return(
            <div className="content-flex mt-2em">
                <h2 className="font-family-roboto fw-700 ml-3em">All Events</h2>
                <input className="filter-bar margin-auto font-family-roboto fw-300 fs-1em" type="text" name="filter" placeholder="Search..."/>
            </div>
        );
    }

};

export default ListView;