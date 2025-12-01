export type Hand = 'left' | 'right';
export type Finger = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';

export interface KeyPosition {
  row: number;
  col: number;
  hand: Hand;
  finger: Finger;
}

export type KeyboardLayout = Record<string, KeyPosition>;

// QWERTY Layout - Standard US keyboard
export const qwerty: KeyboardLayout = {
  // Top row (row 0)
  '`': { row: 0, col: 0, hand: 'left', finger: 'pinky' },
  '1': { row: 0, col: 1, hand: 'left', finger: 'pinky' },
  '2': { row: 0, col: 2, hand: 'left', finger: 'ring' },
  '3': { row: 0, col: 3, hand: 'left', finger: 'middle' },
  '4': { row: 0, col: 4, hand: 'left', finger: 'index' },
  '5': { row: 0, col: 5, hand: 'left', finger: 'index' },
  '6': { row: 0, col: 6, hand: 'right', finger: 'index' },
  '7': { row: 0, col: 7, hand: 'right', finger: 'index' },
  '8': { row: 0, col: 8, hand: 'right', finger: 'middle' },
  '9': { row: 0, col: 9, hand: 'right', finger: 'ring' },
  '0': { row: 0, col: 10, hand: 'right', finger: 'pinky' },
  '-': { row: 0, col: 11, hand: 'right', finger: 'pinky' },
  '=': { row: 0, col: 12, hand: 'right', finger: 'pinky' },

  // Upper row (row 1)
  'q': { row: 1, col: 0, hand: 'left', finger: 'pinky' },
  'w': { row: 1, col: 1, hand: 'left', finger: 'ring' },
  'e': { row: 1, col: 2, hand: 'left', finger: 'middle' },
  'r': { row: 1, col: 3, hand: 'left', finger: 'index' },
  't': { row: 1, col: 4, hand: 'left', finger: 'index' },
  'y': { row: 1, col: 5, hand: 'right', finger: 'index' },
  'u': { row: 1, col: 6, hand: 'right', finger: 'index' },
  'i': { row: 1, col: 7, hand: 'right', finger: 'middle' },
  'o': { row: 1, col: 8, hand: 'right', finger: 'ring' },
  'p': { row: 1, col: 9, hand: 'right', finger: 'pinky' },
  '[': { row: 1, col: 10, hand: 'right', finger: 'pinky' },
  ']': { row: 1, col: 11, hand: 'right', finger: 'pinky' },
  '\\': { row: 1, col: 12, hand: 'right', finger: 'pinky' },

  // Home row (row 2)
  'a': { row: 2, col: 0, hand: 'left', finger: 'pinky' },
  's': { row: 2, col: 1, hand: 'left', finger: 'ring' },
  'd': { row: 2, col: 2, hand: 'left', finger: 'middle' },
  'f': { row: 2, col: 3, hand: 'left', finger: 'index' },
  'g': { row: 2, col: 4, hand: 'left', finger: 'index' },
  'h': { row: 2, col: 5, hand: 'right', finger: 'index' },
  'j': { row: 2, col: 6, hand: 'right', finger: 'index' },
  'k': { row: 2, col: 7, hand: 'right', finger: 'middle' },
  'l': { row: 2, col: 8, hand: 'right', finger: 'ring' },
  ';': { row: 2, col: 9, hand: 'right', finger: 'pinky' },
  "'": { row: 2, col: 10, hand: 'right', finger: 'pinky' },

  // Bottom row (row 3)
  'z': { row: 3, col: 0, hand: 'left', finger: 'pinky' },
  'x': { row: 3, col: 1, hand: 'left', finger: 'ring' },
  'c': { row: 3, col: 2, hand: 'left', finger: 'middle' },
  'v': { row: 3, col: 3, hand: 'left', finger: 'index' },
  'b': { row: 3, col: 4, hand: 'left', finger: 'index' },
  'n': { row: 3, col: 5, hand: 'right', finger: 'index' },
  'm': { row: 3, col: 6, hand: 'right', finger: 'index' },
  ',': { row: 3, col: 7, hand: 'right', finger: 'middle' },
  '.': { row: 3, col: 8, hand: 'right', finger: 'ring' },
  '/': { row: 3, col: 9, hand: 'right', finger: 'pinky' },
};

