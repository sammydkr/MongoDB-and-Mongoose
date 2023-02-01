require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
mongoose.connect(
  process.env.MONGO_URI, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
  },
() => {
  console.log('DB connection successful');
}
);

const schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = model('Person', schema);

const createAndSavePerson = (done) => {
  const person = new Person({
    name: 'Semih',
    age: 33,
    favoriteFoods:['Kebab'],
  });

  person.save(function (err, data) {
    done(null, data);
  });
};
const arrayOfpeople = [
  { name: 'Suzy', age: 4, favoriteFoods:['Peanut Butter'] },
  { name: 'Suzy', age: 4, favoriteFoods:['Peanut Butter'] },
  { name: 'Suzy', age: 4, favoriteFoods:['Peanut Butter'] },
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfpeople, (err, people) => {
    done(null, people);
  });
  };

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};
