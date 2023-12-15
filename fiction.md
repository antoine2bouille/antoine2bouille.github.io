---
layout: page
title: Science-fiction movies
subtitle: What are the main drivers to a successfull science-fiction movie ? 
cover-img: /assets/img/sf_background.jpg
thumbnail-img: /assets/img/sf_background.jpg
share-img: /assets/img/sf_background.jpg
use-site-title: false
---

  

Brief overview of the fiction and its significance in the film industry.

## Overview

## Research questions

- Which genre is more represented according to a location? Which genre performs better according to a location?
- How do rating and revenue vary as a function of the genre?
- What is the relationship between ratings and revenues?
- What is the optimal runtime for each genre?
- Which relation between the screen time and the opportunity to win an award ?
- XXX

## Common words and themes in movie plots
![SF Wordcloud](/assets/img/wordclouds/empath/Fiction_wordcloud.png)

Futuristic environments and superior technologies drive inventive storytelling in Science Fiction films. Epic stories are inspired by themes of battle, warfare, and superior technology. Families and children are frequently mentored by crucial leaders as they traverse unusual circumstances. The genre's speculative aspect is enhanced by space travel, technological vehicles, and otherworldly themes. Plots investigate the ethical implications of technology and the difficulties that characters experience. Celebrations, parties, and weddings might all take place against future settings. Military and crime themes offer a layer of intricacy to these engrossing movie experiences.


## Regressions
<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_Fiction.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Fiction.html %}
</div>
The use of a CatBoost machine learning model is useful to discover what factors contribute to a film's success. The model is trained to understand the impact of various features like language and country of release on a movie's performance. Once trained, the model's feature importance reveals that certain languages and countries are more predictive of success.

The visualizations you see are a direct result of this analysis. The world map colors certain countries to signify their importance, while the bar chart ranks languages by their influence on movie success, as determined by the model. These insights are pivotal for strategic decisions in the film industry, such as choosing a language for a movie or selecting a country for release, to maximize the chances of a film's success.

Machine learning, and specifically the use of CatBoost here, is crucial because it can handle complex datasets with multiple categorical variables. It provides a systematic approach to sifting through data, identifying patterns, and quantifying their significance, which is essential in the nuanced field of movie analytics. The result is a data-driven strategy for enhancing movie success, grounded in the quantitative analysis provided by machine learning
<div>
    <table style="width:50%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Metric</th>
            <th style="border: 1px solid black; padding: 8px;">Value</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">MSE (Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.05640411103602283</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.23749549687525198</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">0.018153797720612763</td>
        </tr>
    </table>
</div>
<div>
    <table style="width:50%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Optimal Runtime</th>
            <th style="border: 1px solid black; padding: 8px;">118.00 minutes</th>
        </tr>
    </table>
</div>
## Basic graphs

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a fiction genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/fiction_cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>

## Conclusion

    
  