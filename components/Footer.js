export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted" style={{ marginTop: "16vh" }}>
        <section className="d-flex justify-content-center justify-content-lg-between pt-5 pb-4 border-bottom container">
          <div className="me-5 d-none d-lg-block">
            <p>&copy; 2024 Copyright Sharespace Scout | All Rights Reserved</p>
          </div>
          <div>
            <a href="" className="me-4 text-reset"></a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
