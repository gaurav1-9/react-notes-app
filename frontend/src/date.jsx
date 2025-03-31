const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
const metaDate = d.getDate()+" "+months[d.getMonth()]+", "+d.getFullYear()

export default metaDate;