const inquirer = require("inquirer")
const axios = require('axios')
const fs = require("fs")
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

function questions(){
    return inquirer
        .prompt([

        {
            type: 'input',
            name: 'nameOfPerson',
            message: 'What is your first/last name?'

        },
        {
            type: 'input',
            name: 'username',
            message: 'GitHub Username:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Title of Project: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage: '
        },
        {
            type: 'list', //possibly give options
            name: 'license',
            message: 'What license would you like to use?',
            choices: ['MIT','apache','unlicense'] 
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Contributors: '
        },
        {
            type: 'input',
            name: 'test',
            message: 'Tests: '
        },


        ])
}

const licenses = (response) => {
    const options = {
    MIT: `MIT License

    Copyright (c) 2020 ${response.nameOfPerson}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`,

    apache: `Apache
    
    Copyright 2020 ${response.nameOfPerson}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`,

    unlicense: `Unlicense
    
    This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <http://unlicense.org/>`
    }
    return options[response.license];
};



function generateMD(response){
    return `
# ${response.title}


## Installation

${response.installation}
<hr>

## Description

${response.description}
<hr>

## Usage

${response.usage}
<hr>

## License

${licenses(response)}

<hr>

# Author

${response.nameOfPerson}

GitHub: ${response.username}

![my photo](https://github.com/${response.username}.png?size=200)

`
}


questions()
  .then(function(response) {
    const md = generateMD(response);

    return writeFileAsync("READMEsample.md", md);
  })
  .then(function() {
    console.log("Successfully wrote");
  })
  .catch(function(err) {
    console.log(err);
  });