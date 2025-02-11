---
layout: page
title: Science-fiction movies
subtitle: What are the main drivers to a successfull science-fiction movie ? 
cover-img: /assets/img/sf_background.jpg
thumbnail-img: /assets/img/sf_background.jpg
share-img: /assets/img/sf_background.jpg
use-site-title: false
---



## Overview

Science fiction films occupy a significant and distinctive place in the film industry. They are distinguished by their ability to explore futuristic concepts, imaginary worlds and technological advances, offering viewers an escape into alternative realities. Science fiction films provoke reflection on the ethical, social and scientific implications of the future, often extrapolating contemporary challenges into futuristic scenarios. 

If you want to write the screenplay for the next Matrix, browse this page to gather as many ingredients as possible for a masterpiece!

## Common words and themes in movie plots
![SF Wordcloud](/assets/img/wordclouds/empath/Fiction_wordcloud.png)

Futuristic environments and superior technologies drive inventive storytelling in Science Fiction films. Epic stories are inspired by themes of battle, warfare, and superior technology. Families and children are frequently mentored by crucial leaders as they traverse unusual circumstances. The genre's speculative aspect is enhanced by space travel, technological vehicles, and otherworldly themes. Plots investigate the ethical implications of technology and the difficulties that characters experience. Celebrations, parties, and weddings might all take place against future settings. Military and crime themes offer a layer of intricacy to these engrossing movie experiences.


## Regressions
<div style="width: 100%;display: flex; justify-content: center;">
  {% include map_Fiction.html %}
</div>
The map highlights key markets for film release, with the United States, Mexico, South Africa, Japan, Spain, and Soviet Union marked as top countries. As a producer, targeting these countries for your science-fiction film's release could enhance its commercial success due to their significant market potential for the genre.
<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Fiction.html %}
</div>
The language importance bar chart indicates that Japanese, English, Russian, Italian, and Hindi are influential for SF movies' success. A producer should consider these languages for localizing the film, potentially increasing its accessibility and appeal to a broad international audience.

The use of a CatBoost machine learning model is useful to discover what factors contribute to a film's success. The model is trained to understand the impact of various features like language and country of release on a movie's performance. Once trained, the model's feature importance reveals that certain languages and countries are more predictive of success.

<div style="margin:auto; width:50%;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Training Set</th>
            <th style="border: 1px solid black; padding: 8px;">Testing Set</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">1074 data points</td>
            <td style="border: 1px solid black; padding: 8px;">269 data points</td>
        </tr>
        
    </table>
</div>

The visualizations you see are a direct result of this analysis. The world map colors certain countries to signify their importance, while the bar chart ranks languages by their influence on movie success, as determined by the model. These insights are pivotal for strategic decisions in the film industry, such as choosing a language for a movie or selecting a country for release, to maximize the chances of a film's success.

## Measuring metrics

Machine learning, and specifically the use of CatBoost here, is crucial because it can handle complex datasets with multiple categorical variables. It provides a systematic approach to sifting through data, identifying patterns, and quantifying their significance, which is essential in the nuanced field of movie analytics. The result is a data-driven strategy for enhancing movie success, grounded in the quantitative analysis provided by machine learning.

<div style="margin:auto; width:50%;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Metric</th>
            <th style="border: 1px solid black; padding: 8px;">Value</th>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">MSE (Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.131265</td>
        </tr>
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">RMSE (Root Mean Squared Error)</td>
            <td style="border: 1px solid black; padding: 8px;">0.362305</td>
        </tr>
        <!--
        <tr style="border: 1px solid black;">
            <td style="border: 1px solid black; padding: 8px;">R² (R-squared)</td>
            <td style="border: 1px solid black; padding: 8px;">0.020693</td>
        </tr>-->
    </table>
</div>

We used a power of linear regression in order to find the optimal runtime.
<div style="width:50%; margin-left: auto; margin-right: auto;">
    <table style="width:100%; border: 1px solid black; border-collapse: collapse;">
        <tr style="border: 1px solid black;">
            <th style="border: 1px solid black; padding: 8px;">Optimal Runtime</th>
            <th style="border: 1px solid black; padding: 8px;">118.00 minutes</th>
        </tr>
    </table>
</div>

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Fiction genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/fiction_cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>

### Cast optimization breakdown
The XGBoost model's analysis of the Fiction genre is valuable for its genre-specific insights and feature importance analysis. These aspects make it a useful tool for informed decision-making in film production, particularly in casting and understanding key success factors in the Fiction genre.

<div style="width: 110%;display: flex; justify-content: center;">
  {% include featureimportance_Fiction.html %}
</div>
It suggest that gender diversity within the cast holds notable importance in the success of fiction films. For producers, this implies a strategic need to focus on casting decisions that ensure a balanced representation of genders across the main roles to resonate with a diverse audience.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationdirectorage_Fiction.html %}
</div>
This reveals that there is no clear correlation, suggesting that success in this genre is not strongly age-dependent but might be influenced by other factors such as genre-specific expertise or storytelling ability.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationnummovie_Fiction.html %}
</div>
Having a vast number of movies in a director's filmography does not assure success in fiction films. It may hint at an optimal range of experience that is conducive to success, suggesting that producers should look for directors with substantial but not overwhelming experience.

## Conclusion

For a hit science fiction movie, aim to tell a story that takes viewers to new worlds filled with cool tech and adventure. Choose places like the US, Japan, and Russia to show your movie, and use languages like English and Japanese to reach lots of people. Make sure your cast includes both men and women of different ages. Work with directors who have some experience but still have new ideas. Keep the movie not too long, around 118 minutes, to keep it exciting from start to finish. Follow these tips, and you might just make the next big sci-fi movie everyone talks about.
    
  
