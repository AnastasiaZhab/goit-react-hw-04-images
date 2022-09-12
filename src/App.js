import "./App.css";
import PropTypes from "prop-types";
import API from "./services/api";
import { Component } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { Oval } from "react-loader-spinner";
import Button from "./components/Button";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    image: [],
    imageName: null,
    status: "idle",
    error: null,
    showModal: false,
    page: 1,
    idImage: "",
    isVisible: false,
    per_page: 12,
  };

  componentDidUpdate(prevProps, prevState) {
    const { imageName, page, per_page } = this.state;

    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.setState({ status: "pending" });

      API.fetchImage({ imageName, page, per_page })
        .then((image) => {
          const limitPage = page < image.total / per_page;
          this.setState({ status: "resolved" });
          this.setState((prevState) => ({
            image: [...prevState.image, ...image.hits],
            isVisible: limitPage,
          }));
        })
        .catch((error) => this.setState({ error }));
    }
  }

  handleFormSubmit = (imageName) => {
    this.setState({ imageName, image: [], isVisible: false });
  };

  handleLoadMore = (prevState) => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  findID = (largeImgURL) => {
    this.toggleModal();

    this.setState({ idImage: largeImgURL });
  };

  render() {
    const { image, status, showModal, idImage, isVisible } = this.state;

    return (
      <div className="div">
        <SearchBar onSubmit={this.handleFormSubmit} />
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
        {image && <ImageGallery onClick={this.findID} image={image} />}
        {isVisible && <Button onClick={this.handleLoadMore} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={idImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;

App.propTypes = {
  image: PropTypes.arrayOf(PropTypes.shape),
  imageName: PropTypes.string,
  page: PropTypes.number,
};
