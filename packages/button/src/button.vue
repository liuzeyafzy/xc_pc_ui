<template>
    <button
        class="xc-button"
        :class="[
            type ? 'xc-button--' + type : ' '
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
            }
        }
    }
</script>