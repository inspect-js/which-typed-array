import {
    TypedArray,
    TypedArrayName,
    WhichTypedArray,
} from '../'

type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;

type Assert<Pass extends true> = Pass;

type _int8 = Assert<Equal<WhichTypedArray<Int8Array>, 'Int8Array'>>;
type _uint8 = Assert<Equal<WhichTypedArray<Uint8Array>, 'Uint8Array'>>;
type _uint8Clamped = Assert<Equal<WhichTypedArray<Uint8ClampedArray>, 'Uint8ClampedArray'>>;
type _int16 = Assert<Equal<WhichTypedArray<Int16Array>, 'Int16Array'>>;
type _uint16 = Assert<Equal<WhichTypedArray<Uint16Array>, 'Uint16Array'>>;
type _int32 = Assert<Equal<WhichTypedArray<Int32Array>, 'Int32Array'>>;
type _uint32 = Assert<Equal<WhichTypedArray<Uint32Array>, 'Uint32Array'>>;
type _float16 = Assert<Equal<WhichTypedArray<Float16Array>, 'Float16Array'>>;
type _float32 = Assert<Equal<WhichTypedArray<Float32Array>, 'Float32Array'>>;
type _float64 = Assert<Equal<WhichTypedArray<Float64Array>, 'Float64Array'>>;
type _bigInt64 = Assert<Equal<WhichTypedArray<BigInt64Array>, 'BigInt64Array'>>;
type _bigUint64 = Assert<Equal<WhichTypedArray<BigUint64Array>, 'BigUint64Array'>>;

type _smallInts = Assert<
    Equal<
        WhichTypedArray<Int8Array | Uint8Array>,
        'Int8Array' | 'Uint8Array'
    >
>;
type _int16OrFloat32 = Assert<
    Equal<
        WhichTypedArray<Int16Array | Float32Array>,
        'Int16Array' | 'Float32Array'
    >
>;
type _bigints = Assert<
    Equal<
        WhichTypedArray<BigInt64Array | BigUint64Array>,
        'BigInt64Array' | 'BigUint64Array'
    >
>;

type _everyName = Assert<Equal<WhichTypedArray<TypedArray>, TypedArrayName>>;

type _unknownInput = Assert<Equal<WhichTypedArray<unknown>, false | null>>;
type _mixedInput = Assert<
    Equal<
        WhichTypedArray<Int8Array | string>,
        'Int8Array' | false | null
    >
>;

