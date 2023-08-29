// - Insert arrays and arrays of nested documents.
db.users.insertMany(
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]
);



----------------
// - Execute find queries using query operators ($ne, $eq, $gt, $regex, etc) and projection.
local> db.users.find()
db.users.find({
  name: "Leanne Graham"
})

$ne : not equal, $eq : equals , $gt, $regex

db.users.find({
  name: { $ne: "Leanne Graham" }
})

db.users.find( { id: { $gt: 9 } } )

// projection
db.users.find({},{name:1,email:1, _id:0})
// ---------------
// - Execute find queries on arrays and arrays of nested documents using $elemMatch, $all and $size.
db.survey.insertMany( [
   { "_id": 1, "results": [ { "product": "abc", "score": 10, "tags": [ "school", "book", "bag", "headphone", "appliance" ] },
                            { "product": "xyz", "score": 5 } ] },
   { "_id": 2, "results": [ { "product": "abc", "score": 8 },
                            { "product": "xyz", "score": 7 } ] },
   { "_id": 3, "results": [ { "product": "abc", "score": 7 },
                            { "product": "xyz", "score": 8 } ] },
   { "_id": 4, "results": [ { "product": "abc", "score": 7 },
                            { "product": "def", "score": 8 } ] }
] )
// elemMatch
// https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/
db.survey.find(
   { results: { $elemMatch: { product: "xyz", score: { $gte: 8 } } } }
   // The $elemMatch operator matches documents that contain an array field with at least one element that matches all the specified query criteria
)
// -------
db.movies.insertMany([
  {
    "title": "The Last Student Returns",
    "meta": { "rating": 9.5, "aired": 2018, "runtime": 100 },
    "visitors": 1300000,
    "expectedVisitors": 1550000,
    "genre": ["thriller", "drama"]
  },
  {
      "title": "Supercharged Teaching",
      "meta": {"rating": 9.3, "aired": 2016, "runtime": 60},
      "visitors": 370000,
      "expectedVisitors": 1000000,
      "genre": ["thriller", "horror"]
  },
  {
      "title": "Teach me if you can",
      "meta": {"rating": 8.5, "aired": 2014, "runtime": 90},
      "visitors": 590378,
      "expectedVisitors": 500000,
      "genre": ["action", "thriller"]
  }
])


// all
// https://www.mongodb.com/docs/manual/reference/operator/query/all/
db.movies.find( { genre: { $all: [ "thriller", "drama" ] } } )
db.movies.find( { $and: [{ genre:[ "drama", "horror" ]}] } )


db.movies.find({ "genre": { $all: ["drama", "horror"]}})
// -------
// size
// https://www.mongodb.com/docs/manual/reference/operator/query/size/
db.movies.find({
  genre : {$size:2}
})

// -----------------------------------------------------------------------------------------------------------------------
// Lab 2
// - Using cursor methods (skip, limit, sort).
    db.users.find({}).skip(8) //Get last two elements
    db.users.find({}).limit(5) //Get 5 elements   1-5
    db.users.find({}).limit(5).sort({id:-1}) //Descending last 5 elements   6-10
// - Executing update queries with ($set, $unset, $push, $pop, $pull, etc).
    db.users.updateOne({id:1},{$set:{email:"someone@whatever.com"}})
    db.users.updateOne({id:1},{$unset:{email:"someone@whatever.com"}})
    db.users.updateOne({id:3},{$push:{scores:47}})
    db.users.updateOne({id:3},{ $pop:{ scores:1 }})   // { $pop: { <field>: <-1 | 1>, ... } }
    db.users.updateOne({id: 3},{ $pull: { hobbies: { $in: [ "Singing"] } } })   // all instances of a value or values that match a specified condition.
// - Using $push with modifiers.
    db.users.updateOne({ id: 1 },{ $push: { scores: { $each: [ 50, 70, 90 ] } } })  // $push with the $each modifier to append multiple values to the array field.
    db.users.updateOne({ id: 1 },{ $push: { scores: { $each: [ 60 ], $position:1  } } })  // $position: <num>  -> indicates the position in the array, based on a zero-based index
// - Using $, $[] and $[<identifier>].
// - Using update with { upsert: true }.
    db.users.updateOne(
        {id: 4,scores:10},
        { $set: { "scores.$" : 100 } }
        // The positional $ operator identifies an element in an array to update without explicitly specifying the position of the element in the array
        // in case you don't know the position of this element
    )
    db.users.updateOne(
        {id: 5,scores:10},
        { $set: { "scores.$[]" : 50 } }   // $[] indicates that the update operator should modify all elements in the specified array field.
    )
    db.users.updateOne(
        { id:6},
        { $set: { "scores.$[element]": 35 } },
        { arrayFilters: [ { element: 20 } ], upsert: true }
        // update all elements that equal 20 to be 35
     )

