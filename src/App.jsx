import bgImg from "./assets/bg-image-random-quote.svg";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  let [quote, setQuote] = useState({});
  let [tags, setTags] = useState([]);
  let getQuote = async () => {
    try {
      const res = await axios.get("https://api.quotable.io/random");
      setQuote(res.data);
      setTags(res.data.tags);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getQuote();
  }, []);
  // console.log(quote);
  // console.log(tags);
  return (
    <>
      <div className="body ">
        <div className="bg-[#20293A] w-[45rem] inline-block">
          <div
            className="bg-cover  bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="content p-8">
              <div className="content-header mb-8">
                <div className="mb-2 figure-section text-[#bcc7d8] text-lg font-bold">
                  <h1>{quote.author}</h1>
                </div>
                <div className="tag-section flex gap-3 text-[#6466E9]">
                  {tags.map((tag, index) => (
                    <h2
                      key={index}
                      className="py-1 px-2 border rounded-2xl border-[#6466E9]"
                    >
                      {tag}
                    </h2>
                  ))}
                </div>
              </div>
              <div className="content-body text-[#97A3B6] text-2xl font-semibold">
                <div className="quotes ">
                  <h1>{quote.content}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover w-[40rem] h-[15rem]"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
    </>
  );
}

export default App;
