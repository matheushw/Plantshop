import { css } from '@emotion/css'

export const purchaseList = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  font-family: 'Bitter', serif;
  margin: 10px;
  height: 100%;
  
  flex: 1;
  
  > h1{
    margin: 0px;
  }

  > div{
    overflow-y: auto;
    height: 100%;
    width: 100%;
    
  }
`;

export const infoDisplay = css `
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 10px;
  margin: 10px;
  font-family: 'Bitter', serif;
  > h1{
    margin: 0px;
  }
  h2{color: rgb(92, 182, 3)}
  fieldset{
    border: 0 none;
  }
  button{
    padding: 9px 15px 9px 15px;
    margin: 10px 10px 10px 0;
    background-color: rgb(92, 182, 3);
    border: none;
    border-radius: 10px;
  }
  form{
    margin: 5px;
    display: block;
    padding: 5px;
    border: 3px solid #B5E550;
    border-radius: 10px;
    
    input{
      width: 90%;
      margin: 5px 0 5px 0;
      padding: 10px;
      background-color: #c1eb66;
    }
    
  } 
`;

export const profilePageWrapper = css`
  display: flex;
  height: 85vh;
`;

export const infos = css`
  overflow-y: auto;
  height: 100%;
`;

