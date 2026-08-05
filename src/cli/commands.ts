export interface GreetOptions {
  name?: string;
  uppercase?: boolean;
}

export function greetCommand(options: GreetOptions): string {
  const name = options.name || 'World';
  const greeting = `Hello, ${name}! Welcome to ts-sandbox CLI.`;
  return options.uppercase ? greeting.toUpperCase() : greeting;
}

export function helpCommand(): string {
  return [
    'ts-sandbox CLI - Sample Command Line Tool',
    '',
    'Usage:',
    '  ts-sandbox <command> [options]',
    '  npm run cli -- <command> [options]',
    '',
    'Commands:',
    '  greet           Print a greeting message',
    '  help            Show this help message',
    '',
    'Options:',
    '  --name, -n      Name to greet (default: "World")',
    '  --uppercase, -u Convert greeting to uppercase',
    '  --help, -h      Show help information',
  ].join('\n');
}
