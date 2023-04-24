# kelly-criterion-client
Client side kelly criterion implementation, making it easier to explore probability distributions.


Can be viewed at http://yoloresponsibly.com/

https://www.caichinger.com/blog/2018/04/16/kelly_criterion1/

"The Kelly criterion is a formula used to determine the optimal size of a series of bets in order to maximize wealth. It is often described as optimizing the logarithm of wealth, and will do better than any other strategy in the long run."

The goal of this project is to get better at Clojure and ClojureScript while working on something that I will find useful to refer back to when making investments and future Clojure projects.

Blog/Writeups of the challenges I encountered can be found in this repo:
https://github.com/dawguy/Blog/tree/main/KellyCriterion

(This was my second ClojureScript project. https://github.com/dawguy/Blog/tree/main/Rowing contains the posts about getting my ClojureScript environment set up and interacting with a live database.)

## Building

Note: Currently to build the docker image the application must be built locally. This is mostly because it took 4 minutes to download all dependencies, and I don't plan on doing more than 2 more releases of Kelly Criterion application (implement URL reading for saving current probabilities, adding SSL support if required in this image). There was a best attempt in broken-dependency-Dockerfile, but the error wasn't worth digging into for right now compared to just building an image off the manually ran compile.

```zsh
docker build -t kelly-criterion-client .
docker run -it --rm -p 8001:80  --name kelly-criterion-client kelly-criterion-client
```
