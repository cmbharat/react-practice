import React, { useState } from "react";

function App() {
  const userState = useState("1");
  const userId = userState[0];
  const setUserId = userState[1]; //
  const [data, setData] = useState([]);
  // const [name, setName] = useState("");
  // const name = nameState[0];
  // const setName = nameState[1]; //

  // function handleChange(e) {
  //   setUserId(e.target.value);
  // }

  // function handleNameChange(e) {
  //   setName(e.target.value);
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     email: e.target.value,
  //   });
  // };

  return (
    <div className="App" styling={{ padding: 10 }}>
      {/* Name: <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <br /> */}
      {/* Email: <input value={email} onChange={handleChange} />
      <p>Email: {email}</p> */}
      <button onClick={() => setUserId("2")}>Change user id to 2</button>
      {data.map((user) => {
        <div>
          <p>{user.title}</p>
        </div>;
      })}
    </div>
  );
}

export default App;
