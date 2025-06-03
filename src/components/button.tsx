const Button = ({ text, className, id }:{text:string,className:string,id:string}) => {
  return (
    <a
     href="/Imene-Oghenefejiro-Prince-CV-Resume.pdf"
    download="IMENE-PRINCE-CV.pdf"
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;