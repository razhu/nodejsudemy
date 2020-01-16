function change(b) {
    b = 2;
}
let a = 1;
change(a);
// coment for leanring purpoes console.log(a);
// lets do this by refcen
function changeObj(d) {
    d.prop1 = () => {};
    d.prop2 = {};
}
 var c = {};
 c.prop1 = {};
 changeObj(c);
 console.log(c);