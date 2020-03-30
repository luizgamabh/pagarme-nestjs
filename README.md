![pagar.me](https://pagarme.s3.amazonaws.com/logo.svg)

![Nest](https://s3.amazonaws.com/nest.js/logo-sm.svg)

<p style="text-align: center;"><a target="_blank" href="https://github.com/pagarme/pagarme-js">Pagar.me</a> module for <a target="_blank" href="https://github.com/nestjs/nestJS">Nest</a>.</p>

<p style="text-align: center;">
<a href="https://www.npmjs.com/package/nestjs-pagarme/v/latest" target="_blank"><img src="https://img.shields.io/npm/v/nestjs-pagarme" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
</p>

## Description

The most easy implementation of pagar.me API using TypeScript autocomplete advantage.


## Installation

```bash
$ npm install --save nestjs-pagarme
```



## Quick Start

Import `PagarMeModule` into your root module:

```typescript
@Module({
  imports: [
    PagarMeModule.forRoot({
        strategy: 'apiKey',
        api_key: process.env.PAGARME_API_KEY
    }),
    // ... other imports
  ]
})
export class AppModule {}
```

### Take advantage of auto complete

Autocomplete will consider the selected strategy as in the image below:

![Auto complete](https://pagarme.s3.amazonaws.com/autocomplete.png)



## Support



## Links

- Author - [Luiz Gustavo Freire Gama](https://guto.dev)
- NestJS website - [https://nestjs.com](https://nestjs.com/)



## Dependencies

[pagarme-js](https://www.npmjs.com/package/pagarmejs)



## License

pagarme-js is [MIT licensed](https://github.com/pagarme/pagarme-js/blob/master/LICENSE.md).

nestjs-pagarme is [MIT licensed]().
