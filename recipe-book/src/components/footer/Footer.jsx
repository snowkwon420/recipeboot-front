function Footer() {
  return (
    <div style={footerContainerStyle}>
      <span style={footerLogoStyle}>한끼얼마</span>
      <br />ⓒ 2023. 2조 all rights reserved.
    </div>
  );
}

// Footer 컴포넌트 스타일 정의
const footerContainerStyle = {
  padding: "20px 0 3px",
  marginTop: "3rem",
  width: "100%",
  fontSize: "0.5em",
  textAlign: "center",
  fontStyle: "normal",
  color: "#ff7028",
  clear: "both",
  minWidth: "1000px",
};

// 로고 스타일 정의
const footerLogoStyle = {
  display: "inline-block",
  textDecoration: "none",
  color: "#ff7028",
  fontSize: "2.5em",
  paddingTop: "15px",
  textAlign: "center",
  fontFamily: "yg-jalnan",
};

export default Footer;
