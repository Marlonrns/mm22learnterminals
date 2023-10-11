console.log('Hello world');
console.log('Hello world');
Process.stdout.write('Hello world')
Process.stdout.write('Hello world')

function write(text) {
    process.stdout.write(text);
}

write('hello world');
write('hello world\n');
write('hello\tworld\n');
write('\x1B[0;30m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;31m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;32m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;33m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;34m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;35m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;36m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;37m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;38m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');

write('\x1B[0;39m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;40m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;41m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;42m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;43m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;44m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;45m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;46m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;47m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');
write('\x1B[0;49m'); write ('Hello world'); write('\x1b[0;0m'); write('\n');

write('\x1B[0;30m'); write('\x1B[0;41m'); write('Hello world'); write('\x1B(0;0m); write('\n');