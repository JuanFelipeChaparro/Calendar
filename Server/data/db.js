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

const Event = mongoose.model('Event', eventSchema);

export { Event };