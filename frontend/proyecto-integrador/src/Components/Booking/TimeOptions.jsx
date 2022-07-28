import {useMemo} from 'react';

export default function TimeOptions(){
    return useMemo(() => {
        const options = []
        for (let i = 0; i < 24; i++) {
            let hour = i <= 12 ? i : i - 12;
            const hours = `${hour < 10 ? '0' + hour : hour}`
            const amPM = `${i <= 12 ? "am" : "pm"} `;
            const time = `${hours}:00 ${amPM}`;
            options.push(<option value={i} key={i}>{time}</option>)
        }
        return options
    }, [])
}