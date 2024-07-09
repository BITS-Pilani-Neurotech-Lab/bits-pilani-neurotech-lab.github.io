---
title: Pairwise sequence alignment
date: 2024-07-02 12:00:00 +0530
categories: [Bioinfomatics, Task]
tags: [bioinformatics, alignment, task]
---

## Understanding Basics

What is pairwise sequence alignment?
It is the comparison of two sequences (could be protein or DNA) to find out the similarity between them.

The global sequence alignment focuses on comparing the entire sequence, filling in gaps so that the length of the sequences are equal. The Needleman Wunsch algorithm  (named after Samuel B. Needleman and Christian D. Wunsch)is a popular method to do the same.

## A Short Note

Distance in biology has always been defined as 'how different from same?'. Even in computer science, take the example of hamming distance. Look up Levenshtein distance for further understanding. Similarly in the Needleman Wunsch algorithm, the main attempt is to find the minimum number of alterations that can be made to the primary sequence (by adding gaps), so as to obtain a sequence most similar to the secondary one. In nature, you can think of it as the minimum number of mutations that must've occured to the first sequence in order for the second sequence to be formed. 

## Understanding The Algorithm

### THE SCORING SCHEME:

The scoring scheme used is as follows:
1. MATCH - this is the value assigned when two characters that are being compared are similar
2. MISMATCH - when two characters are different
3. GAP PENALTY - value given when there is a gap

Since a penalty is being awarded for every gap (ie. every mutation), our objective is to find the alignment with the maximum score. The score values can be obtained from EDNAFULL Matrix.

### THE SCORING MATRIX:

We represent these two sequences in a 2D matrix with the dimensions of the matrix being (length of first sequence + 1) * (length of second sequence + 1) and initiate the matrix with the values of the rows as gap penalties times the row number and values of the columns as gap penalty times the column number.

![scoring-matrix-initialization](/assets/img/post_img/image-1.jpg)

To fill the matrix, start from the top left corner, and keep filling row-wise till you reach the bottom right corner. To find the value for the position (i,j) of the matrix:

	$matrix(i,j) = max( matrix(i-1,j) + gap_penalty, matrix(i,j+1) + gap_penalty, matrix(i-1,j-1) + match_mismatch_score)$

![filling-scoring-matrix](/assets/img/post_img/image-2.jpg)

### FINDING THE BEST ALIGNMENT:

Once the matrix is filled, start from the bottom right corner and work back the arrows till you reach the top left corner. At each place, you can move either top, left or diagonally top-left. Choose the maximum value available of the three. NOTE: There might be more than one best alignment of the two sequences.

![best-alignment](/assets/img/post_img/image-3.png)

### RECONSTRUCTING THE OBTAINED PATH:

There is a particular way of writing down these. If we walk back an in the diagonal, then we write down the corresponding characters. If we walk back an arrow to the left, we write the character of the sequence that is written in the horizontal firection, and write a gap '-' for he sequence written in the vertical direction, and vice cersa if we walk back an arrow in the vertical direction.

![finding-best-alignment](/assets/img/post_img/image-4.jpg)

### REFERENCE CODE:

Here is the complete [code](https://github.com/simply-sankalp/needleman-wunsch-algorithm) in C

