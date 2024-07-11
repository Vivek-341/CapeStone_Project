import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://admin:admin@blog-app.jf6wryc.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
