# Modeling a Spiking Neuron: Parameter Tuning via Numerical Optimization

Real neurons fire in bursts of electrical activity described as a sharp jump in membrane voltage followed by a reset. A single neuron's spiking behavior (how fast it fires, how it recovers between spikes, how it responds to input current) can be captured surprisingly well by a small system of differential equations. For this task we're working with a compact spiking neuron model that uses three differential equations.

## The model

```
dv/dt = 0.04v² + 5v + 140 - u - w + I(t)
du/dt = a(bv - u)
dw/dt = -kw

if v >= 30 mV:
    v  <- c
    u  <- u + d
    w  <- w + e
```

`v` is the membrane voltage, `u` is a fast recovery variable, and `w` is a second, slower recovery variable. `a, b, c, d, e, k` are the six parameters in the model.

---

## Input current `I(t)`

The neuron receives a known, fixed step-current pulse — you don't need to infer this from the data. It's already built into the starter code as a 1D array `I_arr` with one entry per time step `dt`:

| Time range | Current |
|---|---|
| `t < 10 ms` | `I = 0` |
| `10 ms ≤ t ≤ 100 ms` | `I = 10` |
| `t > 100 ms` | `I = 0` |

---

## Your objective

You'll be given a target voltage trace from a neuron whose five parameters (`a, b, c, d, e`) are unknown to you. First you'll build intuition for what each parameter does by adjusting them by hand and watching how the simulated graph changes. Then you'll recover the parameters properly, using a loss function and a numerical optimizer. Finally, you'll compare what your intuition got right against what the optimizer actually found.
- [spike_data.csv](https://docs.google.com/spreadsheets/d/1TpCXlW38YJZdZ0F4rtcl0QVbJ4QAXVq9GrymxjqUOeU/edit?usp=sharing)
---


## Core Tasks

### Part 1
You'll be given working source code that numerically integrates the system above using the Euler method and plots the resulting voltage-time graph alongside the target. The input current is provided as a time-series array `I_arr`. You don't have to implement any code in this part. This's only to help you visualise how we can approximate a voltage-time graph from the differential equations and how changing parameters affects it. However, you are expected to understand what the code is doing and how Euler's method works.

### Part 2A
Now you get a target graph (`spike_data.csv`) from a neuron with unknown `a, b, c, d, e`. Using the same simulation code, adjust the five parameters by hand and try to match the target graph through trial and error. You'll be asked to explain your reasoning: what changed when you moved each parameter, and if you followed some structure in adjusting parameters. 

### Part 2B
Here you fit the model properly. Before any optimization can happen, you have to figure out what you actually want to optimize. This target
is essentially what a loss function is. **The design of the loss function is entirely yours**. There 
are many reasonable approaches, and your reasoning for/understanding of the one you pick is arguably more important than 
how accurate your final graph is. Check the resources below for a starting point, then you can also explore beyond them.

Important Note: Please do not adjust your initial guesses in Part 2A to resemble parameter values obtained after using an
optimization algorithm. Parameter accuracy in Part 2A is pretty irrelevant.

### Part 3
You have to compare the parameters you landed on by hand in Part 2A against the ones the optimizer found in Part 2B.

---

## What you'll be given

- `spike_data.csv` — target voltage graph (time in ms, voltage in mV)
- `neuron_parameter_recovery.ipynb` — notebook with Part 1 implemented, Parts 2A/2B/3 scaffolded
- The resources listed below

---

## AI Policy
We have no issues with the use of AI/LLMs for the completion of this task. A couple of things to keep in mind, however:
- Any code written by AI must be something you understand the working of and can explain if needed
- The answers to the questions **must be written yourself.** You can use AI to understand the questions and gather information but cannot use it to generate the final answers.
- Stick to one new chat for all your prompts regarding this task. **A deliverable we expect you to submit is your LLM chat history.**

---

## Submission Guidelines

Submit your work as a single executable Jupyter or Colab notebook (`.ipynb`).

- **Code & execution:** all simulation, plotting, and optimization steps should run top-to-bottom without errors
- **Explanations:** answer each question in the markdown cell provided. Keep it clear enough that you could explain it to someone unfamiliar with the topic
- **AI chat history:** submit the full chat history of a dedicated chat used for this task. Don't mix it with unrelated conversations and don't use a different chat for prompts related to this task
- **Access:** share a public Colab link (Viewer or Commenter) or attach the `.ipynb` directly

---

## Resources

### Neuron modelling & differential equations
- [Euler method — Wikipedia](https://en.wikipedia.org/wiki/Euler_method)
- [Khan Academy — Differential equations from scratch](https://www.khanacademy.org/math/differential-equations)

### Loss functions
These are a few preliminary resources you can use to get an idea of what optimization or loss functions even mean. You can choose to implement a loss function mentioned here or if you think you might have a better idea in mind you can do that as well. Feel free to explore.

- [Loss functions — Wikipedia overview](https://en.wikipedia.org/wiki/Loss_function)
- [scikit-learn — regression metrics (MSE, MAE, etc.)](https://scikit-learn.org/stable/modules/model_evaluation.html#regression-metrics)
- [A visual introduction to loss functions — Towards Data Science](https://towardsdatascience.com/common-loss-functions-in-machine-learning-46af0ffc4d23)
- [Mean absolute vs mean squared error — when does the choice matter?](https://medium.com/human-in-a-machine-world/mae-and-rmse-which-metric-is-better-e60ac3bde13d)
- [Spike train metrics — an overview of distance measures for neural data](https://neuralensemble.org/docs/elephant/reference/kernels.html)

### Optimization algorithms
- [3Blue1Brown — Gradient descent](https://www.3blue1brown.com/lessons/gradient-descent)
- [SciPy — scipy.optimize documentation](https://docs.scipy.org/doc/scipy/reference/optimize.html)

### Python / plotting
- [Matplotlib — pyplot tutorial](https://matplotlib.org/stable/tutorials/pyplot.html)
- [NumPy — quickstart](https://numpy.org/doc/stable/user/quickstart.html)
- [pandas — 10 minutes to pandas](https://pandas.pydata.org/docs/user_guide/10min.html)
