---
theme: signalwerk
title: In the Shadows
---

```fm
style: negative
background: true
```

## Hello _👋_

# {{process.content.frontmatter.title}}

_A Web Component Story_

<footer>

2024 · Zurich · Stefan Huber

</footer>

--s--

```fm
style: image
background:
  image: https://portrait.signalwerk.ch/illustration/2020/rgb/w4000/stefan-huber.jpg
  position: 50% 40%
```

## Stefan

<div class="box box--w40p box--bottom box--white box--padding small">

- Developer
- ❦ Typography

</div>

<footer class="footer--right">

Illustration by [Benjamin Güdel](http://www.guedel.biz/) · 2020

</footer>

--s--

## Overview (20min)

- Examples and Demos
- Bridge Frameworks
- Server-Rendering

--s--

```fm
style: negative
background: true
```

## Examples

# Low-Tech approach

_Why use React/Vue/Svelte if I can be cheap?_

--s--

## Slides

<div style="font-size: 0.7em;">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>title</title>
  </head>
  <body>
    <!-- page content -->
    <slides-component href="slides.md"></slides-component>
  </body>
</html>
```

</div>

<footer>
It's not at all how I built this presentation. But let's start simple.
</footer>

--s--

## Slides

**HTML**

<div style="font-size: 0.8em;">

```html
<slides-component href="slides.md"></slides-component>
```

</div>

**Markdowns**

```md
# Hello Slide 1

––s––

# World Slide 2
```

--s--

## Component Slides

<div style="font-size: 0.7em;">

```js
// fetch from the href attribute
fetch(this.getAttribute("href"))
  .then((response) => response.text())
  .then((text) => {
    // split the slides
    const slides = text.split("––s––");

    // create slide components
    slides.forEach((slide) => {
      const slideElement = document.createElement("<slide-component>");
      slideElement.innerHTML = this.convertMarkdownToHtml(slide);
      this.shadowRoot.appendChild(slideElement);
    });
  });
```

</div>

--s--

## Component Slides

**from**

<div style="font-size: 0.6em;">

```html
<slides-component href="slides.md"></slides-component>
```

</div>

**to**

<div style="font-size: 0.6em;">

```html
<slides-component href="slides.md">
  #shadow-root
  <slide-component>...</slide-component>
  <slide-component>...</slide-component>
</slides-component>
```

</div>

--s--

## Component Slides

**from**

<div style="font-size: 0.6em;">

```html
<slides-component href="slides.md"></slides-component>
```

</div>

**to**

<div style="font-size: 0.6em;">

```html
<slides-component href="slides.md">
  #shadow-root
  <slide-component>
    #shadow-root
    <h1>Hello Slide 1</h1>
  </slide-component>
  <slide-component>
    #shadow-root
    <h1>World Slide 2</h1>
  </slide-component>
</slides-component>
```

</div>

--s--

## Add more components

**Markdowns**

```md
# Hello Slide 1

<video-button></video-button>

––s––

# World Slide 2
```

--s--

## Add more components

<div style="font-size: 0.6em;">

<!-- prettier-ignore-start -->

```html
<slides-component href="slides.md">
  #shadow-root
   
   
   
   
   
   
   
   
   
</slides-component>
```

<!-- prettier-ignore-end -->

</div>

--s--

## Add more components

<div style="font-size: 0.6em;">

<!-- prettier-ignore-start -->

```html
<slides-component href="slides.md">
  #shadow-root
  <slide-component>
    #shadow-root
    <h1>Hello Slide 1</h1>
 
 
 
 
  </slide-component>
  ...
</slides-component>
```

<!-- prettier-ignore-end -->

</div>

--s--

## Add more components

<div style="font-size: 0.6em;">

<!-- prettier-ignore-start -->

```html
<slides-component href="slides.md">
  #shadow-root
  <slide-component>
    #shadow-root
    <h1>Hello Slide 1</h1>
    <video-button>
      #shadow-root
      
    </video-button>
  </slide-component>
  ...
</slides-component>
```

<!-- prettier-ignore-end -->

</div>
--s--

## Add more components

<div style="font-size: 0.6em;">

```html
<slides-component href="slides.md">
  #shadow-root
  <slide-component>
    #shadow-root
    <h1>Hello Slide 1</h1>
    <video-button>
      #shadow-root
      <video></video>
    </video-button>
  </slide-component>
  ...
</slides-component>
```

</div>

--s--

## Styling?

## ⚠️ make short example with video-button

- part
- variable
- :host

--s--

```fm
style: negative
background: true
```

## Oportunity

# Bridge Frameworks

--s--

## Frameworks

- React
- Vue
- Svelte
- jQuery
- Angular
- Vanilla JS
- ...

--s--

## Drupal example (Twig)

<div class="img--border">

![alt text](img/migros-gruppe.jobs-drupal.png)

</div>

--s--

## Vue 2 example

![alt text](img/migros-gruppe.jobs-vue2.png)

--s--

## Vue 3 integration

## ⚠️ Screenshot missing

--s--

## Vue 2 nutzt eine Vue 3 Komponente

<div style="font-size: 0.5em;">

```html
<template>
  <search-panel-component
    :job-count="globalCount.job"
    :lang="lang"
  ></search-panel-component>
</template>

<script>
  import { mapState } from "vuex";
  import { language } from "@/utils/search/getLanguage";

  export default {
    computed: {
      ...mapState(["globalCount"]),
    },
    data() {
      return {
        lang: language,
      };
    },
  };
</script>
```

</div>

--s--

## Bridge Frameworks

- _Build a Web Component_
  - Build-Step in your Framework
- _Make the Web Component available_
  - `<scrıpt src="web-component.js"></scrıpt>`
- _Render markup_
  - `<web-component></web-component>`

--s--

```fm
style: negative
background: true
```

## Really?

# Server-Rendering

--s--

## Do you need it?

![alt text](img/migros-gruppe.jobs-vue2.png)

--s--

## Do you need it?

<div style="font-size: 0.8em;">

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>…</title>
    <meta property="og:description" content="…" />
  </head>
  <body>
    <!-- page content -->
    <h1>Title of page</h1>
    <p>Text of page</p>
    <input type="search" />
  </body>
</html>
```

</div>

--s--

## Do you need it?

<div style="font-size: 0.8em;">

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>…</title>
    <meta property="og:description" content="…" />
  </head>
  <body>
    <!-- page content -->
    <h1>Title of page</h1>
    <p>Text of page</p>
    <search-panel-component … />
  </body>
</html>
```

</div>

--s--

## Do you need it?

<div style="font-size: 0.8em;">

```html
<carousel-component>
  <image-component path="http://placekitten.com/360/200" />
  <image-component path="http://placekitten.com/300/200" />
  <image-component path="http://placekitten.com/420/200" />
</carousel-component>
```

</div>

--s--

## Do you need it?

<div style="font-size: 0.8em;">

```html
<carousel-component>
  <img src="http://placekitten.com/360/200" />
  <img src="http://placekitten.com/300/200" />
  <img src="http://placekitten.com/420/200" />
</carousel-component>
```

</div>

# ⚠️ ADD Component

<template id="carousel">
  <style>
    :host {
      display: flex;
    }
    
    #images {
      flex-shrink: 1;
      display: flex;
      overflow: scroll;
    }
  </style>
  <button id="prev">Prev</button>
  <div id="images">
    <slot></slot>
  </div>
  <button id="next">Next</button>
</template>

<!-- <carousel-component>
  <img src="http://placekitten.com/360/200">
  <img src="http://placekitten.com/300/200">
  <img src="http://placekitten.com/420/200">
</carousel-component> -->

--s--

## Avoid it!

- Web Components can contain all kind of logic
- Server-Side-Rendering is hard

--s--

## Example MDX

- [Modal Migros](https://mdx.migros.ch/latest/components/modal/usage-TJz3pHvg)

--s--

## Adapt

- Take rendering of the «original» framework
- Hydration works

--s--

## Render React in Vue

# ⚠️ add date-picker and SSR

<div style="font-size: 0.8em;">

```html
<template>
  <your-react-component></your-react-component>
</template>
```

</div>

--s--

## Render React in Vue

# ⚠️ show whole example

<div style="font-size: 0.8em;">

```html
<template>
  <div ref="reactRoot" v-html="ssrContent"></div>
</template>
```

</div>

--s--

## Render React in Vue

<div style="font-size: 0.8em;">

```js
import { renderToString } from "react-dom/server";
import { hydrateRoot, createRoot } from "react-dom/client";

import YourReactComponent from "../react/test";
```

</div>

--s--

## Render React in Vue

<div style="font-size: 0.8em;">

```js
if (process.server) {
  ssrContent.value = renderToString(YourReactComponent);
}

if (process.client) {
  onMounted(() => {
    if (reactRoot.value) {
      root = hydrateRoot
        ? hydrateRoot(reactRoot.value, YourReactComponent)
        : createRoot(reactRoot.value).render(YourReactComponent);
    }
  });
}
```

</div>

--s--

```fm
style: negative
background: true
```

## exit 0; thx

# Questions?
