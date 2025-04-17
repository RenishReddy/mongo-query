db.employees.updateMany(
    {email:"cathy@gmail.com"},
    {$inc: {points:3}}
);