function getFormatTime(){
    let date = new Date();
    let formatDate = `${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日 ${date.getHours()}时 ${date.getMinutes()}分`;
    return formatDate;
}
export default getFormatTime