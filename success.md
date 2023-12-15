---
layout: page_updated
title: How to achieve glory and success as a filmmaker 
subtitle: A guide to make the best movies according to a given genre target
cover-img: /assets/img/characters_background.jpeg
thumbnail-img: /assets/img/characters_background.jpeg
share-img: /assets/img/characters_background.jpeg
use-site-title: false
full-width-section: |
<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; width: 100%;">
  <a href="/drama" style="flex: 1;">
    <img src="/assets/img/drama.jpg.webp" alt="Drama" style="width: 100%; height: auto; border-radius: 10px;">
    <p style="margin: 10px 0; font-weight: bold; text-align: center;">Drama</p>
  </a>
  
  <a href="/family" style="flex: 1;">
    <img src="/assets/img/family.jpg.webp" alt="Family" style="width: 100%; height: auto; border-radius: 10px;">
    <p style="margin: 10px 0; font-weight: bold; text-align: center;">Family</p>
  </a>
  
  <a href="/action_adventure" style="flex: 1;">
    <img src="/assets/img/action.jpg" alt="Action & Adventure" style="width: 100%; height: auto; border-radius: 10px;">
    <p style="margin: 10px 0; font-weight: bold; text-align: center;">Action & Adventure</p>
  </a>
  
  <a href="/fiction" style="flex: 1;">
    <img src="/assets/img/fiction.jpg" alt="Science-Fiction" style="width: 100%; height: auto; border-radius: 10px;">
    <p style="margin: 10px 0; font-weight: bold; text-align: center;">Science-Fiction</p>
  </a>
  
  <a href="/horror" style="flex: 1;">
    <img src="/assets/img/horror.jpg" alt="Horror" style="width: 100%; height: auto; border-radius: 10px;">
    <p style="margin: 10px 0; font-weight: bold; text-align: center;">Horror</p>
  </a>
</div>
---





## Introduction

In a landscape where the art of filmmaking meets the science of market success, movie producers often find themselves at a crossroads. The goal is to create a cinematic experience that not only resonates with audiences emotionally by getting good ratings and reviews but also performs exceptionally at the box office. Achieving this dual triumph of critical acclaim and financial success is no small feat in the competitive terrain of the film industry.

To aid producers in this challenge, we’ve crafted a cutting-edge tool, an interface that simplifies the complexity of movie-making variables. It empowers producers to fine-tune key elements that can elevate a film’s potential for success. By selecting a genre from the top-tier favorites, producers can explore a variety of influential factors, including:

- Optimal Runtime: Finding the sweet spot for a film’s length to keep audiences engaged from opening credits to the final scene.
- Directorial Vision: Aligning the project with directors whose previous works and stylistic flair have proven successful within the genre.
- Casting Dynamics: Assembling a cast that not only has the right chemistry but also brings a proven track record to the table.
- Narrative Appeal: Crafting story arcs and character developments that are known to captivate viewers within the chosen genre.

<div style="width: 100%;display: flex; justify-content: center;">
<a href = "https://www.imdb.com/title/tt6450804/">
  <img src="/assets/img/memeintrochoisi.jpeg" alt="Movie producer meme" style="width: 400px; height: 400px; border-radius: 10px;">
</a>
</div>

This tool is more than just a repository of data; it’s an analytical engine that processes industry benchmarks, and audience preferences. It provides producers with a strategic knowledge, integrating both quantitative data and qualitative insights to guide decisions from pre-production to premiere.

Our approach melds industry know-how with a predictive analytics model, offering strategic guidance rooted in a comprehensive understanding of what has historically succeeded. This is a new horizon in filmmaking—where informed decisions lead the way, and producers are equipped with the knowledge to create films that are not only seen and loved by many but also stand as testaments to the power of storytelling. 

## What is the story behind the dataset at our disposal?

### How do rating and revenue vary as a function of the genre

**Distribution of movie ratings across genres**
<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_ratings_across_genres.html %}
</div>

