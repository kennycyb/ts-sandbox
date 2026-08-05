#!/usr/bin/env node

import {greetCommand, helpCommand, GreetOptions} from './commands';

function parseArgs(args: string[]): {
  command: string;
  options: GreetOptions & {help?: boolean};
} {
  const options: GreetOptions & {help?: boolean} = {};
  let command = 'help';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === 'greet' || arg === 'help') {
      command = arg;
    } else if (arg === '--name' || arg === '-n') {
      options.name = args[++i];
    } else if (arg.startsWith('--name=')) {
      options.name = arg.split('=')[1];
    } else if (arg === '--uppercase' || arg === '-u') {
      options.uppercase = true;
    } else if (arg === '--help' || arg === '-h') {
      options.help = true;
    }
  }

  return {command, options};
}

function main(): void {
  const args = process.argv.slice(2);
  const {command, options} = parseArgs(args);

  if (options.help || command === 'help') {
    console.log(helpCommand());
    return;
  }

  if (command === 'greet') {
    console.log(greetCommand(options));
    return;
  }

  console.log(helpCommand());
}

main();
