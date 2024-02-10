// Codes by mahdi tasha
// Importing part
import { create } from 'zustand'

// Types
type LoginStateType = {
    isLoggedIn: boolean;
    logIn: () => void;
    logOut: () => void;
}

// Defining store
export const useLoginState = create<LoginStateType>()((set) => ({
    isLoggedIn: true,
    logIn: () => set({isLoggedIn: true}),
    logOut: () => set({isLoggedIn: false})
}));