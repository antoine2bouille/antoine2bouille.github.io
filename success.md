---
layout: page
title: How to achieve glory and success as a filmmaker 
subtitle: A guide to make the best movies according to a given genre target
cover-img: /assets/img/movies.jpeg
thumbnail-img: /assets/img/movies.jpeg
share-img: /assets/img/movies.jpeg
use-site-title: false
---

## Introduction

A movie producer comes to see us and says he wants to make a successful movie in a given genre and for a given geographical area, between USA, America, Africa, Europe, Asia or Oceania. He wants to find the best drivers that will make his movie a success, both financially by making substantial box office profits, and critically by getting good ratings and reviews. We decided to create an easy-to-use interface where the producer can select his genre and target market parameters and get feedback on the optimization of multiple parameters such as runtime, director profile, actor profiles, main language, and potentially plot and character persona elements in order to achieve his goal. 

## General analysis 

### How do rating and revenue vary as a function of the genre

**Distribution of movie ratings across genres**
<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_ratings_across_genres.html %}
</div>

The distribution plots illustrate that movie ratings across genres tend to follow a Gaussian or normal distribution, with most ratings clustering around the mean. Each genre shows a distinct peak, with 'Drama' having the most substantial number of movies followed by 'Other'. The spread of the distributions indicates the variability of ratings within each genre. The number of movies in each genre could also affect the shape of the distribution, with genres having more movies showing a more defined Gaussian shape.

### Which relation between the screentime and the opportunity to win an award?

**Distribution of movie runtime for all awarded movies**
<div style="width: 100%;display: flex; justify-content: center;">
  {% distribution_of_movie_runtime_by_award_status.html %}
</div>

This plot shows histograms for movie runtime categorized by award status: Awarded Movies, Nominated Movies, and Non-awarded and Non-nominated Movies. Awarded movies tend to have a distribution centered around a lower runtime than nominated movies, suggesting that movies with shorter runtimes might have a higher chance of winning awards. Non-awarded and Non-nominated movies show a broad distribution, indicating a wide range of runtimes, with the majority leaning towards shorter runtimes. This category's histogram is significantly taller, suggesting it contains a much larger number of movies compared to the other two. A potential insight here could be that while both awarded and nominated movies tend to have a certain runtime, simply having a runtime within that range does not guarantee recognition.


**Density function of movie profit**
<div style="width: 100%;display: flex; justify-content: center;">
  {% density_functions_of_movie_profit.html %}
</div>

The plot displays density functions for the profit of movies, also categorized by their award status. The x-axis is on a logarithmic scale, indicating a wide range of profits. We can see distinct peaks for each category. Awarded movies have the highest peak, followed by nominated movies, which suggests that, on average, awarded movies tend to be more profitable. Non-awarded and Non-nominated movies have a flatter distribution with a peak at a lower profit level, indicating that these movies, while varied, generally earn less than their awarded or nominated counterparts. The log scale indicates that there are movies with very high profits, but they are less frequent, as seen by the density curves approaching the tail end.


## Causal analysis of observational data 
- Sensitivity analysis : nominated, oscar, rating --> profitability ?? 
- Mettre des vilains graphes

**BENOIT**



## Exploring main genres 

**For each genre we explore different questions**

<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 20px;">

  <div style="text-align: center;">
    <a href="/drama">
      <img src="/assets/img/drama.jpeg" alt="Drama" style="width: 150px; height: 150px; border-radius: 10px;">
    </a>
    <p style="margin: 10px 0; font-weight: bold;">Drama</p>
  </div>
  
  <div style="text-align: center;">
    <a href="/family">
      <img src="/assets/img/family.jpeg" alt="Family" style="width: 150px; height: 150px; border-radius: 10px;">
    </a>
    <p style="margin: 10px 0; font-weight: bold;">Family</p>
  </div>
  
  <div style="text-align: center;">
    <a href="/action_adventure">
      <img src="/assets/img/action.png" alt="Action & Adventure" style="width: 150px; height: 150px; border-radius: 10px;">
    </a>
    <p style="margin: 10px 0; font-weight: bold;">Action & Adventure</p>
  </div>
  
  <div style="text-align: center;">
    <a href="/fiction">
      <img src="/assets/img/fiction.jpeg" alt="Fiction" style="width: 150px; height: 150px; border-radius: 10px;">
    </a>
    <p style="margin: 10px 0; font-weight: bold;">Fiction</p>
  </div>
  
  <div style="text-align: center;">
    <a href="/horror">
      <img src="/assets/img/horror.jpeg" alt="Horror" style="width: 150px; height: 150px; border-radius: 10px;">
    </a>
    <p style="margin: 10px 0; font-weight: bold;">Horror</p>
  </div>
</div>
