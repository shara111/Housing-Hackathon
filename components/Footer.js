import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between pt-4 pb-3 border-bottom container">
          <div class="me-5 d-none d-lg-block">
            <p>&copy; 2024 Copyright StudentCritic | All Rights Reserved</p>
          </div>
          <div>
            <a href="" class="me-4 text-reset"></a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </section>
      </footer>
    </>
  );
}
