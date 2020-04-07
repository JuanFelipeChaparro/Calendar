import { Event } from './db';
import { rejects } from 'assert';

export const resolvers = {
	Query: {
		getEvents: (root, {limit, offset}) => {
			return Event.find({}).limit(limit).skip(offset);
		},
		getEvent: (root, {id}) => {
			return new Promise((resolve, object) => {
				Event.findById(id, (error, event) => {
		    		if (error) rejects(error)
					else resolve(event)
				});
	    	});
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

			return new Promise((resolve, object) => {
				newEvent.save((error) => {
					if (error) rejects(error)
					else resolve("Event created successfully")
				});
			});
		}
	}
};
