import { gql } from 'apollo-boost';

export const CREATE_EVENT = gql`
mutation createEvent($input: EventInput!) {
    createEvent(input: $input)
}`;