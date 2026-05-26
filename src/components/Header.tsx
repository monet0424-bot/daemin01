import { useState, useEffect } from "react";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenQuoteModal: () => void;
  currentPage: string;
  onChangePage: (id: string) => void;
}

export default function Header({ onOpenQuoteModal, currentPage, onChangePage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "회사 소개", id: "about" },
    { label: "시공 사례", id: "cases" },
    { label: "시공 분야", id: "services" },
    { label: "견적 계산기", id: "calculator" },
    { label: "상담 문의", id: "consultation" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== "hero"
          ? "bg-white shadow-md border-b border-gray-100 py-3"
          : "bg-white/95 backdrop-blur-md md:bg-transparent md:hover:bg-white border-b border-gray-100/10 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => onChangePage("hero")}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <div className="bg-primary text-white p-2 rounded-lg transition-transform group-hover:scale-105">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span
              className={`text-xl font-black tracking-tight block ${
                isScrolled || currentPage !== "hero" ? "text-primary" : "text-primary md:text-white md:group-hover:text-primary"
              }`}
            >
              대민창호
            </span>
            <span
              className={`text-[10px] font-medium tracking-widest block uppercase ${
                isScrolled || currentPage !== "hero" ? "text-gray-400" : "text-gray-400 md:text-gray-300 md:group-hover:text-gray-400"
              }`}
            >
              Daemin Changho
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onChangePage(item.id)}
                className={`text-[15px] font-semibold transition-colors duration-200 cursor-pointer focus:outline-none ${
                  isScrolled || currentPage !== "hero"
                    ? isActive ? "text-accent" : "text-gray-600 hover:text-accent"
                    : isActive ? "md:text-white underline decoration-accent decoration-2 underline-offset-4" : "text-gray-700 md:text-gray-100 md:hover:text-white md:group-hover:text-gray-600 md:hover:text-accent"
                }`}
              >
                <span className={`pb-1 inline-block ${isActive ? "border-b-2 border-accent text-accent md:border-b-0 md:text-inherit" : "hover:border-b-2 hover:border-accent"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
          <button
            onClick={onOpenQuoteModal}
            className="bg-primary-light hover:bg-accent text-white px-6 py-2.5 font-bold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer rounded-sm text-sm"
          >
            실시간 무료 견적
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:010-0000-0000"
            className="p-2 text-primary rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary hover:text-accent p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Over */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col p-6 animate-fade-in md:hidden border-t border-gray-100">
          <div className="flex flex-col gap-6 mt-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onChangePage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-bold py-2 border-b border-gray-50 focus:outline-none cursor-pointer ${
                    isActive ? "text-accent" : "text-gray-800 hover:text-accent"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                onOpenQuoteModal();
                setIsMobileMenuOpen(false);
              }}
              className="bg-primary text-white py-4 font-bold rounded-lg text-center shadow-md hover:bg-accent transition-all duration-300 mt-4 cursor-pointer"
            >
              실시간 무료 견적 받기
            </button>
          </div>
          <div className="mt-auto border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
            <p className="font-bold text-gray-600">대표문의: 010-0000-0000</p>
            <p className="mt-1">KCC 공식 창호 제작·시공 전문 대민창호</p>
          </div>
        </div>
      )}
    </header>
  );
}
