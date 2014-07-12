# validity-require-one

Validate that at least one field of a given set has a value.

## Installation

```
npm install validity-require-one --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var validity = require('validity')
  , schemata = require('schemata')
  , save = require('save')
  , collection = save('author')
  , requireOne = require('validity-require-one')

var schema = schemata(
    { field1:
      { type: Boolean
      , validators: { all: [ requireOne(['field1', 'field2', 'field3']) ] }
      }
    , field2:
      { type: String
      , validators: { all: [ requireOne(['field1', 'field2', 'field3']) ] }
      }
    , field3:
      { type: String
      , validators: { all: [ requireOne(['field1', 'field2', 'field3']) ] }
      }
    })

```
