1.1.0 / 2019-02-16
=================
  * [New] add `BigInt64Array` and `BigUint64Array`
  * [Refactor] use an array instead of an object for storing Typed Array names
  * [Deps] update `function-bind`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `covert`, `is-callable`, `replace`, `semver`, `tape`
  * [Tests] up to `node` `v11.10`, `v10.15`, `v9.11`, `v8.15`, `v7.10`, `v6.16`, `v5.8`, `v4.6`
  * [Tests] use `npm audit` instead of `nsp`
  * [Tests] remove `jscs`

1.0.1 / 2016-03-19
=================
  * [Fix] `Symbol.toStringTag` is on the super-[[Prototype]] of Float32Array, not the [[Prototype]]
  * [Deps] update `is-typed-array`, `function-bind`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`, `is-callable`
  * [Tests] up to `node` `v5.9`, `v4.4`
  * [Tests] use pretest/posttest for linting/security

1.0.0 / 2015-10-05
=================
  * Initial release.
