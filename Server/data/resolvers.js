import { Event, Enum } from './db';

export const resolvers = {

    Query: {
        getEvents: (root, {limit, offset, query}) => {
            let filter = {};

            if (query) 
                if (query.trim().length > 0) filter = {title: RegExp(query.trim(), 'i')};
            
            return Event.find(filter).limit(limit).skip(offset).sort({'date.startDate': -1});
        },
        getEvent: (root, {id}) => {
            return new Promise((resolve, reject) => {
                Event.findById(id, (error, event) => {
                    if (error) reject(new Error(error));
                    resolve(event? event : {});
                });
            }).catch(err => console.log(err));
        },
        getEnums: (root, {enumName}) => {
            return new Promise((resolve, reject) => {
                Enum.find({title: enumName}, (error, item) => {
                    if (error) reject(new Error(error));
                    resolve(item.length > 0? item[0].data : []);
                });
            }).catch(err => console.log(err));
        }
    },

    Mutation: {
        createEvent: (root, {input}) => {
            const newEvent = new Event({
                title: input.title,
                date: input.date,
                description: input.description,
                type: input.type,
                owner: input.owner,
                location: input.location
            });

            return new Promise((resolve, reject) => {
                newEvent.save((error) => {
                    if (error) reject(new Error(error));
                    else resolve("Event created successfully");
                });
            }).catch(err => console.log(err));
        }
    }

};