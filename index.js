const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodoverride = require("method-override");

app.set("views", path.join(__dirname,"views"));
app.set("viewengine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
app.use(methodoverride("_method"));


main()
    .then((res) => {
        console.log("Connection made!");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

app.get("/chats", async (req,res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});

app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/chats", async (req,res) => {
    let {from,to,msg} = req.body;

    let NewChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date()
    });
    NewChat.save().then((res) => {
        console.log("Msg sent!");
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req,res) => {
    let {id} = req.params;
    let chate = await Chat.findById(id);
    res.render("edit.ejs", {chate});
});

app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {msg : newmsg} = req.body;
    let upchat = await Chat.findByIdAndUpdate(id, {msg : newmsg}, {runValidators : true, new:true});
    console.log(upchat);
    
    upchat.save().then((res) => {
        console.log("Msg sent!");
    })
    .catch((err) => {
        console.log(err);
    });

    res.redirect("/chats");
});

app.delete("/users/:id", async (req,res) => {
    let {id} = req.params;

    let chatdeleted = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})


app.get("/", (req, res) => {
    res.send("Welcome to WhatsApp lite");
});

app.listen(3301, () => {
    console.log("Listening on port 3301");
});