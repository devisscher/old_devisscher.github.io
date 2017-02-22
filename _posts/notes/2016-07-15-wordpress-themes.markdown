---
layout: post
comments: true
title:  "Creating a Wordpress theme, cheats."
date:   2016-07-29T09:00:00Z
categories: notes
---

It's simple to create a WordPress theme. Here is a simple cheat sheet I use to get started.


To create a custom theme: 

1. Create a folder in ```/wp-content/themes/my-custom-theme```
2. Create a file named ```index.php``` and another called ```style.css```
3. Wordpress uses comments at the top of the page. For themes we can format style.css like this :

```
/*
	Theme Name: Thomas Google Materilize CSS
	Theme URI: http://Thomas.ca
	Description: Thomas Materialize CSS
	Version: 0.0.1
	Author: Thomas Devisscher
	Author URI: http://Thomas.ca
	Tags: Thomas, HTML5, Materialize CSS

	License: MIT
	License URI: http://opensource.org/licenses/mit-license.php
*/

```
3. You have created a theme! Go to the admin section of your Wordpress instance and activate this theme. 


To know more about the file structure of a theme consult the [template hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/).

## Custom Header logo

```
$args = array(
	'width'         => 980,
	'height'        => 60,
	'default-image' => get_template_directory_uri() . '/images/header.jpg',
	'uploads'       => true,
);
add_theme_support( 'custom-header', $args );
```

[Custom Headers](https://codex.wordpress.org/Custom_Headers)


## Registering and Displaying nav menus

### Register
First you need to register the menu in the functions.php file. 

``` 
function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
}
add_action( 'init', 'register_my_menu' );

```

Once you add this function you will see the menus options in the admin section. You can now add links to this menu.

### Display

Now choose where in your theme you want to display the menu.

``` <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?> ```


[Navigation Menus](https://codex.wordpress.org/Navigation_Menus)

### Dropdowns

In order to have nested menus we need to write a walker class. To preserve accessability, top level menu items should have an href equal to ```#!``` this means that the user should click to open the menu. (Hovering is impossible on tablets and phones.)


## Adding content to pages

Say you want to add a specific category of posts to your the home page. You can use the following loop. 

```
 <?php query_posts('category_name=home'); ?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php the_title(); ?>
       <?php the_content(); ?>
<?php endwhile; endif; ?>

```
This will show posts that are in the category Home. The user can now control what appears on the front page.

[Query posts](https://codex.wordpress.org/Function_Reference/query_posts)


#### Post featured images

To add featured images register featured image support. Then set the featured image in the content area where you want to display post images.

To register the feature: 

```
if ( function_exists( 'add_theme_support' ) ) { 
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 150, 150, true ); // default Post Thumbnail dimensions (cropped)

    // additional image sizes
    // delete the next line if you do not need additional image sizes
    add_image_size( 'category-thumb', 300, 9999 ); //300 pixels wide (and unlimited height)
}
```

To display the feature (Within your post display function): 

```
if ( has_post_thumbnail() ) {
	the_post_thumbnail();
} 
```
[For adding image sizes](https://developer.wordpress.org/reference/functions/add_image_size/)

## Internationalization i18n

- [Reference](https://developer.wordpress.org/themes/functionality/internationalization/)
- [Video](https://www.youtube.com/watch?v=fJfqgrzjEis)
- [Article](https://www.smashingmagazine.com/2011/12/internationalizing-localizing-wordpress-theme/)
- [Software](Poedit is a tool to create configuration files for string translations. https://poedit.net/)


## Small issues that can be fixed quickly

- [Admin toolbar is not showing up?](http://www.wpbeginner.com/wp-themes/how-to-fix-missing-admin-bar-issue-in-wordpress/)

