import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Footer() {
  return (
    <div>
        {/* <!-- partial:partials/_footer.html --> */}


    <Container>
      <Row>
        <Col Col xs={13} md={12}>
        <div className='div-footer'>
           <span>
           <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
           </span>
        </div>
        </Col>
      </Row>
     </Container> 
        {/* <!-- partial --> */}
    </div>
  )
}
