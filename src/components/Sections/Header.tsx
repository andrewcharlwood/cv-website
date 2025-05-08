import {Dialog, Transition} from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';
import React, {FC, Fragment, memo, useCallback, useMemo, useState, useEffect} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

// Define AnimatedHamburgerIcon component here
const AnimatedHamburgerIcon: FC<{
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}> = memo(({isOpen, onClick, className}) => {
  return (
    <button
      aria-label="Menu Button"
      className={classNames(
        'relative z-50 flex h-8 w-8 items-center justify-center rounded-md focus:outline-none sm:hidden',
        className,
      )}
      onClick={onClick}>
      <div
        className={classNames(
          'absolute h-1 w-8 rounded-full bg-white transition-all duration-300 ease-in-out',
          isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[calc(50%-0.5rem)] -translate-y-1/2',
        )}
      />
      <div
        className={classNames(
          'absolute h-1 w-8 rounded-full bg-white transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2 opacity-100',
        )}
      />
      <div
        className={classNames(
          'absolute h-1 w-8 rounded-full bg-white transition-all duration-300 ease-in-out',
          isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-[calc(50%+0.5rem)] -translate-y-1/2',
        )}
      />
    </button>
  );
});
AnimatedHamburgerIcon.displayName = 'AnimatedHamburgerIcon';

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [
      SectionId.Hero,
      SectionId.Summary,
      SectionId.Resume,
      SectionId.Education,
      SectionId.Carousel,
    ],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} navSections={navSections} />
      <DesktopNav currentSection={currentSection} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const baseClass =
      'm-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none ' +
      'focus-visible:ring-2 focus-visible:ring-orange-500 sm:hover:text-orange-500 text-neutral-100 text-center';
    const activeClass = classNames(baseClass, 'text-orange-500');
    const inactiveClass = classNames(baseClass, 'text-neutral-100');
    return (
      <header
        className={classNames(
          'fixed top-0 z-50 hidden w-full bg-neutral-900/50 p-0 backdrop-blur sm:block',
          'transition-all duration-300 ease-in-out',
          {
            'opacity-100 translate-y-0': isScrolled,
            'opacity-0 -translate-y-full': !isScrolled,
          },
        )}
        id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null}> = memo(
  ({navSections, currentSection}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'block w-full p-3 text-lg rounded-lg first-letter:uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center border border-white';
    const activeClass = classNames(baseClass, 'bg-white/25 text-white font-semibold');
    const inactiveClass = classNames(baseClass, 'text-blue-100 hover:bg-white/15 hover:text-white font-medium');
    return (
      <>
        <div
          className={classNames(
            'fixed top-4 right-4 z-50 sm:hidden',
            'p-3 bg-[#005EB8B3] hover:bg-[#048CDAB3] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#005EB8]',
            'transition-all duration-300 ease-in-out',
            {
              'opacity-100 translate-y-0': isScrolled,
              'opacity-0 -translate-y-full': !isScrolled,
            },
          )}>
          <AnimatedHamburgerIcon
            isOpen={isOpen}
            onClick={toggleOpen}
          />
        </div>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex items-center justify-center p-4 sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-stone-900 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-out duration-300"
              enterFrom="opacity-0 scale-95 transform"
              enterTo="opacity-100 scale-100 transform"
              leave="transition-all ease-in duration-200"
              leaveFrom="opacity-100 scale-100 transform"
              leaveTo="opacity-0 scale-95 transform">
              <div className="relative w-11/12 max-w-xs rounded-xl shadow-2xl bg-gradient-to-br from-[#048CDA] to-[#005EB8] p-6 flex flex-col">
                <nav className="flex flex-col gap-y-3 mt-4">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`/#${section}`}
      key={section}
      onClick={onClick}>
      {section}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
