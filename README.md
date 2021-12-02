# unnamed-ui
We will use Git submodules to combine several separate components into one.

# doc
https://aegir12.github.io/unnamed-ui/

# module
git submodule add https://github.com/aegir12/async-popup

## Install

```bash
npm install --save unnamed-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'unnamed-ui'
import 'unnamed-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [aegir12](https://github.com/aegir12)
