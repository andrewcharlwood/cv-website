import React, { memo, useCallback, useState } from 'react';
import styled, { css } from 'styled-components';

// Types
interface OpenableProps {
  $isOpen: boolean;
}

// New type for sub-items
interface NavSubItemProps {
  id: string; // e.g., 'nnt', 'phacking'
  label: string;
  icon: string; // emoji or component path
  description?: string;
}

interface NavItemProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
  subItems?: NavSubItemProps[]; // Optional sub-items
}

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: NavItemProps[];
  onHomeClick: () => void;
  // Add navigation functions from App
  setActiveSection: (section: any) => void; // Use more specific type if available from App
  setHealthEconActiveTab?: (tab: any) => void; // Optional for non-econ items
  updateUrlHash: (section: any, subsection?: any) => void;
  scrollToTop: (section: any) => void;
}

// TabIcon component
const TabIcon = styled.span`
  margin-right: 0.5rem;
`;

// Hamburger Icon Component - Memoized with React.memo instead of styled-component memo
const HamburgerIconBase = styled.div<OpenableProps>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  z-index: 1200;
  contain: layout;
  margin-right: 10px;
  
  @media (max-width: 1080px) {
    display: flex;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    
    &:first-child {
      transform-origin: 1px;
      transition: transform 0.3s linear;
      transform: ${({ $isOpen }) => 
        $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      transition: opacity 0.3s linear, transform 0.3s linear;
      opacity: ${({ $isOpen }) => 
        $isOpen ? '0' : '1'};
      transform: ${({ $isOpen }) => 
        $isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform-origin: 1px;
      transition: transform 0.3s linear;
      transform: ${({ $isOpen }) => 
        $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const HamburgerIcon = memo(({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }): JSX.Element => (
  <HamburgerIconBase $isOpen={isOpen} onClick={onClick}>
    <div />
    <div />
    <div />
  </HamburgerIconBase>
));

const MobileMenuOverlay = styled.div<OpenableProps>`
  position: fixed;
  top: 0;
  left: 0;
  
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: ${props => props.$isOpen ? 1 : 0};
  pointer-events: ${props => props.$isOpen ? 'auto' : 'none'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
  contain: paint;
`;

const MobileMenuContainer = styled.div`
  background: linear-gradient(120deg, #6a11cb 0%, #2575fc 100%);
  padding: 2rem;
  border-radius: 15px;
  width: 85%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  opacity: 1;
  transform: translateY(0);
  
  
  will-change: transform, opacity;
`;

const MobileNavLink = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0.5rem 0;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  display: flex;
      text-align: left;
  align-items: left;
  justify-content: left;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    letter-spacing: 0.5px;
  }
  
  &:hover:before {
    left: 100%;
  }
  
  &:active {
    transform: translateY(1px) scale(0.98);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.3);
    font-weight: 600;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), inset 0 0 5px rgba(255, 255, 255, 0.2);
  }
`;

// Styled chevron indicator
const Chevron = styled.span<{ $isOpen: boolean }>`
  margin-left: auto;
  font-size: 1rem;
  transition: transform 0.3s ease-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

// New Sub-Menu Container
const SubMenuContainer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')}; // Adjust max-height as needed
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  background: rgba(0, 0, 0, 0.1); // Slightly different background
  border-radius: 8px;
  margin-top: 5px;
  width: 100%;
  margin-left: 10px; // Indentation
  padding: ${({ $isOpen }) => ($isOpen ? '5px 0' : '0')};
  
`;

// New Sub-Menu Item
const SubMenuItem = styled.button`
  background: none;
  
  border: none;
  color: white;
  font-size: 1rem; // Slightly smaller
  padding: 0.6rem 1rem; // Less padding
  margin: 0.2rem 0.5rem; // Spacing inside sub-menu
  width: calc(100% - 1rem); // Adjust width for padding
  text-align: center;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Memoized Nav Item Component
const MobileNavItem = memo(({
  item,
  openSubMenuKey,
  setOpenSubMenuKey,
  navFunctions,
}: {
  item: NavItemProps;
  openSubMenuKey: string | null;
  setOpenSubMenuKey: (key: string | null) => void;
  navFunctions: {
    // Group nav functions for cleaner passing
    setActiveSection: HamburgerMenuProps['setActiveSection'];
    setHealthEconActiveTab?: HamburgerMenuProps['setHealthEconActiveTab'];
    updateUrlHash: HamburgerMenuProps['updateUrlHash'];
    scrollToTop: HamburgerMenuProps['scrollToTop'];
    toggleMenu: HamburgerMenuProps['toggleMenu'];
  };
}): JSX.Element => {
  const isSubMenuOpen = openSubMenuKey === item.label;

  const handleParentClick = useCallback(() => {
    if (item.subItems) {
      setOpenSubMenuKey(isSubMenuOpen ? null : item.label);
    } else {
      item.onClick(); // Original behavior for non-parent items
    }
  }, [item, isSubMenuOpen, setOpenSubMenuKey]);

  return (
    <>
      <MobileNavLink
        className={item.isActive ? 'active' : ''}
        onClick={handleParentClick} // Use updated handler
      >
        <TabIcon>{item.icon}</TabIcon>
        {item.label}
        {/* Add chevron if it has sub-items */}  
        {item.subItems && <Chevron $isOpen={isSubMenuOpen}>❯</Chevron>}
      </MobileNavLink>
      {/* Conditionally render sub-menu */}  
      {item.subItems && (
        <SubMenuContainer $isOpen={isSubMenuOpen}>
          {item.subItems.map((subItem) => (
            <SubMenuItem
              key={subItem.id}
              onClick={() => {
                const parentSection = item.label === 'Health Economics' ? 'education' : subItem.id;
                const targetSection = item.label === 'Health Economics' ? 'education' : subItem.id;
                const targetSubSection = item.label === 'Health Economics' ? subItem.id : undefined;
                
                // Call navigation functions
                navFunctions.setActiveSection(targetSection);
                if (item.label === 'Health Economics' && navFunctions.setHealthEconActiveTab) {
                  // Type assertion might be needed if App's state type isn't perfectly aligned
                  navFunctions.setHealthEconActiveTab(subItem.id as any);
                }
                navFunctions.updateUrlHash(targetSection, targetSubSection);
                navFunctions.scrollToTop(targetSection);

                // Close menus
                setOpenSubMenuKey(null);
                navFunctions.toggleMenu(); 
              }}
            >
              <TabIcon>{subItem.icon}</TabIcon> {subItem.label}
            </SubMenuItem>
          ))}
        </SubMenuContainer>
      )}
    </>
  );
});

const HomeButton = styled(MobileNavLink)`
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  
  &:before {
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  }
`;

// Memoized Menu Container Component
const MenuContainer = memo(({
  navItems,
  handleContainerClick,
  onHomeClick,
  openSubMenuKey, // Receive state
  setOpenSubMenuKey, // Receive setter
  navFunctions, // Receive grouped nav functions
}: {
  navItems: NavItemProps[];
  handleContainerClick: (e: React.MouseEvent) => void;
  onHomeClick: () => void;
  openSubMenuKey: string | null;
  setOpenSubMenuKey: (key: string | null) => void;
  navFunctions: {
    setActiveSection: HamburgerMenuProps['setActiveSection'];
    setHealthEconActiveTab?: HamburgerMenuProps['setHealthEconActiveTab'];
    updateUrlHash: HamburgerMenuProps['updateUrlHash'];
    scrollToTop: HamburgerMenuProps['scrollToTop'];
    toggleMenu: HamburgerMenuProps['toggleMenu'];
  };
}): JSX.Element => {
  // Memoize the click handler for home button
  const memoizedOnHomeClick = useCallback(onHomeClick, [onHomeClick]);

  return (
    <MobileMenuContainer onClick={handleContainerClick}>
      <HomeButton onClick={memoizedOnHomeClick}>
        <TabIcon>🏠</TabIcon> Home
      </HomeButton>
      {navItems.map((item) => (
        <MobileNavItem
          key={item.label}
          item={item}
          openSubMenuKey={openSubMenuKey}
          setOpenSubMenuKey={setOpenSubMenuKey}
          navFunctions={navFunctions} // Pass down nav functions
        />
      ))}
    </MobileMenuContainer>
  );
});

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ 
  isOpen, 
  toggleMenu, 
  navItems, 
  onHomeClick,
  setActiveSection,
  setHealthEconActiveTab,
  updateUrlHash,
  scrollToTop,
}) => {
  // Callback to stop propagation when clicking inside the menu
  const handleContainerClick = useCallback((e: React.MouseEvent): void => {
    e.stopPropagation();
  }, []);

  // Callback to close the menu when clicking the overlay
  const handleOverlayClick = useCallback((): void => {
    if (isOpen) {
      toggleMenu();
    }
  }, [isOpen, toggleMenu]);

  // State for open sub-menu
  const [openSubMenuKey, setOpenSubMenuKey] = useState<string | null>(null);

  // Group navigation functions to pass down
  const navFunctions = {
    setActiveSection,
    setHealthEconActiveTab,
    updateUrlHash,
    scrollToTop,
    toggleMenu, // Pass toggleMenu down for sub-item clicks
  };

  return (
    <>
      <HamburgerIcon isOpen={isOpen} onClick={toggleMenu} />
      <MobileMenuOverlay $isOpen={isOpen} onClick={handleOverlayClick}>
        {isOpen && 
          <MenuContainer 
            navItems={navItems} 
            handleContainerClick={handleContainerClick} 
            onHomeClick={onHomeClick}
            openSubMenuKey={openSubMenuKey}
            setOpenSubMenuKey={setOpenSubMenuKey}
            navFunctions={navFunctions}
          />
        }
      </MobileMenuOverlay>
    </>
  );
};

export default memo(HamburgerMenu);
