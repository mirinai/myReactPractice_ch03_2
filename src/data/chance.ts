import Chance from 'chance'

// Chance 인스턴스를 생성합니다.
const chance = new Chance()

/**
 * 랜덤 UUID를 생성합니다.
 * @returns {string} - 랜덤 UUID
 */
export const randomUUID = () => chance.guid()

/**
 * 랜덤 이름을 생성합니다.
 * @returns {string} - 랜덤 이름
 */
export const randomName = () => chance.name()

/**
 * 랜덤 이메일 주소를 생성합니다.
 * @returns {string} - 랜덤 이메일 주소
 */
export const randomEmail = () => chance.email()

/**
 * 랜덤 페이스북 ID를 생성합니다.
 * @returns {string} - 랜덤 페이스북 ID
 */
export const randomId = () => chance.fbid() // Facebook ID

/**
 * 랜덤 직업명을 생성합니다.
 * @returns {string} - 랜덤 직업명
 */
export const randomJobTitle = () => chance.profession()

/**
 * 랜덤 회사명을 생성합니다.
 * @returns {string} - 랜덤 회사명
 */
export const randomCompanyName = () => chance.company()

/**
 * 주어진 단어 수로 랜덤 문장을 생성합니다.
 * @param {number} words - 문장의 단어 수 (기본값: 5)
 * @returns {string} - 랜덤 문장
 */
export const randomSentence = (words = 5) => chance.sentence({words})

/**
 * 주어진 단어 수로 랜덤 제목을 생성합니다.
 * @param {number} words - 제목의 단어 수 (기본값: 3)
 * @returns {string} - 랜덤 제목
 */
export const randomTitleText = (words = 3) => chance.sentence({words})

/**
 * 주어진 문장 수로 랜덤 문단을 생성합니다.
 * @param {number} sentences - 문단의 문장 수 (기본값: 3)
 * @returns {string} - 랜덤 문단
 */
export const randomParagraphs = (sentences = 3) => chance.paragraph({sentences})
