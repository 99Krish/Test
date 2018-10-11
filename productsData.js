var elements = document.getElementsByClassName("column");
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}





function displayData()
{

	var productsList=[  
   {  
      "url":"product.html",
      "rating":5,
      "name":"dolor sit qui",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$175",
      "oldPrice":"$325",
      "price":"$227",
      "isFav":true,
      "_id":"5a3964f2b3701658152a1c81"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"in consectetur voluptate",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$332",
      "isFav":false,
      "_id":"5a3964f22bc8507f2f439f38"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"dolore reprehenderit nostrud",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$106",
      "oldPrice":"$626",
      "price":"$323",
      "isFav":false,
      "_id":"5a3964f2c02ac8896ad1d645"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"dolor laboris et",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$202",
      "isFav":true,
      "_id":"5a3964f2d756bb95c322ed3c"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"in nostrud aute",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$110",
      "oldPrice":"$310",
      "price":"$310",
      "isFav":true,
      "_id":"5a3964f2f9280277b2b38cba"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"magna anim duis",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$132",
      "oldPrice":"$780",
      "price":"$304",
      "isFav":true,
      "_id":"5a3964f2c4593d4eb8188eaa"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"incididunt officia nostrud",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$158",
      "oldPrice":"$528",
      "price":"$303",
      "isFav":false,
      "_id":"5a3964f22abbf902be7ba22e"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"exercitation ut do",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$172",
      "isFav":true,
      "_id":"5a3964f26991c5d378e3f23c"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"non laboris nostrud",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$139",
      "oldPrice":"$570",
      "price":"$361",
      "isFav":false,
      "_id":"5a3964f21fcec6ee87b6593c"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"amet Lorem exercitation",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$140",
      "oldPrice":"$618",
      "price":"$251",
      "isFav":false,
      "_id":"5a3964f264433f57a3117d99"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"pariatur consectetur ullamco",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$113",
      "oldPrice":"$767",
      "price":"$168",
      "isFav":false,
      "_id":"5a3964f2563798c9a74218ff"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"reprehenderit eu cupidatat",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$153",
      "oldPrice":"$268",
      "price":"$205",
      "isFav":true,
      "_id":"5a3964f2217d394b1351142b"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"consectetur fugiat eiusmod",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "price":"$331",
      "isFav":true,
      "_id":"5a3964f2228c9eba216b11e1"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"in elit commodo",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$127",
      "oldPrice":"$209",
      "price":"$128",
      "isFav":false,
      "_id":"5a3964f2df625801c1e1d8d7"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"quis nostrud duis",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$166",
      "oldPrice":"$260",
      "price":"$254",
      "isFav":false,
      "_id":"5a3964f28e8e71b3e5381c3a"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"qui duis consectetur",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$127",
      "oldPrice":"$340",
      "price":"$294",
      "isFav":true,
      "_id":"5a3964f270dfd3dfd124a7f5"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"ad sunt duis",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$141",
      "oldPrice":"$279",
      "price":"$142",
      "isFav":true,
      "_id":"5a3964f2b9526d1d70d51103"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"tempor deserunt proident",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "price":"$146",
      "isFav":false,
      "_id":"5a3964f2e6d40b951a3baec3"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"laboris ipsum consequat",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$152",
      "oldPrice":"$212",
      "price":"$282",
      "isFav":true,
      "_id":"5a3964f2343e7ae343e39d0a"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"dolore veniam et",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$143",
      "oldPrice":"$301",
      "price":"$340",
      "isFav":true,
      "_id":"5a3964f27fe3d42b480d92c1"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"deserunt veniam cillum",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$161",
      "oldPrice":"$273",
      "price":"$243",
      "isFav":true,
      "_id":"5a3964f286702be678a54d29"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"dolore ex esse",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$347",
      "isFav":true,
      "_id":"5a3964f2761d3121924c0ae1"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"deserunt ea incididunt",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$105",
      "oldPrice":"$511",
      "price":"$306",
      "isFav":false,
      "_id":"5a3964f2a24bf1dac9357dda"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"enim pariatur reprehenderit",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$145",
      "oldPrice":"$406",
      "price":"$338",
      "isFav":true,
      "_id":"5a3964f265419dced389358c"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"sunt cupidatat culpa",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$182",
      "oldPrice":"$791",
      "price":"$189",
      "isFav":false,
      "_id":"5a3964f253418b70bd4b87ff"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"voluptate amet duis",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$108",
      "oldPrice":"$562",
      "price":"$215",
      "isFav":false,
      "_id":"5a3964f2780af43b9a05466c"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"amet ut incididunt",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$110",
      "oldPrice":"$370",
      "price":"$254",
      "isFav":true,
      "_id":"5a3964f23f5f7a1f45b7ef09"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"ullamco sunt nisi",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$189",
      "oldPrice":"$215",
      "price":"$349",
      "isFav":false,
      "_id":"5a3964f2bccb72428ae546bc"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"consequat labore officia",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "price":"$131",
      "isFav":false,
      "_id":"5a3964f27da7891bb0cd083a"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"enim quis excepteur",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$192",
      "oldPrice":"$736",
      "price":"$272",
      "isFav":false,
      "_id":"5a3964f2daf44640bc489f92"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"deserunt laborum est",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$125",
      "oldPrice":"$528",
      "price":"$165",
      "isFav":false,
      "_id":"5a3964f29bd197e86551204c"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"consectetur cupidatat non",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$108",
      "oldPrice":"$528",
      "price":"$321",
      "isFav":true,
      "_id":"5a3964f28c9de72f0bd0d7c2"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"ea et in",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$143",
      "oldPrice":"$333",
      "price":"$377",
      "isFav":true,
      "_id":"5a3964f21ed320cb1606577b"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"proident id adipisicing",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$162",
      "oldPrice":"$440",
      "price":"$241",
      "isFav":true,
      "_id":"5a3964f2dab9470de9eb3a2b"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"esse veniam et",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$111",
      "isFav":false,
      "_id":"5a3964f21b048931d4e94df1"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"minim nisi culpa",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$167",
      "oldPrice":"$682",
      "price":"$393",
      "isFav":false,
      "_id":"5a3964f2705879b0c6c75ed2"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"sit ad consequat",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$118",
      "oldPrice":"$255",
      "price":"$228",
      "isFav":true,
      "_id":"5a3964f297fb8cff35b22ec3"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"deserunt eiusmod non",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$182",
      "oldPrice":"$345",
      "price":"$159",
      "isFav":true,
      "_id":"5a3964f271421932417e7346"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"non duis in",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$131",
      "oldPrice":"$532",
      "price":"$174",
      "isFav":false,
      "_id":"5a3964f2740cc1a132dcf3b2"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"deserunt dolore dolore",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$140",
      "oldPrice":"$793",
      "price":"$137",
      "isFav":false,
      "_id":"5a3964f291f59810ed8e5e8a"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"ullamco dolore commodo",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "price":"$164",
      "isFav":false,
      "_id":"5a3964f27f4554014c7909cd"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"duis adipisicing qui",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$105",
      "oldPrice":"$770",
      "price":"$180",
      "isFav":true,
      "_id":"5a3964f2fd43848d169c426b"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"id et et",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$195",
      "oldPrice":"$723",
      "price":"$134",
      "isFav":true,
      "_id":"5a3964f296667c8264ddcf8d"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"nostrud magna Lorem",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$107",
      "oldPrice":"$431",
      "price":"$298",
      "isFav":true,
      "_id":"5a3964f20fbf8310c54cc787"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"proident enim exercitation",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$187",
      "oldPrice":"$628",
      "price":"$384",
      "isFav":true,
      "_id":"5a3964f2ac43334ca65c8d25"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"eiusmod consequat nulla",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$120",
      "oldPrice":"$633",
      "price":"$105",
      "isFav":false,
      "_id":"5a3964f21eed6fe920591939"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"aliqua culpa labore",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$151",
      "oldPrice":"$610",
      "price":"$233",
      "isFav":true,
      "_id":"5a3964f2ac69ee02dc75f392"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"proident reprehenderit qui",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$111",
      "oldPrice":"$521",
      "price":"$323",
      "isFav":false,
      "_id":"5a3964f275e915b70cfe6694"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"sit proident consectetur",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$191",
      "oldPrice":"$723",
      "price":"$155",
      "isFav":false,
      "_id":"5a3964f2cd8ce5c39bb099c7"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"duis nulla ex",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$156",
      "oldPrice":"$548",
      "price":"$340",
      "isFav":true,
      "_id":"5a3964f2f72c4ffa61956ad9"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"sint excepteur aliqua",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$125",
      "oldPrice":"$355",
      "price":"$254",
      "isFav":true,
      "_id":"5a3964f24da20964a3ed0925"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"ea tempor consectetur",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$153",
      "oldPrice":"$270",
      "price":"$368",
      "isFav":true,
      "_id":"5a3964f27f381e82c32718eb"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"anim laborum quis",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$132",
      "oldPrice":"$553",
      "price":"$201",
      "isFav":true,
      "_id":"5a3964f2062b776d9e727f1d"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"duis consequat Lorem",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "price":"$124",
      "isFav":true,
      "_id":"5a3964f28ab247db42003d27"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"enim sint quis",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$158",
      "oldPrice":"$504",
      "price":"$181",
      "isFav":true,
      "_id":"5a3964f2102676d16098d953"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"exercitation fugiat laborum",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$156",
      "oldPrice":"$725",
      "price":"$301",
      "isFav":true,
      "_id":"5a3964f20197275555c11057"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"dolore consectetur voluptate",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$182",
      "oldPrice":"$639",
      "price":"$184",
      "isFav":true,
      "_id":"5a3964f24d9836615ad6a1ef"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"ut velit tempor",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$155",
      "oldPrice":"$686",
      "price":"$288",
      "isFav":false,
      "_id":"5a3964f2cec07ae77b3fb046"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"eu incididunt ad",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$189",
      "oldPrice":"$716",
      "price":"$249",
      "isFav":true,
      "_id":"5a3964f25639ec06c14e2256"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"ullamco anim dolor",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$135",
      "oldPrice":"$564",
      "price":"$161",
      "isFav":false,
      "_id":"5a3964f26d2c7c01c4d5bbaa"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"tempor adipisicing duis",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$128",
      "oldPrice":"$370",
      "price":"$214",
      "isFav":false,
      "_id":"5a3964f21de150d53ce3bbdb"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"duis deserunt eiusmod",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$164",
      "oldPrice":"$432",
      "price":"$388",
      "isFav":true,
      "_id":"5a3964f2367924ce33df56e9"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"anim eu irure",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$148",
      "oldPrice":"$682",
      "price":"$257",
      "isFav":false,
      "_id":"5a3964f2b41e0a9b77b2cfce"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"ipsum culpa anim",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$105",
      "isFav":false,
      "_id":"5a3964f2635566cf8c686436"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"aute magna id",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$108",
      "oldPrice":"$687",
      "price":"$231",
      "isFav":true,
      "_id":"5a3964f2a794c4701298f765"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"qui ipsum tempor",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$197",
      "oldPrice":"$644",
      "price":"$255",
      "isFav":false,
      "_id":"5a3964f25d2b85daad16e8eb"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"occaecat sint incididunt",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$162",
      "oldPrice":"$447",
      "price":"$283",
      "isFav":false,
      "_id":"5a3964f218ad6f0a2d4bd742"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"anim consequat cillum",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$151",
      "oldPrice":"$593",
      "price":"$308",
      "isFav":false,
      "_id":"5a3964f2fa732acb09089cdb"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"sunt eu anim",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$107",
      "oldPrice":"$480",
      "price":"$230",
      "isFav":false,
      "_id":"5a3964f2f634d300297277e9"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"eiusmod ex qui",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$136",
      "oldPrice":"$638",
      "price":"$135",
      "isFav":false,
      "_id":"5a3964f224598832dc4ff53e"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"non culpa sint",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "price":"$327",
      "isFav":true,
      "_id":"5a3964f20cf4f3c61b48d23a"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"ea aliquip commodo",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$115",
      "oldPrice":"$684",
      "price":"$253",
      "isFav":false,
      "_id":"5a3964f20477927873a8d28e"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"aliquip laborum proident",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$182",
      "oldPrice":"$364",
      "price":"$399",
      "isFav":true,
      "_id":"5a3964f29c91108a1b568711"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"amet nulla exercitation",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$105",
      "oldPrice":"$443",
      "price":"$386",
      "isFav":true,
      "_id":"5a3964f2b58fcb37efc7592a"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"est reprehenderit officia",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$181",
      "oldPrice":"$301",
      "price":"$251",
      "isFav":true,
      "_id":"5a3964f2da7af3ec82d92049"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"do ex culpa",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$132",
      "oldPrice":"$366",
      "price":"$147",
      "isFav":false,
      "_id":"5a3964f25055c9f847a23972"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"ipsum eu amet",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$133",
      "oldPrice":"$232",
      "price":"$298",
      "isFav":false,
      "_id":"5a3964f2dac394d161da0bc3"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"et exercitation elit",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$164",
      "oldPrice":"$662",
      "price":"$134",
      "isFav":true,
      "_id":"5a3964f2b14d2f6546532c93"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"fugiat velit laborum",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$108",
      "oldPrice":"$514",
      "price":"$238",
      "isFav":false,
      "_id":"5a3964f2c99af821c1fca695"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"incididunt amet esse",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$138",
      "oldPrice":"$265",
      "price":"$326",
      "isFav":false,
      "_id":"5a3964f2562d8970ca3624b6"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"tempor magna velit",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$185",
      "oldPrice":"$746",
      "price":"$219",
      "isFav":true,
      "_id":"5a3964f24f6ac3fd57c2b5d9"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"magna sit deserunt",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$132",
      "oldPrice":"$669",
      "price":"$116",
      "isFav":false,
      "_id":"5a3964f2a3530fa3185828d1"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"elit elit ex",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "price":"$214",
      "isFav":true,
      "_id":"5a3964f222b5fbd998706762"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"deserunt non ullamco",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$178",
      "oldPrice":"$706",
      "price":"$292",
      "isFav":false,
      "_id":"5a3964f20ddfd79359251996"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"proident sit et",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$190",
      "oldPrice":"$468",
      "price":"$294",
      "isFav":false,
      "_id":"5a3964f24a12946da5edbc8d"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"commodo do ea",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$145",
      "oldPrice":"$516",
      "price":"$230",
      "isFav":false,
      "_id":"5a3964f291d747bd933362b6"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"anim minim adipisicing",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$112",
      "oldPrice":"$596",
      "price":"$228",
      "isFav":true,
      "_id":"5a3964f28b014c2157c2861a"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"velit id consequat",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$120",
      "oldPrice":"$651",
      "price":"$230",
      "isFav":false,
      "_id":"5a3964f2bb0d07cecb637ab4"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"exercitation ex ex",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$133",
      "oldPrice":"$364",
      "price":"$224",
      "isFav":true,
      "_id":"5a3964f20bff4fe594dcc21a"
   },
   {  
      "url":"product.html",
      "rating":3,
      "name":"aliqua aliqua sit",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$150",
      "oldPrice":"$366",
      "price":"$314",
      "isFav":false,
      "_id":"5a3964f2cd2879b187af2b24"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"aliquip laborum consequat",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$124",
      "oldPrice":"$439",
      "price":"$297",
      "isFav":true,
      "_id":"5a3964f28658d3816f144ffe"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"aliquip nulla ut",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$113",
      "oldPrice":"$478",
      "price":"$190",
      "isFav":true,
      "_id":"5a3964f2eef1037be42e14bb"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"cupidatat aliquip aute",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "savings":"$184",
      "oldPrice":"$417",
      "price":"$333",
      "isFav":true,
      "_id":"5a3964f2513697c5e64c0a2d"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"magna nostrud sint",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$126",
      "oldPrice":"$655",
      "price":"$140",
      "isFav":true,
      "_id":"5a3964f24b4f55ce7e7490b0"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"et ea dolore",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$162",
      "oldPrice":"$483",
      "price":"$297",
      "isFav":false,
      "_id":"5a3964f21a30d00204e4a0ba"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"anim magna mollit",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$170",
      "oldPrice":"$302",
      "price":"$142",
      "isFav":false,
      "_id":"5a3964f2f2708539e690ccad"
   },
   {  
      "url":"product.html",
      "rating":2,
      "name":"laboris nostrud incididunt",
      "size":"XL - Extra large",
      "picture":"http://placehold.it/370x250",
      "savings":"$182",
      "oldPrice":"$263",
      "price":"$101",
      "isFav":false,
      "_id":"5a3964f26adb180c0837c0f7"
   },
   {  
      "url":"product.html",
      "rating":1,
      "name":"ullamco consequat fugiat",
      "size":"S - Small",
      "picture":"http://placehold.it/370x250",
      "savings":"$196",
      "oldPrice":"$745",
      "price":"$186",
      "isFav":false,
      "_id":"5a3964f2bb07f896204ee769"
   },
   {  
      "url":"product.html",
      "rating":5,
      "name":"consequat ea occaecat",
      "size":"M - Medium",
      "picture":"http://placehold.it/370x250",
      "savings":"$107",
      "oldPrice":"$304",
      "price":"$399",
      "isFav":true,
      "_id":"5a3964f2d67aff8ce4bf7726"
   },
   {  
      "url":"product.html",
      "rating":4,
      "name":"nulla sint exercitation",
      "size":"L - Large",
      "picture":"http://placehold.it/370x250",
      "price":"$375",
      "isFav":false,
      "_id":"5a3964f292b6bb681cae805f"
   }
]
		
		
		
	 var output="";
	 var stars="";
	 var oldprice="";
	 var savings="";
	 
	 var listLength=productsList.length;
	
	for (var i = 0; i < productsList.length; i++) 
	{
		
		if(productsList[i].rating>0)
		{
			for(var j=0;j<productsList[i].rating;j++)
			{
				stars+="★";
				
			}
			
			
		}
		
		
		if(productsList[i].oldPrice==null)
		{
			
			oldprice="";
			savings="";
			
		}
		else{
			
			oldprice=productsList[i].oldPrice;
			savings= "You save "+productsList[i].savings;
			
		}
		
		output+="<div style='float: left;'><a target='_blank' href="+ productsList[i].picture+">";
		output+="<img style='margin-top:23px; margin-left:23px; margin-right:23px; margin-bottom:0;' src="+ productsList[i].picture+"></a>";
		output+="<div style='padding:12px; margin-left:23px;margin-right:23px;background-color: white;'><p><span style='padding-left:10px; padding-top:25px; font-weight:bold; font-size: 120%;'>"+productsList[i].name+"</p><p style='padding-left:10px;'><b>"+productsList[i].size+"</b><span style='font-size: 150%;font-weight:bold; color:red'>"+stars+"</span></p>";
		output+="<p><span style='padding-left:10px;font-weight:bold; font-size: 180%;'>"+productsList[i].price+"</span><span style='display:inline-block; width: 10px;'></span><strike>"+oldprice+"</strike><span style='display:inline-block; width: 10px;'></span>";
		output+="<span style='color:red;font-weight:bold;'>"+savings+"</span></p></div></div>";
		
		stars="";
		savings="";
	}
	
	  document.getElementById("listLength").innerHTML = listLength +" results";
	  document.getElementById("productDataDisplay").innerHTML = output;
	  
}




