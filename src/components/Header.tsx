"use client";
import { categories, CategoryType } from "@/utils/category-seed";
import gsap from "gsap";
import scrollTriger from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Define Enum for Category Types

gsap.registerPlugin(scrollTriger);

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedBasecategory, setSelectedBasecategory] = useState<string | null>(null);
  const [categoryHover, setCategoryHover] = useState<string | null>(null);
  const [subCategoryHover, setSubCategoryHover] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  // // Filter categories based on type
  const topCategories = categories.filter((cat) => cat.categoryType === CategoryType.TOP);
  const subcategories = categories.filter(
    (cat) => cat.categoryType === CategoryType.SUB && cat.parent === selectedCategory
  );
  const baseCategories = categories.filter(
    (cat) => cat.categoryType === CategoryType.BASE && cat.parent === selectedSubcategory
  );

  const handleCategoryHover = (topCat: string) => {
    if (topCat === selectedCategory) {
      setCategoryHover(null);
      setSelectedCategory(null);
    }
    setCategoryHover(topCat);
    setSelectedCategory(topCat);
  };

  const handleSubCategoryHover = (subCat: string) => {
    setSelectedSubcategory(subCat);
    setSubCategoryHover(subCat);
  };

  const handleMouseLeave = () => {
    setSelectedBasecategory(null);
    setSelectedSubcategory(null);
    setSelectedCategory(null);
    setCategoryHover(null);
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[4rem] font-serif w-full md:px-[10rem]"></div>
      <div
        className={`
          ${isScrolled ? "bg-black/50 text-white" : "text-zinc-100 bg-transparent"} backdrop-blur-md
        px-[10rem] mx-auto border-b border-white/0 flex justify-between h-[4rem] fixed top-0 right-0 left-0 gap-x-4 z-20 transition-all duration-75 items-center `}
      >
        <Link href={"/"} ref={logoRef} className="text-[2rem] ml-[1rem] font-semibold tracking-wider uppercase">
          Anaira
        </Link>        

        <ul className="flex text-[0.9rem] h-full justify-start items-center ">
          {topCategories.map((item) => (
            <li
              onClick={() => handleCategoryHover(item.title)}
              key={item.title}
              className={`${
                selectedCategory === item.title && "border-white"
              } cursor-pointer min-w-[7rem] flex justify-center items-center h-full border-b-2 hover:border-b-2 border-transparent hover:border-white transition-all duration-75 px-2 uppercase font-semibold`}
            >
              {item.title}
            </li>
          ))}
          <li className="cursor-pointer min-w-[7rem] flex justify-center items-center h-full border-b-2 hover:border-b-2 border-transparent hover:border-white transition-all duration-75 px-2 uppercase font-semibold">
            Moods
          </li>
          <li className="cursor-pointer min-w-[7rem] flex justify-center items-center h-full border-b-2 hover:border-b-2 border-transparent hover:border-white transition-all duration-75 px-2 uppercase font-semibold">
            Lookbook
          </li>
        </ul>
      </div>
      {categoryHover && (
        <div onClick={handleMouseLeave} className="animate-fromTop bg-black text-white shadow-lg fixed top-[4rem] w-full border-b border-black/30 z-20">
          <div className="min-h-[65vh] grid grid-cols-6 bg-black text-white">
            <aside className=" pt-12 border-r border-white/10">
              {subcategories.map((item) => (
                <div
                  onClick={() => handleSubCategoryHover(item.title)}
                  className={`${
                    selectedSubcategory === item.title
                      ? "border-zinc-500 bg-zinc-50 pl-16 border border-black/5"
                      : "border-zinc-500/0"
                  } py-3 pl-12 border-l-4 hover:border-zinc-500 hover:bg-zinc-300 transition-all duration-150 text-[0.8rem] font-thin cursor-pointer`}
                  key={item.title}
                >
                  {item.title} {item.parent}
                </div>
              ))}
            </aside>
            {!selectedSubcategory ? (
              <div className="p-8 col-span-5 text-white">
                {selectedSubcategory ? (
                  selectedSubcategory
                ) : (
                  <div>
                    <div className="text-[1.5rem] pb-2 font-bold">{selectedCategory}</div>
                    <div className="grid grid-cols-4 space-x-4 py-4 overflow-x-auto text-[2.5rem]">
                      <div className="relative h-[50vh] w-auto]">
                        <Image alt="" fill className="object-cover" src={`/${selectedCategory}1.webp`} />
                        <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                          <h3 className="">Sweaters</h3>
                        </div>
                      </div>
                      <div className="relative h-[50vh] w-auto]">
                        <Image alt="" fill className="object-cover" src={`/${selectedCategory}2.webp`} />
                        <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                          <h3 className="">Pants</h3>
                        </div>
                      </div>
                      <div className="relative h-[50vh] w-auto]">
                        <Image alt="" fill className="object-cover" src={`/${selectedCategory}3.webp`} />
                        <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                          <h3 className="">Shorts</h3>
                        </div>
                      </div>
                      <div className="relative h-[50vh] w-auto]">
                        <Image alt="" fill className="object-cover" src={`/${selectedCategory}4.webp`} />
                        <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                          <h3 className="">Shirts</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <div className="border-r border-black/10 ">
                  <aside className="pt-12">
                    {baseCategories.map((item, i) => (
                      <div
                        onClick={() => setSelectedBasecategory(item.title)}
                        className={`${
                          selectedBasecategory === item.title ? "border-zinc-500 bg-zinc-300" : "border-zinc-500/0"
                        } py-2 pl-12 border-l-4 hover:border-zinc-500 hover:bg-zinc-300 transition-all duration-150 text-[0.8rem] m-2 rounded-r-md`}
                        key={item.title + i}
                      >
                        {item.title} {item.parent}
                      </div>
                    ))}
                  </aside>
                </div>
                <div className="p-8 col-span-4">
                  <div className="text-[1rem] border-b border-purple-500/10 pb-2">{selectedBasecategory}</div>
                  <div className="grid grid-cols-4 space-x-4 py-4 overflow-x-auto text-[2.5rem]">
                    <div className="relative h-[50vh] w-auto]">
                      <Image alt="" fill className="object-cover" src={`/${selectedSubcategory}.webp`} />
                      <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                        <h3 className="">Sweaters</h3>
                      </div>
                    </div>
                    <div className="relative h-[50vh] w-auto]">
                      <Image alt="" fill className="object-cover" src={`/${selectedSubcategory}.webp`} />
                      <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                        <h3 className="">Pants</h3>
                      </div>
                    </div>
                    <div className="relative h-[50vh] w-auto]">
                      <Image alt="" fill className="object-cover" src={`/${selectedSubcategory}.webp`} />
                      <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                        <h3 className="">Shorts</h3>
                      </div>
                    </div>
                    <div className="relative h-[50vh] w-auto]">
                      <Image alt="" fill className="object-cover" src={`/${selectedSubcategory}.webp`} />
                      <div className="absolute bottom-0 left-0 pb-2 pl-2 bg-gradient-to-t text-zinc-800 font-bold font-serif w-full">
                        <h3 className="">Shirts</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
