export default {
    props: {
        type: {
            type: String,
            validate: val => ['reset', 'submit'].indexOf(val) + 1,
            default: 'button'
        },

        label: {
            type: String,
            default: 'Click Me'
        },
    },

    methods: {
        handler(e, eventName, fn) {
            e.target.setAttribute('disabled', 'disabled')
            console.log('this is ok');
            fn(e);
            this.$emit(eventName, e);
        }
    }

}