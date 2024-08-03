function App() {
  return (
    <>
      <div className="body ">
        <div className="bg-[#20293A] inline-block">
          <div className="bg-[url('./assets/bg-image-random-quote.svg')] bg-cover ">
            <div className="content-body m-5">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
