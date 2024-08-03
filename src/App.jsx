import bgImg from "./assets/bg-image-random-quote.svg";
function App() {
  return (
    <>
      <div className="body ">
        <div className="bg-[#20293A] inline-block">
          <div
            className="bg-cover "
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="content m-5">
              <div className="content-header mb-5">
                <div className="figure-section text-[#97A3B6] text-lg font-semibold">
                  <h1>Shifyan Almusfaid</h1>
                </div>
                <div className="tag-section flex gap-3 text-[#6466E9]">
                  <h2 className="py-1 px-2 border rounded-2xl border-[#6466E9]">
                    Quotes
                  </h2>
                  <h2 className="py-1 px-2 border rounded-2xl border-[#6466E9]">
                    Inspirasi
                  </h2>
                </div>
              </div>
              <div className="content-body">
                <div className="quotes w-[45rem]">
                  <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur laudantium, reiciendis molestias distinctio
                    explicabo corporis ducimus voluptas repellat, doloremque aut
                    quasi reprehenderit voluptatem in mollitia nihil repudiandae
                    rem possimus? Saepe!
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
