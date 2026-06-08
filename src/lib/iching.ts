import { getHexagramByBinary, type Hexagram } from "../data/hexagrams";

/**
 * I Ching pure logic - no state, no React dependencies
 * Works with coin tosses and hexagram calculations
 */

export type CoinValue = 2 | 3; // 2 = tails (broken), 3 = heads (solid)
export type LineValue = 6 | 7 | 8 | 9;
export type LineBinary = 0 | 1;

/**
 * Calculate a line value (6-9) from 3 coin tosses
 * - 6+6+6=18 → yin changing (6)
 * - 6+6+7=19 → yang (9)
 * - 6+7+7=20 → yin (8)
 * - 7+7+7=21 → yang changing (9)
 *
 * In modern coin toss:
 * - Tails (2) represents broken line (yin, value 0)
 * - Heads (3) represents solid line (yang, value 1)
 *
 * Sum of 3 coins:
 * - 6 (2+2+2) = broken yin → 8
 * - 7 (2+2+3 or 2+3+2 or 3+2+2) = yang → 9
 * - 8 (2+3+3 or 3+2+3 or 3+3+2) = broken yin → 8
 * - 9 (3+3+3) = solid yang → 9
 * - 6 (all tails, rare) = changing yin → 6
 * - 9 (all heads, rare) = changing yang → 9
 *
 * Standard mapping:
 * - Sum 6: changing yin (6)
 * - Sum 7: yang (9)
 * - Sum 8: yin (8)
 * - Sum 9: changing yang (9)
 */
export function calculateLine(coins: [CoinValue, CoinValue, CoinValue]): LineValue {
  const sum = coins[0] + coins[1] + coins[2];

  switch (sum) {
    case 6:
      return 6; // changing yin
    case 7:
      return 9; // yang
    case 8:
      return 8; // yin
    case 9:
      return 9; // changing yang
    default:
      throw new Error(`Invalid coin sum: ${sum}`);
  }
}

/**
 * Determine if a line value represents a changing line
 */
export function isChanging(lineValue: LineValue): boolean {
  return lineValue === 6 || lineValue === 9;
}

/**
 * Get the static line value (after transformation)
 * - 6 (changing yin) → 8 (static yin)
 * - 7 → 7 (already static yang)
 * - 8 → 8 (already static yin)
 * - 9 (changing yang) → 7 (static yang)
 */
export function getStaticLine(lineValue: LineValue): 7 | 8 {
  if (lineValue === 6) return 8;
  if (lineValue === 9) return 7;
  return lineValue as 7 | 8;
}

/**
 * Convert line value to binary (for hexagram lookup)
 * - 6, 8 (yin) → 0
 * - 7, 9 (yang) → 1
 */
export function lineToBinary(lineValue: LineValue): LineBinary {
  return lineValue === 7 || lineValue === 9 ? 1 : 0;
}

/**
 * Get hexagram from array of 6 line values
 * Lines array: [bottom (1), 2, 3, 4, 5, top (6)]
 * Returns hexagram number 1-64
 */
export function getHexagramFromLines(
  lines: [LineValue, LineValue, LineValue, LineValue, LineValue, LineValue]
): Hexagram | null {
  const binary: [0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1] = [
    lineToBinary(lines[5]), // top (6th) → position 0 in binary array
    lineToBinary(lines[4]), // 5th → position 1
    lineToBinary(lines[3]), // 4th → position 2
    lineToBinary(lines[2]), // 3rd → position 3
    lineToBinary(lines[1]), // 2nd → position 4
    lineToBinary(lines[0]), // bottom (1st) → position 5
  ];

  return getHexagramByBinary(binary);
}

/**
 * Get the changing hexagram (if there are changing lines)
 * Converts all changing lines to their static counterparts
 */
export function getChangingHexagram(
  lines: [LineValue, LineValue, LineValue, LineValue, LineValue, LineValue]
): Hexagram | null {
  const staticLines: [LineValue, LineValue, LineValue, LineValue, LineValue, LineValue] = [
    getStaticLine(lines[0]) as LineValue,
    getStaticLine(lines[1]) as LineValue,
    getStaticLine(lines[2]) as LineValue,
    getStaticLine(lines[3]) as LineValue,
    getStaticLine(lines[4]) as LineValue,
    getStaticLine(lines[5]) as LineValue,
  ];

  return getHexagramFromLines(staticLines);
}

/**
 * Get all changing line positions
 */
export function getChangingLinePositions(
  lines: [LineValue, LineValue, LineValue, LineValue, LineValue, LineValue]
): number[] {
  return lines
    .map((line, index) => (isChanging(line) ? index + 1 : null))
    .filter((pos): pos is number => pos !== null);
}

/**
 * Format hexagram for display
 */
export function formatHexagramBinary(binary: [0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1, 0 | 1]): string {
  return binary.map((bit) => (bit === 1 ? "━" : "- -")).reverse().join("\n");
}