// AZERTY Layout - French keyboard
export const azerty: KeyboardLayout = {
  // Top row (row 0)
  '²': { row: 0, col: 0, hand: 'left', finger: 'pinky' },
  '&': { row: 0, col: 1, hand: 'left', finger: 'pinky' },
  'é': { row: 0, col: 2, hand: 'left', finger: 'ring' },
  '"': { row: 0, col: 3, hand: 'left', finger: 'middle' },
  "'": { row: 0, col: 4, hand: 'left', finger: 'index' },
  '(': { row: 0, col: 5, hand: 'left', finger: 'index' },
  '-': { row: 0, col: 6, hand: 'right', finger: 'index' },
  'è': { row: 0, col: 7, hand: 'right', finger: 'index' },
  '_': { row: 0, col: 8, hand: 'right', finger: 'middle' },
  'ç': { row: 0, col: 9, hand: 'right', finger: 'ring' },
  'à': { row: 0, col: 10, hand: 'right', finger: 'pinky' },
  ')': { row: 0, col: 11, hand: 'right', finger: 'pinky' },
  '=': { row: 0, col: 12, hand: 'right', finger: 'pinky' },

  // Upper row (row 1)
  'a': { row: 1, col: 0, hand: 'left', finger: 'pinky' },
  'z': { row: 1, col: 1, hand: 'left', finger: 'ring' },
  'e': { row: 1, col: 2, hand: 'left', finger: 'middle' },
  'r': { row: 1, col: 3, hand: 'left', finger: 'index' },
  't': { row: 1, col: 4, hand: 'left', finger: 'index' },
  'y': { row: 1, col: 5, hand: 'right', finger: 'index' },
  'u': { row: 1, col: 6, hand: 'right', finger: 'index' },
  'i': { row: 1, col: 7, hand: 'right', finger: 'middle' },
  'o': { row: 1, col: 8, hand: 'right', finger: 'ring' },
  'p': { row: 1, col: 9, hand: 'right', finger: 'pinky' },
  '^': { row: 1, col: 10, hand: 'right', finger: 'pinky' },
  '$': { row: 1, col: 11, hand: 'right', finger: 'pinky' },

  // Home row (row 2)
  'q': { row: 2, col: 0, hand: 'left', finger: 'pinky' },
  's': { row: 2, col: 1, hand: 'left', finger: 'ring' },
  'd': { row: 2, col: 2, hand: 'left', finger: 'middle' },
  'f': { row: 2, col: 3, hand: 'left', finger: 'index' },
  'g': { row: 2, col: 4, hand: 'left', finger: 'index' },
  'h': { row: 2, col: 5, hand: 'right', finger: 'index' },
  'j': { row: 2, col: 6, hand: 'right', finger: 'index' },
  'k': { row: 2, col: 7, hand: 'right', finger: 'middle' },
  'l': { row: 2, col: 8, hand: 'right', finger: 'ring' },
  'm': { row: 2, col: 9, hand: 'right', finger: 'pinky' },
  'ù': { row: 2, col: 10, hand: 'right', finger: 'pinky' },
  '*': { row: 2, col: 11, hand: 'right', finger: 'pinky' },

  // Bottom row (row 3)
  'w': { row: 3, col: 0, hand: 'left', finger: 'pinky' },
  'x': { row: 3, col: 1, hand: 'left', finger: 'ring' },
  'c': { row: 3, col: 2, hand: 'left', finger: 'middle' },
  'v': { row: 3, col: 3, hand: 'left', finger: 'index' },
  'b': { row: 3, col: 4, hand: 'left', finger: 'index' },
  'n': { row: 3, col: 5, hand: 'right', finger: 'index' },
  ',': { row: 3, col: 6, hand: 'right', finger: 'index' },
  ';': { row: 3, col: 7, hand: 'right', finger: 'middle' },
  ':': { row: 3, col: 8, hand: 'right', finger: 'ring' },
  '!': { row: 3, col: 9, hand: 'right', finger: 'pinky' },
};

