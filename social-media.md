---
layout: page
title: Social Media
subtitle: ''
img_path: ''
menu:
  main:
    weight: 4

---


body {
  background-color: #ddd;
  padding: 100px 20px 20px 20px;
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -10px;

  &__button {
    margin: 10px 5px 0;
  }
}

$social-button-radius: 70px;
$social-button-icon-size: 0.4;
$social-button-background: #fff;
$social-button-active-color: #fff;
$social-button-transition-time: 0.3s;

$social-button-colors: (
  "mail": #0072c6,
  "facebook": #3b5999,
  "linkedin": #0077b5,
  "github": #6e5494,
  "codepen": #212121,
  "steam": #7da10e,
  "snapchat":#eec900,
  "twitter": #55acee,
  "instagram": #e4405f,
  "npmjs": #c12127
);

.social-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  width: $social-button-radius;
  height: $social-button-radius;
  text-decoration: none;

  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 100%;
    background: $social-button-background;
    text-align: center;
  }

  i,
  svg {
    position: relative;
    z-index: 1;
    transition: $social-button-transition-time;
  }

  i {
    font-size: $social-button-radius * $social-button-icon-size;
  }

  svg {
    height: percentage($social-button-icon-size);
    width: percentage($social-button-icon-size);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 0;
    height: 0;
    border-radius: 100%;
    transition: $social-button-transition-time;
  }

  &:focus,
  &:hover {
    color: $social-button-active-color;

    &::after {
      width: 100%;
      height: 100%;
      margin-left: -50%;
    }
  }

  @each $name, $color in $social-button-colors {
    &--#{$name} {
      color: $color;

      &::after {
        background: $color;
      }
    }
  }
}



<div class="social-buttons">
  <a href="#" class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
    <span class="social-button__inner">
     <i class="fab fa-facebook-f"></i>
    </span>
  </a>
  <a href="#" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
    <span class="social-button__inner">
     <i class="fab fa-linkedin-in"></i>
    </span>
  </a>
  <a href="#" class="social-buttons__button social-button social-button--snapchat" aria-label="SnapChat">
    <span class="social-button__inner">
     <i class="fab fa-snapchat-ghost"></i>
    </span>
  </a>
  <a href="#" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
    <span class="social-button__inner">
     <i class="fab fa-github"></i>
    </span>
  </a>
  <a href="#" class="social-buttons__button social-button social-button--codepen" aria-label="CodePen">
    <span class="social-button__inner">
     <i class="fab fa-codepen"></i>
    </span>
  </a>
</div>


## **Professional Social Media:**

* Linkedin: [https://www.linkedin.com/in/iamrohitgund/](https://www.linkedin.com/in/iamrohitgund/ "https://www.linkedin.com/in/iamrohitgund/")
* GitHub: [https://github.com/iamrohitgund](https://github.com/iamrohitgund "https://github.com/iamrohitgund")
* BitBucket: [https://bitbucket.org/iamrohitgund/](https://bitbucket.org/iamrohitgund/ "https://bitbucket.org/iamrohitgund/")

## **General Social Media:**

* Instagram: [http://instagram.com/iamrohitgund](http://instagram.com/iamrohitgund "http://instagram.com/iamrohitgund")
* Facebook: [https://www.facebook.com/iamrohitgund](https://www.facebook.com/iamrohitgund "https://www.facebook.com/iamrohitgund")
* Twitter: [https://twitter.com/iamrohitgund](https://twitter.com/iamrohitgund "https://twitter.com/iamrohitgund")
* Self Hosted WordPress Blog: [http://infobird.in/](http://infobird.in/ "http://infobird.in/")
* Free WordPress Blog: [https://iamrohitgund.wordpress.com/](https://iamrohitgund.wordpress.com/ "https://iamrohitgund.wordpress.com/")