The distribution plots illustrate that movie ratings across genres tend to follow a Gaussian or normal distribution, with most ratings clustering around the mean. Each genre shows a distinct peak, with 'Drama' having the most substantial number of movies. The spread of the distributions indicates the variability of ratings within each genre. We can see that Drama, Comedy, Thriller/Action and Romance are the top genres in the world! 

### Which relation between the screentime and the opportunity to win an award?

**Distribution of movie runtime for all awarded movies**


<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_runtime_by_award_status.html %}
</div>
This plot shows histograms for movie runtime categorized by award status: Awarded Movies, Nominated Movies, and Non-awarded and Non-nominated Movies. Awarded movies tend to have a distribution centered around a lower runtime than nominated movies, suggesting that movies with shorter runtimes might have a higher chance of winning awards. Non-awarded and Non-nominated movies show a broad distribution, indicating a wide range of runtimes, with the majority leaning towards shorter runtimes. This category's histogram is significantly taller, suggesting it contains a much larger number of movies compared to the other two. A potential insight here could be that while both awarded and nominated movies tend to have a certain runtime, simply having a runtime within that range does not guarantee recognition.

**Movie runtime for awarded movies and not awarded movies**

This violin and box plot combination displays the distribution of movie runtimes, differentiating between movies that were not awarded and those that were. The 'Not Awarded' category has a wide and flat distribution, suggesting a high variability in runtimes, whereas the 'Awarded' category shows a more peaked and narrow distribution, implying a concentration around a specific runtime. The box plot within the violin plot for awarded movies shows a median value that is higher than the not awarded, which might imply that movies with longer runtimes tend to win awards, but the spread is less, suggesting a tighter criterion for runtime among awarded films. The notable number of outliers in the 'Not Awarded' category could indicate that there is less consistency in the success of movies with very short or very long runtimes in this group.

### What is the relation between being awarded and revenue?

**Distribution of Movie box office revenue**
<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_box_office_revenue.html %}
</div>
This graph shows the frequency distribution of movie box office revenue on a logarithmic scale. The x-axis spans a wide range, from $10,000 to $1 billion, which indicates the inclusion of both small indie films and blockbuster hits. The distribution peaks at the lower end of the revenue scale and then tapers off, which is typical of entertainment media where a few hits make a large portion of the revenue, and many films make relatively little. This kind of distribution is often referred to as a "long-tail" distribution, where the tail of the distribution (lower revenue films) is very long compared to the head (high revenue films). The graph can help industry analysts understand the distribution of revenues across movies and can provide insights into the financial risks and rewards of the movie industry.

**Distribution of Movie profit**

<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_profit.html %}
</div>

Similar to the box office revenue graph, this shows the frequency distribution of movie profits, also on a logarithmic scale. This distribution appears to be more centrally peaked, suggesting that while there are outliers with extremely high profits, there's a common profit range where most movies lie. The tail of the distribution extending towards higher profits is less steep compared to the box office revenue graph, indicating that while fewer movies make extremely high profits, the drop-off is not as sharp. This information could be valuable for movie producers and investors to gauge expected profits and understand the profitability landscape of the film industry.

**Density function of movie profit**
<div style="width: 100%;display: flex; justify-content: center;">
  {% include density_functions_of_movie_profit.html %}
</div>

The plot displays density functions for the profit of movies, also categorized by their award status. The x-axis is on a logarithmic scale, indicating a wide range of profits. We can see distinct peaks for each category. Awarded movies have the highest peak, followed by nominated movies, which suggests that, on average, awarded movies tend to be more profitable. Non-awarded and Non-nominated movies have a flatter distribution with a peak at a lower profit level, indicating that these movies, while varied, generally earn less than their awarded or nominated counterparts. The log scale indicates that there are movies with very high profits, but they are less frequent, as seen by the density curves approaching the tail end.


**Scatterplot of movie runtime vs profit**

<div style="width: 100%;display: flex; justify-content: center;">
  {% include movie_runtime_vs_profit.html %}
