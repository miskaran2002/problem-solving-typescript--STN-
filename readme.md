# Problem Solving: Assignment 04 (Part 2)

All 20 assigned problems are solved in a single TypeScript file: [`solution.ts`](./solution.ts).
Each problem is separated by a comment block containing its number and title, followed by the
solution and a few test calls that print their output to the console.

## Repository Structure

```
problem-solving/
├── solution.ts   # all 20 solutions, one section per problem
└── README.md     # problem list, approach notes, how to run
```

## How to Run

Requirements: Node.js 18 or newer.

```bash
# option 1: tsx (no setup needed)
npx tsx solution.ts

# option 2: ts-node
npx ts-node solution.ts
```

Each problem prints its own `example N Output` lines, so the results can be compared with the
examples in the problem statement.

## Problems, Approach and Complexity

| # | Problem | Approach | Time | Space |
|---|---------|----------|------|-------|
| 1 | Staircase | For each row `i`, build `n - i` spaces followed by `i` hashes | O(n²) | O(n²) |
| 2 | Grading Students | Skip grades below 38. Round up to the next multiple of 5 only if the gap is less than 3 | O(n) | O(n) |
| 3 | Time Conversion | Split the string into time and AM/PM. `12AM` becomes `00`; PM hours other than 12 get `+12` | O(1) | O(1) |
| 4 | String Repeat | Guard invalid input, then use `String.prototype.repeat` | O(n·len) | O(n·len) |
| 5 | Reversed Strings | `split` → `reverse` → `join` | O(n) | O(n) |
| 6 | Sum of Positive | `reduce`, adding only numbers greater than 0 | O(n) | O(1) |
| 7 | Grasshopper: Summation | Closed formula `n(n+1)/2` instead of a loop | O(1) | O(1) |
| 8 | Convert a Boolean to a String | `String(b)` | O(1) | O(1) |
| 9 | Fizz Buzz | Check divisibility by 15 (both) first, then 3, then 5 | O(n) | O(n) |
| 10 | Running Sum of 1D Array | Keep one running total while mapping | O(n) | O(n) |
| 11 | Richest Customer Wealth | Sum each customer's accounts and track the maximum | O(m·n) | O(1) |
| 12 | Remove Duplicates from Sorted Array | Two pointers: write each new value at index `k` | O(n) | O(1) |
| 13 | Contains Duplicate | Compare the size of a `Set` with the array length | O(n) | O(n) |
| 14 | Move Zeroes | Move non-zero values forward, then fill the rest with zeros (in place) | O(n) | O(1) |
| 15 | Merge Sorted Array | Three pointers filling `nums1` from the back, so nothing is overwritten | O(m+n) | O(1) |
| 16 | 3Sum | Sort, fix one number, then use two pointers; skip duplicates on all three positions | O(n²) | O(1) extra |
| 17 | Plus One | Walk from the last digit; digits below 9 are incremented and returned, 9s become 0, and a leading 1 is added if every digit was 9 | O(n) | O(1) |
| 18 | Reverse String | Swap characters from both ends in place | O(n) | O(1) |
| 19 | Length of Last Word | `trim`, split on whitespace, take the length of the last word | O(n) | O(n) |
| 20 | Longest Common Prefix | Start with the first string as the prefix and shorten it until every string starts with it | O(S) | O(1) |

`S` in problem 20 is the total number of characters across all strings.

## Edge Cases Handled

- Invalid input types (non-number, non-string, non-array) return an empty or zero value instead of throwing.
- Empty arrays and empty strings (problems 5, 6, 10, 11, 12, 13, 19, 20).
- Boundary values: `12AM` / `12PM` (problem 3), a grade of exactly 38 (problem 2), an all-9 number such as `[9, 9, 9]` (problem 17), `m = 0` or `n = 0` (problem 15), and multiple spaces around words (problem 19).
- Duplicate triplets are skipped in problem 3Sum.
- Problems 12, 14, 15 and 18 modify the input array in place, as their statements require.

## Notes

- Everything is in one file, as required by the assignment. TypeScript types are written on every function.
- The file contains `export {};` so that it is treated as a module and top-level names do not clash.