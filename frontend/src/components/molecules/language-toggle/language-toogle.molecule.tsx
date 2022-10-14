import { Button } from "@/components/atoms";
import { useRouter } from "next/router";
import { image } from "@/commons/images";
import Image from "next/image";
import { FC } from "react";

const languages: Record<string, any> = {
  vi: {
    name: "Tiếng Việt",
    flag: image.flagVietNam,
  },
  en: {
    name: "English",
    flag: image.flagUsa,
  },
};

interface ILanguageToggle {
  className?: string;
}

const defaultProps = {
  className:
    "w-28 h-8 rounded flex flex-row space-x-1 items-center justify-start px-2 hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none",
};

const LanguageToogle: FC<ILanguageToggle> = ({ className }) => {
  const { locale } = useRouter();

  return (
    <>
      <Button
        className={className as string}
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
      >
        <Image
          src={languages[locale as string].flag}
          className="w-8 h-8 rounded-full"
          width="20"
          height="20"
        />
        <p className="ml-2">{languages[locale as string].name}</p>
      </Button>
      {/* <div
        className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        id="language-dropdown-menu"
      >
        <ul className="py-1" role="none">
          {Object.keys(languages).map((item, key) => (
            <li key={key}>
              <p
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  {languages[item].name}
                </div>
              </p>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

LanguageToogle.defaultProps = defaultProps;
export { LanguageToogle };
