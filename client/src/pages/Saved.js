import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero';
import { Col, Container, Row } from '../components/Grid';
import { List } from '../components/List';
import Book from '../components/Book';
import Card from '../components/Card';

function Saved() {
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadSavedBooks();
  }, []);

  // Loads all books and sets them to books
  function loadSavedBooks() {
    API.getSavedBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadSavedBooks())
      .catch((err) => console.error(err));
  }

  return (
    <Container fluid>
      <Hero />
      <Row>
        <Col size="md-12">
          <Card title="Saved Books">
            {books.length ? (
              <List>
                {books.map((book) => (
                  <Book
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.info}
                    onSubmit={() => deleteBook(book._id)}
                    submitLabel="Delete"
                    submitBtnClassName="btn btn-danger"
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

export default Saved;
