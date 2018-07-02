---
description: >-
  Here we're displaying a list of requests, that will return data, related to
  cuisines attributes
---

# Cuisines

## Can I become who I want to be?

That's a tough question but thankfully, our team is on it. Please bear with us while we're investigating.

## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.



## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[type\]=cuisine](http://localhost:3000/api/attribute?filter[where][type]=cuisine) | **works** |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine](http://localhost:3000/api/attribute?filter[where][and][][type]=cuisine) | **works** |
| ​[http://localhost:3000/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8b0](http://localhost:3000/api/attribute?filter[where][id]=5abc4e9da2738950031da8b0) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine&filter\[where\]\[and\]\[\]\[name\]=American](http://localhost:3000/api/attribute?filter[where][and][][type]=cuisine&filter[where][and][][name]=American) | **works** |
| [http://localhost:3000/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8b0](http://localhost:3000/api/attribute?filter[where][and][][type]=cuisine&filter[where][and][][id]=5abc4e9da2738950031da8b0) | **works** |

## Hosted links

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[type\]=cuisine](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][type]=cuisine) | **works** |
| ​[https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=cuisine) | **works** |
| ​[https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[id\]=5abc4e9da2738950031da8b0](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][id]=5abc4e9da2738950031da8b0) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine&filter\[where\]\[and\]\[\]\[name\]=American](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=cuisine&filter[where][and][][name]=American) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/attribute?filter\[where\]\[and\]\[\]\[type\]=cuisine&filter\[where\]\[and\]\[\]\[id\]=5abc4e9da2738950031da8b0](https://loopback-recipe-search.herokuapp.com/api/attribute?filter[where][and][][type]=cuisine&filter[where][and][][id]=5abc4e9da2738950031da8b0) |  |

