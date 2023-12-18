---
layout: page
title: Horror movies
subtitle: What are the main drivers to a successfull horror movie ? 
cover-img: /assets/img/horror_banner.jpg
thumbnail-img: /assets/img/horror_banner.jpg
share-img: /assets/img/horror_banner.jpg
use-site-title: false
---

## Overview

Horror films offer a unique experience centered on the exploration of suspense, fear and the occult. They have the ability to immerse viewers in anguished worlds and provoke intense emotions, ranging from terror to excitement. 

Are you terrified and fascinated by The Exorcist too? Read this page to find out how to make his number 2 and win an Oscar!

## Common words and themes in movie plots
![horror Wordcloud](/assets/img/wordclouds/empath/Horror_wordcloud.png)

Horror films convey scary stories that emphasize negative emotions, death, and uncomfortable events. Families and children are frequently threatened by lethal threats in haunted locations, where murders and crimes heighten the suspense. Eerie changes of weddings, parties, and celebrations instill fear into otherwise happy gatherings. Supernatural warfare, brutality, and horrific things heighten the dread, while weaponry and fights heighten the tension. Suffering, torture, and anguish serve as disturbing settings for this exploration of the worst aspects of human existence. Themes of youth, divine intervention, healing, and pain lend complexity to horror films, producing a mesmerizing tapestry of terror and interest.

## Regressions
<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_Horror.html %}
</div>

<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Horror.html %}
</div>
The use of a CatBoost machine learning model is useful to discover what factors contribute to a film's success. The model is trained to understand the impact of various features like language and country of release on a movie's performance. Once trained, the model's feature importance reveals that certain languages and countries are more predictive of success.

<div style="margin:auto; width:50%;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Training Set</th>
            <th style="border: 1px solid black; padding: 8px;">Testing Set</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">1243 data points</td>
            <td style="border: 1px solid black; padding: 8px;">311 data points</td>
        </tr>
        
    </table>
</div>

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
            <td style="border: 1px solid black; padding: 8px;">0.056377</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.237438</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">0.018624</td>
        </tr>
    </table>
</div>
We harnessed the power of linear regression in order to find the optimal runtime.
<div style="width:50%; margin-left: auto; margin-right: auto;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Optimal Runtime</th>
            <th style="border: 1px solid black; padding: 8px;"> 119.50 minutes</th>
        </tr>
    </table>
</div>
## Basic graphs

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Horror genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/horror_cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>
The XGBoost model's, from the boosted tree algorithms family, analysis of the Horror genre is valuable for its genre-specific insights and feature importance analysis. These aspects make it a useful tool for informed decision-making in film production, particularly in casting and understanding key success factors in the Horror genre.

<div style="width: 110%;display: flex; justify-content: center;">
  {% include featureimportance_Horror.html %}
</div>
<div style="width: 110%;display: flex; justify-content: center;">
  {% include actorimportance_Horror.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationdirectorage_Horror.html %}
</div>
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationnummovie_Horror.html %}
</div>

## Conclusion

    
  