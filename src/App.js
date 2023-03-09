import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);
  console.log(persons);
  return <>Test</>;
}

export default App;
