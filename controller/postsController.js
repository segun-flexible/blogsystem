
const posts = [
    { id: 1, title:"My First Post", category: ["Music","Lifestyle"],author:"Flexible",date: "2 Month Ago",excerpt: "Lorem ipsum test"},
    { id: 2, title:"My Second Post", category: ["Music","Lifestyle"],author:"Flexible",date: "2 Month Ago",excerpt: "Lorem ipsum test"},
    { id: 2, title:"My Third Post", category: ["Music","Lifestyle"],author:"Flexible",date: "2 Month Ago",excerpt: "Lorem ipsum test"},
]

const fetchPosts = (req, res, next) => {
    res.json({
        success: true,
        data: posts
    })
}


module.exports = {
    fetchPosts
}

