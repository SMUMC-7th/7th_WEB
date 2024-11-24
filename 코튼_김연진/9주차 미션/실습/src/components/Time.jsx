import { useEffect, useState } from 'react';

export default function Time() {
    const [now, setNow] = useState(new Date());

    function tick() {
        setNow(new Date());
    }

    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let day = now.getDay();

    const weeks = [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
    ];

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div className="text-[30px] pl-[40px] pr-[40px]">
            <div>SMUMC TodoList Redux</div>
            <div className="text-[30px] font-semibold mb-[10px]">
                {year}년 {month}월 {date}일 {weeks[day]}
            </div>

            <hr className=" border-b-[#e9ecef]  border-b-solid border-b-[1px]" />
        </div>
    );
}
