import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveWowConstructor } from '../src/utils/resolve-wow-constructor.mjs';

function WowConstructor() {}

test('resolves a named WOW constructor export', () => {
  assert.equal(resolveWowConstructor({ WOW: WowConstructor }), WowConstructor);
});

test('resolves a default constructor export', () => {
  assert.equal(resolveWowConstructor({ default: WowConstructor }), WowConstructor);
});

test('resolves nested WOW constructors from wrapped module exports', () => {
  assert.equal(resolveWowConstructor({ WOW: { WOW: WowConstructor } }), WowConstructor);
  assert.equal(resolveWowConstructor({ default: { WOW: WowConstructor } }), WowConstructor);
});

test('returns null when the module does not expose a constructor', () => {
  assert.equal(resolveWowConstructor({ WOW: {} }), null);
  assert.equal(resolveWowConstructor(null), null);
});
