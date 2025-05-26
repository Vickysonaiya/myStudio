declare module 'react-typed' {
  import { Component } from 'react';

  interface TypedProps {
    strings: string[];
    typeSpeed?: number;
    backSpeed?: number;
    loop?: boolean;
    showCursor?: boolean;
    cursorChar?: string;
    autoStart?: boolean;
    startDelay?: number;
    backDelay?: number;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    onComplete?: () => void;
    onStringTyped?: (arrayPos: number) => void;
    onLastStringBackspaced?: () => void;
    onTypingPaused?: (arrayPos: number) => void;
    onTypingResumed?: (arrayPos: number) => void;
    onReset?: () => void;
    onStop?: (arrayPos: number) => void;
    onStart?: (arrayPos: number) => void;
    onDestroy?: () => void;
  }

  export default class Typed extends Component<TypedProps> {}
} 