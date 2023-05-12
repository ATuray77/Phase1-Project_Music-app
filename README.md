# Phase1-Project_Music-app
A music video library app to make playlists and add music videos to music library

This is a very basic music app that let users listen to music videos, add music videos to their library and also createa playlist of their favorite music videos. These playlists can be deleted as the user sees fit.

Features: 
[1] Creates Playlists - Users can create a playlist of their favorite videos and can choose to add these to their music video library later. This feature gives users the flexibility to just listen to any Youtube music video they want to watch/listen to, and they can also choose to delete as necessary. The delete action triggers a warning whether that's the desired action or not. 

[2] Music Video Player -  This player plays any music video that the user wants to listen to or watch. This feature creates a more immersive experience for the user. 

[3] Music Library - It allows users to store their favorite music videos to a backend json database. This database loads when the users loads the app. For this feature to work the database must be initiated and stayed on throughout the session.

[4] Likes - This featue allows users to 'like' a music video, and their 'likes' get sent to the database which updates or increases the 'like' value and reflects it on the page by increasing the 'likes' counts. 

How to Use this app:
[1] If a user only wants to listen and watch a music video, they navigate to the "Add song to PLaylist" form and fill it:
    (a) They enter the name of the music video
    (b) They also enter in the artist's name
    (c) Then they enter the Youtbube music video's id
    (d) Lastly they click on the "Create Playlist" button.
  They can keep adding to the playlist with the above process, and delete a video on demand.

[2] If a user want to add a music video to the library, they navigate to the "Add Song to Library" form and fill it:
    (a) They enter the name of the music video
    (b) They also enter in the artist's name
    (c) Then they enter the Youtbube music video's id
    (d) Lastly they click on the "Add Song to Library' button.
