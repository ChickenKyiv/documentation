---
description: >-
  Here we're displaying a list of requests, that will return data, related to
  courses attributes
---

# Courses

## Can I become who I want to be?

That's a tough question but thankfully, our team is on it. Please bear with us while we're investigating.

## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.



## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[type\]=course](http://localhost:3000/api/attribute?filter[where][type]=course) | **works** |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course](http://localhost:3000/api/attribute?filter[where][and][][type]=course) | **works** |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8a2](http://localhost:3000/api/attribute?filter[where][id]=5abc4e9da2738950031da8a2) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course&filter\[where\]\[and\]\[\]\[name\]=Desserts](http://localhost:3000/api/attribute?filter[where][and][][type]=course&filter[where][and][][name]=Desserts) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8a2](http://localhost:3000/api/attribute?filter[where][and][][type]=course&filter[where][and][][id]=5abc4e9da2738950031da8a2) |  |

## Hosted links

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[type\]=course](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][type]=course) | **works** |
| ​[https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=course) | **works** |
| ​[https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8a2](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][id]=5abc4e9da2738950031da8a2) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course&filter\[where\]\[and\]\[\]\[name\]=Desserts](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=course&filter[where][and][][name]=Desserts) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=course&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8a2](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=course&filter[where][and][][id]=5abc4e9da2738950031da8a2) | **works** |

