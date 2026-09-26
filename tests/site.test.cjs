const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const script = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');

test('uncomputed score is not displayed as a percentage', () => {
  assert.ok(/<span id="score-text" role="status" aria-live="polite" aria-atomic="true">—<\/span>/.test(html),
    'without JS there must be no fabricated score');
  const start = script.indexOf('const updateScore = () => {');
  const end = script.indexOf('const resetQuiz = () => {', start);
  assert.ok(start >= 0 && end > start, 'score calculation section exists');
  const questions = [{ answer: null, bestPractice: 'yes' }, { answer: null, bestPractice: 'no' }];
  const scoreText = { textContent: '' };
  const answered = { textContent: '' };
  const context = {
    questions,
    progressBar: { style: {} }, scoreCircle: { style: {} }, scoreText,
    statAnswered: answered, statCorrect: {}, statIncorrect: {},
    scoreDescription: {}, currentLang: 'en',
    translations: { en: { score_initial_desc: 'Answer the questions', score_desc_inprogress: 'In progress', score_desc_excellent: 'Excellent' } }
  };
  const update = vm.runInNewContext(script.slice(start, end) + '\nupdateScore', context);
  update();
  assert.equal(scoreText.textContent, '—', 'untouched quiz has no calculated percentage');
  assert.equal(answered.textContent, '0/2');
  questions[0].answer = 'yes';
  update();
  assert.equal(scoreText.textContent, '100%', 'scoring formula for answers remains unchanged');
});
