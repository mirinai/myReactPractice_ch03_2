import * as U from './util'

// prettier-ignore
/**
 * 지정된 크기의 랜덤 이미지를 반환하는 URL을 생성합니다.
 * @param {number} width - 이미지의 너비
 * @param {number} height - 이미지의 높이
 * @returns {string} - Picsum 이미지 URL
 */
export const picsumUrl = (width: number, height: number): string => 
  `http://picsum.photos/${width}/${height}`

/**
 * 주어진 범위 내에서 랜덤한 크기의 이미지를 반환하는 URL을 생성합니다.
 * @param {number} [w=1000] - 이미지의 기본 너비 (기본값: 1000)
 * @param {number} [h=800] - 이미지의 기본 높이 (기본값: 800)
 * @param {number} delta - 너비와 높이의 변동 범위
 * @returns {string} - Picsum 이미지 URL
 */
export const randomImage = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta))

/**
 * 랜덤 크기의 아바타 이미지를 반환하는 URL을 생성합니다.
 * @returns {string} - Picsum 아바타 이미지 URL
 */
export const randomAvatar = () => {
  const size = U.random(200, 400)
  return picsumUrl(size, size)
}