// -------------------------------------------------------------------------------------------------------
// lab 2.2 Instructor Helmy
// 1-Import the attached data into a new database (e.g. boxOffice) and collection (e.g. movieStarts)
db.movieStarts.insertMany([
  {
    "title": "The Last Student Returns",
    "meta": { "rating": 9.5, "aired": 2018, "runtime": 100 },
    "visitors": 1300000,
    "expectedVisitors": 1550000,
    "genre": ["thriller", "drama"]
  },
  {
      "title": "Supercharged Teaching",
      "meta": {"rating": 9.3, "aired": 2016, "runtime": 60},
      "visitors": 370000,
      "expectedVisitors": 1000000,
      "genre": ["thriller", "horror"]
  },
  {
      "title": "Teach me if you can",
      "meta": {"rating": 8.5, "aired": 2014, "runtime": 90},
      "visitors": 590378,
      "expectedVisitors": 500000,
      "genre": ["action", "thriller"]
  }
])


// use boxOffice
db.movieStarts.find()


// 2-Find all movies that have a rating higher than 9.2 and a runtime lower than 100 minutes

db.movieStarts.find({ "meta.rating": { $gt: 9.2 }, "meta.runtime": { $lt: 100 } })

// 3-Find all movies that have a genre of "drama" or "action"

db.movieStarts.find({ "genre": { $in: ["drama", "action"] } })

// 4-Find all movies where visitors exceeded expected Visitors
// https://www.mongodb.com/docs/manual/reference/operator/query/expr/

db.movieStarts.find({ $expr: { $gt: [ "$visitors", "$expectedVisitors" ] } })


// 5-Find all movies with exactly two genres
db.movieStarts.find({ "genre": { $size: 2 } })

// 6-Find all movies which aired in 2018

db.movieStarts.find({ "meta.aired": 2018 })


//7-Find all movies which have ratings greater than 8 but lower than 10

db.movieStarts.find({ "meta.rating": { $gt: 8, $lt: 10 } })

// 8- Create a new collection ("sports") and upset two new documents into it (with these fields: "title", "requiresTeam")
db.createCollection("sports")

db.sports.insertMany([
  {
    "title": "Basketball",
    "requiresTeam": true
  },
  {
    "title": "Tennis",
    "requiresTeam": false
  }
])


// 9-Update all documents which do require a team by adding a new field with the minimum amount of players required

db.sports.updateMany(
  { "requiresTeam": true },
  { "$set": { "minPlayers": 5 } }
)

//   10 -Update all documents that require a team by increasing the number of required players by 10

db.sports.updateMany(
  { "requiresTeam": true },
  { "$inc": { "minPlayers": 10 } }
)
  
  
db.sports.find()
// -------------------------------------------------------
// Lab 3
// - Executing deleteOne and deleteMany operations.
db.users.deleteOne({id:10});
db.users.deleteMany({age:{$gte:80}});

// ----
// Indexes
// https://www.digitalocean.com/community/tutorials/how-to-use-indexes-in-mongodb
// https://www.mongodb.com/docs/manual/indexes/
// - Creating indexes (single field, compound, multi-key and text indexes).
// - Using cursor.explain with different queries and reading and understanding the winningPlan.
   db.peaks.insertMany([
       {
           "name": "Everest",
           "height": 8848,
           "location": ["Nepal", "China"],
           "ascents": {
               "first": {
                   "year": 1953
               },
               "first_winter": {
                   "year": 1980
               },
               "total": 5656
           }
       },
       {
           "name": "K2",
           "height": 8611,
           "location": ["Pakistan", "China"],
           "ascents": {
               "first": {
                   "year": 1954
               },
               "first_winter": {
                   "year": 1921
               },
               "total": 306
           }
       },
       {
           "name": "Kangchenjunga",
           "height": 8586,
           "location": ["Nepal", "India"],
           "ascents": {
               "first": {
                   "year": 1955
               },
               "first_winter": {
                   "year": 1986
               },
               "total": 283
           }
       },
       {
           "name": "Lhotse",
           "height": 8516,
           "location": ["Nepal", "China"],
           "ascents": {
               "first": {
                   "year": 1956
               },
               "first_winter": {
                   "year": 1988
               },
               "total": 461
           }
       },
       {
           "name": "Makalu",
           "height": 8485,
           "location": ["China", "Nepal"],
           "ascents": {
               "first": {
                   "year": 1955
               },
               "first_winter": {
                   "year": 2009
               },
               "total": 361
           }
       }
   ])

