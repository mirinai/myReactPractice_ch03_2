import {DateTime} from 'luxon'

/**
 * 과거의 랜덤 날짜를 생성합니다.
 * 현재 시간에서 일정 범위 내의 과거 날짜를 랜덤으로 생성합니다.
 * @returns {Date} - 과거의 랜덤 날짜
 */
export const makeRandomPastDate = () => {
  const value = new Date().valueOf() // 현재 시간의 타임스탬프 값을 가져옵니다.
  const n = 100000 // 임의의 큰 숫자 n을 정의합니다.
  return new Date(value - Math.floor(Math.random() * n * n)) // 현재 시간에서 n*n 미만의 랜덤한 값을 뺀 날짜를 반환합니다.
}

/**
 * 주어진 날짜를 상대적인 날짜 표현으로 변환합니다.
 * 예: "3 days ago", "in 2 months"
 * @param {Date} date - 변환할 날짜
 * @returns {string | null} - 상대적인 날짜 표현
 */
export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative() // luxon의 DateTime 객체를 사용하여 날짜를 변환하고, 상대적인 날짜 표현을 반환합니다.

/**
 * 과거의 랜덤 날짜를 상대적인 날짜 표현으로 변환합니다.
 * @returns {string | null} - 상대적인 날짜 표현
 */
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate()) // 과거의 랜덤 날짜를 생성하고 상대적인 날짜 표현으로 변환합니다.

/**
 * 주어진 날짜를 일/월/년 형식의 문자열로 변환합니다. DATE_FULL은 luxon 라이브러리에서 제공하는 상수,
 * 날짜를 포맷팅할 때 사용하는 옵션임.
 * luxon은 다양한 날짜 및 시간 형식을 정의하는 여러 상수를 제공합니다.
 * DATE_FULL은 전체 날짜 형식을 나타내며, 일반적으로 "일요일, 2024년 6월 24일"과 같은 형식을 사용합니다.
 * 예: "25 October 2021"
 * @param {Date} date - 변환할 날짜
 * @returns {string} - 일/월/년 형식의 날짜 문자열
 */
export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL) // luxon의 DateTime 객체를 사용하여 날짜를 변환하고, 로케일에 맞는 전체 날짜 문자열을 반환합니다.

/**
 * 과거의 랜덤 날짜를 일/월/년 형식의 문자열로 변환합니다.
 * @returns {string} - 일/월/년 형식의 날짜 문자열
 */
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate()) // 과거의 랜덤 날짜를 생성하고 일/월/년 형식의 문자열로 변환합니다.
