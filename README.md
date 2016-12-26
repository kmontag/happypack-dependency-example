To see the issue in action:

    $ npm install
    $ ./demo

To compare standard webpack behavior with happypack
behavior, try modifying `dependency.txt` while
running both of:

    $ node_modules/.bin/webpack --watch
    $ STANDARD_WEBPACK=1 node_modules/.bin/webpack --watch
