///<reference types="node" />
export declare class ArithmeticExpressionEvaluator { 
    static INVALID_NUMBER :number
    str: string;
    pos: number;
    ch: string;

    evaluate(expression: string): number 
    /**
     * Methode to evaluate everything
     * @returns {number}
     */

    evaluateAll(expression: string, resultIsInteger: boolean): number
    /**
     * Methode to evaluate everything and return an Integer
     * @returns {number}
     */
    nextChar() : string
    /**
     * Methode to get the next char in the string
     * @returns {string}
     */

    eat(charToEat: string): boolean
    /**
     * Methode to build the calculation
     * @returns {boolean}
     */


    parse(): number 
    /**
     * Methode to parse the next char
     * @returns {number}
     */

    parseExpression(): number 
    /**
     * Methode to parse expressions (+, -)
     * @returns {number}
     */
    parseTerm(): number 
    /**
     * Methode to parse terms (*,/)
     * @returns {number}
     */

    parseFactor(): number
    /**
     * Methode to calc everything
     * @returns {number}
     */
    degreesToRadians(degrees: number): number 
    /**
     * Methode to turn degrees to radians
     * @returns {number}
     */
}