// QWERTZ Layout - German keyboard
export const qwertz: KeyboardLayout = {
  // Top row (row 0)
  '^': { row: 0, col: 0, hand: 'left', finger: 'pinky' },
  '1': { row: 0, col: 1, hand: 'left', finger: 'pinky' },
  '2': { row: 0, col: 2, hand: 'left', finger: 'ring' },
  '3': { row: 0, col: 3, hand: 'left', finger: 'middle' },
  '4': { row: 0, col: 4, hand: 'left', finger: 'index' },
  '5': { row: 0, col: 5, hand: 'left', finger: 'index' },
  '6': { row: 0, col: 6, hand: 'right', finger: 'index' },
  '7': { row: 0, col: 7, hand: 'right', finger: 'index' },
  '8': { row: 0, col: 8, hand: 'right', finger: 'middle' },
  '9': { row: 0, col: 9, hand: 'right', finger: 'ring' },
  '0': { row: 0, col: 10, hand: 'right', finger: 'pinky' },
  'ß': { row: 0, col: 11, hand: 'right', finger: 'pinky' },
  '´': { row: 0, col: 12, hand: 'right', finger: 'pinky' },

  // Upper row (row 1)
  'q': { row: 1, col: 0, hand: 'left', finger: 'pinky' },
  'w': { row: 1, col: 1, hand: 'left', finger: 'ring' },
  'e': { row: 1, col: 2, hand: 'left', finger: 'middle' },
  'r': { row: 1, col: 3, hand: 'left', finger: 'index' },
  't': { row: 1, col: 4, hand: 'left', finger: 'index' },
  'z': { row: 1, col: 5, hand: 'right', finger: 'index' },
  'u': { row: 1, col: 6, hand: 'right', finger: 'index' },
  'i': { row: 1, col: 7, hand: 'right', finger: 'middle' },
  'o': { row: 1, col: 8, hand: 'right', finger: 'ring' },
  'p': { row: 1, col: 9, hand: 'right', finger: 'pinky' },
  'ü': { row: 1, col: 10, hand: 'right', finger: 'pinky' },
  '+': { row: 1, col: 11, hand: 'right', finger: 'pinky' },

  // Home row (row 2)
  'a': { row: 2, col: 0, hand: 'left', finger: 'pinky' },
  's': { row: 2, col: 1, hand: 'left', finger: 'ring' },
  'd': { row: 2, col: 2, hand: 'left', finger: 'middle' },
  'f': { row: 2, col: 3, hand: 'left', finger: 'index' },
  'g': { row: 2, col: 4, hand: 'left', finger: 'index' },
  'h': { row: 2, col: 5, hand: 'right', finger: 'index' },
  'j': { row: 2, col: 6, hand: 'right', finger: 'index' },
  'k': { row: 2, col: 7, hand: 'right', finger: 'middle' },
  'l': { row: 2, col: 8, hand: 'right', finger: 'ring' },
  'ö': { row: 2, col: 9, hand: 'right', finger: 'pinky' },
  'ä': { row: 2, col: 10, hand: 'right', finger: 'pinky' },
  '#': { row: 2, col: 11, hand: 'right', finger: 'pinky' },

  // Bottom row (row 3)
  'y': { row: 3, col: 0, hand: 'left', finger: 'pinky' },
  'x': { row: 3, col: 1, hand: 'left', finger: 'ring' },
  'c': { row: 3, col: 2, hand: 'left', finger: 'middle' },
  'v': { row: 3, col: 3, hand: 'left', finger: 'index' },
  'b': { row: 3, col: 4, hand: 'left', finger: 'index' },
  'n': { row: 3, col: 5, hand: 'right', finger: 'index' },
  'm': { row: 3, col: 6, hand: 'right', finger: 'index' },
  ',': { row: 3, col: 7, hand: 'right', finger: 'middle' },
  '.': { row: 3, col: 8, hand: 'right', finger: 'ring' },
  '-': { row: 3, col: 9, hand: 'right', finger: 'pinky' },
};

