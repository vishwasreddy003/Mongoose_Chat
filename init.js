const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then((res) => {
        console.log("Connection made!");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let allChats = [
    {
        from: "Alan",
        to: "Casie",
        msg: "Come Over to my place",
        created_at: new Date(),
    },
    {
        from: "Stacy",
        to: "Stella",
        msg: "Lets! plan a movie night!",
        created_at: new Date(),
    },
    {
        from: "Charles",
        to: "Mattia",
        msg: "I'm Stupid!",
        created_at: new Date(),
    },

];


Chat.insertMany(allChats);