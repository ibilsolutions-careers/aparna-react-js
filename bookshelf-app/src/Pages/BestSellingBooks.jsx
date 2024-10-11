import {Row,Col , Card, CardBody,CardTitle, Button,CardText,CardSubtitle} from "reactstrap"
import { useState,useEffect } from "react";
import {getBooksList}  from "../Api/Api"
import { Link } from "react-router-dom";

export const BestSellingBooks = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        getBooksList()
          .then((booksData) => {
            console.log(booksData, "booksData");
            setBooks(booksData); // Set the books data in the state
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
    
  

  
  console.log(books,"books");
  
  return (

    <>
      <div className="container">
        <h1 className="text-center">Best Selling Books</h1>
        <Row>
          {books.map((book, index) => (
            <Col md={4} key={index}>
              <Card style={{ width: "18rem" }}>
                <img alt={book.book_details[0].title} src={book.book_details[0].book_image || "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"} />
                <CardBody>
                  <CardTitle tag="h5">{book.book_details[0].title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {book.book_details[0].author}
                  </CardSubtitle>
                  <CardText>{book.book_details[0].description}</CardText>
                  {/* <Button href={book.amazon_product_url} target="_blank">
                    View More
                  </Button> */}
                  <Link to="/:id" className="btn btn-primary">View More </Link>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
