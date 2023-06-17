import React, {useEffect} from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {useParams} from "react-router-dom";

import Post from "../../components/Post";
import {useFetching} from "../../hooks/useFetching";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserPosts} from "../../store/postReducer";
import Loader from "../../components/Loader";

const AboutPerson = () => {
  const params = useParams()

  const dispatch = useDispatch()
  const userPosts = useSelector(state => state.posts.userPosts)

  const [getUserPosts, isUserPostsLoading] = useFetching(async () => {
    dispatch(fetchUserPosts(params.id))
  })

  useEffect(() => {
    getUserPosts(params.id)
  }, [])

  return (
    <div>
      <Container>
        <h1 className='text-center my-2'>Пользователь #{params.id}</h1>
        <ListGroup className='d-flex flex-column align-items-center'>
          {
            isUserPostsLoading
              ? <Loader />
              : userPosts.map((post, index) =>
              <Post key={post.body} post={post} index={index+1}/>
            )
          }
        </ListGroup>
      </Container>
    </div>
  );
};

export default AboutPerson;