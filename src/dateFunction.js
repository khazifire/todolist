import moment from "moment";
const formatDate = (inputDate) => {
    const date = moment(inputDate);
    return (
      date.format('MMMM DD, YYYY')
    );
  }

 
  export default formatDate; 



