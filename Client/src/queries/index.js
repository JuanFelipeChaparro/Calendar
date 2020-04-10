import { gql } from 'apollo-boost';

export const GET_EVENTS = gql`
query getEvents($limit: Int, $offset: Int, $query: String) {
    getEvents(limit: $limit, offset: $offset, query: $query) {
        id
        date {
            startDate
        }
        title
        location
        description
        type
        owner
    }
}`;

export const GET_EVENT = gql`
query getEvent($id: ID!) {
    getEvent(id: $id) {
        date {
            startDate
            endDate
        }
        title
        location
        description
    }
}`;

export const GET_OWNERS = gql`
{
    getEnums(enumName: "OWNERS")
}`;

export const GET_EVENT_TYPES = gql`
{
    getEnums(enumName: "EVENT_TYPES")
}`;