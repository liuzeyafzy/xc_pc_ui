<template>
    <button
        class="xc-button"
        :class="[
            type ? 'xc-button--' + type : ' ',
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
            disabled: Boolean,
        }
    }
</script>