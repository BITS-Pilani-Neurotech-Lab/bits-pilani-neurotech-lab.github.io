---
title: Neurotech in Action - A Dating App based on brain signals
author: praneet
date: 2025-09-04 12:00:00 +0530
categories: [Neurotech]
tags: [eeg, neurotech, lda]
math: true
---

Neurotech sounds like a complicated, abstract word. It's a *portmanteau*, a *mish-mash* of the terms “neuro”, meaning *relating to the brain*, and tech, which stands for technology. This may lead people to believe that its applications are likely all niche, complicated, or some combination of the two.

That isn't true, however, and neurotech can be *fun.*

To illustrate that, this article talks about one specific case of *fun neurotech*, an experiment devised by the youtube channel “The BCI Guys”: A device that connects dating apps directly to your brain, letting its reactions do the swiping for you. If you show a level of surprise or arousal, that is, *attraction* to a profile beyond a certain threshold, the interface “swipes right” on the “app”. If you do not, it swipes left. 

## How it worked

The experiment utilized an electro-encephalogram(EEG), a device that can be used to detect electrical signals from your brain through electrodes in a non-invasive and non-surgical manner, to collect the data of participants. EEG setups can be *dry*, that is, without gel, *wet*, that is, with gel, or *hybrid,* which is on the spectrum between the two. In this experiment, a *hybrid* EEG setup sent by g.tec was used by the participants. Then, the retrieved signals were processed, using a band-pass and notch filter, in order to remove unnecessary signal artefacts (also called *noise*) and focus on the signals relevant to the experiment.

The experiment made use of a spike produced in the *parietal lobe of the brain*, which is known to be very important to attention. This spike was called p300, because it was characterized by a *positive*(p) spike 300 milliseconds after the brain was exposed to the stimulus. It is indicative of *surprise* and *attention,* and known, in other contexts, to be produced when something *unexpected* is in the mixture of something expected, eliciting one's attention. Ideally, if the backgrounds of all profiles are of roughly similar character, and if all people shown are unknown to the participant in any capacity, then the p300 spike would serve as an indicator of one's attention, and consequently *attraction* to various profiles. 

In the video, two participants, one male(one of the hosts, Harrison) and one female(his friend, Zhen) compare their own swipes to their brain swipes, and the similarity between the two. Harrison's swipes matched 68%, and Zhen's 76%, showcasing that the set-up, while not perfect, was definitely working fairly well.

## Some Caveats 
In one of the trials of the experiment, the male participant put in a picture of his own amongst 25 pictures the female participant's brain was scanning. Unlike the others, his body had neon emphasis lines surrounding them, and was on a plain white background. This, according to the brain-tinder interface, was the photo the female participant found most attractive. 

That was not really the case.

P-300 detects *surprise* and *attention*, and a person would naturally be surprised and attentive at seeing a familiar face amongst people they don't expect to know. Additionally, the odd background of the male participant's picture also added to the distinctiveness of it. Therefore, this method isn't really useful to judge attraction amongst people you are already associated with in some manner: whether colleagues, classmates, carpoolers or something else.

This also meant that when the backgrounds were *varied* more (as is more representative of real life), the ones that your brain “swiped right on”, that is, the ones that produced a large p300 spike, included pictures with horses, literal red flags, paintings, and simply other completely unexpected, unconventional pictures rather than pictures that were of a normal format, irrespective of attractiveness. Again, this shows that p300 isn't quite the perfect measure of attractiveness that is suitable for such applications, and exposes the limitations of applying this method in real life, where dating profiles consist of multiple varied photos and prompts. 

## Conclusion

Clearly, neurotech *can* be fun. And if relatively simple experiments can be as *functioning* as this one, then it is likely that more complex models relying on more specific signals or combinations of them to detect a similar phenomenon could be far more precise. When it comes to the experiment itself, its primary logic is using surprise and attention as a proxy for attraction, relying on the assumption that all pictures exposed to are of a similar “type” (in terms of their backgrounds, the objects present in them other than the dating prospect, etc) and that they are all of prospects unfamiliar to the viewer. 

This is, as discussed, a flawed rationale, and not scalable to real life. Nonetheless, it is still *incredibly* interesting.

