# README Generator

## Installation 

GitHub: https://github.com/jenryhennifer/READMEgenerator

'npm index.js 

## Technology Used

* JavaScript
* Node.js
* Inquirer
* npm

## Sample

[Youtube Sample Video](https://youtu.be/WmI48GBTX4k)


##  Description

The purpose of this project was to create a README.md generator through prompts in the terminal. When index.js is run in the terminal, the user is asked a series of questions abou their name, email, github username, title of project, description, installation, usage, a list of license options, contributors, and tests. This will then be written into a new READMEsample.md document. 

This program uses npm install to require features:
```
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
```

Inquirer is ued to prompt the quesitons and save answers as an object. The type will determine what type of prompt there will be, the name will create a name of they key for the object, and the messsage will prompt a message for the user. The input response will create the value for they key. Example:

```
{
    type: 'input',
    name: 'username',
    message: 'GitHub Username:'
},
```

The prompts were written into a write file which takes in paramaters of name of file (READMEsample.md), data for file (md), and the utf8.

```
const writeFileHere = util.promisify(fs.writeFile);
...
return writeFileHere("READMEsample.md", md, 'utf8');
```


<hr>

## License

MIT License

Copyright (c) 2020 Jennifer Henry

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<hr />
<hr />

# Author

Jennifer Henry

* [LinkedIn](https://www.linkedin.com/in/jennifer-henry-4a540a149/)
* [GitHub](https://github.com/jenryhennifer)
* jenhenry1995@gmail.com


