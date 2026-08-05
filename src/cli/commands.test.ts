import * as assert from 'node:assert';
import {describe, it} from 'node:test';
import {greetCommand, helpCommand} from './commands';

describe('CLI commands', () => {
  describe('greetCommand', () => {
    it('should return default greeting when no options provided', () => {
      const result = greetCommand({});
      assert.strictEqual(result, 'Hello, World! Welcome to ts-sandbox CLI.');
    });

    it('should return customized greeting when name is provided', () => {
      const result = greetCommand({name: 'Alice'});
      assert.strictEqual(result, 'Hello, Alice! Welcome to ts-sandbox CLI.');
    });

    it('should convert greeting to uppercase when uppercase option is true', () => {
      const result = greetCommand({name: 'Bob', uppercase: true});
      assert.strictEqual(result, 'HELLO, BOB! WELCOME TO TS-SANDBOX CLI.');
    });
  });

  describe('helpCommand', () => {
    it('should return formatted help string containing usage info', () => {
      const result = helpCommand();
      assert.match(result, /ts-sandbox CLI - Sample Command Line Tool/);
      assert.match(result, /Usage:/);
      assert.match(result, /Commands:/);
      assert.match(result, /greet/);
      assert.match(result, /help/);
    });
  });
});
