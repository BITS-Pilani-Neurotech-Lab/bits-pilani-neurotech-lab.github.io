---
title: Neurotech Recruitments 25-26 Tech Track Task-1
author: pratul
date: 2025-09-07 12:00:00 +0530
categories: [Neurotech]
tags: [neurotech, task, tech]
math: true
---

<center> <h1>  Your last two braincells </h1></center>

An important part of computational neuroscience is learning how to simulate neurons which is called neuron modelling. There are several neuron models that have already been developed in the last few decades. In this task, you will be focusing on the Izhikevich Neuron Model (or the IZH Model for short) and use it to simulate two neurons that are connected to each other.

## Part A: Making a single neuron

The IZH Model is described by 

$$\acute{v} = 0.04v^{2} + 5v + 140 -u+I$$

$$\acute{u}=a(bv-u)$$

if $v\ge 30 mV$ then:
1. $v \gets c$
2. $u \gets u+d$

These are ordinary differential equations (ODEs) that are often simulated with the [Euler method](https://tutorial.math.lamar.edu/classes/de/eulersmethod.aspx)


Here the variables are:
- $u(t) \to$ A recovery variable
- $v(t) \to$ Membrane potential (measured in mV)

Both of these are reset once $v$ exceeds 30mV. This represents a neuron spike and reset

Assume the following values for the constants:
1. $a = 0.02$ 
2. $b = 0.2$ 
3. $c = -65mV$ 
4. $d = 2$ 

$I(t)$ is a current input that you have to read from the [CSV File](/assets/data/Iext.csv)
This includes 5,000,000 lines of input that you have to read at a time separation of 0.001 ms i.e. simulate the neuron for 5000 ms which is 5 seconds.

Output a graph showing $v(t)$ and $I(t)$ for these 5 seconds.

#### Brownie points:
1. Play around with constants a,b,c, and d and observe how they affect neuron spiking.
2. Can you figure out what these constants represent?


## Part B: Modelling the Synapse

Now that you have a neuron, how do you connect two neurons? You simulate the synapse - the connection between two neurons. Let these neurons be $j$ and $i$ with $j$ being the first neuron and $i$ being the second.

Neuron $j$ receives input current from the CSV like in the previous part and feeds some current into the neuron $i$. 

This current is given by another pair of differential equations:

$$\dot{r}_j(t) = \left( \frac{1}{\tau_r} - \frac{1}{\tau_d} \right) \frac{(1 -r_j(t))}{1 + e^{-V_j(t) + V_0}} - \frac{1}{\tau_d} r_j(t)$$

$$ I_{i} = W \cdot r_{j} \cdot \left( v_{j} - V_{\text{syn}} \right)$$

**Note:** This differential is always active irrespectve of whether $j$ spiked recently or not. Additionally, this current cannot be negative.

Again, take the following values for the constants:
1. $\tau_{r} = 0.5ms$
2. $\tau_{d} = 8ms$
3. $V_{0} = -20mV$
4. $V_{syn} = 20mV$
5. $ W = 1$
 
Output the graph of $I_{j}$, $v_{j}$, $I_{i}$ and $v_{i}$ for the same 5 seconds

#### Brownie points:
1. Can you figure out what the quantity r represents?
2. How would changing the weight W affect the spiking of i?

## Submission:
Present your code, analysis and graphs in a [Google Colab file](https://colab.research.google.com/)

**Deadline: 11th September EOD**
