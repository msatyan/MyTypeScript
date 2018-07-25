# TypeScript Sample

Sample TypeScript with VS Code development env. 

```bash
# clone the project and then
cd MyTypeScript
npm install
``` 

### Run TypeScript compiler in watch mode
```bash
Open a command Windows 
cd MyTypeScript

# run on watch mode  
tsc -w

# FYI: Option for running non watch mode. 
# Run "tsc" to compile the TypeScript code
# From VS Code: <ctrl>+Shift+B 
tsc  
```

### run the development server (lite-server))
```bash
# Open another command Windows 
# cd MyTypeScript
npm start

# Then from VS Code debugger select 
Launch Localhost with sourcemap
``` 




### Debugger for Chrome
Install VS Code plugin [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) 

#### Attach to Chrome
In order to attach to Chrome you need to run Chrome with remote debugging enabled on port specified in the config. For example chrome.exe --remote-debugging-port=9222.

```bash
# Windows
Right click the Chrome shortcut, and select properties
In the "target" field, append --remote-debugging-port=9222
Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222

# macOS
In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222

# Linux
In a terminal, launch google-chrome --remote-debugging-port=9222

```

An example launch.json file for an "attach" config.
```json
{
    "version": "0.1.0",
    "configurations": [
        {
            "name": "Attach to url with files served from ./out",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "url": "<url of the open browser tab to connect to>",
            "webRoot": "${workspaceFolder}/out"
        }
    ]
}
```

See also:
- http://www.mithunvp.com/typescript-tutorials-setting-visual-studio-code/
- https://code.visualstudio.com/blogs/2016/02/23/introducing-chrome-debugger-for-vs-code



### TS Basics

### Variable Declaration
- var
- let (block-scoped)
- const (block-scoped and also to make it read-only)

var to declare variables. If the variable is read-only, you can use declare const. You can also use declare let if the variable is .

### [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global. If you re-declare a JavaScript variable, it will not lose its value

```javascript
var x = 1;
var y = 2;

function a() 
{
    x = 3; 
    y = 4; 
}  

a();
console.log(x, y); 
```

### let and const

```javascript
const pi = 3.14;
var   x  = 30;

if (x==30) 
{
  let x = 40;
}

console.log(x); 
```


```javascript
const person = 
{
 name: 'Tom',
 age: 15
}

// In this case person object is const and immutable
// However, the properties of a const object can change
// So the age can be updated. 

person.age = 18;

// If we need to freeze everything, we may called Object.freeze
const tom = Object.freeze(person);

// Even if we try to update (it will have the age 18)
tom.age = 20
```
