---
layout: page
title: Drama movies
subtitle: What are the main drivers to a successfull drama movie ? 
cover-img: /assets/img/drama_banner.jpg
thumbnail-img: /assets/img/drama_banner.jpg
share-img: /assets/img/drama_banner.jpg
use-site-title: false
---
  

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
            <td style="border: 1px solid black; padding: 8px;">0.146298</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.382490</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">0.011954</td>
        </tr>
    </table>
</div>
We harnessed the power of linear regression in order to find the optimal runtime.
<div style="width:50%; margin-left: auto; margin-right: auto;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Optimal Runtime</th>
            <th style="border: 1px solid black; padding: 8px;">134.95 minutes</th>
        </tr>
    </table>
</div>
## Basic graphs

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Drama genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>
The XGBoost model's, from the boosted tree algorithms family, analysis of the Drama genre is valuable for its genre-specific insights and feature importance analysis. These aspects make it a useful tool for informed decision-making in film production, particularly in casting and understanding key success factors in the Fiction genre.

<div style="width: 110%;display: flex; justify-content: center;">
  {% include featureimportance_Drama.html %}
</div>
<div style="width: 110%;display: flex; justify-content: center;">
  {% include actorimportance_Drama.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationdirectorage_Drama.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationnummovie_Drama.html %}
</div>


## Conclusion
Summarize the key takeaways for filmmakers aspiring to create impactful drama movies, combining financial success with critical acclaim.
    
  





