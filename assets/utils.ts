// Some useful functions used throughout my code

// Based on this SO answer https://stackoverflow.com/a/35880730/9523246
function lazyLoadCSS(url: string): void {
    const css: HTMLLinkElement = document.createElement('link');
    css.href = url;
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);
}
