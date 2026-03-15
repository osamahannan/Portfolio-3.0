declare module "gsap-trial/SplitText" {
  export interface SplitTextVars {
    type?: string;
    charsClass?: string;
    wordsClass?: string;
    linesClass?: string;
    [key: string]: unknown;
  }

  export type SplitTextTarget =
    | string
    | string[]
    | Element
    | Element[]
    | NodeList
    | NodeListOf<Element>;

  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    constructor(target: SplitTextTarget, vars?: SplitTextVars);
    revert(): void;
  }
}
