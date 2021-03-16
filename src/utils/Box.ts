export const Box = <T>(x: T) => ({
  map: (f: (x: T) => any) => Box(f(x)),
  fold: (f: (x: T) => any) => f(x),
  chain: (f: (x: T) => any) => Box(x),
  toString: `Box(${x})`,
});
