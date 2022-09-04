import * as pt from "pareto-core-types"

export type TNumberRange = pt.Nested<number>

export type FAdd = ($: TNumberRange) => number

export type FMultiply = ($: TNumberRange) => number

export type FNegative = ($: number) => number

// export type FModulo = ($: {
//     numerator: number
//     denominator: number
// }) => number

export type FSubstract = ($: {
    minuend: number
    subtrahend: number
}) => number

export type FMax = (
    $: {
        /**
         * the minimum is needed for when the array of number is empty
         */
        minimum: number,
        numbers: pt.Nested<number>
    }
) => number


export type FDictionaryMax = (
    $: {
        /**
         * the minimum is needed for when the array of number is empty
         */
        minimum: number,
        numbers: pt.Dictionary<number>
    }
) => number

export type FArrayMax = (
    $: {
        /**
         * the minimum is needed for when the array of number is empty
         */
        minimum: number,
        numbers: pt.Array<number>
    }
) => number


export type FMin = (
    $: {
        /**
         * the maximum is needed for when the array of number is empty
         */
        maximum: number,
        numbers: pt.Nested<number>
    }
) => number

export type FArrayMin = (
    $: {
        /**
         * the maximum is needed for when the array of number is empty
         */
        maximum: number,
        numbers: pt.Array<number>
    }
) => number

export type FDictionaryMin = (
    $: {
        /**
         * the maximum is needed for when the array of number is empty
         */
        maximum: number,
        numbers: pt.Dictionary<number>
    }
) => number
