import type { TypedArray, TypedArrayName } from '.';

declare function ToStringTagGetter(receiver: TypedArray): TypedArrayName;
declare function ToStringTagGetter(receiver: unknown): undefined;

declare function BoundSlice(receier: TypedArray, ...args: Parameters<TypedArray['slice']>): ReturnType<TypedArray['slice']>;

declare function BoundSet(receier: TypedArray, ...args: Parameters<TypedArray['set']>): ReturnType<TypedArray['set']>;

type Getter = typeof ToStringTagGetter | typeof BoundSlice | typeof BoundSet;

type Cache = {
	[k in `\$${TypedArrayName}`]?: Getter;
} & {
	__proto__: null;
};

export type {
	ToStringTagGetter,
	BoundSlice,
	BoundSet,
	Getter,
	Cache,
};
