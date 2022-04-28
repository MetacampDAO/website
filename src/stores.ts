import { writable } from "svelte/store";

// For Dark mode
export const theme = writable();

if (typeof localStorage !== 'undefined') {
    const storedTheme = localStorage.getItem("theme");
    const theme = writable(storedTheme);
}

theme.subscribe(value => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem("theme", value === 'light' ? 'light' : 'dark');
    }
});


// For click count
export const count = writable(0);