If you found this article just as fascinating as we did, check out the video [here](https://www.youtube.com/watch?v=pP7cASGL6bg), and don't forget to apply to Neurotech, a Postman vertical in BITS Pilani dedicated to neurotech experiments and studies like the one above, and join our WhatsApp group [here](https://chat.whatsapp.com/CoPVGdILaptF5eSsdMGMng?mode=ems_copy_t)\!

## Appendix: Processing p300 Spikes

**Note: This section contains some somewhat complicated math. Enter at your own peril.** 

Before a useful analysis of the p300 signal can be made, it, naturally, has to be processed to ensure that the information relevant to the experiment has been produced in a simple, easily usable manner. This appendix explores how that is done.

As noted earlier, P300-evoked potential is elicited as positive EEG peaks in reaction to infrequent or irregular appearance of stimuli. There are essentially two stages to process signals: (a)preprocessing, and (b)feature extraction,detection and classification of P300.

 Preprocessing is accomplished after data acquisition but before extracting any feature. Pre-processing reduces the undesired recorded signals by amplifying the signal-to-noise ratio, the *SNR*. This is done using a *band-pass filter* ranging between 0.1 and 30 Hz. A band-pass filter preserves signals of its frequency range while eliminating those above and beneath it (here, signals above 30Hz and below 0.1Hz). The initial EEG signal is *amplified* from its actual voltage of 100 microvolts by a factor of 5000-10000 times prior to this. The electrical transmission used to obtain the raw data itself utilizes an AC current of 50-60 Hz. This is removed through a *notch-filter*, which is the inverse of a band-pass filter, eliminating a specific range of frequencies and not affecting anything else.

Feature extraction in p300 can be done through numerous methods, one of which is Linear discriminant analysis (LDA). LDA, also known as *Fisher's linear discriminant*, can be explained as follows:

In essence, LDA is a classification technique used to separate two or more classes of data. It finds a line (or plane) that best separates the groups while keeping them as far apart as possible.

For example, imagine that a certain set of students studied two courses, say, A and B in the last semester. Some students likely passed both courses, some passed one and failed another, and some failed both. You use LDA when you want to “draw a line” that best splits the students who passed from the students who failed. The relevant *classes* of people here are, therefore, the (1) those who passed, and those who failed. The people who neither passed nor failed both subjects can be ignored, to be classified based on the final line that splits them.

To best “split” this data, we first represent it on a 2D graph, where one axis corresponds to students' score in Course A, and the other axis to their score in Course B. The entire dataset, then, becomes a cloud of points: some corresponding to students who passed, and others to those who failed.

The first mathematical step in LDA is to compute the *mean vector* of each class. This simply means finding the average scores in both courses for the pass group and the fail group. These mean vectors represent the “center” of each class in the 2D space.

Next, we need to understand how tightly or loosely the data points in each class are spread around their respective means. This is done by calculating the *within-class scatter matrix*, which is a measure of variance within each class. In other words, it tells us how scattered or compact the data points are within the pass group and within the fail group. The total within-class scatter is the sum of the scatter from both classes. 

The key idea in LDA is to find a direction, represented by a vector $\mathbf{w}$, onto which we can project all the student data in such a way that the pass and fail groups become most distinguishable in the one-dimensional space. This vector is calculated using the formula:

$$\mathbf{w} = S_{W}^{-1} (\boldsymbol{\mu}_1 - \boldsymbol{\mu}_2)$$

Here, $$\boldsymbol{\mu}_1$$ and $$\boldsymbol{\mu}_2$$ are the mean vectors of the two classes (pass and fail), and $$S_{W}^{-1}$$​ is the inverse of the within-class scatter matrix. The idea behind this formula is to find a balance: we want the projected means of the two classes to be as far apart as possible, while ensuring that the variance within each class, after projection, is minimized.

Once this direction $$\mathbf{w}$$ is identified, every data point $$\mathbf{x}$$ (representing a student) is projected onto this line by computing:

$$y = \mathbf{w}^{T} \mathbf{x}$$

The result $$y$$ is a single number. All students, originally represented in two dimensions, are now reduced to one dimension. On this new axis, students from the pass and fail groups should ideally form two separate clusters. By choosing an appropriate threshold between these clusters, we can classify any new student based on their projected value: if the value is above the threshold, they're predicted to have passed; if below, they're predicted to have failed. This can be used to decide which category the people who “neither passed nor failed” fit into more reasonably.

To summarize, LDA identifies the projection direction that best separates different categories in the data. In the context of our example, it finds the optimal “cut” that distinguishes students who passed from those who failed, based on their performances in two subjects. Over here, the cut was one-dimensional, because the data was two-dimensional. This is not necessarily the case, with the cut being along a *hyper-plane* of the data, i.e. with dimensions right beneath the number of dimensions of the data itself. 

LDA is used to detect P300 signals by dividing EEG data into two classes: the first, with data from around 300 ms, the expected spike region, and the second with data not from around the spike.

If the class expected to have P300 signals, the expected spike region, is above a certain threshold decided upon based on previously attained data, the P300 is deemed detected. Otherwise, it is deemed absent.

This is how the P300 is processed.

**Additional Resources:**  
[https://www.intechopen.com/chapters/55872](https://www.intechopen.com/chapters/55872)

[https://www.sciencedirect.com/topics/computer-science/linear-discriminant-analysis](https://www.sciencedirect.com/topics/computer-science/linear-discriminant-analysis)

[Linear Discriminant Analysis for Machine Learning \-](https://machinelearningmastery.com/linear-discriminant-analysis-for-machine-learning/?utm_source=chatgpt.com) [MachineLearningMastery.com](http://MachineLearningMastery.com)


