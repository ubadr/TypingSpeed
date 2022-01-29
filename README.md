# TypingSpeed

<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ubadr/TypingSpeed">


Practice and improve your typing speed and accuracy.

![TypingSpeed](assets/img/website.png?raw=true)

## Cloning the repository

You can clone the repository to your local computer to easily fix merge conflicts, add or remove files, and push larger commits.

```
$ git clone https://github.com/ubadr/TypingSpeed
```

## Documentation

TypingSpeed uses [api.quotable.io](https://github.com/lukePeavey/quotable) to generate random quotes from 900 different authors.

```javascript
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => data.content)
```

The Gross WPM is the typing speed without error penalties. To mathematically calculate the Gross WPM, the number of typed entries (key depressions) is divided by 5 (a word has a length of 5 characters), then divided by the elapsed time (min).
<br/><br/>
![WPM formula](https://latex.codecogs.com/gif.latex?\dpi{150}&space;\bg_white&space;WPM&space;=&space;\frac{\frac{Entries}{5}}{Time&space;(min)})
<br/><br/>
The accuracy is defined by the percentage of correct entries out of the total typed entries.
<br/><br/>
![Accuracy formula](https://latex.codecogs.com/gif.latex?\dpi{150}&space;\bg_white&space;WPM&space;=&space;\frac{Correct\:&space;entries}{Total&space;\:&space;entries}\times&space;100)

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
    
## License

Distributed under the MIT License. See LICENSE for more information.

## Resources
https://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula
<br/>
https://monkeytype.com
<br/>
https://www.speedtypingonline.com/typing-equations
