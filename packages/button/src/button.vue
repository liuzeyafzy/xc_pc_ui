<template>
    <button
        class="xc-button"
        :class="[
            type ? 'xc-button--' + type : ' ',
            buttonSize ? 'xc-button--' + buttonSize : '',
            {
                'is-disabled': disabled,
            }
        ]"
    >
        <span><slot></slot></span>
    </button>
</template>

<script>
    export default {
        name: 'XcButton',

        props: {
            type: {
                type: String,
                default: 'default'
            },
            size: String,
            disabled: Boolean,
        },

        computed: {
            buttonSize() {
                return this.size
            }
        }
    }
</script>