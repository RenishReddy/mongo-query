db.employees.find(
    {},
    {_id:0,name:1,salary:1}
);

db.employees.find().sort({name:1})