const CATEGORIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'Node',
  'Vue',
  'Python',
  'React',
  'Angular',
  'Ruby',
  'Java',
  'Redux',
  'SQL',
  'Git'
];
const AUTOCOMPLETE = {};
CATEGORIES.forEach((cat) => AUTOCOMPLETE[cat] = null);
export { CATEGORIES, AUTOCOMPLETE };
