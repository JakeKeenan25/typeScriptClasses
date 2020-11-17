export function* employeeIdGenerator(): IterableIterator<number> {
  let i = 0;
  while (true) {
    if (yield i++) {
      break;
    }
  }
  return 'done!';
}

export function* employeeTaskGenerator(
  ...tasks: string[]
): IterableIterator<string> {
  yield* tasks;
}
