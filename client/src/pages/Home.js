import React, { useState } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import { FormBtn, Input } from '../components/Form';
import { Col, Container, Row } from '../components/Grid';
import { List } from '../components/List';
import Book from '../components/Book';
import Card from '../components/Card';

function Home() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();

    API.getBooks(query)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }

  function saveBook(bookId) {
    const book = books.find((book) => book.id === bookId);

    API.saveBook({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
    })
      .then((res) => {
        if (res.data.status === 'error') {
          throw new Error(res.data.message);
        }
      })
      .catch((err) => console.log(err.response));
  }

  return (
    <Container fluid>
      <Hero />
      <Row>
        <Col size='md-12'>
          <Card title='Book Search' icon='far fa-book'>
            <form>
              <Input
                onChange={handleInputChange}
                name='title'
                placeholder='Harry Potter'
              />
              <FormBtn onClick={handleFormSubmit}>Search</FormBtn>
            </form>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col size='md-12'>
          <Card title='Results'>
            {books.length ? (
              <List>
                {books.map((book) => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
                    onSubmit={() => saveBook(book.id)}
                    submitLabel='Save'
                    submitBtnClassName='btn btn-primary'
                  ></Book>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
