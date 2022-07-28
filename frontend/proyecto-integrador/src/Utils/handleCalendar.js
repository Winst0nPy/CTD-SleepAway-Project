export const tileDisabled = ({date}) => {
    return true;
}

export const toDate = (arrayYYMMDD) => {
    if(!arrayYYMMDD){
        return null;
    }
    const [year, month, day] = arrayYYMMDD;
    return new Date(year, month-1, day, 0, 0,0);
}

export const handleBookedDates = (bookedDates) => {
    if(!bookedDates){
        return [];
    }
    return bookedDates.map(booked =>
        {   const start = toDate(booked.booking_starting_date)
            const end = toDate(booked.booking_final_date)
            return [start, end]}
        )
}