<template>
    <div class="form-group">
        <input
                :type="type"
                :placeholder="placeholder"
                :class = "NameClass"
                @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        name: "MyInput",
        props:{
            type: String,
            placeholder: String,
            NameClass: {type: String, default: `form-control`}
        },

        data() {
            return {
                FormData: {

                }
            }
        },

        filters: {
            formatEnding(val) {
                console.log(val);
                // this.endingsArr.forEach(function (element, index) {
                //   // console.log(val);
                //   console.log(index);
                //   console.log(element);
                //     if (element.includes(val)) {
                //
                //
                //       return index;
                //     }
                // });
            }
        }
    }
</script>

<style scoped>

</style>