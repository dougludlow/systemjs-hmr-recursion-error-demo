# Demo for `systemjs-hmr` recursion issue

See https://github.com/alexisvincent/systemjs-hot-reloader/issues/127.

## Running
```bash
$ yarn
$ yarn run bundle # optional
$ yarn start
```

Navigate to http://localhost:8080/

## Reproing the error

- Make changes to `client/styles/styles.css` or any reloadable files in `client`.
- Usually happens after the 2nd or 3rd time. 