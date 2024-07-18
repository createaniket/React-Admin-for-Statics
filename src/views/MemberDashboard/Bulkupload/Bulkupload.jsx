import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Bulkupload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload an Excel file.');
      return;
    }
    // Handle file upload logic here
    console.log(file);
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="6">
            <h3 className="text-center">Upload Excel File</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Choose Excel File</Form.Label>
                <Form.Control type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Upload
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bulkupload;
