# The EMG Chrome Dino Project

In this project we used a Surface EMG Sensor (sEMG) to process electrical signals from arm muscles to get a input when the user flexes their arm to make the Chrome Dino game character jump.

## Hardware Used

We used off the shelf components for taking the measurements of EMG data. The following components were used for the project which were included in a NeuroScience Kit

- Arduino Uno R3
- EXG Pill module
- sEMG sensors with conducting pads
- Jumper Wires
- Electrode gel and skin preparation gel
- Muscle Bioamp band

Some other items were also included in the kit which were not utilised for the project like the Heart band and the Brain band.
[This is the Neuroscience kit we used.](https://store.upsidedownlabs.tech/product/diy-neuroscience-kit-basic/)
We also had other Arduino compatible accesories to record EMG signals which could be connected in a similar way to the EXG pill to achieve similar results. They are listed below

- [Muscle Bioamp Shield](https://store.upsidedownlabs.tech/product/muscle-bioamp-shield-v0-3/)
- [Muscle Bioamp Candy](https://store.upsidedownlabs.tech/product/muscle-bioamp-candy/)

Apart from all this, we ordered some extra electrodes, wires and preparation gel.

### Hardware Connections

The Arduino Board was powered using the USB cable from the laptop itself without any external source. For the connections, **three electrodes were connected to the EXG Pill** as specified on it while the **5V pin fron the Arduino was connected to  VCC pin, ground pin to ground pin, and the output from the EXG pill to one of the Analog Pins of the Arduino.**

## Software

For the software, we used Arduino IDE's Serial Plotter and Serial Monitor to plot the voltages. Then we used python to stimulate the spacebar press to make the dino jump. The logic behind the jump is that whenever the value of the signal is higher than some threshold value for longer than some threshold interval, key press is stimulated. We tried some other logics, but this one seemed to work best with minimal latency. The threshold values were chosen arbitrarily but were optimised to some extent by observing the Serial Monitor values. Also, whenever the voltage is above the threshold, the onboard LED of the Arduino lights up which made it easier to debug the code and check the latency.

[Here is the link to all the code](https://github.com/BITS-Pilani-Neurotech-Lab/bits-pilani-neurotech-lab.github.io)

## Physical Connections and Skin Preperation

Skin without hair growth is ideal, but we chose an area with minimal hair growth for our tests.

1. Wash the target muscle area with soap and water to clean off the dust and skin oils.
2. Use wet wipes to clean the area (You can skip this step if you did the 1st and viceversa).
3. Apply electrode gel on all three Electrodes.
4. Put the Active electrode and the Ground Electrode on the relevant muscle.
5. Put the Reference Electrode on a completely disconnected muscle which will not show activity during the action.
6. If you are using the Band, mind the exact orientation as the reference electrode may also detect activity.

The electrode pads are reusable for a couple of times, with appropriate application of gel. The position of the attached electrodes was very important in jump detection. Also, closing your fist and restricting finger movement gave better results.
