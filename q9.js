db.employees.find(
    {salary:{$gte:1500},
    department:"HR"
}
);
db.employees.find({
    $or: [
        {
            salary: {$gte: 1500},
        },
        {department:"HR"},

    ],
});

db.employees.find({
    $nor: [
        {
            salary: {$gte: 1500},
        },
        {department:"HR"},

    ],
});

db.employees.find({c1})
db.employees.find({c1,c2})
db.employees.find({$or:[{c1},{c2}]})
db.employees.find({$and:[{c1},{c2}]})