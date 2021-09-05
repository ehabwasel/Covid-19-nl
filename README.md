### Covid 19 App using https://api.covid19api.com/country/nl Api 
### Please find live link on https://covid-19-netherlands-hyf.netlify.app/
#### display numbers of Recovery and confirmed casess using react hooks and react routs 

<img width="1099" alt="Screen Shot 2021-09-05 at 10 46 48 PM" src="https://user-images.githubusercontent.com/72751605/132141090-e893ec6e-6e65-4ee6-8503-29d711513cb2.png">


## 2 number of Recoverd casess 

<img width="1143" alt="Screen Shot 2021-09-05 at 10 47 03 PM" src="https://user-images.githubusercontent.com/72751605/132141078-6e2f6092-1eb8-4f8c-84c8-1d4cbacaab77.png">



# number of confirmed  casess

<img width="1046" alt="Screen Shot 2021-09-05 at 10 47 13 PM" src="https://user-images.githubusercontent.com/72751605/132141082-370ac10c-8dfd-4ffc-aed7-1e1dc6854d2c.png">



# Introduction
For the test we're going to ask you to implement a little react app that will use an online API for Covid data to allow the user to look at how bad the situation is.

We are going to use an open API to get data (https://covid19api.com/) for the Netherlands. The data is divided into confirmed cases and recovered cases per day. In our app we can choose a period and status (confirmed or recovered) and it will show us the number.

# Goal / Requirements
Read the instructions carefully and tackle them one by one, in the end you should have a project that works as follows: https://robvk.github.io/react-test-covid/. Have a look at the grading section to see what features there are and give you points :). 

After finishing the project, fill in the ANSWERME.md file to answer some questions about the code you just wrote in the project.

You can adjust the project files to your wishes. You should not add any other libraries though!

# Step by step help
What to do:
1. Thoroughly read through this README and the `ANSWERME.md` file to get a feel of what needs to happen. Take a good look at the Grading section so you know what to focus your time on!
2. Think of your solution, what is your approach going to be. What components will there be?
3. Start programming (the fun part!)
4. Check the functionality list in the Grading section to ensure that you have built everything that is expected
5. Go over your code and ensure that it is clean (code clarity / modularisation). That means:
  - No more `console.log` test lines
  - No commented out code
  - Comments for functions/lines of code that can be unclear for other programmers or yourself in 5 months
  - Are the variables/functions named nicely
  - Check that the code is split logically (no repeated code in multiple functions, functions that are used for the same step close together in a file or in a separate file)
6. Answer the questions in the `ANSWERME.md` file
7. Create a `zip` file from your solution
8. Send the `zip` file to @Rob van Kruijsdijk on slack

# Grading
What you will be graded on:
- That the end project works as expected (similar to the example project) [up to 16 points]. Below is the feature list, each provides at least 1 point
  - There are 2 date inputs
  - The inputs are stateful
  - The initial dates are set as expected
  - There is a loading state while waiting for a response from the api
  - There is an error state if the API gives an error
  - The number updates when a date changes
  - The number updates when changing status (confirmed or recovered)
  - The number has the correct colour based on the status
  - The status buttons changes the URL
  - State is managed in 1 place
- That the code is nicely organised and clean (step 5) [up to 4 points]
- The answers to the questions [up to 10 points]
  - question 1 - 3 points
  - question 2 - 3 points
  - question 3 - 4 points

The final grade will then be those points divided by 3 (to get a number between 1 and 10).

# Rules during the exam
1. You are allowed to use Google
2. In case you copy (a line of) code from somewhere else, you must place a reference. Otherwise it is seen as plagiarism. 
3. No contact with others during the test. 
4. Do not share your test with anybody
5. 
6. Hand in your work on time. You have 4 hours in total.
