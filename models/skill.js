const skills = [
    {skill: 'Javascript', nickname: 'JS', learned: 'Yes', id: 123},
    {skill: 'HTML', nickname: 'HTML', learned: 'Yes', id: 234},
    {skill: 'CSS', nickname: 'CSS', learned: 'Yes', id: 345},
    {skill: 'jQuery', nickname: 'jQuery', learned: 'Yes', id: 456},
    {skill: 'NodeJS', nickname: 'NodeJS', learned: 'Yes', id: 567},
];

module.exports = {
    getAll, 
    getOne,
    create, 
    deleteOne,
    update,

};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skill.learned = 'no';
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

