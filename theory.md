Due to the time-varying nature of the vocal tract (VT) system during speech production, it is necessary to analyze the speech signal to extract the characteristics of the vocal tract system using segments of 10–30 ms. Important characteristics of the VT system can be seen clearly from the spectrum of the signal. Such an analysis of speech signal over short segments is referred to as short-time spectrum analysis. The spectrum of a segment of speech is obtained by computing the square of the magnitude of the Discrete Fourier Transform (DFT) of the segment, and it is often displayed as log spectrum in dB.

Let $s[n]$ be the discrete-time, discrete-amplitude digital signal obtained by sampling the time axis and quantizing the amplitude of the continuous-time analog signal $s(t)$. Let $w[n]$ be a window function of length $N$ starting at an arbitrary time instant $n=0$. Then the windowed segment of the speech signal is given by

$$
x[n] = s[n] w[n] \tag{1}
$$

The DFT of $x[n]$ is given by

$$
X[k] = \sum_{n=0}^{N-1} x[n] e^{-j \frac{2\pi}{N} n k} \tag{2}
$$

The complex DFT spectrum is denoted as

$$
X[k] = |X[k]| e^{j\theta[k]} \tag{3}
$$

where $|X[k]|$ is called the magnitude spectrum, and $\theta[k]$ is called the phase spectrum. The magnitude and phase spectrum can be computed as

$$
|X[k]| = \sqrt{X_R^2[k] + X_I^2[k]} \tag{4}
$$

and

$$
	heta[k] = \tan^{-1}\left(\frac{X_I[k]}{X_R[k]}\right) \tag{5}
$$

where $X_R[k]$ and $X_I[k]$ denote the real and imaginary parts of the complex DFT spectrum $X[k] = X_R[k] + j X_I[k]$.

Note that only the magnitude of the DFT of the signal segment is considered in this analysis, as features of the VT system are better displayed in the magnitude spectrum. The phase spectrum is not analyzed in this experiment.

The objective of this experiment is to study the effect of various analysis parameters on the resulting short-time spectrum. For this study, the pre-stored speech signal for an utterance may be loaded. The following studies will be made to observe the effects of size of the window, shape of the window, pitch period in the case of voiced segments, on different types of segments such as silence, unvoiced, and voiced speech. These effects are studied more carefully for voiced segments. For analysis, speech signal data can be loaded from a pre-stored file or speech can be recorded and loaded. The file (say, ex1.wav) can be loaded by selecting it and pressing the load button. The loaded signal appears in the 1st display panel. The signal can be played using the play button. A segment of speech can be selected using the fourth button in the selection panel. Once a segment is selected by marking a region, its spectrum can be computed using the spectrum button. The selected segment will be displayed in the windowed waveform part of the lower two panels, and the log spectrum of the segment using the minimum required FFT points is displayed on the RHS of the lower two panels. The two panels are given to compare the effects of analysis parameters on the short-time spectrum.

1. First, let us examine the short-time spectral characteristics of a 30 ms segment of voiced speech. The log spectrum is plotted using the points for DFT (i.e., the choice of NFFT), which is 512 in this case. (Note that the log spectrum is displayed for $\text{NFFT}/2$ points covering the desired frequency range of $0$ to $F_s/2$.)

2. The effect of the number of points used for DFT can be seen by increasing NFFT to 1024 points or higher. Note that in this case, the DFT points nearly bring out the values missing when a lower NFFT value is used. Those missing values are seen prominently during the regions of rapid changes in the spectrum (near spectral values). Compare the log spectrum for this using 512 NFFT points and using 4096 NFFT points. Note that the peaks in the spectrum, especially at low frequency, correspond to harmonics, if the waveform has two or more pitch periods. Note that peaks are not seen in the higher frequency range due to side-lobe leakage of the rectangular window.

3. The effect of the shape of the window can be seen by using a rectangular window for the same segment in the lowest (third) panel. Now the log spectrum appears a little smoother compared to the rectangular window case. The harmonics are seen better due to smoothing, but the narrow peak is broadened. The effect of smoothing of the envelope can be seen better if NFFT is made large, say NFFT = 4096 for both rectangular and Hamming window cases. Note also that the dynamic range of the spectrum envelope is larger for the Hamming window compared to the rectangular window.

4. The regular peaks in the envelope correspond to harmonics of the fundamental frequency or pitch frequency. The harmonic peaks are smoother in the case of the Hamming window when compared to the rectangular window.

5. The smoothed spectral envelope over the harmonics corresponds to the frequency response of the VT system. The peaks of this envelope correspond to resonances or formants of the vocal tract system.

6. Now, by selecting a short (say 3–4 ms) segment of voiced speech, which is less than a pitch period, one can observe the effect of windowing (rectangular or Hamming) for different lengths of DFT, i.e., the value of NFFT. Note that here the pitch harmonics are not visible in the spectrum. Also, the spectral envelope shows the gross characteristics of the VT response, but not the individual resonance formants, due to poor resolution of the spectrum in the frequency domain caused by selection of a short segment. This shows that the width of the segment decides the resolution of the spectral envelope in the short-time spectral analysis. The larger NFFT values merely help to interpolate the values in between those obtained for smaller values of NFFT.

7. It is also interesting to compare the effect of the size of the window in terms of a voiced segment. Observe the spectra of rectangular and Hamming windowed segments for large values of NFFT. The Hamming windowed signal spectrum shows the pitch harmonics better than the rectangular windowed spectrum. Note that the rectangular window produces sharper ripple and the side-lobe effects mask the details of the harmonics in the spectrum. If only two pitch periods are selected, then the Hamming windowed speech does not show any harmonic information, as the two cycles are not equal in shape due to windowing. In all cases, observe the y-axis scale also for the dynamic range of the log spectrum.

8. The effect of window size, shape, and the NFFT on the short-time spectrum can also be observed on segments of unvoiced sounds like fricatives, by selecting a segment of frication in the signal in the first panel. Since there are no periodic segments in the waveform, the spectral envelope corresponds to the response of the VT system. Usually, the response has larger values in the middle and higher frequencies compared to the values in the lower frequencies. It is difficult to notice any significant differences between spectral envelopes for rectangular and Hanning windowed speech segments, although the overall dynamic range of the spectral envelope is lower for the rectangular window due to the side-lobe leakage effect. Therefore, it is generally preferable to use a window that tapers off the signal at the ends. The size of the window does not have any significant effect, as the spectral envelope for frication usually has broad peaks and does not have any sharp resonance peaks.

9. Note that if one wants to observe the spectra of two or more different analysis segments (i.e., unvoiced and voiced, or different sizes of the voiced segments), then the spectra can be displayed by opening another browser for each type of segment and comparing the spectra displayed in different browsers.
