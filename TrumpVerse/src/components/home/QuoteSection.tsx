const QuoteSection = () => {
  return (
    <section className="py-5">
      <div className="bg-light pt-5">
        <div className="container">
          <h2 className="text-center mb-4">Inspirational Quotes</h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <blockquote className="blockquote text-center">
                <p>“I have the best ideas. No one has better ideas than me.”</p>
                <footer className="blockquote-footer">Donald Trump</footer>
              </blockquote>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <blockquote className="blockquote text-center">
                <p>“The beauty of me is that I’m very rich.”</p>
                <footer className="blockquote-footer">Donald Trump</footer>
              </blockquote>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4">
              <blockquote className="blockquote text-center">
                <p>
                  “I will build a great homepage, and no one builds better
                  homepages than me.”
                </p>
                <footer className="blockquote-footer">
                  Donald Trump, probably
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Exports
export default QuoteSection
