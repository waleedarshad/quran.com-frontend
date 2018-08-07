import { ChapterId } from '../../src/types';

export const getVerse = (chapterId: ChapterId, verseNumber: number) => ({
  id: verseNumber,
  verseNumber,
  chapterId,
  verseKey: `${chapterId}:${verseNumber}`,
  textMadani: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  textIndopak: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
  textSimple: 'بسم الله الرحمن الرحيم',
  juzNumber: 1,
  hizbNumber: 1,
  rubNumber: 1,
  sajdah: null,
  sajdahNumber: null,
  pageNumber: 1,
  translations: [
    {
      id: 722482,
      languageName: 'english',
      text: 'In the Name of Allah—the Most Compassionate, Most Merciful.',
      resourceName: 'Dr. Mustafa Khattab',
      resourceId: 102,
    },
  ],
  mediaContents: [
    {
      url: 'https://www.youtube.com/embed/JyLuLv2hrAo?autoplay=1',
      embedText:
        '<iframe src="//www.youtube.com/embed/JyLuLv2hrAo?enablejsapi=1&wmode=transparent&iv_load_policy=3&origin=https%3A%2F%2Fquran.com&rel=0&autohide=1&autoplay=1" frameborder="0" allowfullscreen="allowfullscreen"></iframe>',
      provider: 'YouTube',
      authorName: 'Bayyinah',
    },
  ],
  words: [
    {
      id: 1,
      position: 1,
      textMadani: 'بِسْمِ',
      textIndopak: null,
      textSimple: 'بسم',
      verseKey: `${chapterId}:${verseNumber}`,
      className: 'p1',
      lineNumber: 2,
      pageNumber: 1,
      code: '&#xfb51;',
      codeV3: '&#xfb51;',
      charType: 'word',
      audio: { url: 'verses/wbw/001_001_001.mp3' },
      translation: {
        id: 1,
        languageName: 'english',
        text: 'In (the) name',
        resourceName: null,
        resourceId: 59,
      },
      transliteration: {
        id: 1,
        languageName: 'english',
        text: 'In (the) name',
        resourceName: null,
        resourceId: 59,
      },
    },
    {
      id: 2,
      position: 2,
      textMadani: 'اللَّهِ',
      textIndopak: null,
      textSimple: 'الله',
      verseKey: `${chapterId}:${verseNumber}`,
      className: 'p1',
      lineNumber: 2,
      pageNumber: 1,
      code: '&#xfb52;',
      codeV3: '&#xfb52;',
      charType: 'word',
      audio: { url: 'verses/wbw/001_001_002.mp3' },
      translation: {
        id: 2,
        languageName: 'english',
        text: '(of) Allah',
        resourceName: null,
        resourceId: 59,
      },
      transliteration: {
        id: 2,
        languageName: 'english',
        text: '(of) Allah',
        resourceName: null,
        resourceId: 59,
      },
    },
    {
      id: 3,
      position: 3,
      textMadani: 'الرَّحْمَٰنِ',
      textIndopak: null,
      textSimple: 'الرحمان',
      verseKey: `${chapterId}:${verseNumber}`,
      className: 'p1',
      lineNumber: 2,
      pageNumber: 1,
      code: '&#xfb53;',
      codeV3: '&#xfb53;',
      charType: 'word',
      audio: { url: 'verses/wbw/001_001_003.mp3' },
      translation: {
        id: 3,
        languageName: 'english',
        text: 'the Most Gracious',
        resourceName: null,
        resourceId: 59,
      },
      transliteration: {
        id: 3,
        languageName: 'english',
        text: 'the Most Gracious',
        resourceName: null,
        resourceId: 59,
      },
    },
    {
      id: 4,
      position: 4,
      textMadani: 'الرَّحِيمِ',
      textIndopak: null,
      textSimple: 'الرحيم',
      verseKey: `${chapterId}:${verseNumber}`,
      className: 'p1',
      lineNumber: 2,
      pageNumber: 1,
      code: '&#xfb54;',
      codeV3: '&#xfb54;',
      charType: 'word',
      audio: { url: 'verses/wbw/001_001_004.mp3' },
      translation: {
        id: 4,
        languageName: 'english',
        text: 'the Most Merciful',
        resourceName: null,
        resourceId: 59,
      },
      transliteration: {
        id: 4,
        languageName: 'english',
        text: 'the Most Merciful',
        resourceName: null,
        resourceId: 59,
      },
    },
    {
      id: 5,
      position: 5,
      textMadani: null,
      textIndopak: null,
      textSimple: null,
      verseKey: `${chapterId}:${verseNumber}`,
      className: 'p1',
      lineNumber: 2,
      pageNumber: 1,
      code: '&#xfb55;',
      codeV3: '&#xa001;',
      charType: 'end',
      audio: { url: null },
      translation: null,
      transliteration: null,
    },
  ],
});

export default getVerse(1, 1);
