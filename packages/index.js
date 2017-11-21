import XcButton from './button';
import XcRow from './row';
import XcCol from './col';

const components = [
    XcButton, XcRow, XcCol
]

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => Vue.component(component.name, component));
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

export default {
    install,
    XcButton,
    XcRow,
    XcCol
  };