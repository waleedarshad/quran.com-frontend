export const NUMBER_OF_CHAPTERS: number = 114;
export const NUMBER_OF_JUZS: number = 30;
export const JUZ_START: { [juzNumber: number]: Array<number> } = {
  /* Find number of juzs in chapters
  ex. 2:[142, 253] ⇒ in chapter 2 verse 142 is a juz same goes for verse 253
  Resource obtained from https://wajibad.wordpress.com/2015/11/15/the-30-juz-of-al-quran/ */
  1: [1],
  2: [142, 253],
  3: [92],
  4: [24, 148],
  5: [82],
  6: [111],
  7: [88],
  8: [41],
  9: [93],
  11: [6],
  12: [53],
  15: [1],
  17: [1],
  18: [75],
  21: [1],
  23: [1],
  25: [22],
  27: [56],
  29: [46],
  33: [31],
  36: [28],
  39: [32],
  41: [47],
  46: [1],
  51: [31],
  58: [1],
  67: [1],
  78: [1],
};

export const JUZ_AND_HIZB_ARABIC_NUMBERS = [
  /* Juz and hizb numbers in arabic ~zero - sixty~ */
  '٠',
  '١',
  '٢',
  '٣',
  '٤',
  '٥',
  '٦',
  '٧',
  '٨',
  '٩',
  '١٠',
  '١١',
  '١٢',
  '١٣',
  '١٤',
  '١٥',
  '١٦',
  '١٧',
  '١٨',
  '١٩',
  '٢٠',
  '٢١',
  '٢٢',
  '٢٣',
  '٢٤',
  '٢٥',
  '٢٦',
  '٢٧',
  '٢٨',
  '٢٩',
  '٣٠',
  '٣١',
  '٣٢',
  '٣٣',
  '٣٤',
  '٣٥',
  '٣٦',
  '٣٧',
  '٣٨',
  '٣٩',
  '٤٠',
  '٤١',
  '٤٢',
  '٤٣',
  '٤٤',
  '٤٥',
  '٤٦',
  '٤٧',
  '٤٨',
  '٤٩',
  '٥٠',
  '٥١',
  '٥٢',
  '٥٣',
  '٥٤',
  '٥٥',
  '٥٦',
  '٥٧',
  '٥٨',
  '٥٩',
  '٦٠',
];

export const CHAPTERS_TO_VERSES: { [key: string]: number } = {
  1: 7,
  2: 286,
  3: 200,
  4: 176,
  5: 120,
  6: 165,
  7: 206,
  8: 75,
  9: 129,
  10: 109,
  11: 123,
  12: 111,
  13: 43,
  14: 52,
  15: 99,
  16: 128,
  17: 111,
  18: 110,
  19: 98,
  20: 135,
  21: 112,
  22: 78,
  23: 118,
  24: 64,
  25: 77,
  26: 227,
  27: 93,
  28: 88,
  29: 69,
  30: 60,
  31: 34,
  32: 30,
  33: 73,
  34: 54,
  35: 45,
  36: 83,
  37: 182,
  38: 88,
  39: 75,
  40: 85,
  41: 54,
  42: 53,
  43: 89,
  44: 59,
  45: 37,
  46: 35,
  47: 38,
  48: 29,
  49: 18,
  50: 45,
  51: 60,
  52: 49,
  53: 62,
  54: 55,
  55: 78,
  56: 96,
  57: 29,
  58: 22,
  59: 24,
  60: 13,
  61: 14,
  62: 11,
  63: 11,
  64: 18,
  65: 12,
  66: 12,
  67: 30,
  68: 52,
  69: 52,
  70: 44,
  71: 28,
  72: 28,
  73: 20,
  74: 56,
  75: 40,
  76: 31,
  77: 50,
  78: 40,
  79: 46,
  80: 42,
  81: 29,
  82: 19,
  83: 36,
  84: 25,
  85: 22,
  86: 17,
  87: 19,
  88: 26,
  89: 30,
  90: 20,
  91: 15,
  92: 21,
  93: 11,
  94: 8,
  95: 8,
  96: 19,
  97: 5,
  98: 8,
  99: 8,
  100: 11,
  101: 11,
  102: 8,
  103: 3,
  104: 9,
  105: 5,
  106: 4,
  107: 7,
  108: 3,
  109: 6,
  110: 3,
  111: 5,
  112: 4,
  113: 5,
  114: 6,
};

export enum WORD_TYPES {
  CHAR_TYPE_WORD = 'word',
  CHAR_TYPE_END = 'end',
  CHAR_TYPE_PAUSE = 'pause',
  CHAR_TYPE_RUB = 'rub-el-hizb',
  CHAR_TYPE_SAJDAH = 'sajdah',
}

export const COOKIE_SETTINGS_KEY = 'options';
