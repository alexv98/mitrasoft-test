import React from 'react';
import './style.scss'
import {Col, Container, Row} from "react-bootstrap";


const AboutMe = () => {
  return (
    <Container>
      <Col className='col-10 mx-auto'>
        <Row>
          <h1>Александр Васильев</h1>
          <p className='fs-3 mb-0'>Frontend Developer</p>
        </Row>
        <hr/>
        <Row className='mb-2'>
          <Col className='col-6 border-end border-dark border-opacity-25'>
            <h3 className='text-center mb-4 border-bottom border-dark border-opacity-25 pb-2'>
              О себе
            </h3>
            <h5 className='text-bg-light'>Возраст</h5>
            <p>24 года</p>
            <h5 className='text-bg-light'>Город</h5>
            <p>Казань</p>
            <h5 className='text-bg-light'>Образование</h5>
            <p className='mb-0 fw-bold'>Казанский государственный энергетический университет</p>
            <p>"Приборостроение. Микропроцессорные средства и программное обеспечение измерений" - магистратура, 2022г.</p>
            <h5 className='text-bg-light'>Языки</h5>
            <ul>
              <li>Русский</li>
              <li>Английский</li>
            </ul>
            <h5 className='text-bg-light text-center'>Резюме</h5>
            <p>
              Интерес к программированию появился еще в старших классах школы. В университете активно изучал программирование
              микроконтроллеров, Arduino (на нем же писал дипломный проект), и почти с красным дипломом окончил магистратуру. Решив попробовать для себя что-то новое, открыл безграничный
              мир веба и погрузился в него с головой. Универ привил любовь к самостоятельному поиску необходимой информации и дал
              твердую базу в планировании и методах самообучения, что на данный момент мне очень помогает. Сфера IT всегда привлекала огромным количеством технологий, отсутствием предела в развитии и обучении.
              Уже около года изучаю frontend-разработку, в будущем есть цель попробовать себя в мобильной разработке.
              Ищу работу на позицию сеньора, но из-за отсутствия коммерческого опыта согласен на позицию джуна :)
            </p>

          </Col>
          <Col className='col-6'>
            <h3 className='text-center mb-4 border-bottom border-dark border-opacity-25 pb-2'>Навыки</h3>
            <ul className='skills fs-4 mb-4'>
              <li><span>HTML5</span></li>
              <li><span>CSS3</span></li>
              <li><span>SCSS</span></li>
              <li><span>JavaScript</span></li>
              <li><span>TypeScript</span></li>
              <li><span>React</span></li>
              <li><span>Redux</span></li>
              <li><span>GIT</span></li>
              <li><span>Webpack</span></li>
            </ul>
            <hr/>
            <ul className='skills-about fs-4'>
              <li><span>Ответственный</span></li>
              <li><span>Трудолюбивый</span></li>
              <li><span>Перфекционист</span></li>
            </ul>
          </Col>
        </Row>
        <Row className='contacts'>
          <h5 className='text-bg-light text-center'>Контакты</h5>
          <p className='mb-0'>Email: <a href="mailto:mr.vasilev9810@yandex.ru">mr.vasilev9810@yandex.ru</a></p>
          <p className='mb-0'>GitHub: <a href='https://github.com/alexv98'>alexv98</a></p>
          <p><a href='tel:+79991692049'>+79991692049</a></p>
        </Row>
      </Col>
    </Container>
  );
};

export default AboutMe;