# Expo Image 404 Error Handling Bug

This repository demonstrates a bug in Expo's `Image` component related to handling 404 errors from remote image URLs. The `Image` component sometimes crashes or displays nothing when encountering a 404, making it difficult to debug and handle gracefully.

The `bug.js` file shows the problematic behavior.  The `bugSolution.js` file demonstrates a more robust solution using an error boundary component and custom error handling.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go.
4. Observe the blank space where the image should be displayed (due to the 404).

## Solution

The proposed solution uses an error boundary component and custom error handling to catch and gracefully handle the 404 error.  This allows for better UX and improved debugging capabilities. See `bugSolution.js` for the implementation details.