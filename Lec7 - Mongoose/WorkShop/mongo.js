// Create a database named 'library_db':
use library_db


// Create a collection named 'books' and insert documents:
db.books.insertMany([
    {
      title: 'The Adventures of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      available: true
    },
    {
      title: 'The A B C Murders',
      author: 'Agatha Christie',
      available: false
    },
    {
      title: 'Nemesis',
      author: 'Agatha Christie',
      available: true
    },
    {
      title: 'The Green Mile',
      author: 'Stephen King',
      available: false
    },
    {
      title: 'Macbeth',
      author: 'William Shakespeare',
      available: true
    },
    {
      title: 'Treasure Island',
      author: 'Robert Louis Stevenson',
      available: true
    }
  ])
  

// Display all the books in the collection:
db.books.find({})

// Display all available books:
db.books.find({ available: true })

// Display all available books by 'Agatha Christie':
db.books.find({ author: 'Agatha Christie', available: true })

// Update "The Green Mile" book availability to 'available':
db.books.updateOne(
    { title: 'The Green Mile' },
    { $set: { available: true } }
  )

// Display all the books in the collection again:
db.books.find({})
