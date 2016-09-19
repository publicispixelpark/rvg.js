# RVG.js

> Super-powered SVG in React, by [Chris Hutchinson](http://github.com/chrishutchinson)

## About

RVG.js standardises the creation of isomorphic SVG in React by providing super-powered elements. It can be used with both the `ReactDOM.render()` and `ReactDOMServer.renderToString()` methods.


## Usage

Install via npm:

    $ npm install rvg.js

Require into your project:

    const RVG = require('rvg');
    const SVG = RVG.SVG;
    const Circle = RVG.Circle;

You can also select which elements you wish to use:

    const {
      SVG,
      Line,
      Rectangle,
      Text
    } = require('rvg');

Create your SVG using React:

    render() {
      return (<SVG width={500} height={400} fill="#333">

                <Rectangle fill="darkgreen" x={200} y={100} height={100} width={50} />

                <Text x={20} y={100} fontFamily="Arial" fontSize={40} lineHeight={50} fill="#FFF">
                  {'This is a text string'}
                  {'broken over'}
                  {'multiple lines'}
                </Text>

              </SVG>);
    }


## Elements

### `<SVG />`


### `<Text />`


### `<Circle />`


### `<Ellipse />`


### `<Line />`


### `<Rectangle />`


### `<Image />`


## To do

* [ ] Make the `<Text />` element support automatic text wrapping
* [ ] Add some tests
* [ ] Build a better example
* [ ] Handle inlining of custom fonts and provide example
* [ ] Gradients
* [ ] Polylines
* [ ] Animation (?!)
* [ ] Groups