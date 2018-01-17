# react-svgloader

This is a ReactJS Component for SVG file loading by Ajax and DOM injection. This component allow us to insert any SVG file specifying a path and adding a class name for css customization.

### Example:

Please refer to the [example](example/src/App.js) file to see it working.

To run the example:
1. Clone the repository
2. Execute in console:
```BASH
cd example
npm install
npm start
```

### General Usage

As you will be able to see in [example](example/src/App.js) in order to use the component we need to importe it as:
```JAVASCRIPT
import SvgLoader from 'react-svgloader';
```

Then, in the render method we can just call it like:

```JAVASCRIPT
<SvgLoader src='/svg/logo.svg' className="App-logo svg-logo"/>
```

### Installation

Install this component is easy, just use npm as:
```BASH
npm install react-svgloader
```
