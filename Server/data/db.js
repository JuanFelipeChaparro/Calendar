import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/calendar', { useNewUrlParser: true, useUnifiedTopology: true });

const eventSchema = new mongoose.Schema({
    title: String,
    date: {
        startDate: Date,
        endDate: Date
    },
    description: String,
    type: String,
    owner: String,
    location: String
});

const enumSchema = new mongoose.Schema({
    title: String,
    data: Array
});

const Event = mongoose.model('Event', eventSchema);
const Enum = mongoose.model('Enum', enumSchema);

export { Event, Enum };