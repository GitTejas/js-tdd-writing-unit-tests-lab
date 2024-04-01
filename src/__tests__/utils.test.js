import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for known palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("mom")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("car")).toBe(false);
    expect(isPalindrome("hello")).toBe(false);
  });

  it("handles uppercase and lowercase letters", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("Rotator")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error for input with non-alphabetic characters", () => {
    expect(() => isPalindrome("12321")).toThrow();
    expect(() => isPalindrome("racecar!")).toThrow();
  });

  it("throws an error for non-string input", () => {
    expect(() => isPalindrome(12321)).toThrow();
    expect(() => isPalindrome(null)).toThrow();
    expect(() => isPalindrome(undefined)).toThrow();
  });
});