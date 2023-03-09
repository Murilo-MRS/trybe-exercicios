const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  sort(tests) {
    const copyTests = Array.from(tests)
      .filter((e) => !e.path.includes('/sources'))
      .filter((e) => e.path.includes('.test.ts'))
      .sort((testA, testB) => (testA.path > testB.path ? 1 : -1));
    return copyTests;
  }
}

module.exports = CustomSequencer;
