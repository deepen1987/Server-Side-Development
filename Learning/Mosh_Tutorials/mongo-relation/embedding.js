const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseID){
  const course = await Course.updateOne({ _id: courseID }, {
    $set: {
      "author.name": "S Deep"
    }
  });
}

// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'Mosh2' })
// ]);

// updateAuthor('614cd0b4f06a0c28a2af75b2')

async function addAuthors(courseID, author){
    const course = await Course.findById(courseID);
    course.authors.push(author);
    course.save()
}

async function removeAuthors(courseID, authorid){
  const course = await Course.findById(courseID);
  const author = course.authors.id(authorid);
  author.remove();
  course.save();
}

// addAuthors('614cd852adb99c43a5ecdb8a', new Author({ name: 'Mosh3' }));
removeAuthors('614cd852adb99c43a5ecdb8a', '614cd852adb99c43a5ecdb89');


