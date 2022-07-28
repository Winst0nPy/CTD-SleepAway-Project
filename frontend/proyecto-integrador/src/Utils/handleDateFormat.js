import moment from "moment";

export default function handleDateFormat(date){
    return moment(date).format("yyyy-MM-DD");
}