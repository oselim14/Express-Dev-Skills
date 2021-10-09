const Skill = require('../models/skill');

module.exports = {
    index,
    show, 
    new: newSkill,
    create,
    delete: deleteSkill,
    edit, 
    update,
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
    });
}

function newSkill(req, res){
    res.render('skills/new');
}

function create(req, res){
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function update(req, res) {
    req.body.learned = !!req.body.learned;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}