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

type _unknownInput = Assert<Equal<WhichTypedArray<unknown>, TypedArrayName | false | null>>;
type _mixedInput = Assert<
    Equal<
        WhichTypedArray<Int8Array | string>,
        'Int8Array' | false | null
    >
>;

type _anyInput = Assert<Equal<WhichTypedArray<any>, TypedArrayName | false | null>>;
type _objectInput = Assert<Equal<WhichTypedArray<object>, TypedArrayName | false | null>>;
type _emptyObjectInput = Assert<Equal<WhichTypedArray<{}>, TypedArrayName | false | null>>;
type _viewInput = Assert<Equal<WhichTypedArray<ArrayBufferView>, TypedArrayName | false | null>>;
type _lengthInput = Assert<Equal<WhichTypedArray<{ length: number }>, TypedArrayName | false | null>>;
type _lengthLiteralInput = Assert<Equal<WhichTypedArray<{ length: 0 }>, TypedArrayName | false | null>>;
type _iterableInput = Assert<Equal<WhichTypedArray<Iterable<number>>, TypedArrayName | false | null>>;
type _nestedBufferInput = Assert<
    Equal<
        WhichTypedArray<{ buffer: { byteLength: 0 } }>,
        TypedArrayName | false | null
    >
>;
type _optionalExtraMemberInput = Assert<
    Equal<
        WhichTypedArray<{ foo?: string; length: 0 }>,
        TypedArrayName | false | null
    >
>;
type _anyIndexSignatureInput = Assert<
    Equal<
        WhichTypedArray<{ [k: string]: any; length: 0 }>,
        TypedArrayName | false | null
    >
>;

type _arrayLikeNumberInput = Assert<
    Equal<
        WhichTypedArray<ArrayLike<number>>,
        Exclude<TypedArrayName, 'BigInt64Array' | 'BigUint64Array'> | false | null
    >
>;
type _arrayLikeBigIntInput = Assert<
    Equal<
        WhichTypedArray<ArrayLike<bigint>>,
        'BigInt64Array' | 'BigUint64Array' | false | null
    >
>;
type _toStringTagInput = Assert<
    Equal<
        WhichTypedArray<{ readonly [Symbol.toStringTag]: 'Int8Array' }>,
        'Int8Array' | false | null
    >
>;
type _wideTagInput = Assert<
    Equal<
        WhichTypedArray<Omit<Int8Array, typeof Symbol.toStringTag> & { readonly [Symbol.toStringTag]: string }>,
        'Int8Array' | false | null
    >
>;

type _requiredExtraMemberInput = Assert<Equal<WhichTypedArray<{ foo: string; length: 0 }>, false | null>>;
type _privateMemberInput = Assert<Equal<WhichTypedArray<PrivateLength>, false | null>>;
type _templateIndexInput = Assert<Equal<WhichTypedArray<{ [k: `x${string}`]: number }>, false | null>>;
type _numericKeyInput = Assert<Equal<WhichTypedArray<{ 0: number; length: 1 }>, false | null>>;
type _recordUnknownInput = Assert<Equal<WhichTypedArray<Record<string, unknown>>, false | null>>;
type _valueOfInput = Assert<Equal<WhichTypedArray<{ valueOf(): number }>, false | null>>;
type _disjointInput = Assert<Equal<WhichTypedArray<{ foo: string }>, false | null>>;
type _dateInput = Assert<Equal<WhichTypedArray<Date>, false | null>>;
type _arrayInput = Assert<Equal<WhichTypedArray<number[]>, false | null>>;
type _bufferInput = Assert<Equal<WhichTypedArray<ArrayBuffer>, false | null>>;
type _dataViewInput = Assert<Equal<WhichTypedArray<DataView>, false | null>>;
type _nullInput = Assert<Equal<WhichTypedArray<null>, false | null>>;

declare class PrivateLength {
    private brand: unknown;

    length: 0;
}
