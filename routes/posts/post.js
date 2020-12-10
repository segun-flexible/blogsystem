const { fetchPosts } = require("../../controller/postsController");

const posts = require("express").Router();


/* Fetch Post */
posts.route("/posts").get(fetchPosts)


module.exports = posts