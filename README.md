# README

## BayAreaTrails

## Searchbar Preview

![search](https://user-images.githubusercontent.com/100038201/212814783-58f5d306-bc0c-46c1-94c3-5e6bf211c54c.gif)

## Reviews Preview
![reviews](https://user-images.githubusercontent.com/100038201/212815231-74c334ee-e47d-4f40-ad50-7a7ab3ba5b79.gif)

## Park Show Preview
![park show](https://user-images.githubusercontent.com/100038201/212813370-f9e3ff55-a309-4af3-9ea9-cdcd6555d29e.gif)

## Overview

BayAreaTrails is a clone of popular outdoor adventure app, AllTrails. 

## Technologies

I used React-Redux for the frontend of BayAreaTrails, PostgreSQL as the database management system, and a Ruby on Rails backend. I also incorporated the Google maps API and the OpenWeatherApp api to get local weather for each hike. For the general styling and icons, I used CSS and fontawesome.

## Features

BayAreaTrails users are able to make an account, searh for parks and trails in the San Francisco Bay Area, and leave reviews for hikes. Users must be logged in in order to write, edit, or delete a review. Users can enter in key letters or phrases in the front page searchbar to find a hike or park. Lastly, users are able to view the local weather of each hike, and see the location of the trail on a terrain version google maps.

## Significant Code

Quicksort to sort reviews by most recently created. 

```javascript 

const sortReviews = (reviews) =>{
        if(reviews.length < 2){
            return reviews;
        }
        let left = []
        let right=[]
        let pivot = reviews[0]

        for(let i =1; i < reviews.length; i ++){
            if(reviews[i].createdAt > pivot.createdAt){
                left.push(reviews[i])
            }else{
                right.push(reviews[i])
            }
        }
        return sortReviews(left).concat([pivot]).concat(sortReviews(right));
    }