// Creating a Single Field Index and Evaluating Index Usage
   db.peaks.find(
       { "height": { $gt: 8700 } }
   ).explain("executionStats")

   >> 
   {
           "queryPlanner" : {
                   . . .
                   "winningPlan" : {
                           "stage" : "COLLSCAN", // MongoDB needed to go through the full collection without any aids to find the requested documents
                           . . .
                   },
           },
           . . .
           "executionStats" : {
                   . . .
                   "nReturned" : 1,             // how many documents were returned by the given query
                   "executionTimeMillis" : 0,
                   "totalKeysExamined" : 0,     // how many index entries MongoDB checked
                   "totalDocsExamined" : 5,
                   . . .
           },
           . . .
   }
   // ----
   db.peaks.createIndex( { "height": 1 } )
   // Note: With single field indexes, the ordering is not important, since the index structure can be traversed in both directions efficiently. Choosing the order for index fields becomes more important with compound indexes based on multiple fields

   db.peaks.find(
       { "height": { $gt: 8700 } }
   ).explain("executionStats")
   >>
   {
           "queryPlanner" : {
                   . . .
                   "winningPlan" : {
                           . . .
                           "inputStage" : {
                                   "stage" : "IXSCAN",
                                   . . .
                                   "indexName" : "height_1",
                                   . . .
                           }
                   },
                   . . .
           },
           "executionStats" : {
                   . . .
                   "nReturned" : 1,
                   "executionTimeMillis" : 0,
                   "totalKeysExamined" : 1,
                   "totalDocsExamined" : 1,
                   . . .
           },
           . . .
   }

