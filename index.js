const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")

// const questions = [

// ];

function promptQuestions(){
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'username',
            message: 'GitHub Username:'
        },
        {
            type: 'input',
            name: 'title',
            message: 'Title: '
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of Project: '
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
            type: '', //possibly give options
            name: 'liscence',
            message: ''
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


function writeToFile(fileName, data) {

}

function init() {

}

init();

promptQuestions();