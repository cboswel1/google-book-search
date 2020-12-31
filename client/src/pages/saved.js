// export default Saved;
import React, { useEffect } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { useGlobalContext } from "../utils/GlobalContext";
import SavedBooks from "../components/SavedResultsJumbo/savedResults";
import SavedCard from "../components/SavedDisplay/savedDisplay";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
import API from "../utils/API";

const Saved = () => {
  const [state, dispatch] = useGlobalContext();
  // console.log({ state });

  function handleDelete(id) {
    API.deleteBook(id)
      .then(res => fetchBooks())
      .catch(error => console.log(error));
  }

  async function fetchBooks() {
    try {
      const response = await fetch("/api/books");
      const json = await response.json();
      // console.log({ json });

      dispatch({ type: "setBooks", payload: json.data });
    } catch (err) {
      console.log({ err });
    }
  }

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="12">
          <JumbotronPage />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol size="md-12">
          {state.books.length ? (
            <SavedCard>
              {state.books.map(book => {
                return (
                  <div>
                    <MDBBtn
                      onClick={() => handleDelete(book._id)}
                      outline
                      color="elegant-color"
                      rounded
                      size="sm"
                      type="submit"
                      className="mr-auto"
                    >
                      Remove
                    </MDBBtn>
                    <MDBBtn
                      outline
                      color="elegant-color"
                      rounded
                      size="sm"
                      type="submit"
                      className="mr-auto"
                    >
                      <a href={book.link}>More</a>
                    </MDBBtn>
                    <SavedBooks
                      key={book._id}
                      title={book.title}
                      authors={book.authors}
                      image={book.image}
                      description={book.description}
                      link={book.link}
                    />
                  </div>
                );
              })}
            </SavedCard>
          ) : (
            <SavedCard heading=""></SavedCard>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Saved;
