const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');

test('reset cancels a pending next-question transition', () => {
  const start = source.indexOf("nextBtn.addEventListener('click', () => {");
  const end = source.indexOf('            });', start);
  assert.ok(start > 0 && end > start, 'next-question event handler exists');
  const nextHandler = source.slice(start, end + '            });'.length);
  const resetStart = source.indexOf('const resetQuiz = () => {');
  const resetEnd = source.indexOf('// Event listeners', resetStart);
  assert.ok(resetStart > 0 && resetEnd > resetStart, 'reset handler exists');
  const timers = new Map();
  let timerId = 0;
  const rendered = [];
  const card = { classList: { add() {} } };
  const nextBtn = { addEventListener(type, fn) { assert.equal(type, 'click'); this.click = fn; } };
  const context = vm.createContext({
    nextBtn, question: { id: 1 }, currentQuestionIndex: 0,
    questions: [{ id: 1, answer: 'yes', note: 'private' }, { id: 2, answer: null, note: '' }],
    nextTimer: null, revealTimer: null,
    document: { getElementById: () => card },
    questionnaireContainer: { scrollIntoView() {} },
    setTimeout(fn) { const id = ++timerId; timers.set(id, fn); return id; },
    clearTimeout(id) { timers.delete(id); },
    renderQuestion(index) { rendered.push(index); },
    renderCompletion() { throw new Error('unexpected completion'); },
    updateScore() {}
  });
  vm.runInContext(nextHandler + '\n' + source.slice(resetStart, resetEnd) + '\n resetQuiz()', context);
  // The preceding reset ran before the click. Schedule another transition, then reset again.
  nextBtn.click();
  assert.equal(timers.size, 1, 'transition was pending');
  vm.runInContext('resetQuiz()', context);
  for (const callback of timers.values()) callback();
  assert.equal(context.currentQuestionIndex, 0);
  assert.equal(rendered.at(-1), 0);
  assert.equal(timers.size, 0, 'reset invalidated the timer');
});
