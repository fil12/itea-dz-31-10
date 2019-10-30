export default function (el, bind) {
    let elClassNmae = el.className;
    el.className = el.className+bind.value.mod;
    console.log(bind.value.mod);
}