'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { RiUserLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    // Initial check
    checkMobile();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Dropdown state for each category
  const [dropdownState, setDropdownState] = useState({
    indoorPlants: false,
    outdoorPlants: false,
    soilStones: false,
    Fertilizers: false,
    potsPlanters: false,
    Seeds: false,
    hydroponics: false,
    gardenServices: false,
    plantTalk: false,
  });

  type CategoryKey = keyof typeof dropdownState;

  const toggleCategoryDropdown = (category: CategoryKey) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const navItems = [
    'Indoor Plants',
    'Outdoor Plants', 
    'Soil & Stones',
    'Fertilizer & Pesticides',
    'Pots & Planters',
    'Seeds',
    'Hydroponics',
    'Garden Service',
    'Plant Talk'
  ];

  // Function to get subcategories based on category name
  const getSubcategories = (category: string) => {
    switch (category) {
      case 'Indoor Plants':
        return [
          'Office Plant', 'Office Table Plant', 'Bedroom Plant', 'Bathroom Plants',
          'Living Plants', 'Kitchen Plant', 'Indoor Flowering Plant', 'Featured Plants',
          'Indoor Evergreen Plants', 'Indoor Palms', 'Indoor Succulents & Cactus',
          'Indoor Air Plants', 'Hanging Plants', 'Interesting & Rare Plants',
          'Air Purifying Plants', 'Indoor Bonsai Plants'
        ];
      case 'Outdoor Plants':
        return [
          'Palms', 'Ornamental Trees', 'Shrubs', 'Aquatics', 'Climbers & Vines',
          'Outdoor Cactus & Succulents', 'Grasses', 'Ground Covering Plants',
          'Fruit, Herb & Vegetable Plants', 'Shaped Plants', 'Seasonal Flowering Plants'
        ];
      case 'Soil & Stones':
        return ['Mulch & Pebbles', 'Soil & Hardscape'];
      case 'Fertilizer & Pesticides':
        return [
          'Public Health /Household Pesticides', 'Inorganic Pesticides',
          'Inorganic Fertilizers', 'Organic Fertilizers', 'Organic Pesticides'
        ];
      case 'Pots & Planters':
        return [
          'Natural Pots', 'Cement Pots', 'Metallic Pots', 'Plastic Pots',
          'Synthetic Pots', 'Ceramic Pots', 'Mother of Pearl / Aurora Pots',
          'Cosmoplast Pots', 'Polystone Pots', 'Self Watering Pots',
          'Vertical Garden Pots', 'Grow Bags', 'GRP Pots', 'Hanging Pots'
        ];
      case 'Seeds':
        return [
          'Vegetable Seeds', 'Microgreens', 'Organic Seeds', 'Flower Seeds',
          'Fruit Seeds', 'Grass Seeds', 'Herb Seeds', 'Hybrid Seeds', 'Hydroponic Seeds'
        ];
      default:
        return [];
    }
  };

  return (
    <header className={`w-full shadow-md sticky top-0 bg-[#a1d132] z-50 ${
      isMobile ? 'h-[96px] py-3' : 'h-[137px] py-5 md:py-6'
    }`}>
      {/* Mobile Menu Overlay */}
      {menuOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        menuOpen && isMobile ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <RiUserLine size={20} />
            <span className="font-medium">Login</span>
          </div>
          <button 
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 h-[calc(100%-80px)] overflow-y-auto">
          <div className="mt-6">
            {navItems.map((item, index) => {
              const categoryKey = Object.keys(dropdownState)[index] as CategoryKey;
              const isDropdownOpen = dropdownState[categoryKey];
              const hasSubcategories = getSubcategories(item).length > 0;
              
              return (
                <div key={index} className="border-b border-gray-200">
                  {/* Category Item */}
                  <div 
                    className={`flex items-center justify-between py-3 ${
                      hasSubcategories ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    onClick={() => hasSubcategories && toggleCategoryDropdown(categoryKey)}
                  >
                    <span className="text-gray-800">{item}</span>
                    {hasSubcategories && (
                      <FaChevronDown 
                        size={12} 
                        className={`text-gray-500 transition-transform duration-300 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    )}
                  </div>
                  
                  {/* Subcategories Dropdown */}
                  {isDropdownOpen && hasSubcategories && (
                    <div className="pl-2 pb-3 text-black bg-gray-100">
                      {getSubcategories(item).map((subItem, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="py-2 border-b border-gray-100 last:border-b-0"
                        >
                          {subItem}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navbar Content */}
      <div className={`container mx-auto flex items-center justify-between ${
        isMobile ? 'px-4 h-[46px]' : 'px-[85px]'
      }`}>
        
        {/* Mobile: Left Section - Menu & Search */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded text-black"
          >
            <FiMenu size={24} />
          </button>
          <button className="rounded text-black">
            <FaSearch size={18} />
          </button>
        </div>

        {/* Desktop: Menu Button (shown when scrolled) */}
        {scroll && !isMobile && (
          <button
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="hidden md:flex mr-2 p-2 rounded text-black"
          >
            {/* Menu icon show when categories are hidden, X icon when categories are visible */}
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}

        {/* Logo */}
        <div className={`${isMobile ? 'mx-auto' : ''} ${
          scroll && !isMobile ? 'ml-2' : ''
        } w-[160px] md:w-[240px]`}>
          <Image
            src="/logo.webp"
            alt="logo"
            width={240}
            height={80}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Desktop: Right Section - ALWAYS VISIBLE */}
        <div className="hidden md:flex items-center gap-8 w-full">
          {/* Search Bar - ALWAYS VISIBLE */}
          <div className="relative flex items-center w-full max-w-[720px]">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 h-[46px] rounded-l-md"
              >
                <span className="text-medium whitespace-nowrap">All Categories</span>
                <FaChevronDown size={10} />
              </button>
              {isOpen && (
                <div className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-1">
                  <ul className="flex flex-col font-semibold">
                    <li className="text-white bg-blue-500">All Categories</li>
                    <li className="text-gray-700">-----</li>
                  </ul>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="px-4 h-[46px] w-full focus:outline-none bg-white"
            />
            <button className="bg-black text-white px-4 h-[46px] rounded-r-md flex items-center justify-center transition">
              <FaSearch size={16} />
            </button>
          </div>

          {/* Contact Info - ALWAYS VISIBLE */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <svg
                aria-hidden="true"
                focusable="false"
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <path
                  d="M15.5832 24.75H13.7498L6.4165 32.0833V24.75H2.74984C2.26361 24.75 1.79729 24.5569 1.45347 24.213C1.10966 23.8692 0.916504 23.4029 0.916504 22.9167V2.75001C0.916504 2.26377 1.10966 1.79746 1.45347 1.45364C1.79729 1.10983 2.26361 0.916672 2.74984 0.916672H33.9165C34.4027 0.916672 34.869 1.10983 35.2129 1.45364C35.5567 1.79746 35.7498 2.26377 35.7498 2.75001V13.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M19.25 33.9167C19.25 34.4029 19.4432 34.8692 19.787 35.213C20.1308 35.5569 20.5971 35.75 21.0833 35.75H31.1667L39.4167 43.0833V35.75H41.25C41.7362 35.75 42.2025 35.5569 42.5464 35.213C42.8902 34.8692 43.0833 34.4029 43.0833 33.9167V19.25C43.0833 18.7638 42.8902 18.2975 42.5464 17.9536C42.2025 17.6098 41.7362 17.4167 41.25 17.4167H21.0833C20.5971 17.4167 20.1308 17.6098 19.787 17.9536C19.4432 18.2975 19.25 18.7638 19.25 19.25V33.9167Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <div className="hidden lg:block">
              <span className="text-sm text-black font-bold">+971 58 512 1105</span>
              <p className="text-black text-sm">info@greensouq.ae</p>
            </div>
            <div className="flex items-center gap-2">
             <Link href='/login'>
              <RiUserLine size={26} className="font-light" />
              <span className="hidden lg:inline">Login </span>
             </Link>
              <div className="pl-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.88053 4.00003C7.35284 1.71796 9.37425 0.00268555 11.7963 0.00268555H12.2005C14.6226 0.00268555 16.644 1.71796 17.1163 4.00003L19.811 4.00003C22.1161 4.00003 23.9442 5.94322 23.8036 8.24402L23.2424 17.427C23.0167 21.1203 19.9556 24 16.2554 24L7.74447 24C4.04429 24 0.983205 21.1203 0.757505 17.427L0.196322 8.24402C0.0557157 5.94322 1.88378 4.00003 4.18887 4.00003L6.88053 4.00003ZM8.42715 4.00003L15.5697 4.00003C15.1315 2.55474 13.7889 1.50269 12.2005 1.50269H11.7963C10.2079 1.50269 8.86527 2.55474 8.42715 4.00003ZM16.2554 22C18.8984 22 21.0849 19.9431 21.2461 17.305L21.8073 8.12202C21.8776 6.97162 20.9636 6.00003 19.811 6.00003L4.18887 6.00003C3.03633 6.00003 2.12229 6.97162 2.1926 8.12202L2.75378 17.305C2.915 19.9431 5.10149 22 7.74447 22L16.2554 22ZM16.4705 8.49079C16.0563 8.49079 15.7205 8.82658 15.7205 9.24079V10.0414C15.7205 12.097 14.054 13.7635 11.9984 13.7635C9.94271 13.7635 8.27626 12.097 8.27626 10.0414V9.24079C8.27626 8.82658 7.94048 8.49079 7.52626 8.49079C7.11205 8.49079 6.77626 8.82658 6.77626 9.24079V10.0414C6.77626 12.9254 9.11428 15.2635 11.9984 15.2635C14.8825 15.2635 17.2205 12.9254 17.2205 10.0414V9.24079C17.2205 8.82658 16.8847 8.49079 16.4705 8.49079Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Right Section - Cart */}
        <div className="flex items-center gap-2 md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.88053 4.00003C7.35284 1.71796 9.37425 0.00268555 11.7963 0.00268555H12.2005C14.6226 0.00268555 16.644 1.71796 17.1163 4.00003L19.811 4.00003C22.1161 4.00003 23.9442 5.94322 23.8036 8.24402L23.2424 17.427C23.0167 21.1203 19.9556 24 16.2554 24L7.74447 24C4.04429 24 0.983205 21.1203 0.757505 17.427L0.196322 8.24402C0.0557157 5.94322 1.88378 4.00003 4.18887 4.00003L6.88053 4.00003ZM8.42715 4.00003L15.5697 4.00003C15.1315 2.55474 13.7889 1.50269 12.2005 1.50269H11.7963C10.2079 1.50269 8.86527 2.55474 8.42715 4.00003ZM16.2554 22C18.8984 22 21.0849 19.9431 21.2461 17.305L21.8073 8.12202C21.8776 6.97162 20.9636 6.00003 19.811 6.00003L4.18887 6.00003C3.03633 6.00003 2.12229 6.97162 2.1926 8.12202L2.75378 17.305C2.915 19.9431 5.10149 22 7.74447 22L16.2554 22ZM16.4705 8.49079C16.0563 8.49079 15.7205 8.82658 15.7205 9.24079V10.0414C15.7205 12.097 14.054 13.7635 11.9984 13.7635C9.94271 13.7635 8.27626 12.097 8.27626 10.0414V9.24079C8.27626 8.82658 7.94048 8.49079 7.52626 8.49079C7.11205 8.49079 6.77626 8.82658 6.77626 9.24079V10.0414C6.77626 12.9254 9.11428 15.2635 11.9984 15.2635C14.8825 15.2635 17.2205 12.9254 17.2205 10.0414V9.24079C17.2205 8.82658 16.8847 8.49079 16.4705 8.49079Z" />
          </svg>
        </div>
      </div>

      {/* Mobile Contact Info Below HR */}
      {isMobile && (
        <>
          <hr className="border-black my-2 mx-4" />
          <div className="flex items-center justify-center px-4 text-sm gap-2">
            <div className="flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
            <span className="font-semibold">+971 58 512 1105</span>
            <span>info@greensouq.ae</span>
          </div>
        </>
      )}

      {/* Desktop Navigation Categories - Only show when NOT scrolled OR menu is open */}
      {(!scroll || menuOpen) && !isMobile && (
        <div className="mt-5 px-[85px]">
          <div className="flex flex-wrap gap-7 text-black">
            <span
              onMouseEnter={() => toggleCategoryDropdown('indoorPlants')}
              onMouseLeave={() => toggleCategoryDropdown('indoorPlants')}
              className="flex items-center cursor-pointer relative"
            >
              Indoor Plants
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.indoorPlants && (
                <div className="absolute top-full bg-white shadow-lg mt-6 z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Office Plant</li>
                    <li>Office Table Plant</li>
                    <li>Bedroom Plant</li>
                    <li>Bathroom Plants</li>
                    <li>Living Plants</li>
                    <li>Kitchen Plant</li>
                    <li>Indoor Flowering Plant</li>
                    <li>Featured Plants</li>
                    <li>Indoor Evergreen Plants</li>
                    <li>Indoor Palms</li>
                    <li>Indoor Succulents & Cactus</li>
                    <li>Indoor Air Plants</li>
                    <li>Hanging Plants</li>
                    <li>Interesting & Rare Plants</li>
                    <li>Air Purifying Plants</li>
                    <li>Indoor Bonsai Plants</li>
                  </ul>
                </div>
              )}
            </span>
            <span
              onMouseEnter={() => toggleCategoryDropdown('outdoorPlants')}
              onMouseLeave={() => toggleCategoryDropdown('outdoorPlants')}
              className="flex items-center cursor-pointer relative"
            >
              Outdoor Plants
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.outdoorPlants && (
                <div className="absolute top-full bg-white shadow-lg mt-6 z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Palms</li>
                    <li>Ornamental Trees</li>
                    <li>Shrubs</li>
                    <li>Aquatics</li>
                    <li>Climbers & Vines</li>
                    <li>Outdoor Cactus & Succulents</li>
                    <li>Grasses</li>
                    <li>Ground Covering Plants</li>
                    <li>Fruit, Herb & Vegetable Plants</li>
                    <li>Shaped Plants</li>
                    <li>Seasonal Flowering Plants</li>
                  </ul>
                </div>
              )}
            </span>
            <span
              onMouseEnter={() => toggleCategoryDropdown('soilStones')}
              onMouseLeave={() => toggleCategoryDropdown('soilStones')}
              className="flex items-center cursor-pointer relative"
            >
              Soil & Stones
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.soilStones && (
                <div className="absolute top-full bg-white shadow-lg mt-6 z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Mulch & Pebbles</li>
                    <li>Soil & Hardscape</li>
                  </ul>
                </div>
              )}
            </span>
            <span
              onMouseEnter={() => toggleCategoryDropdown('Fertilizers')}
              onMouseLeave={() => toggleCategoryDropdown('Fertilizers')}
              className="flex items-center cursor-pointer"
            >
              Fertilizer & Pesticides
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.Fertilizers && (
                <div className="absolute top-full bg-white shadow-lg z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Public Health /Household Pesticides</li>
                    <li>Inorganic Pesticides</li>
                    <li>Inorganic Fertilizers</li>
                    <li>Organic Fertilizers</li>
                    <li>Organic Pesticides</li>
                  </ul>
                </div>
              )}
            </span>
            <span
              onMouseEnter={() => toggleCategoryDropdown('potsPlanters')}
              onMouseLeave={() => toggleCategoryDropdown('potsPlanters')}
              className="flex items-center cursor-pointer"
            >
              Pots & Planters
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.potsPlanters && (
                <div className="absolute top-full bg-white shadow-lg z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Natural Pots</li>
                    <li>Cement Pots</li>
                    <li>Metallic Pots</li>
                    <li>Plastic Pots</li>
                    <li>Synthetic Pots</li>
                    <li>Ceramic Pots</li>
                    <li>Mother of Pearl / Aurora Pots</li>
                    <li>Cosmoplast Pots</li>
                    <li>Polystone Pots</li>
                    <li>Self Watering Pots</li>
                    <li>Vertical Garden Pots</li>
                    <li>Grow Bags</li>
                    <li>GRP Pots</li>
                    <li>Hanging Pots</li>
                  </ul>
                </div>
              )}
            </span>
            <span
              onMouseEnter={() => toggleCategoryDropdown('Seeds')}
              onMouseLeave={() => toggleCategoryDropdown('Seeds')}
              className="flex items-center cursor-pointer"
            >
              Seeds
              <FaChevronDown size={10} className="ml-2" />
              {dropdownState.Seeds && (
                <div className="absolute top-full bg-white shadow-lg z-50">
                  <ul className="flex flex-col w-56 text-black p-4 leading-[32px]">
                    <li>Vegetable Seeds</li>
                    <li>Microgreens</li>
                    <li>Organic Seeds</li>
                    <li>Flower Seeds</li>
                    <li>Fruit Seeds</li>
                    <li>Grass Seeds</li>
                    <li>Herb Seeds</li>
                    <li>Hybrid Seeds</li>
                    <li>Hydroponic Seeds</li>
                  </ul>
                </div>
              )}
            </span>
            <span className="cursor-pointer">Hydroponics</span>
            <span className="cursor-pointer">Garden Service</span>
            <span className="cursor-pointer">Plant Talk</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;