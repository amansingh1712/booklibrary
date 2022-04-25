import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";
export const Flex = styled.div`
border: 1px solid red;
display:grid;
grid-template-columns:repeat(2,1fr);
/* gap:5px */
//  add required style
`;
export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props.data;
  return (
    <>
    <Link to = {`/books/${id}`}>
      <Flex >
        <div>
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
          <h4>{isbn}</h4>
        </div>
      </Flex>
      </Link>
      
    </>
  );
};
