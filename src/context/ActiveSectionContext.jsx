import { createContext, useState } from 'react'

export const ActiveSectionContext = createContext();

export function ActiveSectionProvider({children}) {
    const [active, setActive] = useState("");
  return (
    <ActiveSectionContext.Provider value={{active, setActive}}>
        {children}
    </ActiveSectionContext.Provider>
  )
}
