const LOADER = document.createElement('div');
LOADER.classList.add('loadingScreen');
LOADER.innerHTML = '<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-eclipse" style="background: none;"> <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#ffffff" transform="rotate(172.988 50 51)"> <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform> </path> <text style="cursor: move;" stroke="#000" xml:space="preserve" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="5" id="svg_4" y="48.875258" x="50" stroke-opacity="null" stroke-width="0" fill="#ffffff"></text> <text xml:space="preserve" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="5" id="svg_5" y="55.010217" x="50" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#ffffff"></text> </svg>';

window.addEventListener('load',() => {
    document.getElementsByTagName('body')[0].appendChild(LOADER);
});

LOADER.enable = () => {
    LOADER.classList.add('active');
    return LOADER;
};

LOADER.disable = () => {
    LOADER.classList.remove('active');
    return LOADER;
};

LOADER.setText = (text1,text2) => {
    let textList = LOADER.getElementsByTagName('text');
    if(text1 !== undefined) textList[0].innerHTML = text1;
    if(text2 !== undefined) textList[1].innerHTML = text2;
    return LOADER;
};

LOADER.clearText = () => {
    let textList = LOADER.getElementsByTagName('text');
    textList[0].innerHTML = '';
    textList[1].innerHTML = '';
    return LOADER;
};