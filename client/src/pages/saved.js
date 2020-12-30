// import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
// import React, { Component } from "react";
// import JumbotronPage from "../components/HomeJumbo/HomeJumbo";
// import SavedBooks from "../components/SavedResultsJumbo/savedResults";
// // import ResultsCard from "../components/SearchResults/searchResults";
// import SavedCard from "../components/SavedDisplay/savedDisplay";

// import API from "../utils/API";

// class Saved extends Component {
//   //books
//   state = {
//     books: [],
//   };

//   componentDidMount = () => {
//     this.displayBooks();

//     console.log(this.state.books);
//   }

//   handleDelete = id => {
//     API.deleteBook(id)
//       .then(res => this.displaySaved())
//       .catch(error => console.log(error));
//   };

//   displayBooks = () => {
//     API.savedBooks().then(res => {
//       this.setState({
//         books: res.data,
//       })
//     });

//   }

//   //map => google books json
//   render() {
//     return (
//       <MDBContainer>
//         <MDBRow>
//           <MDBCol size="12">
//             <JumbotronPage />
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol size="md-12">
//             {this.state.books.length ? (
//               <SavedCard heading="Saved Books">
//                 {this.state.books.map(book => {
//                   return (
//                     <div>
//                       <SavedBooks
//                         key={book._id}
//                         title={book.title}
//                         authors={book.authors}
//                         image={book.image}
//                         description={book.description}
//                         link={book.link}
//                         handleDelete={() => this.handleDelete(book._id)}
//                       />
//                     </div>
//                   );
//                 })}
//               </SavedCard>
//             ) : (
//               <SavedCard heading="Saved Books">text</SavedCard>
//             )}
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     );
//   }
// }

// export default Saved;
