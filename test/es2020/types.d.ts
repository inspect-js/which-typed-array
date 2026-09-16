import {
	TypedArray,
	WhichTypedArray,
} from '../../';

type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;

type Assert<Pass extends true> = Pass;

type IsAny<T> = 0 extends (1 & T) ? true : false;

type _typedArrayIsNotAny = Assert<Equal<IsAny<TypedArray>, false>>;

type _int8 = Assert<Equal<WhichTypedArray<Int8Array>, 'Int8Array'>>;
type _bigUint64 = Assert<Equal<WhichTypedArray<BigUint64Array>, 'BigUint64Array'>>;

type _stringInput = Assert<Equal<WhichTypedArray<string>, false | null>>;
type _mixedInput = Assert<
	Equal<
		WhichTypedArray<Int8Array | string>,
		'Int8Array' | false | null
	>
>;
