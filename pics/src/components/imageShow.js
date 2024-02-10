function ImageShow(props) {
  const { image } = props;
  console.log(image);
  return (
    <span className="m-3 text-center">
      <img
        className="img-thumbnail img-fluid"
        src={image.urls.regular}
        alt="image"
        style={{ height: "400px", width: "400px" }}
      />
    </span>
  );
}

export default ImageShow;
