# Phase 1 Project - BOTW Materials List

This is my Phase-1 Project Submission for FlatIron School. Details on the webpage's purpose and functionality are described below.

## Introduction/Purpose

This purpose of this webpage is to display ALL of the **materials** a player can find within the world of Nintendo's highly popular game *The Legend of Zelda: Breath of the Wild*. When a player selects an image, more information regarding that image is displayed.

## Opening the Webpage

Type the following into your terminal in order to open the webpage:\
`open index.html`

## Navigating the Webpage

Within the webpage, ALL of the materials that can be found in *BOTW* are displayed as pictures. Simply hovering over an image with the mouse will reveal that images name as well as a description of the selected item. When the mouse leaves an image, the text dissapears. The idea is relatively simple and gives users the ability to find relevent information on requested items as needed.

## Requirements Satisfied

1. It contains HTML/CSS/JS files that access data from a public API. There are precisely 36 objects that are returned with 4 attributes each including "category", "image", "name", and "description". Data is fetched and converted to JSON format.
2. The page runs on a single HTML file with no redirects or reloads.
3. The 3 event listeners are as follows:
        1. 'DOMContentLoaded'
        2. 'mouseover'
        3. 'mouseout'
4. The array iterator utlized is forEach on the 'materials' data in order to carry out the latter 2 event listeners and append the data to the webpage accordingly.
5. There are only 2 functions utilized in the code. The first function `capitalizeFirstLetter` is used to capitalize the first letter for each name from the 'materials' data. The second function `fetchData` contains the remaining code needed for proper functionality on the webpage. As far as I can tell, there are no repetitive lines within the code block.

## API Utilized for Project

Data for [*Legend of Zelda: Breath of the Wild*](https://botw-compendium.herokuapp.com/api/v2)

## GIF of User Experience

![](https://github.com/Jazper55555/phase-1-project-GIF/blob/main/Phase-1%20Project%20GIF.gif)

<!-- Users should be able to do the following when accessing the webpage:

1. Treasure content should be displayed (FETCH) on webpage
    Content includes images from the treasure
    category
        Fetch data & display images from the treasure category
    FOREACH can be used here
2. When you do a MOUSEOVER on any picture, it should display name 
    ID's can be assigned to each image allowing for easier filtering
3. When you do a CLICK on any picture, it will display the description underneath image -->