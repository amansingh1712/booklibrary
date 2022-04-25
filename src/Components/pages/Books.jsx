import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 /* add required style here */
`;

const Books = () => {
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

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {
          data.map((elem) => (
            <BookCard data={elem} />
            
          ))
        
        /* {!!data &&
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
      </Grid>
          {/* <button onClick={() =>console.log("amanbook",data)}></button> */}

    </>
  );
};
export default Books;
