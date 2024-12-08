import { format } from 'date-fns';
import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
} from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export const timeDifferenceText = (createdAt: string) => {
    const timeZone = 'Asia/Seoul';
    const zonedCreatedAt = toZonedTime(createdAt, timeZone); // createdAt을 Asia/Seoul 시간대로 변환
    const now = toZonedTime(new Date(), timeZone); // 현재 시간을 Asia/Seoul 시간대로 변환

    const daysDiff = differenceInDays(now, zonedCreatedAt); // 날짜 차이 계산
    const hoursDiff = differenceInHours(now, zonedCreatedAt); // 시간 차이 계산
    const minutesDiff = differenceInMinutes(now, zonedCreatedAt); // 분 차이 계산

    if (daysDiff === 0) {
        if (hoursDiff > 0) {
            return `약 ${hoursDiff}시간 전`;
        }
        return `${minutesDiff}분 전`;
    }

    if (daysDiff <= 7) {
        return `${daysDiff}일 전`;
    }

    return format(zonedCreatedAt, 'yyyy년 MM월 dd일');
};
