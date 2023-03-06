import React from "react";

function App() {
  const [name, setName] = React.useState("");

  const [userText, setUserText] = React.useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleClick(event) {
    setUserText(name);
    //在function 內寫變數，不用加{}
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handleClick} action="">
        <h1>Hello {userText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
