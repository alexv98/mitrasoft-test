import React, {memo, useEffect} from 'react';
import {ListGroup} from "react-bootstrap";

import Post from "../../components/Post";
import {useFetching} from "../../hooks/useFetching";
import Loader from "../../components/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../store/postReducer";

const Posts = () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.posts)

  const [getPosts, isPostsLoading] = useFetching(async () => {
    dispatch(fetchPosts())
  })

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <h1 className='text-center my-2'>Список постов</h1>
      <ListGroup className='d-flex flex-column align-items-center'>
        {isPostsLoading ?
          <Loader />
          :
          posts.map((post) =>
            <Post key={post.title} post={post} />
          )
        }
      </ListGroup>
    </>
  );
};

export default memo(Posts);