export default function (el, bind) {
    let {arr, index, fn} = bind.value;
    if (arr.length - 1 !== index) {
        return;
    }
    fn();
}
