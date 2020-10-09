const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')

const auth = require('../middleware/auth')
const { checkPostProps, checkCommentProps } = require('../helpers/errors/index');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Post = require('../models/Post');

//@ROUTE        * api/posts
//@DESCRIPTION  * Get all posts
//@ACCESS       * Private
router.get('/', auth, async (req, res) => {
    try {
        const post = await Post.find().sort({ date: -1 });
        console.log(post)
        res.json(post)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "Something went wrong"})
    }
})

//@ROUTE        * api/posts/:id
//@DESCRIPTION  * Get post by Id
//@ACCESS       * Private
router.get('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post) {
            return res.status(404).json({ msg: "Post not found"})
        }
        console.log(post)
        res.json(post)
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Post not found"})
        }
        console.log(error.message)
        res.status(500).json({ msg: "Something went wrong"})
    }
})

//@ROUTE        * api/posts/:id
//@DESCRIPTION  * Delete post by Id
//@ACCESS       * Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        //Create condition before removing a post
        if(!post) {
            return res
                .status(404)
                .json({ msg: "Post not found"})
        }
        if(post.user.toString() !== req.user.id) {
            return res
                .status(401)
                .json({ msg: "User not authorize to delete this post"})
        }
  
        //Remove post
        await post.remove();

        res.json({ msg: "Post removed successfully!"})
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Post not found"})
        }
        console.log(error.message)
        res.status(500).json({ msg: "Something went wrong"})
    }
})

//@ROUTE        * api/posts
//@DESCRIPTION  * Create post
//@ACCESS       * Private
router.post('/', [auth, checkPostProps],  async (req, res) => {
    
    const errors = validationResult(req);
    // validate
    if(!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()
        })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')
    
        const newPost = new Post ({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })
        const post = await newPost.save();
        res.json(post)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "Something went wrong"})
    }
   

})


//@ROUTE        * api/posts/like/:id
//@DESCRIPTION  * Like a post
//@ACCESS       * Private
router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        //Check if already liked
        if(post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res
                .status(400)
                .json({ msg: 'Post already liked'})
        }

        //Unshift user id
        post.likes.unshift({ user: req.user.id });
        await post.save();

        return res.json(post.likes);
    } catch (error) {
        console.log(error.message)
    }

})

//@ROUTE        * api/posts/unlike/:id
//@DESCRIPTION  * Unlike a post
//@ACCESS       * Private
router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        //Check if already liked
        if(post.likes.filter(like => like.user.toString() === req.user.id).length = 0) {
            return res
                .status(400)
                .json({ msg: 'Post has not yet been like'})
        }

        //Unshift user id
        const removeIndex = post.likes
            .map(like => like.user.toString())
            .indexOf(req.user.id)

        //If index is equal to zero or greater than zero
        if(removeIndex >= 0) {
            post.likes.splice(removeIndex, 1);
            await post.save();

            //Return
            return res.json({ msg: "Post unliked"})
        } 

        //If index returns -1 or less than 0 
        else {
            return res.json({ msg: "Post was already unliked/or should like the post first"});
        } 
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Post not found"})
        }
    }

})


//@ROUTE        * api/posts/comment/:id
//@DESCRIPTION  * Comment on a post
//@ACCESS       * Private
router.post('/comment/:id', [auth, checkCommentProps], async(req, res) => {
    
    const errors = validationResult(req);
    // validate
    if(!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array()
        })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)

        //Get comment
        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        };
        //Push comment
        post.comments.unshift(newComment);
        
        //Save comment
        await post.save();
        res.send(post.comments)
    } catch (error) {
        if(error.kind === 'ObjectId') {
            return res.status(404).json({ msg: "Post not found"})
        }
    }
})

//@ROUTE        * api/posts/comment/:id/:commentId
//@DESCRIPTION  * Delete a comment
//@ACCESS       * Private
router.delete('/comment/:id/:commentId', auth, async (req, res) => {
    try {
        //const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)

        const comment = post.comments
            .find(comment => comment.id === req.params.commentId);
        
        // Validate comment if exist
        if(!comment) {
            return res
                .status(404)
                .json({ msg: "Comment not found or was deleted"})
        }
        //Check user
        if(comment.user.toString() !== req.user.id)  {
            return res
                .status(401)
                .json({ msg: `User not authorize to delete comment ${req.params.commentId}`})
        }

        //Unshift user id
        const removeIndex = post.comments
            .map(comment => comment.user.toString())
            .indexOf(req.user.id)

        //If index is equal to zero or greater than zero
        if(removeIndex >= 0) {
            post.comments.splice(removeIndex, 1);
            await post.save();

            //Return
            return res.json({ msg: "Comment removed sucessfully!"})
        } 
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ msg: "Something went wrong"})
    }
})
module.exports = router;