// Modules

declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
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
//declare module 'read-more-read-less-toggler-edit';
declare module 'video-react';
//declare module "read-more-read-less-toggler" {
//function ReadMoreToggler(): any;
//export = ReadMoreToggler;
//}

declare module 'lodash/debounce' {
  import {debounce} from 'lodash';

  export default debounce;
}
