const Joi = require('joi');
const express = require('express');
const router = express.Router();

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

router.get('/', (req,res)=>{
    res.send(notes);
});

router.get('/:id', (req,res)=>{
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    res.send(getNotes);
});

router.post('/', (req,res)=>{
    const {error} = validateNotes(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    const newNote = {
        id: `idNote${(notes.length +1)}`,
        title: req.body.title,
        desc: req.body.desc,
    }
    notes.push(newNote);

    res.send(newNote);
});

router.put('/:id', (req,res) => {
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    const {error} = validateNotes(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    getNotes.title = req.body.title;
    getNotes.desc = req.body.desc;

    res.send(getNotes);
});

router.delete('/:id', (req,res) => {
    const getNotes = notes.find(n => n.id === req.params.id)
    if(!getNotes) return res.status(404).send(`No ID found as ${req.params.id}`);

    const index = notes.indexOf(getNotes);
    notes.splice(index,1);

    res.send(getNotes);
});

module.exports = router;