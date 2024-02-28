# Coding Theory Calculator

![image](https://github.com/pl3lee/coding-theory-calculator/assets/64212628/5a4d6b39-22a2-44f1-add3-99efbbaef6c4)

Visit the live site [here](https://coding-theory-calculator.billylee.me)

Welcome to the Coding Theory Calculator GitHub page! This repository contains the source code for my Coding Theory Calculator webpage, which is designed to help you solve a variety of coding theory related problems, including calculating the Hamming distance, decoding Hamming codes, C24 decoding, syndrome decoding, and more.

## About

I created this website because I could not find any online tools to help me solve coding theory related computational problems when taking the Coding Theory course CO331 at the University of Waterloo. I have obtained the permission of Professor Alfred Menezes to publish this website. Apart from the calculators themselves, this website contains some basic definitions on each page.

## Built With

This website is created using the following technologies:

- Next.js
- TailwindCSS
- Express
- Node.js

## Contribute

To contribute, first fork this repository and clone it to your local machine. Then, run the following commands to start the local backend server:
```bash
cd server
npm install
npm run dev
```
Open a new terminal and run the following commands to start the local frontend server:
```bash
cd client
npm install
npm run dev
```
If you have Docker installed on the local machine, you use VSCode, and you want to avoid conflicting node versions, you can use the Dev Containers extension to open this project in a container. The container already has node installed and is configured to forward ports 3000 and 3001. After you open the project in the dev container, you can run the commands above to start the local backend and frontend servers.

After you have made your changes, push them to your fork and create a pull request. Feel free to reach out to me through email at billy.pl.lee@gmail.com.
