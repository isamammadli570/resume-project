import { useState } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <nav className="navbar relative">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>

      <div className="flex items-center gap-4">
        <div className="relative">
          <button
            className="font-semibold uppercase hover:opacity-80 transition cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          >
            {currentLang.toUpperCase()}
          </button>

          {open && (
            <div
              className="absolute top-full mt-2 w-32 bg-white shadow-md rounded-lg border border-gray-200 z-50"
              onMouseLeave={() => setOpen(false)}
            >
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  currentLang === "az" ? "font-bold" : ""
                }`}
                onClick={() => changeLanguage("az")}
              >
                AZ
              </button>
              <button
                className={`block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  currentLang === "en" ? "font-bold" : ""
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
            </div>
          )}
        </div>

        <Link to="/upload" className="primary-button w-fit">
          {t("navbar.upload")}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
