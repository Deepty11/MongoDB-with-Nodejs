const mongoose = require('mongoose');
//connect to DB, Test
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true, useNewUrlParser: true });

//Create Schema for Fruits Model
const fruitesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: String
});

//create the model
const fruitsModel = mongoose.model("Fruit", fruitesSchema);
const personModel = mongoose.model("Person", personSchema);

//create a document for fruits model
const favFruit1 = new fruitsModel({
    name: "Grapes",
    rating: 8,
    review: "What an wonderful fruit grape is! !"
});
const favFruit2 = new fruitsModel({
    name: "Mango",
    rating: 10,
    review: "What an wonderful fruit grape is! !"
});
favFruit2.save();
// favFruit2.save();

// fruitsModel.insertMany([favFruit1, favFruit2], function(err) {
//     if (err) {
//         console.log('Error Occured');
//     } else {
//         console.log('Successfully added');
//     }
// });

const Amy = new personModel({
    name: "Amy",
    age: 8,
    favouriteFruit: favFruit2
});
const John = new personModel({
    name: "John",
    age: 12,
    favouriteFruit: favFruit2
});

Amy.save();
// mongoose.connection.close();
// John.save();

//insert many
// personModel.insertMany([Amy, John], function(err) {
//     if (err) {
//         console.log('Error Occured');
//     } else {
//         console.log('Successfully added');
//     }
// });
// personModel.find(function(err, people) {
//     if (err) {
//         console.log('Error Occured');
//     } else {
//         console.log(people);
//     }
// });

//to fetch names only
// fruitsModel.find(function(err, fruits) {
//     if (err) {
//         console.log('Error Occured');
//     } else {
//         mongoose.connection.close();
//         fruits.forEach(function(fruit) {
//             console.log(fruit.name);
//         });
//     }

// });


//delete many
// fruitsModel.deleteOne({ _id: "5f9d66ed49c8761a115594d5" }, function(err) {
//     if (err) {
//         console.log("error occured");
//     } else {
//         console.log("Successfully deleted !");
//     }
// });

//delete many using same conditions
// personModel.deleteMany({ name: "Dally" }, function(err) {
//     if (err) {
//         console.log("error occured");
//     } else {
//         console.log("Successfully deleted all the documents!");
//     }
// });

//update

// fruitsModel.updateOne({ _id: "5f9d7031e9240e214893471a" }, { rating: 3 }, function(err) {
//     if (err) {
//         console.log("error occured in update");
//     } else {
//         console.log("Successfully updated !");
//     }
// });

//save the document
// person.save();