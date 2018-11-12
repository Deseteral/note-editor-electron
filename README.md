# note-editor-electron
Example electron app developed to support my Comp-Sci thesis.

## Download
To download prebuilt platform specific binaries visit:
https://github.com/Deseteral/note-editor-electron/releases

## Building
### Requirements
- node.js v10+
- yarn (`npm i -g yarn`)
- `libgconf2` (on linux)

You have to install dependencies using yarn:

```sh
yarn install
```

To run the application in development mode (quick):
```sh
yarn start
```

To build platform specific binaries run (very slow):
```sh
yarn make
```

## License
This project is licensed under the [MIT license](LICENSE).
