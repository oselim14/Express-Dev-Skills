const skills = [
    {skill: 'javascript', nickname: 'JS', learned: true, id: 123},
    {skill: 'HTML', nickname: 'HTML', learned: true, id: 234},
    {skill: 'CSS', nickname: 'CSS', learned: true, id: 345},
    {skill: 'jQuery', nickname: 'jQuery', learned: true, id: 456},
    {skill: 'NodeJS', nickname: 'NodeJS', learned: true, id: 567},
];

module.exports = {
    getAll, 
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}