import React from 'react';
import {Col, ListGroup, Row} from "react-bootstrap";
import person from "../../assets/images/person.svg";
import Comments from "../Comments";
import {Link} from "react-router-dom";
import './style.scss'

const Post = ({post, index}) => {

  return (
    <ListGroup.Item className={'col-8 my-2 border rounded'}>
      <Row className='post d-flex align-items-center'>
        <Col className='col-2 d-flex flex-column align-items-center'>
          <Link to={'/' + post.userId}>
            <img className='post-img w-100' src={person} alt="person"/>
          </Link>
          <b className='text-decoration-none text-warning mt-2'>
            {index ? `Пост #${index}` : ''}
          </b>
        </Col>
        <Col className='col-10'>
          <Row className='py-1 fw-bold lh-sm border-bottom border-color'>
            {post.title}
          </Row>
          <Row className='py-2'>{post.body}</Row>
        </Col>
      </Row>
      <Row className='my-0'>
        <Comments postId={post.id}/>
      </Row>
    </ListGroup.Item>
  );
};

export default Post;