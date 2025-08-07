export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a
          className="footer__icon footer__icon-linkedin"
          href="http://linkedin.com/"
          target="_blank"
        >
          <img src="../images/linkedin.png" alt="linkedin" />
        </a>
        <a
          className="footer__icon footer__icon-instagram"
          href="http://instagram.com/"
          target="_blank"
        >
          <img src="../images/instagram.png" alt="instagram" />
        </a>
        <a
          className="footer__icon footer__icon-whatsapp"
          href="https://web.whatsapp.com/"
          target="_blank"
        >
          <img src="../images/whatsapp.png" alt="whatsapp" />
        </a>
        <a
          className="footer__icon footer__icon-twitter"
          href="https://twitter.com/"
          target="_blank"
        >
          <img src="../images/x-twitter.png" alt="twitter" />
        </a>
        <a
          className="footer__icon footer__icon-facebook"
          href="https://facebook.com/"
          target="_blank"
        >
          <img src="../images/facebook.png" alt="facebook" />
        </a>
      </div>
      <p className="footer__links">
        <a href="#" className="footer__link">
          Info
        </a>
        <span>·</span>
        <a href="#" className="footer__link">
          Support
        </a>
        <span>·</span>
        <a href="#" className="footer__link">
          Marketing
        </a>
      </p>
      <p className="footer__copyright">&#169; 2024 Habib Julio</p>
    </footer>
  );
}
