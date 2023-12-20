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
The map highlights key markets for film release, with the United States, Mexico, Canada, Ireland, Japan, and Malaysia marked as top countries. As a producer, targeting these countries for your drama film's release could enhance its commercial success due to their significant market potential for the genre.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include maplangue_Horror.html %}
</div>
The language importance bar chart indicates that Spanish, English, Cantonese, Tamil, and Japanese are influential for drama films' success. A producer should consider these languages for localizing the film, potentially increasing its accessibility and appeal to a broad international audience.

## Measuring metrics
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

## Optimized casting

We harnessed the power of a machine learning algorithm to identify the most suitable profiles for the key roles in a Horror genre film. Our analysis was grounded in a comprehensive dataset comprising successful movies within the same genre. To unveil the perfect casting choices for these four pivotal roles, click on the image below.

<div style="width: 100%;display: flex; justify-content: center;">
  <a href="/horror_cast.html"><img src="/assets/img/casting.png" alt="cast" style="width:512px;height:512px;border-radius: 30px;"></a>
</div>

### Cast optimization breakdown

The XGBoost model's analysis of the Horror genre is valuable for its genre-specific insights and feature importance analysis. These aspects make it a useful tool for informed decision-making in film production, particularly in casting and understanding key success factors in the Horror genre.

<div style="width: 110%;display: flex; justify-content: center;">
  {% include featureimportance_Horror.html %}
</div>
The mix of actors' genders and their ages matters. To make a scary movie that works, it's smart to have both men and women actors of different ages. This way, the film can have characters that all kinds of viewers can relate to or get scared by.

<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationdirectorage_Horror.html %}
</div>
There's not a strong link between a director's age and how well a horror movie does. This suggests that age isn't everything; what's more important is the director's skill at building suspense and fear.
<div style="width: 100%;display: flex; justify-content: center;">
  {% include relationnummovie_Horror.html %}
</div>
Making a lot of movies doesn't mean a director's next horror film will be a hit. It might be better to go with a director who has made a few good ones, suggesting they know how to deliver the chills and thrills that fans love.

## Conclusion
To create a horror movie that really scares and excites viewers, focus on a story that brings out the spooky and the strange. Pick actors of different ages and both men and women to make the characters more real and relatable. It's a good idea to work with directors who have some experience making movies but are still full of fresh, scary ideas. Showing your movie in places like the US, Japan, and Mexico and using languages like English and Spanish can help it become popular all over the world. Keep the movie around 119 minutes long so it's just the right length to keep the scares coming without dragging on. With the right mix of story, cast, and director, your horror movie can be the one that everyone is talking about.
    
  
