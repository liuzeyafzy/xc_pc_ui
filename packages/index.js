import XcButton from './button';
import XcRow from './row';
import XcCol from './col';
import XcCheckbox from './checkbox'
import XcCheckboxGroup from './checkbox-group'
import XcRadio from './radio'
import XcRadioGroup from './radio-group'
import XcTabs from './tabs'
import XcTabPane from './tab-pane'

const components = [
    XcButton, XcRow, XcCol, XcCheckbox, XcCheckboxGroup, XcRadio, XcRadioGroup, XcTabs, XcTabPane
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
    XcCol,
    XcCheckbox,
    XcCheckboxGroup,
    XcRadio,
    XcRadioGroup,
    XcTabs,
    XcTabPane
  };