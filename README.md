Palidation.js
===
<p>
<img src="https://img.shields.io/badge/dynamic/json?style=flat-square&color=informational&label=palidation.js&prefix=v&query=version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fashkanahrabi%2Fpalidation.js%2Fmaster%2Fpackage.json" alt="version"/>
<img alt="Codecov" src="https://img.shields.io/codecov/c/github/ashkanahrabi/palidation.js?label=test-covarage&style=flat-square">
</p>

Palidation.js provides a declarative way of Farsi (Persian) Validations and util Functions.

### Installation

To use as package dependency, install Palidation.js with the following command:
```
npm install palidation.js@latest
```

### Basic Usage

Simply import different functions from Palidation.js like:

```js
import { ConvertNums } from "palidation.js";

let input = 'تعداد: 17 عدد'; //Any string (containing English digits)

console.log(ConvertNums.toPersian(input));
// Output: 'تعداد: ۱۷ عدد'
```

### Full Documents

To see full documents and all the functions, visit the [Doc Page](https://ashkanahrabi.github.io/palidation.js/)

<br/>

-----------------


For issues and feature requests visit the [issue tracker](https://github.com/ashkanahrabi/palidation.js/issues).