const mongoose = require('mongoose');

const connectMongoose = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/nodepop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (err) {
    console.error('Error de conexión a MongoDB', err);
  }
};

module.exports = connectMongoose;
