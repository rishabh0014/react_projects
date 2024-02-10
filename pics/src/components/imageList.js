import ImageShow from "./imageShow";

function ImageList(props) {
  const { images } = props;
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image}  />;
  });
  return (
    <div>
      <div className="text-center">{renderedImages}</div>
    </div>
  );
}

export default ImageList;
