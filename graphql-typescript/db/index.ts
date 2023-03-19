import mongoose from 'mongoose';

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  throw new Error('Mongo URI not found');
}

const connectDB = async () => {
    await mongoose.connect(mongoURI)
    .then(() => console.log('Conectado ao banco de dados MongoDB'))
    .catch(err => console.log('Erro ao conectar ao banco de dados', err));
};

export default connectDB;