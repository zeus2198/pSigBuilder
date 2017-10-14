# Introduction
This is a web app that is used to make a signature of a **user** or rather allow the users to make their own custom signatures that can show real-time statistics.

This was originally made for an SA-MP server that I used to play on back in 2014 or 2015.

## Features
* Drag-drop interference for easily designing the signatures.
* Option to use custom fonts. *
* Option to use custom font colors.
* Option to add outline/stroke to text.
* You can either use a solid color or a custom picture as a background, has the option to upload or use image by URL. **
* Additional images can be added too via URL or by uploading. **

#### * Fonts are uploaded to the server to the '/gd_fonts/' directory by default.
#### ** Images are not uploaded to server, they are uploaded to [imgur.com](https://imgur.com)

## Demo
Here is the link for the tool deployed to work with one of the servers:
[**http://exmserv.me/signature/builder.php**](http://exmserv.me/signature/builder.php)
When you finalize the signature, you will be prompted to enter a username, enter any general username, for example, enter "test", to see the end result

Since this and the [SA-MP server signature builder](https://github.com/xxxZeus/SAMP-server-real-time-signature-builder) shares the same core, so you can watch its demo video to see how this app works, in case the above link is dead:
[![Demo Link](https://i.gyazo.com/be5a82b232ed747084e1c640f8874a98.png)](https://www.youtube.com/watch?v=rJ_SCEZM59Q&t=2s)

# Things to do to make it work for your server

**1.**
Make an API that outputs player statistics in JSON format.
**2.**
Open the file `builder.php` and go to line number `115`, you will see an HTML list there. Players drag and drop their statistics from this list. Add/remove/modify the items in the list.
**3.**
Open the file `signature.php` and go to line number `9`, put the URL to the API made in the step **1** in this line.
**4.**
Open the file `signature.php` and go to line number `140`, you will see switch-case statements that will be matching the list that you saw in step **2** do the same changes here that you did on that list, also change the keys of variable `$stats` to match the keys of the JSON object from your API.
**5.**
Open the file `/js/main.js` and go to line number `381` replace the URL with your API URL from step **1**. Now, modify the logic in the line `383` to match the logic when a non-registered name is used with your user API, for example in this case when an invalid name is used with the API, the API outputs nothing so I checked if its output data's length was less than 1.

# External Libraries used
* [jQuery](https://jquery.com/)
* [colpick](https://github.com/josedvq/colpick-jQuery-Color-Picker)
* [bPopup](http://dinbror.dk/bpopup/)