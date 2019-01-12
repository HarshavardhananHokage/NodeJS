import util from 'util';
import express from 'express';
import * as notes from '../models/notes';
import { ensureAuthenticated } from './users';

export const router = express.Router();
 
// Add Note. 
router.get('/add', ensureAuthenticated, (req, res, next) => {
    try {
        res.render('noteedit', {
            title: "Add a Note",
            docreate: true, notekey: "",
            user: req.user, note: undefined
        });
    } catch (e) { next(e); }
});

// Save Note (update)
router.post('/save', ensureAuthenticated, async (req, res, next) => {
    var note;
    console.log(`Key: ${req.body.notekey} Title: ${req.body.title} Body: ${req.body.body}`)
    if (req.body.docreate === "create") {
        note = await notes.create(req.body.notekey,
                req.body.title, req.body.body);
    } else {
        note = await notes.update(req.body.notekey,
                req.body.title, req.body.body);
    }
    res.redirect('/notes/view?key='+ req.body.notekey);
});

// Read Note (read)
router.get('/view', async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('noteview', {
        title: note ? note.title : "",
        notekey: req.query.key, note: note,
        user: req.user ? req.user : undefined
    });
});

// Edit note (update)
router.get('/edit', ensureAuthenticated, async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('noteedit', {
        title: note ? ("Edit " + note.title) : "Add a Note",
        docreate: false,
        notekey: req.query.key, note: note,
        user: req.user ? req.user : undefined
    });
});

// Ask to Delete note (destroy)
router.get('/destroy', ensureAuthenticated, async (req, res, next) => {
    var note = await notes.read(req.query.key);
    res.render('notedestroy', {
        title: note ? `Delete ${note.title}` : "",
        notekey: req.query.key, note: note,
        user: req.user ? req.user : undefined
    });
});

// Really destroy note (destroy)
router.post('/destroy/confirm', ensureAuthenticated, async (req, res, next) => {
    await notes.destroy(req.body.notekey);
    res.redirect('/');
});