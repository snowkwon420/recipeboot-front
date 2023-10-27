import styled, { createGlobalStyle } from "styled-components";
import "../assets/font.css";

// 전역 스타일을 정의하는 컴포넌트
const GlobalStyle = createGlobalStyle`
  :root {
    --main-color: #ff7028; // 주요 색상 변수 정의
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body, div, p, ul, ol, li, h1, h2, h3, h4 {
    padding: 0;
    margin: 0;
  }

  body {
    margin-top: 20px; // 본문 상단 여백
  }

  section {
    width: 960px;
    margin: 0 auto; // 섹션 스타일 및 가운데 정렬
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none; // 버튼 초기 스타일 설정
  }

  .title {
    text-decoration: none;
    color: #ff7028;
    font-size: 52px;
    padding: 0px;
    text-align: center;
    font-family: "yg-jalnan"; // 제목 스타일
    box-shadow: inset 0 0 30px green; // 그림자 효과
  }

  .navbar-brand {
    font-family: "IBMPlexSansKR"; // 네비게이션 바 폰트 설정
    color: #ff973c;
    font-size: 24px; // 네비게이션 바 스타일
  }

  ol, ul, li {
    list-style: none; // 목록 스타일 제거
  }

  body {
    font-family: "Nanum Gothic", "맑은 고딕", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #676767;
    border-top: 30px solid #ffffff; // 넓이 스타일 색상
  }

  label {
    padding: 10px;
    margin: 10px;
  }
`;

export default GlobalStyle;
