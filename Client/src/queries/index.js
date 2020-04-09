import { gql } from 'apollo-boost';

export const GET_EVENTS = gql`
query getEvents($limit: Int, $offset: Int) {
    getEvents(limit: $limit, offset: $offset) {
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

export const GET_OWNERS = gql`
{
    getEnums(enumName: "OWNERS")
}`;

export const GET_EVENT_TYPES = gql`
{
    getEnums(enumName: "EVENT_TYPES")
}`;