// Creating Unique Indexes
   db.peaks.createIndex( { "name": 1 }, { "unique": true } )      

   db.peaks.insertOne({
       "name": "Everest",
       "height": 9200,
       "location": ["India"],
       "ascents": {
           "first": {
               "year": 2020
           },
           "first_winter": {
               "year": 2021
           },
           "total": 2
       }
   })

   >>
   WriteError({
           "index" : 0,
           "code" : 11000,
           "errmsg" : "E11000 duplicate key error collection: test.peaks index: name_1 dup key: { name: \"Everest\" }",
           "op" : {
               . . .

// Creating a Compound Field Index
   db.peaks.find(
       {
           "ascents.first_winter.year": { $gt: 1990 },
           "height": { $lt: 8600 }
       }
   ).sort({ "height": -1 })

   db.peaks.find(
       {
           "ascents.first_winter.year": { $gt: 1990 },
           "height": { $lt: 8600 }
       }
   ).sort({ "height": -1 }).explain("executionStats")

   >>
   {
           "queryPlanner" : {
                   . . .
                   "winningPlan" : {
                                   "stage" : "IXSCAN",
                                   . . .
                                   "indexName" : "height_1",
                                   . . .
                           }
                   },
                   . . .
           },
           "executionStats" : {
                   . . .
                   "nReturned" : 1,
                   "executionTimeMillis" : 0,
                   "totalKeysExamined" : 3,
                   "totalDocsExamined" : 3,
                   . . .
           },
           . . .
   }
   // the nReturned value denoting the number of returned documents is different than both totalKeysExamined and totalDocsExamined. 
   // MongoDB used the single field index on the height field to narrow down the results from 5 to 3, 
   // but then had to scan the remaining documents to check the first winter ascent date.

   // If an index is only available for one part of a query, MongoDB will use it to narrow down the results first before doing a collection scan. 
   // It will traverse only the list of documents it initially filtered in order to satisfy the rest of the query.

   db.peaks.createIndex(
       {
           "ascents.first_winter.year": 1,
           "height": -1
       }
   )

   db.peaks.find(
       {
           "ascents.first_winter.year": { $gt: 1990 },
           "height": { $lt: 8600 }
       }
   ).sort({ "height": -1 }).explain("executionStats")

   >>
   {
           "queryPlanner" : {
                   . . .
                   "winningPlan" : {
                                   "stage" : "IXSCAN",
                                   . . .
                                   "indexName" : "ascents.first_winter.year_1_height_-1",       // the new compound index
                                   . . .
                           }
                   },
                   . . .
           },
           "executionStats" : {
                   . . .
                   "nReturned" : 1,
                   "executionTimeMillis" : 0,
                   "totalKeysExamined" : 1,           
                   "totalDocsExamined" : 1,              // only one doc is examined
                   . . .
           },
           . . .
   }

// Creating a Multi-key Index
   // one of the documents
   {
     "name": "Everest",
     "height": 8848,
     "location": ["Nepal", "China"],
     "ascents": {
         "first": {
             "year": 1953
         },
         "first_winter": {
             "year": 1980
         },
         "total": 5656
     }
   }

   db.peaks.find(
       { "location": "Nepal" }
   )
   // Notice that none of these peaks are only in Nepal.
   // Each of these four peaks span more than one country as indicated by their location fields, all of which are an array of multiple values.
   // What is more, these values can appear in different orders. 
   // For example, Lhotse is listed as being in [ "Nepal", "China" ], whereas Makalu is listed as being in [ "China", "Nepal" ].

   db.peaks.createIndex( { "location": 1 } )

   db.peaks.find(
       { "location": "Nepal" }
   ).explain("executionStats")

   >>
   {
           "queryPlanner" : {
                   . . .
                   "winningPlan" : {
                           . . .
                           "inputStage" : {
                                   "stage" : "IXSCAN",
                                   . . .
                                   "indexName" : "location_1",
                                   "isMultiKey" : true,
                                   . . .
                           }
                   },
                   . . .
           },
           "executionStats" : {
                   . . .
                   "nReturned" : 4,
                   "executionTimeMillis" : 0,
                   "totalKeysExamined" : 4,
                   "totalDocsExamined" : 4,
                   . . .
           }
           . . .
   }


// Listing and Removing Indexes on a Collection
   db.peaks.getIndexes()
   >>
   [
           {
                   "v" : 2,
                   "key" : {
                           "_id" : 1
                   },
                   "name" : "_id_"
           },
           {
                   "v" : 2,
                   "key" : {
                           "height" : 1
                   },
                   "name" : "height_1"
           },
           {
                   "v" : 2,
                   "unique" : true,
                   "key" : {
                           "name" : 1
                   },
                   "name" : "name_1"
           },
           {
                   "v" : 2,
                   "key" : {
                           "ascents.total" : 1
                   },
                   "name" : "ascents.total_1"
           },
           {
                   "v" : 2,
                   "key" : {
                           "ascents.first_winter.year" : 1,
                           "height" : -1
                   },
                   "name" : "ascents.first_winter.year_1_height_-1"
           },
           {
                   "v" : 2,
                   "key" : {
                           "location" : 1
                   },
                   "name" : "location_1"
           }
   ]

   db.peaks.dropIndex( { "height": 1 } )
   db.peaks.dropIndex("ascents.first_winter.year_1_height_-1")
// ----

// When evaluating the clauses in the $or expression, MongoDB either performs a collection scan or, if all the clauses are supported by indexes, MongoDB performs index scans. 

// aggregation
// https://www.digitalocean.com/community/tutorials/how-to-use-aggregations-in-mongodb
// https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/ 
// - Running aggregation queries that use ($match, $count, $limit, $skip and $sort).
// - Running aggregation queries that use ($match, $count, $limit, $skip and $sort).
// Preparing the Test Data
  db.cities.insertMany([
    {"name": "Seoul", "country": "South Korea", "continent": "Asia", "population": 25.674 },
    {"name": "Mumbai", "country": "India", "continent": "Asia", "population": 19.980 },
    {"name": "Lagos", "country": "Nigeria", "continent": "Africa", "population": 13.463 },
    {"name": "Beijing", "country": "China", "continent": "Asia", "population": 19.618 },
    {"name": "Shanghai", "country": "China", "continent": "Asia", "population": 25.582 },
    {"name": "Osaka", "country": "Japan", "continent": "Asia", "population": 19.281 },
    {"name": "Cairo", "country": "Egypt", "continent": "Africa", "population": 20.076 },
    {"name": "Tokyo", "country": "Japan", "continent": "Asia", "population": 37.400 },
    {"name": "Karachi", "country": "Pakistan", "continent": "Asia", "population": 15.400 },
    {"name": "Dhaka", "country": "Bangladesh", "continent": "Asia", "population": 19.578 },
    {"name": "Rio de Janeiro", "country": "Brazil", "continent": "South America", "population": 13.293 },
    {"name": "São Paulo", "country": "Brazil", "continent": "South America", "population": 21.650 },
    {"name": "Mexico City", "country": "Mexico", "continent": "North America", "population": 21.581 },
    {"name": "Delhi", "country": "India", "continent": "Asia", "population": 28.514 },
    {"name": "Buenos Aires", "country": "Argentina", "continent": "South America", "population": 14.967 },
    {"name": "Kolkata", "country": "India", "continent": "Asia", "population": 14.681 },
    {"name": "New York", "country": "United States", "continent": "North America", "population": 18.819 },
    {"name": "Manila", "country": "Philippines", "continent": "Asia", "population": 13.482 },
    {"name": "Chongqing", "country": "China", "continent": "Asia", "population": 14.838 },
    {"name": "Istanbul", "country": "Turkey", "continent": "Europe", "population": 14.751 }
  ])

// Using the $match Aggregation Stage
  db.cities.aggregate([
      { $match: { "continent": { $in: ["North America", "Asia"] } } }         // db.cities.find({ "continent": "North America" })
  ])
  >>
  { "_id" : ObjectId("612d1e835ebee16872a109a4"), "name" : "Seoul", "country" : "South Korea", "continent" : "Asia", "population" : 25.674 }
  { "_id" : ObjectId("612d1e835ebee16872a109a5"), "name" : "Mumbai", "country" : "India", "continent" : "Asia", "population" : 19.98 }
  . . .

// Using the $sort Aggregation Stage
  // db.cities.find().sort({ "population": -1 })
  db.cities.aggregate([
      { $sort: { "population": -1 } }
  ])
  >>
  { "_id" : ObjectId("612d1e835ebee16872a109ab"), "name" : "Tokyo", "country" : "Japan", "continent" : "Asia", "population" : 37.4 }
  { "_id" : ObjectId("612d1e835ebee16872a109b1"), "name" : "Delhi", "country" : "India", "continent" : "Asia", "population" : 28.514 }
  { "_id" : ObjectId("612d1e835ebee16872a109a4"), "name" : "Seoul", "country" : "South Korea", "continent" : "Asia", "population" : 25.674 }
  . . .
  // --- compine $match with $sort
  db.cities.aggregate([
      { $match: { "continent": "North America" } },
      { $sort: { "population": 1 } }
  ])
  >>
  { "_id" : ObjectId("612d1e835ebee16872a109b4"), "name" : "New York", "country" : "United States", "continent" : "North America", "population" : 18.819 }
  { "_id" : ObjectId("612d1e835ebee16872a109b0"), "name" : "Mexico City", "country" : "Mexico", "continent" : "North America", "population" : 21.581 }

// Using the $group Aggregation Stage
  db.cities.aggregate([
      { $group: { "_id": "$continent" } }
  ])
  // For $group stages within an aggregation pipeline, though, it is required that you specify an _id field with a valid expression.

  // This aggregate() method, though, does specify an _id value; namely, each value found in the continent fields of each document in the cities collection. 
  // Any time you want to refer the values of a field in an aggregation pipeline like this, you must precede the name of the field with a dollar sign ($). 
  // In MongoDB, this is referred to as a field path, as it directs the operation to the appropriate field where it can find the values to be used in the pipeline stage.
  // 
  // Here in this example, "$continent" tells MongoDB to take the continent field from the original document 
  // and use its value to construct the expression value in the aggregation pipeline. 
  // MongoDB will output a single document for each unique value of that grouping expression:
  >>
  { "_id" : "Africa" }
  { "_id" : "Asia" }
  { "_id" : "South America" }
  { "_id" : "Europe" }
  { "_id" : "North America" }

  db.cities.aggregate([
      {
          $group: {
              "_id": {
                  "continent": "$continent",
                  "country": "$country"
              }
          }
      }
  ])
  >>
  { "_id" : { "continent" : "Europe", "country" : "Turkey" } }
  { "_id" : { "continent" : "South America", "country" : "Argentina" } }
  { "_id" : { "continent" : "Asia", "country" : "Bangladesh" } }
  { "_id" : { "continent" : "Asia", "country" : "Philippines" } }
  { "_id" : { "continent" : "Asia", "country" : "South Korea" } }
  { "_id" : { "continent" : "Asia", "country" : "Japan" } }
  { "_id" : { "continent" : "Asia", "country" : "China" } }
  { "_id" : { "continent" : "North America", "country" : "United States" } }
  { "_id" : { "continent" : "North America", "country" : "Mexico" } }
  { "_id" : { "continent" : "Africa", "country" : "Nigeria" } }
  { "_id" : { "continent" : "Asia", "country" : "India" } }
  { "_id" : { "continent" : "Asia", "country" : "Pakistan" } }
  { "_id" : { "continent" : "Africa", "country" : "Egypt" } }
  { "_id" : { "continent" : "South America", "country" : "Brazil" } }

  ----
  // with accumulator operators 
  db.cities.aggregate([
      {
          $group: {
              "_id": {
                  "continent": "$continent",
                  "country": "$country"
              },
              "highest_population": { $max: "$population" },
              "first_city": { $first: "$name" },
              "cities_in_top_20": { $sum: 1 }
          }
      }
  ])
  >>
  { "_id" : { "continent" : "North America", "country" : "United States" }, "highest_population" : 18.819, "first_city" : "New York", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Asia", "country" : "Philippines" }, "highest_population" : 13.482, "first_city" : "Manila", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "North America", "country" : "Mexico" }, "highest_population" : 21.581, "first_city" : "Mexico City", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Africa", "country" : "Nigeria" }, "highest_population" : 13.463, "first_city" : "Lagos", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Asia", "country" : "India" }, "highest_population" : 28.514, "first_city" : "Mumbai", "cities_in_top_20" : 3 }
  { "_id" : { "continent" : "Asia", "country" : "Pakistan" }, "highest_population" : 15.4, "first_city" : "Karachi", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Africa", "country" : "Egypt" }, "highest_population" : 20.076, "first_city" : "Cairo", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "South America", "country" : "Brazil" }, "highest_population" : 21.65, "first_city" : "Rio de Janeiro", "cities_in_top_20" : 2 }
  { "_id" : { "continent" : "Europe", "country" : "Turkey" }, "highest_population" : 14.751, "first_city" : "Istanbul", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Asia", "country" : "Bangladesh" }, "highest_population" : 19.578, "first_city" : "Dhaka", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "South America", "country" : "Argentina" }, "highest_population" : 14.967, "first_city" : "Buenos Aires", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Asia", "country" : "South Korea" }, "highest_population" : 25.674, "first_city" : "Seoul", "cities_in_top_20" : 1 }
  { "_id" : { "continent" : "Asia", "country" : "Japan" }, "highest_population" : 37.4, "first_city" : "Osaka", "cities_in_top_20" : 2 }
  { "_id" : { "continent" : "Asia", "country" : "China" }, "highest_population" : 25.582, "first_city" : "Beijing", "cities_in_top_20" : 3 }
  -
  // A summarized document representing Japan
  { "_id" : { "continent" : "Asia", "country" : "Japan" }, "highest_population" : 37.4, "first_city" : "Osaka", "cities_in_top_20" : 2 }
  // The cities_in_top_20 field shows that two Japanese cities are on the list of the 20 most populated cities.     -> Correct :  the dataset has two documents representing cities in Japan (Tokyo and Osaka),
  // The highest_population corresponds to the population of Tokyo, which is indeed the higher population of the two.

// Using the $project Aggregation Stage
  db.cities.aggregate([
      {
          $project: {
              "_id": 0,
              "location": {
                  "country": "$country",
                  "continent": "$continent",
              },
              "name": "$name",
              "population": "$population"
          }
      }
  ])

  // When the projection document contains keys with 1 as their values, it describes the list of fields that will be included in the result. 
  // If, on the other hand, projection keys are set to 0, the projection document describes the list of fields that will be excluded from the result.
  >>
  { "location" : { "country" : "South Korea", "continent" : "Asia" }, "name" : "Seoul", "population" : 25.674 }
  { "location" : { "country" : "India", "continent" : "Asia" }, "name" : "Mumbai", "population" : 19.98 }
  { "location" : { "country" : "Nigeria", "continent" : "Africa" }, "name" : "Lagos", "population" : 13.463 }
  { "location" : { "country" : "China", "continent" : "Asia" }, "name" : "Beijing", "population" : 19.618 }
  { "location" : { "country" : "China", "continent" : "Asia" }, "name" : "Shanghai", "population" : 25.582 }
  { "location" : { "country" : "Japan", "continent" : "Asia" }, "name" : "Osaka", "population" : 19.281 }
  { "location" : { "country" : "Egypt", "continent" : "Africa" }, "name" : "Cairo", "population" : 20.076 }
  { "location" : { "country" : "Japan", "continent" : "Asia" }, "name" : "Tokyo", "population" : 37.4 }
  { "location" : { "country" : "Pakistan", "continent" : "Asia" }, "name" : "Karachi", "population" : 15.4 }
  { "location" : { "country" : "Bangladesh", "continent" : "Asia" }, "name" : "Dhaka", "population" : 19.578 }
  { "location" : { "country" : "Brazil", "continent" : "South America" }, "name" : "Rio de Janeiro", "population" : 13.293 }
  { "location" : { "country" : "Brazil", "continent" : "South America" }, "name" : "São Paulo", "population" : 21.65 }
  { "location" : { "country" : "Mexico", "continent" : "North America" }, "name" : "Mexico City", "population" : 21.581 }
  { "location" : { "country" : "India", "continent" : "Asia" }, "name" : "Delhi", "population" : 28.514 }
  { "location" : { "country" : "Argentina", "continent" : "South America" }, "name" : "Buenos Aires", "population" : 14.967 }
  { "location" : { "country" : "India", "continent" : "Asia" }, "name" : "Kolkata", "population" : 14.681 }
  { "location" : { "country" : "United States", "continent" : "North America" }, "name" : "New York", "population" : 18.819 }
  { "location" : { "country" : "Philippines", "continent" : "Asia" }, "name" : "Manila", "population" : 13.482 }
  { "location" : { "country" : "China", "continent" : "Asia" }, "name" : "Chongqing", "population" : 14.838 }
  { "location" : { "country" : "Turkey", "continent" : "Europe" }, "name" : "Istanbul", "population" : 14.751 }


// Putting All the Stages Together
  // the task at hand is to find the most populated city for each country in country in Asia and North America and return both its name and population.
  // The results should be sorted by the highest population, returning countries with the largest cities first, 
  // and you are interested only in countries where the most populated city crosses the threshold of 20 million people. 
  // Lastly, the document structure you aim for should replicate the following: 

  {
      "location" : {
          "country" : "Japan",
          "continent" : "Asia"
      },
      "most_populated_city" : {
          "name" : "Tokyo",
          "population" : 37.4
      }
  }

  // sol:
  db.cities.aggregate([
      {
          $match: {
              "continent": { $in: ["North America", "Asia"] }
          }
      },
      {
          $sort: { "population": -1 }
      },
      {
          $group: {
              "_id": {
                  "continent": "$continent",
                  "country": "$country"
              },
              "first_city": { $first: "$name" },
              "highest_population": { $max: "$population" }
          }
      },
      {
          $match: {
              "highest_population": { $gt: 20.0 }
          }
      },
      {
          $sort: { "highest_population": -1 }
      },
      {
          $project: {
              "_id": 0,
              "location": {
                  "country": "$_id.country",
                  "continent": "$_id.continent",
              },
              "most_populated_city": {
                  "name": "$first_city",
                  "population": "$highest_population"
              }
          }
      }
  ])


//$limit
db.users.aggregate([
    { $limit : 5 }  // the first five users only are passed to the next stage
]);
//$skip
db.users.aggregate([
    { $skip : 5 }   // skip the first five documents, and pass the rest
]);

//$count
db.users.aggregate(
  [
    {
      $match: {
        "website":"ola.org"
      }
    },
    {
      $count: "documents_count"
    }
  ]
)
>>
[ { documents_count: 1 } ]


// References:
// https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline/ 
// https://www.mongodb.com/docs/manual/indexes/

// -----------
// lab 3.2 Instructor Helmy
// Import the attached data into a new database and collection
// after installing the Database Tools
mongoimport --db local --collection persons --file persons.json --jsonArray

// find all documents with age greater than 20 with index (create index on age) on age and another one with drop index and run explain with executionStats on both and see executionTimeMillis and discuss what you see
db.persons.find({"registered.age":{$gt:20}}).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'local.persons',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 20 } },
    queryHash: '08155E45',
    planCacheKey: '08155E45',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'COLLSCAN',                                                          // COLLSCAN
      filter: { 'dob.age': { '$gt': 20 } },
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 5000,
    executionTimeMillis: 2,                                                       // 2 s
    totalKeysExamined: 0,
    totalDocsExamined: 5000,                                                      // 5000
    executionStages: {
      stage: 'COLLSCAN',
      filter: { 'dob.age': { '$gt': 20 } },
      nReturned: 5000,
      executionTimeMillisEstimate: 0,
      works: 5002,
      advanced: 5000,
      needTime: 1,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      direction: 'forward',
      docsExamined: 5000
    }
  }
}
// --
// with the index
db.persons.createIndex({"dob.age":1})
db.persons.find({"dob.age":{$gt:20}}).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'local.persons',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 20 } },
    queryHash: '08155E45',
    planCacheKey: '3F4F0F60',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
        stage: 'IXSCAN',                                                    // IXSCAN
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(20, inf.0]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 5000,
    executionTimeMillis: 12,                                              // 12
    totalKeysExamined: 5000,                                              // totalKeysExamined
    totalDocsExamined: 5000,
    executionStages: {
      stage: 'FETCH',
      nReturned: 5000,
      executionTimeMillisEstimate: 0,
      works: 5001,
      advanced: 5000,
      needTime: 0,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      docsExamined: 5000,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',                                            // IXSCAN
        nReturned: 5000,
        executionTimeMillisEstimate: 0,
        works: 5001,
        advanced: 5000,
        needTime: 0,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(20, inf.0]' ] },
        keysExamined: 5000,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  }
}
// create index on age with partial filter expression on male gender
db.persons.createIndex({"dob.age":-1},
  { partialFilterExpression: { gender: { $eq: "male" } } }    // Partial indexes only index the documents in a collection that meet a specified filter expression
)

