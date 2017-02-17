## Basic Working

 First User creates desired signature design using `builder.php` then when they click on Done button on that page a array of info about background, various elements..etc is passed onto `template.php` with help of ajax. This `template.php` file creates a template file inside `/templates` folder and write array of elements in `json` format and  then returns template file name that was created. Then after receving template file name the builder.php shows a link to use this.
  `signature.php` file shows the generated signature, it has two parameter one uid(User ID) and one tid(Template file name). Basic syntax will be something like : signature.php?uid=*1*&tid=*13161.ini* So 1 is the user id of player to show signature of, and 13161.ini is template file name.

## Some Important files that you should know about

- js/bcore.js   *-* Core javacsript file for interaction on `builder.php` page.
- builder.php   *-* The main GUI file with which user interacts to create template
- template.php  *-* Creates the template file and writes template details in `json` format.
- signature.php *-* Generates signature image.

##### You are allowed to edit the code but you are not allowed to release this code and claim it as your own, credits should always be given.
