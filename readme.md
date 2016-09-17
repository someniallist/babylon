# Audit Beautifier <small>Babylon</small>

## Synopsis
A Chrome extension that parses the audit information in Tokyo for a restaurant's menu audits and shows a diff to the user.

## Code Example
**Turn this awful mess:**
![Bad](http://i.imgur.com/8eSl6BM.png)

**Into something more readable:**
![Good](http://i.imgur.com/jixoQ06.png)

## Motivation
The current audit display does not make it immediately apparent what was changed in the action and drastically increases the amount of time it takes to QA these issues in particular.

## Installation
Load this repository as an extension in Chrome. Make sure you have **Developer Mode** enabled.

## Technology
* **[jQuery](https://jquery.com/)** for DOM manipulation
* **[google-diff-match-patch](https://code.google.com/p/google-diff-match-patch/)** for diffing

## Contributors
* Niall Casey
