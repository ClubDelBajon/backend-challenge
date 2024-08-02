import postService from '../../services/postService';

const createPost = async (req, res, next) => {
  try {
    const post = await postService.create(req.body);
    res.status(200).send(post);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default createPost;
