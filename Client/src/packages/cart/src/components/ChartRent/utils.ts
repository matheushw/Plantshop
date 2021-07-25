export const dateAsString = (date: Date) => {
  var dd = (date.getDate()+1).toString();
  var mm = (date.getMonth()+1).toString();
  var yyyy = (date.getFullYear()).toString();
  if(parseInt(dd) < 10){
    dd = '0' + dd;
  } 
  if(parseInt(mm)<10){
    mm = '0' + mm;
  }

  return(dd+"/"+mm+"/"+yyyy);
}