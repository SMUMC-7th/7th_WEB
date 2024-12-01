import { format, toZonedTime } from 'date-fns-tz';

export const timeDifferenceText = (createdAt: string) => {
    const formattedDate = createdAt.slice(0, 10);
    const formattedNowDate = format(new Date(), 'yyyy-MM-dd');
    const zonedDate = toZonedTime(createdAt, 'Asia/Seoul');
    const now = new Date();
    const createHours = zonedDate.getHours();
    const createMinutes = zonedDate.getMinutes();
    const createMonth = zonedDate.getMonth();
    const createDate = zonedDate.getDay();

    const nowHours = now.getHours();
    const nowMinutes = now.getMinutes();
    const nowMonth = now.getMonth();
    const nowDate = now.getDay();

    if (formattedDate === formattedNowDate) {
        if (nowHours - createHours !== 0) {
            return `약 ${nowHours - createHours}시간 전`;
        }
        return `${nowMinutes - createMinutes}분 전`;
    }

    if (nowMonth === createMonth && nowDate - createDate <= 7) {
        return `${nowDate - createDate}일 전`;
    }

    return format(formattedDate, 'yyyy년 MM월 dd일');
};
