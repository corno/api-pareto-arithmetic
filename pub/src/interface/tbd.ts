import * as pt from "pareto-core-types"

export type NumberRange = pt.Nested<number>

export type Add = ($: NumberRange) => number

export type Multiply = ($: NumberRange) => number

export type Negative = ($: number) => number

export type Modulo = ($: {
    numerator: number
    denominator: number
}) => number

export type Substract = ($: {
    minuend: number
    subtrahend: number
}) => number