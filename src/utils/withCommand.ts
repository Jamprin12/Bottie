export const withCommand = (prefix: string, content: string) => (
  command: string
) => content.startsWith(`${prefix}${command}`);
