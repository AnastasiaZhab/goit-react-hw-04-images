import "./App.css";
import PropTypes from "prop-types";
import API from "./services/api";
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Oval } from "react-loader-spinner";
import Button from "./components/Button";
// import Modal from "./components/Modal";

export default function App() {
  const [image, setImage] = useState([]);
  const [imageName, setImageName] = useState("");
  const [page, setPage] = useState(1);
  const [idImage, setIdImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState(null);
  // const [showModal, setShowModal] = useState(false);

  const perPage = 12;

  useEffect(() => {
    if (imageName === "") {
      return;
    }

    setStatus("pending");
    API.fetchImage({ imageName, page, perPage })
      .then((image) => {
        const limitPage = page < image.total / perPage;
        setStatus("resolved");
        setImage((prevState) => [...prevState, ...image.hits]);
        setIsVisible(limitPage);
        // this.setState({ status: "resolved" });
        // this.setState((prevState) => ({
        //   image: [...prevState.image, ...image.hits],
        //   isVisible: limitPage,
        // }));
      })
      .catch((error) => setErrorMessage(error));
  }, [imageName, page]);

  const handleFormSubmit = (imageName) => {
    setImageName(imageName);
    setImage([]);
    setIsVisible(false);
  };

  const handleLoadMore = (prev) => {
    setPage((prev) => prev + 1);
  };

  // const toggleModal = () => {
    // console.log(showModal);
    // setShowModal(!showModal);
    // console.log("showModal: ", showModal);
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  // };

  // const findID = (largeImgURL) => {
  //   // toggleModal();
  //   setIdImage(largeImgURL);
  // };

  return (
    <div className="div">
      <SearchBar onSubmit={handleFormSubmit} />
      {status === "pending" && (
        <Oval
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          marginRight="auto"
          marginLeft="auto"
          wrapperStyle
          wrapperClass
        />
      )}
      {image && <ImageGallery image={image} />}
      {isVisible && <Button onClick={handleLoadMore} />}
      {/* {showModal && (
        <Modal onClose={toggleModal}>
          <img src={idImage} alt="" />
        </Modal>
      )} */}
    </div>
  );
}

// class App extends Component {
//   state = {
//     image: [],
//     imageName: null,
//     status: "idle",
//     error: null,
//     showModal: false,
//     page: 1,
//     idImage: "",
//     isVisible: false,
//     per_page: 12,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { imageName, page, per_page } = this.state;

//     if (prevState.imageName !== imageName || prevState.page !== page) {
//       this.setState({ status: "pending" });

//       API.fetchImage({ imageName, page, per_page })
//         .then((image) => {
//           const limitPage = page < image.total / per_page;
//           this.setState({ status: "resolved" });
//           this.setState((prevState) => ({
//             image: [...prevState.image, ...image.hits],
//             isVisible: limitPage,
//           }));
//         })
//         .catch((error) => this.setState({ error }));
//     }
//   }

//   handleFormSubmit = (imageName) => {
//     this.setState({ imageName, image: [], isVisible: false });
//   };

//   handleLoadMore = (prevState) => {
//     this.setState((prevState) => ({
//       page: prevState.page + 1,
//     }));
//   };

//   toggleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   findID = (largeImgURL) => {
//     this.toggleModal();

//     this.setState({ idImage: largeImgURL });
//   };

//   render() {
//     const { image, status, showModal, idImage, isVisible } = this.state;

//     return (
//       <div className="div">
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         {status === "pending" && (
//           <Oval
//             height="80"
//             width="80"
//             radius="9"
//             color="green"
//             ariaLabel="three-dots-loading"
//             marginRight="auto"
//             marginLeft="auto"
//             wrapperStyle
//             wrapperClass
//           />
//         )}
//         {image && <ImageGallery onClick={this.findID} image={image} />}
//         {isVisible && <Button onClick={this.handleLoadMore} />}
//         {showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={idImage} alt="" />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

// export default App;

App.propTypes = {
  imageName: PropTypes.string,
};
