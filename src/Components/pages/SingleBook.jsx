import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div``;

// add style for button
export const Button = styled.button``;
export const SingleBook = () => {
    // console.log(params);
    

      const [data, setData] = useState([]);
  const getBooks = () => {
    return fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((res) => {
      setData(res)
    })
  }
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    getBooks();
  }, []);

    
  useEffect(() => {
    // make a GET request to http://localhost:8080/books/${id}`
    // use useParams to get the id
  }, []);

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
