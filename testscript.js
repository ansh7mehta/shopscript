![CDATA[
alert("Discount Applied! Prices will be updated at checkout.");
let url_string = "/discount/";
var urlParams = new URLSearchParams(window.location.search);
const params = new Proxy(new URLSearchParams(window.location.search), {get: (searchParams, prop) => searchParams.get(prop),});
let aff = params.id;
let discountURL = url_string + aff;
let postURL = "https://postandearn.com/version-test/api/1.1/wf/visit_stats?id=" + aff;
fetch(postURL, {method : "POST", mode: 'no-cors'});
location.replace(discountURL);]]
