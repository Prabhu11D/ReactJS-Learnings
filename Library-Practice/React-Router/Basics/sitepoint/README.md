# React Router v5: The Complete Guide

[sitepoint](https://www.sitepoint.com/react-router-complete-guide/)\
[github](https://github.com/sitepoint-editors/react-router-demo)

* React Router is used to build "Single Page Application"

* Routing is the process of keeping the browser URL in sync with what’s being rendered on the page. React Router lets you handle routing declaratively

## Overview

* basic navigational routing
* nested routing
* nested routing with path parameters
* protected routing

## Setup

```cmd
npx create-react-app react-router-demo
cd react-router-demo
npm install react-router-dom
```

## React Router Basics

### The `Router` Component

Router component routes the view in specific url\
there are two types of URL

  1. BrowserRouter
  2. HashRouter

**BrowserRouter** uses HTML5 History API.\
**HashRouter** uses window.location.hash

if a browser doesn't support History API 'HashRouter' is a best choice.

### `Link` and `Route` Component

* Route -  It renders some UI if the current location matches the route’s path
* Link -  is used to navigate between pages

## Nested Routing

### \<Route>

* component
* children
* render

### Path and Match

* match.url
* match.path
* match.isExact
* match.params

### Implicit passing of props

Route automatically passes props(match, history, location) to component

### The `Switch` Component

It only render the first route that matches the path

### Dynamic Nested Routing

* using match object
* path vs url

### Nested Routing With Path Parameters

## Protected Routes

### The `Redirect` Component

### custom Routes
