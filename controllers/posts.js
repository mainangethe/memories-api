import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find({});
    console.log(postMessages)

    res
      .status(200)
      .json(postMessages)

  } catch (error) {

    console.error(error)

    res
      .status(404)
      .json({ message: error.message })
  }
}


export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = PostMessage(post)

  try {
    await newPost.save()

    res
      .status(201)
      .json(newPost)

  } catch (error) {

    console.error(error.message)

    res
      .status(409)
      .json({ message: error.message })

  }
}


export const updatePost = async (req, res) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`Unknown post with id: ${_id}`)

  const postUpdates = req.body;
  try {
    const objectToSend = { ...postUpdates, _id}
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, objectToSend , { new: true })

    res
      .json(updatedPost)

  } catch (error) {
    console.error(error.message)

    res
      .status(409)
      .json({ message: error.message })
  }
}

export const deletePost = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Unknown post with id: ${id}`);

  try {
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error(error);

    res
      .status(409)
      .json({ message: error.message })
  }
}

export const likePost = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Unknown post with id: ${id}`)


  try {
    const post = await PostMessage.findById(id)
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })

    res
      .json(updatedPost)

  } catch (error) {
    console.error(error);

    res
      .status(409)
      .json({ message: error.message })
  }
}
