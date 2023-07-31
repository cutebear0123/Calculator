import { TokenType } from "./enums";

export const parenthesis = ['(', ')'] as const;
export const unaryOperator = ['+', '-', '~'] as const;
export const binaryOperator = ['**', '*', '/', '%', '+', '-', '<<', '>>', '>>>', '&', '^', '|'] as const;
export const constantKeyword = ['E', 'LN10', 'LN2', 'LOG10E', 'LOG2E', 'PI', 'SQRT1_2', 'SQRT2'] as const;
export const functionKeyword = ['abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'cbrt', 'ceil', 'clz32', 'cos', 'cosh', 'exp', 'expm1', 'floor', 'fround', 'hypot', 'imul', 'log', 'log10', 'log1p', 'log2', 'max', 'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc'] as const;

export type ParenthesisKey = (typeof parenthesis)[number];
export type UnaryOperatorKey = (typeof unaryOperator)[number];
export type BinaryOperatorKey = (typeof binaryOperator)[number];
export type ConstantKeywordKey = (typeof constantKeyword)[number];
export type FunctionKeywordKey = (typeof functionKeyword)[number];

export type Token = { type: TokenType, value: string, position: number };

export type Comma = { type: TokenType.Comma, value: ',', position: number };
export type Parenthesis = { type: TokenType.Parenthesis, value: ParenthesisKey, position: number };
export type UnaryOperator = { type: TokenType.UnaryOperator, value: UnaryOperatorKey, position: number };
export type BinaryOperator = { type: TokenType.BinaryOperator, value: BinaryOperatorKey, position: number };
export type Operator = UnaryOperator | BinaryOperator;
export type ConstantKeyword = { type: TokenType.ConstantKeyword, value: ConstantKeywordKey, position: number };
export type FunctionKeyword = { type: TokenType.FunctionKeyword, value: FunctionKeywordKey, position: number };
export type Keyword = ConstantKeyword | FunctionKeyword;

export type NumberExpression = { v: number, p: number }
export type UnaryExpression = { o: UnaryOperator, v: Expression, p: number };
export type BinaryExpression = { l: Expression, o: BinaryOperator, r: Expression, p: number };
export type ConstantExpression = { c: ConstantKeywordKey, p: number };
export type FunctionExpression = { f: FunctionKeywordKey, a: Expression[], p: number };
export type Expression = NumberExpression | UnaryExpression | BinaryExpression | ConstantExpression | FunctionExpression;