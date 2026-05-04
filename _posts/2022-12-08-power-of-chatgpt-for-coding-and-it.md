---
title: "Power of ChatGPT for Coding and IT?"
date: 2022-12-08 00:00:00 +0530
categories: 
  - "artificial-intelligence"
tags: 
  - "blockchain"
  - "chatgpt"
  - "coding"
  - "openai"
  - "programing"
  - "smartcontract"
  - "vmware"
image:
  path: /assets/img/posts/CorpIT-Article-Thumbnails-1.png
---

[ChatGPT](https://chat.openai.com/chat) is the new google. Lots of people are trying and flaunting the [ChatGPT](https://chat.openai.com/chat). So I thought. Let's use this tool and see if we can create something using that. I give it a shot and the result is super awesome. I know the tool is still in the early stage it will improve a lot. But this much intelligence is also super awesome.

So I started with a few programming questions. I want to go easy on him.

## ChatGPT for programming

- Write a [Go program](https://go.dev/) to print whether a number is even or odd, and also take input from the user.  
    It gave me the solution as well. It explains to me what things are happening. That is super awesome for me.

<figure>

![](/assets/img/posts/screely-1670194144288.png)

<figcaption>

Odd Even Program in Go

</figcaption>

</figure>

- Take 2 numbers as input and print the largest number.

<figure>

![](/assets/img/posts/screely-1670194198295.png)

<figcaption>

Largest Number in Go

</figcaption>

</figure>

- To find Armstrong's Number between two given numbers.

```
package main

import (
	"fmt"
	"math"
)

// Returns true if the given number is an Armstrong number,
// otherwise returns false
func isArmstrong(num int) bool {
	// Calculate the number of digits in the number
	numDigits := int(math.Log10(float64(num)) + 1)

	// Initialize the sum of the digits to 0
	sum := 0

	// Iterate over the digits of the number
	for n := num; n > 0; n /= 10 {
		// Extract the last digit of the number
		digit := n % 10

		// Add the digit to the sum, raised to the power of the number of digits
		sum += int(math.Pow(float64(digit), float64(numDigits)))
	}

	// Check if the sum of the digits is equal to the original number
	if sum == num {
		return true
	} else {
		return false
	}
}

func main() {
	var start, end int

	// Prompt the user for the start and end numbers
	fmt.Print("Enter the start number: ")
	fmt.Scan(&start)

	fmt.Print("Enter the end number: ")
	fmt.Scan(&end)

	// Iterate over the range of numbers
	for i := start; i <= end; i++ {
		// Check if the number is an Armstrong number
		if isArmstrong(i) {
			fmt.Println(i, "is an Armstrong number")
		}
	}
}
```

- Write a go program to print  
    1  
    11  
    111  
    1111  
    11111

This is the fun code

<figure>

![](/assets/img/posts/screely-1670194365135.png)

<figcaption>

Pattern Program v1

</figcaption>

</figure>

It creates a basic version of it but it creates an advanced version using the loop. It is super fun to see.

<figure>

![](/assets/img/posts/screely-1670194426734-825x1024.png)

<figcaption>

Pattern Program v2

</figcaption>

</figure>

## Smart contract using ChatGPT

After lots of coding questions, I thought let's see if he can help us in the [blockchain](https://www.investopedia.com/terms/b/blockchain.asp). So I ask a few questions regarding that

- Write a smart contract to mint nft

<figure>

![](/assets/img/posts/screely-1670194592045.png)

<figcaption>

Mint NFT

</figcaption>

</figure>

- Create a [decentralized token](https://www.coindesk.com/learn/what-are-defi-tokens/) name corpit

<figure>

![](/assets/img/posts/screely-1670194633610.png)

<figcaption>

Decentralized token using ChatGPT

</figcaption>

</figure>

## Some web development using openGPT

- code a website to calculate the largest number

```
<!DOCTYPE html>
<html>
<head>
  <title>Largest Number Calculator</title>
</head>
<body>
  <h1>Largest Number Calculator</h1>
  <p>Enter a list of numbers separated by commas:</p>
  <input id="numbers" type="text">
  <button onclick="calculate()">Calculate</button>
  <p>The largest number is: <span id="result"></span></p>
  <script>
    // Define a function that calculates the largest number
    function calculate() {
      // Get the list of numbers from the input field
      var numbersString = document.getElementById("numbers").value;

      // Split the string into an array of numbers
      var numbers = numbersString.split(",");

      // Convert the strings to numbers
      numbers = numbers.map(Number);

      // Sort the numbers in descending order
      numbers.sort(function(a, b) {
        return b - a;
      });

      // Get the largest number
      var largestNumber = numbers[0];

      // Display the largest number
      document.getElementById("result").innerHTML = largestNumber;
    }
  </script>
</body>
</html>
```

- code a website to calculate the largest number using [tailwind CSS](https://tailwindcss.com/)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Largest Number Calculator</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <div class="flex items-center justify-center h-screen">
        <div class="w-full max-w-xs">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="numbers">
                        Enter a list of numbers separated by commas:
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numbers" type="text" placeholder="e.g. 1, 2, 3, 4">
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Calculate
                    </button>
                </div>
            </form>
            <div class="text-center">
                <p class="text-gray-500 text-xs">
                    &copy;2022 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
```

I guess if we use this tool correctly then we can do lots of things using that. Here is one example.

## ChatGPT for VMware

After that, I thought let's ask some infra questions and that is awesome to see.

- Update ESXi Hosts via esxcli, I was shocked by the result.

<figure>

![](/assets/img/posts/screely-1670194833018.png)

<figcaption>

VMware Upgrade

</figcaption>

</figure>

Will try this tool extensively with my friends and will see what more we can do with that. Probably in some time will try ansible and [vagrant scripts](https://corpit.org/what-is-vagrant-and-how-we-use-it/) using that. Whether we can create those things using this or not.

## Power of ChatGPT for Coding and IT(Video)?

https://www.youtube.com/watch?v=vJJRo5OiRoQ

## Conclusion

Super awesome [AI tool](https://chat.openai.com/chat) you can take a look at and enjoy. You can see for yourself and try building tools using that. That will help a lot.
