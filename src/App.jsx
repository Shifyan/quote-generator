import bgImg from "./assets/bg-image-random-quote.svg";
import reSend from "./assets/Regroup.svg";
import copyBtn from "./assets/link.svg";
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

  let copyQuote = () => {
    const copy = `"${quote.content}" -${quote.author}`;
    navigator.clipboard
      .writeText(copy)
      .then(() => {
        alert("Quote Telah Berhasil di Copy");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="body">
          <div className="w-fit">
            <div className="bg-[#20293A] w-[30rem] lg:w-[45rem] inline-block rounded-3xl overflow-hidden ">
              <div
                className="bg-cover  bg-center"
                style={{ backgroundImage: `url(${bgImg})` }}
              >
                <div className="content p-8  ">
                  <div className="content-header mb-6 lex-col justify-center items-center">
                    <div className="mb-3 figure-section text-[#bcc7d8] text-lg lg:text-xl font-bold grid">
                      <h1 className="place-self-center">{quote.author}</h1>
                    </div>
                    <div className="grid">
                      <div className="tag-section flex gap-3 text-[#6466E9] place-self-center">
                        {tags.map((tag, index) => (
                          <h2
                            key={index}
                            className="py-1 px-3 border rounded-full border-[#6466E9]"
                          >
                            {tag}
                          </h2>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="content-body text-[#97A3B6] text-xl lg:text-2xl grid font-semibold ">
                    <div className="quotes place-self-center w-[2-rem] lg:w-[35rem]">
                      <h1 className="text-center">"{quote.content}"</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clip mt-3 flex justify-center">
              <div className="border flex  rounded-xl ">
                <button className="py-2 ps-4 pe-4 border-e" onClick={getQuote}>
                  <img src={reSend} alt="Re Send" className="w-7 lg:w-10 " />
                </button>
                <button className="py-2 pe-4 ps-4 border-s" onClick={copyQuote}>
                  <img src={copyBtn} alt="Copy Quote" className="w-7 lg:w-10" />
                </button>
              </div>
            </div>
            <div className="text-white flex justify-center items-center mt-6">
              <h1>
                dev by
                <a
                  href="https://www.instagram.com/a.shif_yan/"
                  className="font-medium"
                  target="_blank"
                >
                  {" "}
                  Shifyan Almustafid
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
