db.posts.aggregate([
    {$lookup:{
        from:"authors",
        localField:"authorId",
        foreignField:"_id",
        as:"author"
    }}
])