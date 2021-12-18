# FruitDex
A project created using React Native CLI which mimics the functionalities for a PokeDex for the regional fruits indigenous to the Caribbean.

### |--API NOTE--|
We developed and deployed our own API to have full control of the information which could be added and maintained throughout the existence of our application, the data was compiled using many resources as such we would like extend credit to the following:
* [Tropical Fruit and Vegetable](http://www.tropicalfruitandveg.com/)
* [WiWords - Fruit Genre](http://wiwords.com/tag/fruit)
* [Internation Tropical Fruit Network](https://www.itfnet.org/v1/tropical-fruit-info/#:~:text=Tropical%20fruits%20are%20defined%20as,America%2C%20the%20Caribbean%20and%20Oceania)

# Table of Contents
* [Requirements](#requirements)
* [Setup](#setup)
* [Main Scripts](#main-scripts)
  * [npm run android](#npm-run-android)
  * [npm run ios](#npm-run-ios)
  * [npm run start](#npm-run-start)
  * [npm run test](#npm-run-test)
* [Running Tests](#running-tests)
* [Troubleshooting](#troubleshooting)

## Requirements
* Node v16.13.0 (Newer available releases don't facilitate required packages)
* Either  a {iOS device or Android device} or {iOS emulator via xCode or Android emulator via Android Studio}

## Setup
Open a terminal from within the repo and type `npm install` to install the required node_modules and generate your package.lock,
NOTE: you can also use `yarn install`, it's entirely your choice. Once the .lock file is generated you may use any of the builder scripts.

## Main Scripts
### `npm run android`
Starts metro and opens the application on any connected android device (emulator or physical device).
### `npm run ios`
Starts metro and opens the application on any connected iOS emulators or iPhones(requires xCode).
### `npm run start`
Starts the metro within whatever terminal its entered in

## Running Tests
Once set up properly, you can just type `npm run test` which will run the tests using the jest library.

## Troubleshooting
* If you're still unable to run the application through the repo, it may be due to a discrepancy in node version, use node -v to ensure you are at most v16.13.0
* Ensure that ENVIRONMENT_VARIABLES are properly configured on system: 
`ANDROID_HOME: %LOCALAPPDATA%\Android\Sdk` `ANDROID_PLATFORM_TOOLS: C:\Users\%USER%\AppData\Local\Android\Sdk\platform-tools`

