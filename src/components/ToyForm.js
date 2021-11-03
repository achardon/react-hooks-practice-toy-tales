import React, {useState} from "react";

function ToyForm( {addNewToy} ) {

  const [newToy, setNewToy] = useState({
    name: '',
    image: '',
    likes: 0
  })

  function handleChange(e) {
    setNewToy({...newToy, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewToy(newToy)
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={newToy.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={newToy.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
