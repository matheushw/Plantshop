import { css } from '@emotion/css'

export const registerForm = css`
  width: 33vw;
  margin: 20px auto;
  border: 3px solid #B5E550;
  border-radius: 10px;
  padding: 30px;

  > h1{
    margin: 0px;
  }

  > h2{
    margin: 0px;
    color: rgb(92, 182, 3);
  }

  a{
    text-decoration: none;
    color: rgb(0, 0 ,0);
  }

  button{
    padding: 9px 15px;
    margin: 10px 10px 10px 0;
    background-color: rgb(92, 182, 3);
    border: none;
    border-radius: 10px;
  }
  form{
    padding: 10px 0 10px 0;
    font-size: medium;
    input{
        width: 90%;
    }
    select{
        width: 90%;
    }
    textarea{
        width: 90%;
        font-size: small;
    }
  }

`;
