---
title: "Comparing DeepSeek-R1 7B and 1.5B: Python Code Generation Performance and Efficiency"
date: 2025-02-04 00:00:00 +0530
categories: 
  - "artificial-intelligence"
tags: 
  - "ai-coding-assistants"
  - "ai-model-comparison"
  - "code-generation"
  - "deepseek-r1"
  - "developer-tools"
  - "machine-learning"
  - "python-programming"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails.png
---

In the world of AI-powered coding assistants, performance and efficiency are key factors that determine their practicality. This article explores the performance of [DeepSeek](https://www.deepseek.com/)\-R1 7B and 1.5B in generating a simple Python program to sum two numbers. We'll analyze the code quality, execution time, and efficiency of both models.

**Note:** These models were run on an Intel i3 7th Gen processor with 8GB RAM.

## Python Code Generation by DeepSeek-R1 7B

When prompted to generate a Python program for summing two numbers, DeepSeek-R1 7B produced the following:

```
# Get input from the user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Add the two numbers
sum_num = num1 + num2

# Print the result
print("The sum of", num1, "and", num2, "is", sum_num)
```

**Output:**

```
Enter first number: 5
Enter second number: 7
The sum of 5 and 7 is 12
```

This solution is straightforward but lacks error handling. Notably, it only supports integers, which could be a limitation in some use cases.

### Performance Metrics for DeepSeek-R1 7B:

- **Total Duration:** 2m14.69s

- **Load Duration:** 142.5ms

- **Prompt Eval Rate:** 4.15 tokens/s

- **Eval Rate:** 2.51 tokens/s

- **Eval Duration:** 2m10.92s

## Python Code Generation by DeepSeek-R1 1.5B

The same prompt was given to DeepSeek-R1 1.5B, which generated the following code:

```
# Get input from the user
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))

# Calculate their sum
sum_result = num1 + num2

# Print the result
print(f"The sum of {num1} and {num2} is {sum_result}.")
```

This version introduces key improvements:

- **Supports both integers and floating-point numbers.**

- **Uses f-strings for improved readability.**

### Performance Metrics for DeepSeek-R1 1.5B:

- **Total Duration:** 31.18s

- **Load Duration:** 37.4ms

- **Prompt Eval Rate:** 15.54 tokens/s

- **Eval Rate:** 9.65 tokens/s

- **Eval Duration:** 30.36s

## Performance Comparison

| Metric | DeepSeek-R1 7B | DeepSeek-R1 1.5B |
| --- | --- | --- |
| Total Duration | 2m14.69s | 31.18s |
| Load Duration | 142.5ms | 37.4ms |
| Prompt Eval Rate | 4.15 tokens/s | 15.54 tokens/s |
| Eval Rate | 2.51 tokens/s | 9.65 tokens/s |
| Eval Duration | 2m10.92s | 30.36s |

## Key Takeaways

- **Speed & Efficiency:** The 1.5B model is significantly faster, completing execution in ~31 seconds compared to the 7B model's ~2m14s.

- **Code Quality:** The 1.5B model produced slightly better code, handling floats and improving readability with f-strings.

- **Computation Cost:** The 7B model's higher processing time suggests diminishing returns in practical applications.

- **Decision Factor:** If you prioritize speed and efficiency, DeepSeek-R1 1.5B is the better choice. If you prefer a larger model with potentially deeper reasoning, the 7B model may be preferable.

## Conclusion

DeepSeek-R1 1.5B emerges as the more efficient model for coding tasks where speed and execution time matter. While the 7B model takes longer and does not necessarily produce better code, it could still be useful in more complex scenarios requiring deeper reasoning. For most practical applications, however, the 1.5B model is the clear winner.
