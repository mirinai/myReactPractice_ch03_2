// 길이만큼의 새로운 배열을 생성하고 null로 채웁니다.
export const makeArray = (length: number) => new Array(length).fill(null)

// 주어진 범위 [min, max) 내의 숫자들을 포함하는 배열을 생성합니다.
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)

// 주어진 범위 [min, max) 내의 랜덤한 정수를 생성합니다.
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
