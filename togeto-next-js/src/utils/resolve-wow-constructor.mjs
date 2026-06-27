export function resolveWowConstructor(moduleValue) {
  const candidates = [
    moduleValue?.WOW,
    moduleValue?.default,
    moduleValue?.WOW?.WOW,
    moduleValue?.default?.WOW,
  ];

  return candidates.find((candidate) => typeof candidate === 'function') ?? null;
}
