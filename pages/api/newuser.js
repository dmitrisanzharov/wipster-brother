import dbConnect from "../../utils/dbConnect";
import WipsterUsers from '../../Model/wipsterBrohterDatabaseSchema';


dbConnect(); 


export default async function newUser (req, res) {
    
  console.log(req.body);

  const {fName, sName, email, passOne, description} = req.body;


  const postNewUserToMongo = new WipsterUsers({
      name: fName,
      secondname: sName,
      email: email,
      pass: passOne, 
      description: description
  });

  

  postNewUserToMongo.save();

  
  }