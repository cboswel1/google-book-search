

// export default Saved;
import React, { useEffect } from 'react';
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import { useGlobalContext } from '../utils/GlobalContext';
import SavedBooks from "../components/SavedResultsJumbo/savedResults";
import SavedCard from "../components/SavedDisplay/savedDisplay";
import JumbotronPage from "../components/HomeJumbo/HomeJumbo";

const Saved = () => {
  const [state, dispatch] = useGlobalContext();
  console.log({ state })

  async function fetchBooks() {
    try {
      const response = await fetch('/api/books');
      const json = await response.json();
      console.log({ json });

      dispatch({ type: 'setBooks', payload: json.data });
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
                  <SavedCard heading="Saved Books">
                    {state.books.map(book => {
                      return (
                        <div>
                          <SavedBooks
                            key={book._id}
                            title={book.title}
                            authors={book.authors}
                            image={book.image}
                            description={book.description}
                            link={book.link}
                            handleDelete={() => this.handleDelete(book._id)}
                          />
                        </div>
                      );
                    })}
                  </SavedCard>
                ) : (
                  <SavedCard heading="Saved Books">text</SavedCard>
                )}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        );
};

export default Saved;