// find all query with age greater than 60 only and another query with age greater than 60 and gender male and explain to see what happen in both two queries
db.persons.find({"dob.age":{$gt:60}})
db.persons.find({"dob.age":{$gt:60}}).explain("executionStats")
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'local.persons',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 60 } },
    queryHash: '08155E45',
    planCacheKey: '3F4F0F60',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'FETCH',
      inputStage: {
         stage: 'IXSCAN',                                          // IXSCAN
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(60, inf.0]' ] }
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1222,
    executionTimeMillis: 1,
    totalKeysExamined: 1222,                                      // 1222
    totalDocsExamined: 1222,                                      // 1222
    executionStages: {
      stage: 'FETCH',
      nReturned: 1222,                                            // 1222
      executionTimeMillisEstimate: 0,                             // 0
      works: 1223,
      advanced: 1222,
      needTime: 0,
      needYield: 0,
      saveState: 1,
      restoreState: 1,
      isEOF: 1,
      docsExamined: 1222,
      alreadyHasObj: 0,
      inputStage: {
        stage: 'IXSCAN',
        nReturned: 1222,
        executionTimeMillisEstimate: 0,
        works: 1223,
        advanced: 1222,
        needTime: 0,
        needYield: 0,
        saveState: 1,
        restoreState: 1,
        isEOF: 1,
        keyPattern: { 'dob.age': 1 },
        indexName: 'dob.age_1',
        isMultiKey: false,
        multiKeyPaths: { 'dob.age': [] },
        isUnique: false,
        isSparse: false,
        isPartial: false,
        indexVersion: 2,
        direction: 'forward',
        indexBounds: { 'dob.age': [ '(60, inf.0]' ] },
        keysExamined: 1222,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0
      }
    }
  }
}
// ----
// drop the index now
db.persons.dropIndex( { "dob.age": 1 } )
db.persons.getIndexes()

