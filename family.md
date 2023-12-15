---
layout: page
title: Family movies
subtitle: What are the main drivers to a successfull family movie ? 
cover-img: /assets/img/movies.jpeg
thumbnail-img: /assets/img/movies.jpeg
share-img: /assets/img/movies.jpeg
use-site-title: false
---

  

## Overview

The family genre in cinema offers a diverse palette of stories that focus on family relationships, values and experiences. These films explore the emotional entanglements within families, creating narratives rich in nuance. 
Do you want to find out what's behind your childhood favorites movies? Don't wait any longer, curious youngster, read this page, it's made for you!

## Common words and themes in movie plots
![Family Wordcloud](/assets/img/wordclouds/empath/Family_wordcloud.png)

Family films are centered on heartwarming stories that emphasize familial relationships. Plots center on the joys and tribulations of family life, with a particular emphasis on children. Weddings, homes, and happy feelings are among the themes used to create an upbeat mood. Friendship, celebrations, and optimism are important themes, while musical components offer entertainment value. These films strike a balance between relatable experiences like school and youth with positive values like helping, giving, and leadership. Despite occasional setbacks, Family films promote unity and the continuing strength of familial bonds, providing wholesome and entertaining experiences for people of all ages.

## Regressions
<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_Family.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Family.html %}
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
            <td style="border: 1px solid black; padding: 8px;">0.14802529670511808</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.3847405576555688</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">-0.015524673193787475</td>
        </tr>
    </table>
</div>
## Basic graphs

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Family genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/family_cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>

## Conclusion

    
  