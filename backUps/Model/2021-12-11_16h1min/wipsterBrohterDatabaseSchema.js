import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    name: String,
    secondname: String,
    email: String,
    pass: String,
    description: String
}, {strict: false});

mongoose.models = {}; 

const WipsterUsers = mongoose.model.wipsterbrotherusers || mongoose.model('wipsterbrotherusers', Schema);

export default WipsterUsers; 

