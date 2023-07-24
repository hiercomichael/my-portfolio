import react, {useState} from "react";

const theYear = new Date().getFullYear();

function Contacts(){

  const [hover, setHover] = useState(false);


  function handleMouseOver() {
    setHover(true);
  }

  function handleMouseOut() {
    setHover(false);
  }


  return <footer className="footer">
    <div onMouseOver = {handleMouseOver} onMouseOut = {handleMouseOut} className="footer-container">
      <img src="./img/email.png" alt="" className={hover ? "footer-img footer-img--hover" : "footer-img"} />
      <img src="./img/email-hand.png" alt="" className={hover ? "footer-img footer-img--hand footer-img--hover" : "footer-img footer-img--hand"} />
      <div className="footer-call">
        Let's jump on a quick call
      </div>
      <div className="footer-desc">
        Ask me any questions you might have or just drop me a message to say hello :)
      </div>
      <a href="mailto:hiercomichael@gmail.com" className="footer-email">SEND EMAIL</a>
    </div>
    <div className="copyright">
        Copyright © {theYear} Michael Hierco
    </div>
  </footer>
}

export default Contacts;