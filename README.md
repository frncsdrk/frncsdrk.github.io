# frncsdrk.github.io

my profile

## Development

### Setup

- Run `npm i`
- Run `git submodule update --init --recursive` to checkout al submodules

## Publishing

- `npm run build`
- commit changes to develop
- `./publish`

## Scripts

### `npm run serve`

Run the website locally.

### `npm run build`

Create a production build of the website, the generated files can be found at `./public` folder, you can [deploy it as a static website].

### Update submodules

Run `git submodule foreach git pull origin master`

## License

[MIT](License) (c) 2016 - 2022 frncsdrk

[License]: ./LICENSE
