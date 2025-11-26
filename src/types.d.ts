// Modules
/* eslint-disable import/newline-after-import */

declare module '*.jpg' {
  import type {StaticImageData} from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.webp' {
  import type {StaticImageData} from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  import type {StaticImageData} from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.jpeg' {
  import type {StaticImageData} from 'next/image';
  const value: StaticImageData;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module 'video-react';

declare module 'lodash/debounce' {
  import {debounce} from 'lodash';

  export default debounce;
}
