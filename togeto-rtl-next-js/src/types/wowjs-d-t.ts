declare module 'wowjs' {
  export interface WOWOptions {
    boxClass?: string; // Default: 'wow'
    animateClass?: string; // Default: 'animate__animated'
    offset?: number; // Default: 0
    mobile?: boolean; // Default: true
    live?: boolean; // Default: true
    callback?: (box: HTMLElement) => void; // Callback when element is animated
    scrollContainer?: string | null; // Scroll container selector
  }

  export class WOW {
    constructor(options?: WOWOptions);
    init(): void;
    sync(): void; // Add this to avoid TypeScript error
  }
}
