import mongoose from "mongoose";

export const connectMongoDB = async () => {
    const mongoURI = process.env.DB_MONGOURL || 'mongodb://localhost:27017/products';

    await mongoose.connect(mongoURI, {
        dbName: 'products',
    });

    const conn = mongoose.connection;
    conn.on('error', console.error.bind(console, 'connection error:'));
    conn.once('open', function () {
        console.log('Connected to MongoDB successfully!');
    });

    return conn;
}

export const disconnectMongoDB = async () => {
    console.log('Disconnecting from MongoDB...');
    await mongoose.disconnect();
}