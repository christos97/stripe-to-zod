/**
 * Remove optional properties when `@default` jsdoc tag is defined.
 *
 * Indeed, `z.{type}().optional().default({value})` will be
 * compile as a non-optional type.
 */
export declare function resolveDefaultProperties(sourceText: string): string;
