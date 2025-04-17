db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set: {org:"Wipro"}},
    {upsert:true}
);

db.employees.find(
    {department: { $in:["HR","IT"]}}
);
