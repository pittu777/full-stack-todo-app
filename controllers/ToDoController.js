
const ToDoModel = require("../models/ToDoModel")


const getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.json(toDo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const newToDo = await ToDoModel.create({ text });
        console.log("Added:");
        console.log(newToDo);
        res.json(newToDo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModel.findByIdAndUpdate(_id, { text })
        .then(() => res.status(200).send("updated " + text))
        .catch((err) => console.log(err));
};


const deleteToDo = async (req,res)=>{
    const {_id} = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=>res.send("deleted"))
    .catch((err)=>console.log(err))
}

module.exports = { getToDo, saveToDo, updateToDo, deleteToDo };