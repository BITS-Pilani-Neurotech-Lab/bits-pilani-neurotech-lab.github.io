# Huntington's Disease: CAG Repeats & the Age-of-Onset Problem


By Chinmayee Giridhar • Aug 26, 2026


Huntington's disease (HD) is a serious inherited neurodegenerative disorder caused by mutation in the *HTT* gene, which causes severe problems in one's movement, physical skills, and emotional health. Within *HTT*, a short DNA sequence "CAG" is repeated multiple times. While every individual carries this repeat, people carrying less than \~36 repeats tend to be unaffected, and those who carry more than 40 CAG repeats almost definitely end up suffering from Huntington's at some point in their life. The age at which they begin showing symptoms of the disease is called the Age of Onset.

CAG repeat count in the *HTT* gene is the primary predictor of when Huntington's disease symptoms begin, but it doesn't tell the whole story — people with identical repeat counts can develop the disease decades apart.

## Your Objective

Analyze the provided clinical and genetic data to determine how accurately CAG repeat count predicts the age of symptom onset, and identify if inheriting the disease from the mother or father accounts for this difference in the Age of Onset.

You are provided with two CSV files. All files share a common primary key (`#ID`) for cross-table joins:

- [metadata.csv](https://docs.google.com/spreadsheets/d/1s6-ryuYbaNDDF3u4M-_hGccRHp9p8py4x60k5RODZus/edit?gid=397963166#gid=397963166)  
- [patients.csv](https://docs.google.com/spreadsheets/d/1yBxtlQVR7Iew1hZ6UuB56OyrhtPUk1KC0SpgqqD2XV8/edit?gid=962060749#gid=962060749)

## Core Tasks

### Part 1: Correlation

Plot CAG repeat count against Age of Onset. Quantify the strength of the linear relationship using an appropriate correlation metric. Fit a basic simple linear regression model to the data. Interpret the slope coefficient in plain terms.

### Part 2: Parent-of-Origin Effects

Split the dataset into two groups based on whether the disease was inherited from the mother or the father. Compare the mean Age of Onset and overall distribution between the two cohorts. Run a suitable test to evaluate if the observed difference is statistically significant or merely due to random chance, and briefly explain why you selected that specific test instead of potential alternatives.

## Submission Guidelines

Submit your work as a single executable Jupyter or Google Colab notebook (`.ipynb`). No separate written report is required.

- **Code & Execution:** Include all data processing, visualization, and statistical modeling steps.  
- **Explanations:** Use text cells after each major code block to provide interpretations of your findings. Frame them to be simple enough to explain to your drunk roommate at 3 am.  
- **Access:** Share a public Google Colab link (Viewer or Commenter permissions) or attach the `.ipynb` file directly.  
- Make sure to flag anything interesting you find\!


## AI Policy

We have no issues with the use of AI/LLMs for the completion of this task. A couple of things to keep in mind, however:
- Any code written by AI must be something you understand the working of and can explain if needed
- The answers to the questions **must be written yourself.** You can use AI to understand the questions and gather information but cannot use it to generate the final answers.
- Stick to one new chat for all your prompts regarding this task. **A deliverable we expect you to submit is your LLM chat history.**

## Resources

No prior background in genetics or statistics is assumed. These should be enough to get started from zero.

### Biology

- [MedlinePlus — HTT gene, explained simply](https://medlineplus.gov/genetics/gene/htt)  
- [NINDS — Huntington's Disease: Hope Through Research (full plain-language guide)](https://www.ninds.nih.gov/publications/huntingtons-disease-hope-through-research)  
- [MedlinePlus — Huntington disease, clinical overview](https://medlineplus.gov/ency/article/000770.htm)

### Statistics

- [Khan Academy — Statistics & Probability (correlation, regression, hypothesis testing, all from scratch)](https://www.khanacademy.org/math/statistics-probability)

