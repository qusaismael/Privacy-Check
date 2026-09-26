const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const script = fs.readFileSync(path.join(__dirname, '../script.js'), 'utf8');
const css = fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf8');

test('language dialog has a name, a way back, and keyboard targets', () => {
  assert.ok(/id="lang-modal"[^>]*role="dialog"[^>]*aria-modal="true"[^>]*aria-labelledby="lang-dialog-title"/.test(html));
  assert.ok(/<h3 id="lang-dialog-title">Select Your Language \/ اختر لغتك<\/h3>/.test(html));
  assert.ok(/id="language-switch"[^>]*aria-label="Change language"/.test(html));
  assert.ok(/#language-switch:focus-visible,\s*\.lang-select-btn:focus-visible/.test(css));
  assert.ok(/\.lang-select-btn\s*\{[^}]*min-height:\s*44px;/s.test(css));
});

test('language dialog traps Tab and restores focus after selection or Escape', () => {
  const start = script.indexOf('// Language management');
  const end = script.indexOf('// UI rendering', start);
  assert.ok(start > 0 && end > start, 'language manager section exists');
  const doc = { body: {}, activeElement: null, documentElement: {},
    container: { inert: false },
    querySelector(selector) { assert.equal(selector, '.container'); return this.container; },
    getElementById(id) { assert.equal(id, 'language-switch'); return switcher; } };
  doc.activeElement = doc.body;
  function button() {
    return { events: {}, addEventListener(type, fn) { this.events[type] = fn; },
      focus() { doc.activeElement = this; }, isConnected: true };
  }
  const first = button(), last = button(), switcher = button();
  const classes = new Set();
  const modal = { events: {}, querySelectorAll() { return [first, last]; },
    addEventListener(type, fn) { this.events[type] = fn; },
    classList: { add(name) { classes.add(name); }, remove(name) { classes.delete(name); }, contains(name) { return classes.has(name); } } };
  let saved = null;
  const context = { document: doc, langModal: modal, localStorage: { getItem() { return saved; } } };
  const { initLanguage, closeLanguageDialog } = vm.runInNewContext(
    script.slice(start, end) + '\n({ initLanguage, closeLanguageDialog })', context);
  initLanguage();
  assert.equal(modal.classList.contains('show'), true);
  assert.equal(doc.container.inert, true);
  assert.equal(doc.activeElement, first);
  let prevented = 0;
  modal.events.keydown({ key: 'Tab', shiftKey: true, preventDefault() { prevented++; } });
  assert.equal(doc.activeElement, last);
  modal.events.keydown({ key: 'Tab', shiftKey: false, preventDefault() { prevented++; } });
  assert.equal(doc.activeElement, first);
  assert.equal(prevented, 2);
  closeLanguageDialog();
  assert.equal(doc.activeElement, switcher);
  assert.equal(doc.container.inert, false);
  switcher.events.click();
  saved = 'en';
  modal.events.keydown({ key: 'Escape', preventDefault() { prevented++; } });
  assert.equal(modal.classList.contains('show'), false);
  assert.equal(doc.activeElement, switcher);
  assert.equal(prevented, 3);
});
