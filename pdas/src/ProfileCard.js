function ProfileCard(props) {
  const { title, handle, image, description } = props;
  return (
    <div>
      <br />
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt="logo" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-1by1">
                <img src={image} alt="logo" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{handle}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ProfileCard;
