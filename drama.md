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
This page will give you all the insights bout what to include in your drama movie ranging from the plot or the language the film should be played in to the perfect cast to be hired in order for the film to achieve enormous succes!


## Common words and themes in dramatic movie plots
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
<div style="margin:auto; width:50%;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Training Set</th>
            <th style="border: 1px solid black; padding: 8px;">Testing Set</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">12892 data points</td>
            <td style="border: 1px solid black; padding: 8px;">3223 data points</td>
        </tr>
        
    </table>
</div>

The visualizations you see are a direct result of this analysis. The world map colors certain countries to signify their importance, while the bar chart ranks languages by their influence on movie success, as determined by the model. These insights are pivotal for strategic decisions in the film industry, such as choosing a language for a movie or selecting a country for release, to maximize the chances of a film's success.

Machine learning, and specifically the use of CatBoost here, is crucial because it can handle complex datasets with multiple categorical variables. It provides a systematic approach to sifting through data, identifying patterns, and quantifying their significance, which is essential in the nuanced field of movie analytics. The result is a data-driven strategy for enhancing movie success, grounded in the quantitative analysis provided by machine learning.

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
The XGBoost model's, from the boosted tree algorithms family, analysis of the Drama genre is valuable for its genre-specific insights and feature importance analysis. These aspects make it a useful tool for informed decision-making in film production, particularly in casting and understanding key success factors in the Drama genre.

<div style="width: 110%;display: flex; justify-content: center;">
  {% include featureimportance_Drama.html %}
</div>
This underscores the importance of gender balance within the cast. It suggests that having a diverse ensemble of male and female actors is conducive to the success of drama films. A producer should consider assembling a cast that reflects this gender diversity to appeal to a wider audience.
<div style="width: 110%;display: flex; justify-content: center;">
  {% include actorimportance_Drama.html %}
</div>
The second plot indicates that the age and the number of roles actors have played contribute to a movie's success. This implies a preference for experienced actors, likely because they bring depth and nuance to complex drama narratives. Producers should prioritize casting experienced actors who can deliver powerful performances.
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationdirectorage_Drama.html %}
</div>
The third plot shows a notable trend where directors of a certain age range, particularly in the middle of their careers, tend to produce more successful drama films. This could be due to a mix of experience, contemporary relevance, and maturity in storytelling. Producers may want to collaborate with directors who are in this age sweet spot.
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationnummovie_Drama.html %}
</div>
This reveals that directors with too few or too many movies in their filmography don't correlate with the highest success rates. It appears there's an optimal range of experience that equates to success in drama. Producers should seek directors with a substantial body of work that indicates experience but also suggests they're still evolving and not overexposed.


## Conclusion
For a drama film to succeed, the storyline should navigate deep family bonds and pivotal moments like weddings or funerals, infused with societal themes. It's essential to cast actors with a balance of genders and proven depth in acting, and to engage directors with a seasoned yet fresh filmmaking perspective. Aim for a runtime around 135 minutes to ensure audience engagement without compromising the story's richness. These strategic elements, rooted in data, can elevate a drama film's resonance and success.
    
  





