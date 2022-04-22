import { writable } from "svelte/store";

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
