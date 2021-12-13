import dbConnect from "../../utils/dbConnect";
import WipsterUsers from '../../Model/wipsterBrohterDatabaseSchema';


dbConnect(); 


export default async function findAllUsers (req, res){

  let data = await WipsterUsers.find();
  res.send(data); 
  
  }