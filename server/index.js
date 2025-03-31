const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const notes = [
    { id: 'idNote1', title: 'Grocery List', desc: 'Buy milk, eggs, bread, and vegetables.' },
    { id: 'idNote2', title: 'Meeting Notes', desc: 'Discuss project timeline and assign tasks for next sprint.' },
    { id: 'idNote3', title: 'Workout Plan', desc: 'Monday - Chest & Triceps, Tuesday - Back & Biceps, Wednesday - Cardio & Abs.' },
    { id: 'idNote4', title: 'Book Recommendations', desc: 'Read "Atomic Habits" and "Deep Work" this month.' },
    { id: 'idNote5', title: 'Learning Goals', desc: 'Complete MERN stack tutorials and build a full-stack project.' }
];

function validateNotes(request){
    const schema = Joi.object({
        title: Joi.string().min(3).required(),
        desc: Joi.string().min(3).required(),
    })
    return schema.validate(request);
}

app.get('/notes', (req,res)=>{
    console.log("GET: /notes");
    res.send(notes);
});

app.get('/notes/:id', (req,res)=>{
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    console.log(`GET: /notes/${req.params.id}`);
    res.send(getNotes);
});

app.post('/notes', (req,res)=>{
    const {error} = validateNotes(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const newNote = {
        id: `idNote${(notes.length +1)}`,
        title: req.body.title,
        desc: req.body.desc,
    }
    notes.push(newNote);

    console.log("POST: /notes")
    res.send(newNote);
});

app.put('/notes/:id', (req,res) => {
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    const {error} = validateNotes(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    getNotes.title = req.body.title;
    getNotes.desc = req.body.desc;

    console.log(`PUT: /notes/${req.params.id}`)
    res.send(getNotes);
});

app.delete('/notes/:id', (req,res) => {
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    const index = notes.indexOf(getNotes);
    notes.splice(index,1);

    console.log(`DELETE: /notes/${req.params.id}`)
    res.send(getNotes);
});


app.listen(3000, ()=>console.log("Listening on port 3000..."));