</div>
This scatter plot shows the relationship between movie runtime and profit, with movies that have been awarded depicted in blue and those not awarded in red. The plot suggests there is a wide range of profits for movies of any runtime, but there does not appear to be a strong or clear correlation between the two variables. Awarded movies are scattered throughout the profit range but are more prevalent at higher profit levels. This could suggest that while longer movies are not guaranteed to be more profitable, those that win awards may have a better chance at higher profits. The concentration of red dots (not awarded movies) across all profit ranges indicates that most movies do not win awards, regardless of their profitability.


### What is the relationship between ratings and profit?

<div style="width: 100%;display: flex; justify-content: center;">
  {% include movie_rating_vs_profit_scatter.html %}
</div>

This scatter plot displays movie profits against their average ratings, with movies differentiated by whether they were awarded or not. There is a dense clustering of movies in the lower profit range across all ratings, with fewer movies achieving high profits. This suggests that while many films are made and rated, only a few reach high profitability. Awarded movies (blue points) are present across a wide range of profits, but with a noticeable presence in the higher profit tiers, indicating that award-winning films may have a better chance at earning more. The vertical spread of points at each rating level indicates a large variability in profit for movies with similar ratings, suggesting that factors other than ratings significantly influence profitability.

### How does the movie rating distribution vary across the continents?

<div style="width: 100%;display: flex; justify-content: center;">
  {% include distribution_of_movie_average_ratings_per_continent.html %}
</div>

This set of histograms shows the distribution of movie ratings across different continents. The distribution shapes vary by continent, with Asia having a broader range of average ratings, and other continents like Africa and Oceania having fewer movies with a tighter distribution around the middle ratings. The USA histogram shows a high count of movies with a wide range of ratings, reflecting a large and diverse film industry. Such distributions are useful for understanding how movie ratings differ across the world and can indicate regional preferences or differences in movie production quality.

### How does the movie box office distribution vary across the continents?

<div style="width: 100%;display: flex; justify-content: center;">
  {% include Distribution_inflated_movies.html %}
</div>

This collection of plots illustrates the profit distribution of movies across different continents, displayed on a logarithmic scale. There is a noticeable decline in frequency as profit increases, which is consistent across continents, suggesting that high-profit movies are rare globally. In some continents like Africa, there is a steep drop-off in the number of high-profit movies, whereas in Oceania, Europe, and the USA, the drop-off is more gradual, indicating a presence of more movies that achieve high profits. This analysis helps in comparing the film industry's financial success across different markets and can guide decisions regarding distribution and marketing strategies

### How does the profitability of movies vary across genres
<div style="width: 100%;display: flex; justify-content: center;">
  {% include box_plot_of_movie_box_office_revenue_by_main_genre.html %}
</div>
This box plot presents the distribution of box office revenue by genre, showing the median, interquartile range, and outliers.
Drama and family genres have lower median revenues but a wide range of outcomes, as indicated by the long whiskers and outliers. This variability could reflect a mix of low-budget dramas and high-grossing family blockbusters. Action/Adventure and Fiction have higher medians and less variability compared to Drama and Family, suggesting these genres are more consistently high-earning. Other genres show a lower median but also have a considerable spread, which could include niche films with both low and unexpectedly high revenues. Understanding the revenue distribution by genre can inform producers and investors about the potential financial risk and return associated with different types of movies.


## Causal analysis of observational data 
- Sensitivity analysis : nominated, oscar, rating --> profitability ?? 
- Mettre des vilains graphes


### How does the profitability of movies vary across genres


## Exploring main genres through research questions 

If you want to answer these questions:

- Which genre is more represented according to a location? Which genre performs better according to a location?
- How do rating and revenue vary as a function of the genre?
- What is the relationship between ratings and revenues?
- What is the optimal runtime for each genre?
- Which relation between the screen time and the opportunity to win an award ?

Click on the icon of the genre you're interested in!
