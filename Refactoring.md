# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1. Using candidate variable as different types is causing confusion. Instead of assigning event.partitionKey to candidate and passing it down the function i feel its better to handle it at the moment and return the function. Its will definetly help readers to better understand.
2. If event argument is undefined, then the current functionality goes through all the function to return. Instead should return at top itself. By doing this we can remove the else statement. The error handling should be done first instead of propagating it down the function body.
3. The current function is confusing with lot of if else conditions. To avoid this handling if partitionKey is defined or not at the top of function will reduce the confusion.
4. using let for candidate is causing lot of confusion. Making it constant and not using it for reassign makes code more readable.
5. The approach is to handling from top down where all returns should be handled top down. By this method we are able to reduce number of lines also avoid confusing 'candidate' pass over all the funciton.