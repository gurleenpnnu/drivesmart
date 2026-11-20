# DriveSmart - Driving Academy Website

CSE326 (Internet Programming) group project.
A website for a driving school where people can see courses, instructors,
road rules, send an enquiry, register, and the admin can manage learners.

**To open:** double click `html/index.html`. (Images, map and video need internet.)

Demo login: `admin@drivesmart.com` / `drive123`


## Folder structure

HTML, CSS and JavaScript are kept in separate folders.
Every page has its own CSS file and its own JS file with the same name.

```
drivesmart/
    html/       all 9 pages
    css/        common.css + one css file for each page
    js/         common.js  + one js file for each page
    videos/     lesson.mp4 (used on the instructors page)
```

The video is a free stock clip from Pexels:
"A Man Teaching a Teenager Boy Driving a Car" - https://www.pexels.com/video/9518188/

No CSS or JavaScript is written inside the HTML files.
The HTML only links to them:

```html
<link rel="stylesheet" href="../css/common.css">
<link rel="stylesheet" href="../css/courses.css">
...
<script src="../js/common.js"></script>
<script src="../js/courses.js"></script>
```


## Work division

| Member | HTML | CSS | JS |
|---|---|---|---|
| Member 1 | `index.html`, `about.html`, `contact.html` | `common.css`, `home.css`, `about.css`, `contact.css` | `common.js`, `home.js`, `contact.js` |
| Member 2 | `courses.html`, `instructors.html`, `road-rules.html` | `courses.css`, `instructors.css`, `road-rules.css` | `courses.js`, `instructors.js`, `road-rules.js` |
| Member 3 | `register.html`, `login.html`, `dashboard.html` | `register.css`, `login.css`, `dashboard.css` | `register.js`, `login.js`, `dashboard.js` |

### Member 1 - Home, About, Contact (+ navbar and footer)
- **Home** - hero with animation, stats, "why choose us" boxes, course preview, student review (`blockquote`, `cite`), call to action
- **About** - `figure` / `figcaption`, `ul` and `ol` lists, mission and vision, `mark`
- **Contact** - `address`, timing table, enquiry form, Google map (`iframe`), FAQ
- **common.css** - navbar, buttons, page banner, form boxes and footer used by every page
- **JS** - mobile menu button, greeting using `Date().getHours()`, contact form validation, show / hide FAQ answers

### Member 2 - Courses, Instructors, Road Rules
- **Courses** - course cards (`article`), fee table with `caption`, `thead`, `tbody`, `tfoot`, `rowspan`, `colspan`, fee calculator
- **Instructors** - instructor cards, weekly schedule table, `video` with `source`
- **Road Rules** - traffic signal made with `div`s, rules list (`dl`, `dt`, `dd`), quiz with `fieldset`, `legend` and radio buttons
- **JS** - fee calculator, "Read More" buttons, traffic light colour change (`style.backgroundColor`), quiz score (array + `for` loop)

### Member 3 - Register, Login, Dashboard
- **Register** - big form with `fieldset` / `legend` and input types: text, email, date, time, file, range, radio, checkbox, password, submit, reset, plus `select` and `textarea`
- **Login** - login form with show password checkbox
- **Dashboard** - stat cards, learners table with `progress` bars, add / remove / search learners, vehicles table
- **JS** - register validation (phone, age, password), login check + `localStorage`, add learner (`createElement`, `appendChild`), remove learner (`parentElement.remove()`), search (`toLowerCase`, `includes`)


## What we used (only from our syllabus slides)

**HTML tags:** html, head, title, meta, link, script, body, header, nav, main, section, article, footer,
h1-h4, p, br, hr, div, span, strong, em, b, small, mark, abbr, cite, blockquote, code, address,
ul, ol, li, dl, dt, dd, a, img, figure, figcaption, video, source, iframe,
table, caption, thead, tbody, tfoot, tr, th, td, form, fieldset, legend, label, input, select,
option, textarea, button, progress.

**CSS:** color, background-color, background-image, background-size, background-position,
px / % / vh units, font-family, font-size, font-weight, font-style, line-height, text-align,
text-decoration, text-transform, width, height, border, border-radius, padding, margin,
box-sizing, box-shadow, position (sticky), top, z-index, display, flex, flex-direction, flex-wrap,
justify-content, align-items, gap, grid, grid-template-columns, list-style-type,
@media, transition, transform (translateY, scale), :hover, @keyframes, animation.

**JavaScript:** let, if / else, for loop, arrays, functions, `getElementById`,
`getElementsByClassName`, `getElementsByTagName`, `innerHTML`, `.value`, `.checked`, `.style`,
`onclick`, `onsubmit`, `oninput`, `alert`, `Date`, `Number()`, `createElement`, `appendChild`,
`parentElement`, `remove()`, `toLowerCase()`, `includes()`, `localStorage`.
