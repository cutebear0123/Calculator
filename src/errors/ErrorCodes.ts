export enum ErrorCodes {
  // Lexer
  InvalidCharacter        = 'InvalidCharacter', 
  InvalidOperator         = 'InvalidOperator', 
  TwoDecimalPoints        = 'TwoDecimalPoints', 

  // Parser
  ExtraTrailingTokens     = 'ExtraTrailingTokens', 
  InvalidToken            = 'InvalidToken', 
  MissingOpenParenthesis  = 'MissingOpenParenthesis', 
  MissingCloseParenthesis = 'MissingCloseParenthesis', 
  NotANumber              = 'NotANumber', 
  NothingToParse          = 'NothingToParse', 

  // Evaluator
  InvalidConstant         = 'InvalidConstant', 
  InvalidFunctionName     = 'InvalidFunctionName', 

  // Implementation
  EmptyExpressionStack    = 'EmptyExpressionStack', 
  NonEmptyStack           = 'NonEmptyStack', 
}