// Dvorak Layout
export const dvorak: KeyboardLayout = {
  // Top row (row 0)
  '`': { row: 0, col: 0, hand: 'left', finger: 'pinky' },
  '1': { row: 0, col: 1, hand: 'left', finger: 'pinky' },
  '2': { row: 0, col: 2, hand: 'left', finger: 'ring' },
  '3': { row: 0, col: 3, hand: 'left', finger: 'middle' },
  '4': { row: 0, col: 4, hand: 'left', finger: 'index' },
  '5': { row: 0, col: 5, hand: 'left', finger: 'index' },
  '6': { row: 0, col: 6, hand: 'right', finger: 'index' },
  '7': { row: 0, col: 7, hand: 'right', finger: 'index' },
  '8': { row: 0, col: 8, hand: 'right', finger: 'middle' },
  '9': { row: 0, col: 9, hand: 'right', finger: 'ring' },
  '0': { row: 0, col: 10, hand: 'right', finger: 'pinky' },
  '[': { row: 0, col: 11, hand: 'right', finger: 'pinky' },
  ']': { row: 0, col: 12, hand: 'right', finger: 'pinky' },

  // Upper row (row 1)
  "'": { row: 1, col: 0, hand: 'left', finger: 'pinky' },
  ',': { row: 1, col: 1, hand: 'left', finger: 'ring' },
  '.': { row: 1, col: 2, hand: 'left', finger: 'middle' },
  'p': { row: 1, col: 3, hand: 'left', finger: 'index' },
  'y': { row: 1, col: 4, hand: 'left', finger: 'index' },
  'f': { row: 1, col: 5, hand: 'right', finger: 'index' },
  'g': { row: 1, col: 6, hand: 'right', finger: 'index' },
  'c': { row: 1, col: 7, hand: 'right', finger: 'middle' },
  'r': { row: 1, col: 8, hand: 'right', finger: 'ring' },
  'l': { row: 1, col: 9, hand: 'right', finger: 'pinky' },
  '/': { row: 1, col: 10, hand: 'right', finger: 'pinky' },
  '=': { row: 1, col: 11, hand: 'right', finger: 'pinky' },
  '\\': { row: 1, col: 12, hand: 'right', finger: 'pinky' },

  // Home row (row 2)
  'a': { row: 2, col: 0, hand: 'left', finger: 'pinky' },
  'o': { row: 2, col: 1, hand: 'left', finger: 'ring' },
  'e': { row: 2, col: 2, hand: 'left', finger: 'middle' },
  'u': { row: 2, col: 3, hand: 'left', finger: 'index' },
  'i': { row: 2, col: 4, hand: 'left', finger: 'index' },
  'd': { row: 2, col: 5, hand: 'right', finger: 'index' },
  'h': { row: 2, col: 6, hand: 'right', finger: 'index' },
  't': { row: 2, col: 7, hand: 'right', finger: 'middle' },
  'n': { row: 2, col: 8, hand: 'right', finger: 'ring' },
  's': { row: 2, col: 9, hand: 'right', finger: 'pinky' },
  '-': { row: 2, col: 10, hand: 'right', finger: 'pinky' },

  // Bottom row (row 3)
  ';': { row: 3, col: 0, hand: 'left', finger: 'pinky' },
  'q': { row: 3, col: 1, hand: 'left', finger: 'ring' },
  'j': { row: 3, col: 2, hand: 'left', finger: 'middle' },
  'k': { row: 3, col: 3, hand: 'left', finger: 'index' },
  'x': { row: 3, col: 4, hand: 'left', finger: 'index' },
  'b': { row: 3, col: 5, hand: 'right', finger: 'index' },
  'm': { row: 3, col: 6, hand: 'right', finger: 'index' },
  'w': { row: 3, col: 7, hand: 'right', finger: 'middle' },
  'v': { row: 3, col: 8, hand: 'right', finger: 'ring' },
  'z': { row: 3, col: 9, hand: 'right', finger: 'pinky' },
};

