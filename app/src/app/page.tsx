'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const response = await axios.post('http://localhost:4000/', { info: text });
    setText('');
    setInfo(response.data.info);
  }
  return (
    <div>
      <div>
        <input placeholder="Type something" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Add</button>
      </div>
      <br />
      <div>
        Info:
        <div>{info}</div>
      </div>
    </div>
  );
}
