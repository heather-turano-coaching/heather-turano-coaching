import { useCycle } from "framer-motion";
import React, { FC, useCallback, useContext, useMemo } from "react";

type SideNavContextType = {
  isOpen: boolean;
  handleToggle: () => void;
};

const SideNavContext = React.createContext<SideNavContextType | null>(null);

export const SideNavProvider: FC = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const handleToggle = useCallback(() => {
    toggleOpen();
  }, [toggleOpen]);

  const value = useMemo(
    () => ({
      isOpen,
      handleToggle
    }),
    [handleToggle, isOpen]
  );

  return (
    <SideNavContext.Provider value={value}>{children}</SideNavContext.Provider>
  );
};

export const useSideNavContext = (): SideNavContextType => {
  const context = useContext(SideNavContext);
  if (!context) {
    throw new Error(
      "'useSideNavContext()' must be used within a <SideNavProvider /> component"
    );
  }
  return context;
};
