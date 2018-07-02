---
description: >-
  Here we're displaying a list of requests, that will return data, related to
  ingredients attributes
---

# Ingredients

## Can I become who I want to be?

That's a tough question but thankfully, our team is on it. Please bear with us while we're investigating.

## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.



## Have you had a chance to answer the previous question?

Yes, after a few months we finally found the answer. Sadly, Mike is on vacations right now so I'm afraid we are not able to provide the answer at this point.

| URL | Status |
| --- | --- | --- | --- | --- | --- | --- |
| [http://localhost:3000/api/ingredient](http://localhost:3000/api/ingredient) | **works** |
| [http://localhost:3000/api/ingredient?filter\[where\]\[id\]=5abc4edf66c784507b0d8cbd](http://localhost:3000/api/ingredient?filter[where][id]=5abc4edf66c784507b0d8cbd) | **works** |
| [http://localhost:3000/api/ingredient?filter\[where\]\[name\]=potatoes](http://localhost:3000/api/ingredient?filter[where][name]=potatoes) | **works** |
| [http://localhost:3000/api/ingredient?filter\[where\]\[and\]\[\]\[name\]\[like\]=oil&filter\[where\]\[and\]\[\]\[departmentId\]=5abc4edc66c784507b0d8c5b](http://localhost:3000/api/ingredient?filter[where][and][][name][like]=oil&filter[where][and][][departmentId]=5abc4edc66c784507b0d8c5b) | **works** |
| [http://localhost:3000/api/ingredient?filter\[where\]\[and\]\[\]\[name\]\[inq\]=chicken&filter\[where\]\[and\]\[\]\[name\]\[inq\]=pasta](http://localhost:3000/api/ingredient?filter[where][and][][name][inq]=chicken&filter[where][and][][name][inq]=pasta) | **NA** |
| [http://localhost:3000/api/ingredient?filter\[where\]\[name\]\[like\]=oil](http://localhost:3000/api/ingredient?filter[where][name][like]=oil) | **works** |

## Hosted links

| URL | Status |
| --- | --- | --- | --- | --- | --- |
| [https://loopback-recipe-search.herokuapp.com/api/ingredient?filter\[where\]\[id\]=5abc4edf66c784507b0d8cbd](https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][id]=5abc4edf66c784507b0d8cbd) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/ingredient?filter\[where\]\[name\]=potatoes](https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name]=potatoes) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/ingredient?filter\[where\]\[and\]\[\]\[name\]\[like\]=oil&filter\[where\]\[and\]\[\]\[departmentId\]=5abc4edc66c784507b0d8c5b](https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][and][][name][like]=oil&filter[where][and][][departmentId]=5abc4edc66c784507b0d8c5b) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/ingredient?filter\[where\]\[and\]\[\]\[name\]\[inq\]=chicken&filter\[where\]\[and\]\[\]\[name\]\[inq\]=pasta](https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][and][][name][inq]=chicken&filter[where][and][][name][inq]=pasta) | **works** |
| [https://loopback-recipe-search.herokuapp.com/api/ingredient?filter\[where\]\[name\]\[like\]=oil](https://loopback-recipe-search.herokuapp.com/api/ingredient?filter[where][name][like]=oil) | **works** |

