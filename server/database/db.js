import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.jf6wryc.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true ,useUnifiedTopology: true,poolSize: 10,socketTimeoutMS: 30000, // Adjust as needed
  keepAlive: true})
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