// query with age greater than 60 and gender male
db.persons.find({"dob.age" : {$gt:60}},{ "gender" : "male"}).explain("executionStats") 
{
  explainVersion: '1',
  queryPlanner: {
    namespace: 'local.persons',
    indexFilterSet: false,
    parsedQuery: { 'dob.age': { '$gt': 60 } },
    queryHash: '700419FE',
    planCacheKey: '700419FE',
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    winningPlan: {
      stage: 'PROJECTION_DEFAULT',
      transformBy: { gender: 'male' },
      inputStage: {
        stage: 'COLLSCAN',                                                    // COLLSCAN
        filter: { 'dob.age': { '$gt': 60 } },
        direction: 'forward'
      }
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1222,
    executionTimeMillis: 3,
    totalKeysExamined: 0,
    totalDocsExamined: 5000,                                                  // 5000 , cause it needed to check the age as well, and it is not indexed
    executionStages: {
      stage: 'PROJECTION_DEFAULT',
      nReturned: 1222,
      executionTimeMillisEstimate: 0,
      works: 5002,
      advanced: 1222,
      needTime: 3779,
      needYield: 0,
      saveState: 5,
      restoreState: 5,
      isEOF: 1,
      transformBy: { gender: 'male' },
      inputStage: {
        stage: 'COLLSCAN',
        filter: { 'dob.age': { '$gt': 60 } },
        nReturned: 1222,
        executionTimeMillisEstimate: 0,
        works: 5002,
        advanced: 1222,
        needTime: 3779,
        needYield: 0,
        saveState: 5,
        restoreState: 5,
        isEOF: 1,
        direction: 'forward',
        docsExamined: 5000
      }
    }
  }
}

// discuss the differnce between partial filter expression and compound indexes
// Partial indexes
// Partial indexes allow you to only index a portion of the collection data based on a filter expression...
db.collection.createIndex(
   { email: 1, name: 1 },
   { partialFilterExpression: { age: { $gt: 30 } } }
)
// This creates a compound index but only on the documents having an age value greater than 30.
// compound index
// A compound index creates an index on multiple fields in a single collection...

db.collection.createIndex({name:1, email:1, age:-1})
// This index will make the following queries much faster...
db.collection.find({name:"Erica"})
db.collection.find({name:"Ericoa", email:"ted@gmail.com", age:30})
db.collection.find({email:"ted@gmail.com", name:"Sarah"})
db.collection.find({name:"Sam", age:{$lte:30}}).sort({emai:1})
// However, this index WILL NOT help with the following queries...
db.collection.find({email:"ted@gmail.com"})
db.collection.find({email:"ted@gmail.com", age:30})
// The reason being is order matters with compound indexes.


// create a new collection and start to insert any data in two fields email and name
db.createCollection("newCollection");
db.newCollection.insertMany([
  {
  "name":"someone",
  "email":"someone@gmail.com"
  }
  ,{
    "name":"anotherone",
    "email":"anotherone@gmail.com"
  }
])
// after insert data make an index on email and it should be unique  and only email added to index if email exist
db.newCollection.createIndex( {email:1}, { unique: true, $exists: true })
// MongoDB cannot create a unique index on the specified index field(s) 
// if the collection already contains data that would violate the unique constraint for the index.
// --
// try to use text indexes to exclude words 
db.newCollection.createIndex( { email: "text" } )
db.newCollection.find({$text:{$search:"anotherone"}})
