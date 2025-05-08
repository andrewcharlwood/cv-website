import classNames from 'classnames';
import React, {FC, memo} from 'react';
import {motion} from 'framer-motion';

import {footerContactLinks} from '../data/data';
import {FooterContactLinkItem} from '../data/dataDef'; // Corrected path

// Define listItemVariants here for individual link animation
const listItemVariants = {
  hidden: {opacity: 0, scale: 0.95, y: 20},
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {duration: 0.5, ease: 'easeOut'},
  },
};

const FooterContactLinks: FC = memo(() => {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-2">
      {footerContactLinks.map(({label, Icon, href, text}: FooterContactLinkItem) => (
        <motion.a
          key={label}
          aria-label={label}
          className={classNames(
            '-m-2 flex items-center rounded-md p-2 text-neutral-300 ' +
              'hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
          )}
          href={href}
          rel="noopener noreferrer" // Added for security/SEO best practice
          target="_blank" // Added for external links
          variants={listItemVariants} // Apply item variant for individual animation
        >
          <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5" />
          {text && <span className="ml-3 text-sm sm:text-base">{text}</span>}
        </motion.a>
      ))}
    </div>
  );
});

FooterContactLinks.displayName = 'FooterContactLinks';
export default FooterContactLinks; 