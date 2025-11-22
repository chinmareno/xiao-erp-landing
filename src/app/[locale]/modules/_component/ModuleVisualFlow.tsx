import { ArrowDown, ArrowRight, ArrowLeft, ArrowUp } from "lucide-react";
import { type ReactElement } from "react";
import { ModuleIcon, type ModuleIconProps } from "./ModuleIcon";

type Props = {
  title: string;
  children: ReactElement[];
};

export const ModuleVisualFlow = ({ title, children }: Props) => {
  return (
    <div className="mb-12 flex w-full flex-col items-center justify-center place-self-center rounded-2xl bg-white p-6 shadow min-[1000px]:w-full">
      <h2 className="mb-6 text-center text-lg font-bold min-[1000px]:text-base">
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 min-[1000px]:flex-row">
        {children}
      </div>
    </div>
  );
};

type ItemProps = {
  icon: ReactElement<ModuleIconProps>;
  title: string;
  description: string;
};

const Item = ({ icon, title, description }: ItemProps) => {
  return (
    <div className="flex h-[180px] w-[180px] flex-col items-center justify-between p-2 text-center min-[1000px]:h-[160px] min-[1000px]:w-[160px]">
      <ModuleIcon icon={icon} />
      <div className="flex grow flex-col">
        <h4 className="text-base font-semibold text-gray-900 min-[1000px]:text-xs">
          {title}
        </h4>
        <p className="text-sm text-gray-600 min-[1000px]:text-[10px]">
          {description}
        </p>
      </div>
    </div>
  );
};

type BeforeProps = {
  children: ReactElement<ItemProps>[];
};

export const Before = ({ children }: BeforeProps) => {
  return (
    <>
      {children.map((item, i) => (
        <div key={i}>
          {/* Vertical with down arrow */}
          <div className="flex flex-col items-center gap-3 min-[1000px]:hidden">
            {item}
            <ArrowDown className="h-6 w-6 text-gray-400 min-[1000px]:h-5 min-[1000px]:w-5" />
          </div>

          {/* Horizontal with right arrow */}
          <div className="hidden w-[180px] items-center justify-center min-[1000px]:flex">
            {item}
            <ArrowRight className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      ))}
    </>
  );
};

type CenterProps = {
  icon: ReactElement<ModuleIconProps>;
  title: string;
  description: string;
  cardBorderColor: string;
  cardBackgroundColor: string;
  iconBackgroundColor: string;
  iconColor: string;
};

const Center = ({
  icon,
  title,
  description,
  cardBorderColor,
  cardBackgroundColor,
  iconBackgroundColor,
  iconColor,
}: CenterProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border-2 p-4 text-center shadow-sm ${cardBorderColor} ${cardBackgroundColor} h-56 w-44 min-[1000px]:h-52 min-[1000px]:w-44`}
    >
      <ModuleIcon
        icon={icon}
        backgroundColor={iconBackgroundColor}
        textColor={iconColor}
      />
      <h4 className="mt-2 text-base font-bold text-gray-900 min-[1000px]:text-sm">
        {title}
      </h4>
      <p className="mt-1 text-sm text-blue-600 min-[1000px]:text-xs">
        {description}
      </p>
    </div>
  );
};

type AfterProps = {
  children: ReactElement<ItemProps>[];
};

const After = ({ children }: AfterProps) => {
  return (
    <>
      {children.map((item, i) => (
        <div key={i}>
          {/* Vertical with up arrow */}
          <div className="flex flex-col items-center gap-3 min-[1000px]:hidden">
            <ArrowUp className="h-6 w-6 text-gray-400 min-[1000px]:h-5 min-[1000px]:w-5" />
            {item}
          </div>

          {/* Horizontal with left arrow */}
          <div className="hidden w-[180px] items-center justify-center min-[1000px]:flex">
            <ArrowLeft className="h-6 w-6 text-gray-400" />
            {item}
          </div>
        </div>
      ))}
    </>
  );
};

ModuleVisualFlow.Item = Item;
ModuleVisualFlow.Before = Before;
ModuleVisualFlow.Center = Center;
ModuleVisualFlow.After = After;
