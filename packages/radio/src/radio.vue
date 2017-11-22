<template>
    <label
        role="radio"
        class="xc-radio"
        :class="{
            'is-checked': isChecked,
            'is-disabled': isDisabled
        }"
    >
        <span
            class="xc-radio__input"
            :class="{
                'is-checked': isChecked,
                'is-disabled': isDisabled
            }"
        >
            <span class="xc-radio__inner"></span>
            <input
                type="radio"
                :value="label"
                class="xc-radio__original"
                v-model="model"
                :name="name"
                :disabled="isDisabled"
                @change="handleChange"
            >
        </span>
        <span class="xc-radio__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
    import Emitter from '../../../src/mixins/emitter'

    export default {
        name: 'xc-radio',

        componentName: 'xc-radio',

        mixins: [Emitter],

        props: {
            value: {},
            label: {},
            name: String,
            disabled: Boolean
        },

        computed: {
            model: {
                get() {
                    return this.isGroup ? this._radioGroup.value : this.value;
                },
                set(val) {
                    if(this.isGroup) {
                        this.dispatch('XcRadioGroup', 'input', [val]);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },
            isGroup() {
                let parent = this.$parent;
            
                while(parent) {
                    if(parent.$options.componentName !== 'XcRadioGroup') {
                        parent = parent.$parent;
                    } else {
                        this._radioGroup = parent;
                        return true;
                    }
                }
                return false;
            },
            isChecked() {
                return this.model === this.label;
            },
            isDisabled() {
                return this.isGroup
                    ? this._radioGroup.disabled || this.disabled
                    : this.disabled;
            }
        },

        methods: {
            handleChange() {
                this.$nextTick(() => {
                    this.$emit('change', this.model);
                    this.isGroup && this.dispatch('XcRadioGroup', 'handleChange', this.model);
                });
            }
        }
    }
</script>