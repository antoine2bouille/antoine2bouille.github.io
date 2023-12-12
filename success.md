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
