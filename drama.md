---
layout: page
title: Drama movies
subtitle: What are the main drivers to a successfull drama movie ? 
cover-img: /assets/img/movies.jpeg
thumbnail-img: /assets/img/movies.jpeg
share-img: /assets/img/movies.jpeg
use-site-title: false
---
  

# Drama movies

## Overview
Drama is a type of narrative fiction or non-fiction that emphasizes tension between characters, conflict and emotion. Drama is a popular and adaptable genre in the film industry, presenting a wide variety of stories and subjects. If DiCaprio's death in Titanic stirred your emotions too, then browse this page to find out more about what lies behind these emotionally-charged films!


## Common words and themes in movie plots
![Drama Wordcloud](/assets/img/wordclouds/empath/Drama_wordcloud.png)

Narratives in drama films frequently examine the complexities of family dynamics, depicting the impact of key life events such as weddings, births, and deaths. Negative emotions, crime, and imprisonment are prominent themes that lend suspense to the plot. The genre investigates societal concerns like as conflict and leadership dynamics inside families or larger contexts. While work and business are highlighted, moments of pleasant feeling provide glimpses of hope in the midst of adversity. Drama films, which contain both personal and societal issues, provide a platform for portraying stories that capture the nuances of human lives.


## Regressions
<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_Drama.html %}
</div>

<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Drama.html %}
</div>
The use of a CatBoost machine learning model is useful to discover what factors contribute to a film's success. The model is trained to understand the impact of various features like language and country of release on a movie's performance. Once trained, the model's feature importance reveals that certain languages and countries are more predictive of success.

The visualizations you see are a direct result of this analysis. The world map colors certain countries to signify their importance, while the bar chart ranks languages by their influence on movie success, as determined by the model. These insights are pivotal for strategic decisions in the film industry, such as choosing a language for a movie or selecting a country for release, to maximize the chances of a film's success.

Machine learning, and specifically the use of CatBoost here, is crucial because it can handle complex datasets with multiple categorical variables. It provides a systematic approach to sifting through data, identifying patterns, and quantifying their significance, which is essential in the nuanced field of movie analytics. The result is a data-driven strategy for enhancing movie success, grounded in the quantitative analysis provided by machine learning

<div style="margin:auto; width:50%;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Metric</th>
            <th style="border: 1px solid black; padding: 8px;">Value</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">MSE (Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.14296481470156197</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.378106882642411</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">0.034469731152307004</td>
        </tr>
    </table>
</div>

## Basic graphs

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Drama genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>



## Conclusion
Summarize the key takeaways for filmmakers aspiring to create impactful drama movies, combining financial success with critical acclaim.
    
  