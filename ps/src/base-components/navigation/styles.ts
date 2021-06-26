import { css } from "@emotion/css";

export const navbar = css`
  margin: 0px;

  > li{
    display: inline-block;
    padding: 10px;
  }
`;

export const navHeader = css `
  display: flex;
  font-family: 'Bitter', serif;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: #B5E550;

  button{
    padding: 9px 15px;
    background-color: rgb(92, 182, 3);
    border: none;
    border-radius: 20px;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  span{
    vertical-align: middle;
  }
`;

export const logo = css `
  font-family: 'Indie Flower', cursive;
  font-size: 32px;
  margin: 0px;
`;