// Colemak Layout
export const colemak: KeyboardLayout = {
  // Top row (row 0)
  '`': { row: 0, col: 0, hand: 'left', finger: 'pinky' },
  '1': { row: 0, col: 1, hand: 'left', finger: 'pinky' },
  '2': { row: 0, col: 2, hand: 'left', finger: 'ring' },
  '3': { row: 0, col: 3, hand: 'left', finger: 'middle' },
  '4': { row: 0, col: 4, hand: 'left', finger: 'index' },
  '5': { row: 0, col: 5, hand: 'left', finger: 'index' },
  '6': { row: 0, col: 6, hand: 'right', finger: 'index' },
  '7': { row: 0, col: 7, hand: 'right', finger: 'index' },
  '8': { row: 0, col: 8, hand: 'right', finger: 'middle' },
  '9': { row: 0, col: 9, hand: 'right', finger: 'ring' },
  '0': { row: 0, col: 10, hand: 'right', finger: 'pinky' },
  '-': { row: 0, col: 11, hand: 'right', finger: 'pinky' },
  '=': { row: 0, col: 12, hand: 'right', finger: 'pinky' },

  // Upper row (row 1)
  'q': { row: 1, col: 0, hand: 'left', finger: 'pinky' },
  'w': { row: 1, col: 1, hand: 'left', finger: 'ring' },
  'f': { row: 1, col: 2, hand: 'left', finger: 'middle' },
  'p': { row: 1, col: 3, hand: 'left', finger: 'index' },
  'g': { row: 1, col: 4, hand: 'left', finger: 'index' },
  'j': { row: 1, col: 5, hand: 'right', finger: 'index' },
  'l': { row: 1, col: 6, hand: 'right', finger: 'index' },
  'u': { row: 1, col: 7, hand: 'right', finger: 'middle' },
  'y': { row: 1, col: 8, hand: 'right', finger: 'ring' },
  ';': { row: 1, col: 9, hand: 'right', finger: 'pinky' },
  '[': { row: 1, col: 10, hand: 'right', finger: 'pinky' },
  ']': { row: 1, col: 11, hand: 'right', finger: 'pinky' },
  '\\': { row: 1, col: 12, hand: 'right', finger: 'pinky' },

  // Home row (row 2)
  'a': { row: 2, col: 0, hand: 'left', finger: 'pinky' },
  'r': { row: 2, col: 1, hand: 'left', finger: 'ring' },
  's': { row: 2, col: 2, hand: 'left', finger: 'middle' },
  't': { row: 2, col: 3, hand: 'left', finger: 'index' },
  'd': { row: 2, col: 4, hand: 'left', finger: 'index' },
  'h': { row: 2, col: 5, hand: 'right', finger: 'index' },
  'n': { row: 2, col: 6, hand: 'right', finger: 'index' },
  'e': { row: 2, col: 7, hand: 'right', finger: 'middle' },
  'i': { row: 2, col: 8, hand: 'right', finger: 'ring' },
  'o': { row: 2, col: 9, hand: 'right', finger: 'pinky' },
  "'": { row: 2, col: 10, hand: 'right', finger: 'pinky' },

  // Bottom row (row 3)
  'z': { row: 3, col: 0, hand: 'left', finger: 'pinky' },
  'x': { row: 3, col: 1, hand: 'left', finger: 'ring' },
  'c': { row: 3, col: 2, hand: 'left', finger: 'middle' },
  'v': { row: 3, col: 3, hand: 'left', finger: 'index' },
  'b': { row: 3, col: 4, hand: 'left', finger: 'index' },
  'k': { row: 3, col: 5, hand: 'right', finger: 'index' },
  'm': { row: 3, col: 6, hand: 'right', finger: 'index' },
  ',': { row: 3, col: 7, hand: 'right', finger: 'middle' },
  '.': { row: 3, col: 8, hand: 'right', finger: 'ring' },
  '/': { row: 3, col: 9, hand: 'right', finger: 'pinky' },
};

export type LayoutName = 'qwerty' | 'azerty' | 'qwertz' | 'dvorak' | 'colemak';

export const layouts: Record<LayoutName, KeyboardLayout> = {
  qwerty,
  azerty,
  qwertz,
  dvorak,
  colemak,
};

export function getLayout(name: LayoutName): KeyboardLayout {
  return layouts[name];
}

// Home row keys for QWERTY (most commonly used for keysmash detection)
export const QWERTY_HOME_ROW = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';']);
export const QWERTY_LEFT_HAND = new Set(['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b', '1', '2', '3', '4', '5']);
export const QWERTY_RIGHT_HAND = new Set(['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', ';', 'n', 'm', ',', '.', '/', '6', '7', '8', '9', '0']);

