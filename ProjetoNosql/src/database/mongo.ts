import {connect} from 'mongoose';
import dotenv from  'dotenv';

dotenv.config();

export const mongoConnect = async () => {
  try{
    console.log('Conectando ao MongoDB...');
    await connect(process.env.MONGO_URL as string);
   console.log('MongoDB conectado com suceso!');
  }catch(error){
    console.log('Erro conexão mongoDb ', error);
  }
}