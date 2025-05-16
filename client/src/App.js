import logo from "./logo.svg";
import "./App.css";
import { useRef, useState, useEffect } from "react";
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const fileInputRef = useRef();

  // useEffect(() => {
  //    const getImage = async () => {
  //     if (file) {
  //       const data = new FormData();
  //       data.append("file", file);

  //       try {
  //         const response = await uploadFile(data);
  //         if (response?.path) {
  //           setResult(response.path);
  //         } else {
  //           console.error("No path in response", response);
  //         }
  //       } catch (error) {
  //         console.error("Error while calling api", error.message);
  //       }
  //     }
  //   };
  //   getImage();

  // }, [file]);

  useEffect(() => {
  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("file", file);

      try {
        const response = await uploadFile(data);
        if (response?.path) {
          setResult(response.path);
        } else {
          console.error("No path in response", response);
        }
      } catch (error) {
        console.error("Error while calling api", error.message);
      }
    }
  };
  getImage();
}, [file]);


  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  const logo =
    "https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  console.log(file);
  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>simple file sharing</h1>
        <p>Upload and share file</p>

        <button onClick={() => onUploadClick()}>upload</button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
