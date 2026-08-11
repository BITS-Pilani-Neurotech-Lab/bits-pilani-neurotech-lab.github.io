---
title: Neurotech Task 2
author: darshil
date: 2024-09-11 12:00:00 +0530
categories: [Recruitments]
tags: [technical, eeg, recruitments]
math: true
---

_X_ is your wingie. He has never touched grass in his life and is intimidated by physical activities. He is also regarded as the 'Ghot' of your wing because he attends all classes. He has a keen interest in Biology, but being a BITSian, he has a high tendency to fall asleep in boring classes as he's up late at night because he has no life.

You recently told him about the awesome Neurotech workshop that he missed. But, he's in denial that you cannot possibly figure out what a person is doing just based on their EEG data. To prove him wrong, you challenge him as follows.

## The Challenge
_X_ has 5 classes on Monday, with timetable attached below. You give him a pair of headphones, which is a wireless EEG headset in disguise. In every class, he will record his brain data for a short time. So you will have 5 different recordings. Your task is to identify, which file corresponds to which class.

### The Timetable
1. 8am - 9am : Mathematics 1 Tutorial
2. 9am - 10am : General Biology Lecture 
3. 10am - 12pm : Chemistry Laboratory
4. 2pm - 3pm : Technical Report Writing
5. 3pm - 6pm : Workshop Practice Smithy

## Data
There are 5 files corresponding to each class/lab. Each file has voltage recordings in microvolts ($\mu V$), which is the recorded data. The data was recorded for $45s$ in every class/lab, with a sampling frequency of $200Hz$ from a single channel. 
- [File 1](/assets/data/eeg-task-file1.txt)
- [File 2](/assets/data/eeg-task-file2.txt)
- [File 3](/assets/data/eeg-task-file3.txt)
- [File 4](/assets/data/eeg-task-file4.txt)
- [File 5](/assets/data/eeg-task-file5.txt)

> Note: Each item is a `.txt` file with $9000$ entries

## Submission
You have to perform signal processing to solve this challenge. Give necessary justification of your answer by presenting the results of your analysis, and submit your work as a Python file or a Jupyter Notebook.

Submit your responses [here](https://forms.gle/nn3A6D1wX4JBhtRo7): (<https://forms.gle/nn3A6D1wX4JBhtRo7>) <br>
Task submission deadline: 2024-09-24 23:59 (Tuesday)

## Hints and advice 
If you attended the workshop, recall what you learned. Also, pay close attention to the description of _X_.

Whenever you encounter a tricky problem, try breaking it into several smaller, simpler problems. Approach this task with patience. It may look intimidating, but we can assure you that you have all the required knowledge to solve this problem. 

## Resources
- <https://bookdown.org/vshahrez/lecture-notes/fourier-transforms.html>
- <https://www.geeksforgeeks.org/power-spectral-density/>
- <https://raphaelvallat.com/bandpower.html>
- <https://www.osti.gov/servlets/purl/5688766>
- <https://towardsdatascience.com/fourier-transform-the-practical-python-implementation-acdd32f1b96a>
