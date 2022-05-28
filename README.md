# ArithmeticExpressionEvaluator
How to use it? In Angular, you can access it via dependency injection. Otherwise you can create an object. You can specify via a boolean (here 'true') to get the result as an integer.

```
arithmeticExpressionEvaluator.evaluate('10 + 2 * 6')   // shows 22.0
arithmeticExpressionEvaluator.evaluate('10 + 2 * 6', true)   // shows 22 (integer only)
```

The Karma test code is:
```
import {ArithmeticExpressionEvaluator} from './arithmetic-expression-evaluator.service';

describe('Arithmetic Expression Evaluation', () => {
    let arithmeticExpressionEvaluator: ArithmeticExpressionEvaluator;
    beforeEach(() => {
        arithmeticExpressionEvaluator = new ArithmeticExpressionEvaluator();
    });
    it('Arithmetic Expression Evaluation - double result', () => {
        expect(arithmeticExpressionEvaluator.evaluate('10 + 2 * 6')).toBe(22.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * 2 + 12')).toBe(212.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * 2 + -12')).toBe(188.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * (2) + -12')).toBe(188.0);
        expect(arithmeticExpressionEvaluator.evaluate('-100 * 2 + 12')).toBe(-188.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * 2 ^ 12')).toBe(409600.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * ( 2 + 12 )')).toBe(1400.0);
        expect(arithmeticExpressionEvaluator.evaluate('(100) * (( 2 ) + (12) )')).toBe(1400.0);
        expect(arithmeticExpressionEvaluator.evaluate('100 * ( 2 + 12 ) / 14')).toBe(100.0);
    });
    it('Arithmetic Expression Evaluation - integer result', () => {
        expect(arithmeticExpressionEvaluator.evaluateAll('10 + 2 * 6',  true)).toBe(22);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * 2 + 12' , true)).toBe(212);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * 2 + -12', true)).toBe(188);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * (2) + -12', true)).toBe(188);
        expect(arithmeticExpressionEvaluator.evaluateAll('-100 * 2 + 12' , true)).toBe(-188);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * 2 ^ 12', true)).toBe(409600);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * ( 2 + 12 )', true)).toBe(1400);
        expect(arithmeticExpressionEvaluator.evaluateAll('(100) * (( 2 ) + (12) )', true)).toBe(1400);
        expect(arithmeticExpressionEvaluator.evaluateAll('100 * ( 2 + 12 ) / 14', true)).toBe(100);
    });
});
```
