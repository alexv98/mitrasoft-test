import React, {memo, useState} from 'react';
import {Accordion, Card, ListGroup, Row, useAccordionButton} from "react-bootstrap";
import './style.scss'
import {useFetching} from "../../hooks/useFetching";
import Loader from "../Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchComments} from "../../store/commentReducer";
import {createSelector} from "reselect";

function CustomToggle({ children, eventKey, callback, isOpen, setIsOpen}) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if(!isOpen) {
      setIsOpen(true)
      callback()
    }
  })

  return (
    <button
      type="button"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export const selectCommentsById = (postId) => createSelector(
  [(state) => state.comments.comments],
  (comments) => {
    return [...comments].find(comment => comment.id === postId)
  }
)


const Comments = ({postId}) => {

  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const comments = useSelector(selectCommentsById(postId))

  const [getComments, isCommentsLoading] = useFetching(async () => {
    dispatch(fetchComments(postId))
  })

  return (
    <Accordion
      className='col-10 d-flex flex-column justify-content-center align-items-center mx-auto'
      defaultActiveKey="1">
      <Card className='border-0'>
        <Card.Header className='bg-transparent border-0 mx-auto'>
          <CustomToggle
            eventKey="0"
            postId={postId}
            callback={getComments}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            Комментарии
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <ListGroup>
            {isCommentsLoading ?
              <div className='mx-auto py-2'>
                <Loader/>
              </div>
              :
              comments?.items.map(comment =>
                <ListGroup.Item key={comment.body}>
                  <Card.Body>
                    <Row className='card-email mb-2'>{comment.email}</Row>
                    <Row>{comment.body}</Row>
                  </Card.Body>
                </ListGroup.Item>
              )
            }
          </ListGroup>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default memo(Comments);