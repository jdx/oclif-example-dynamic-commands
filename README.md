example of dynamically generating commands in oclif

This is baseline functionality and oclif could be a lot friendlier, but this is how it can be done today. [See the hook for the magic](./src/hooks/init/addcommand.ts).

Usage
=====

```
$ yarn
$ ./bin/run mydynamiccommand
```
