import { useState } from "react";
import BookEdit from "./bookEdit";

function BookShow(props) {
  const { book, onDelete, onEdit } = props;

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div>
      <div className="book-show">
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt="books"
        />
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookShow;
