import { css } from '@emotion/css'

export const adminSelectable = css `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
  border: 2px solid rgb(230, 227, 227);
  box-shadow: 1px 1px 1px 1px rgb(230, 227, 227);

  li{
    display: inline-block;
    padding: 10px;
  }
`;

export const adminOptionImage = css `
  width: 15em;
  height: 15em;
`;

export const link = css`
  text-decoration: none;
  color: black;
`;