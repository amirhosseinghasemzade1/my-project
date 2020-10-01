

var products=[


    {

        title: "عطر تلخ زنانه ",
        img:src="../images/gucci-guilty-black-edt%20(1).jpg",
        productsCode:"کد محصول : ISPC-100706"
    },

    {
        img:src="../images/image4.jpg",
        title: "ادکلن پرتقالی ",
        productsCode:"کد محصول : ISPC-101028"

    },
    {
        img:src="../images/image7.jpg",
        title: "عطر شیرین پرتقالی",
        productsCode:"کد محصول : ISPC-100297-1"
    },

    {
        img:src="../images/image8.jpg",
        title: "عطر تلخ مردانه",
        productsCode:"کد محصول : ISPC-101668-1"
    },
    {
        img:src="../images/Untitled4.png",
        title: "عطر ملایم مخصوص خانم ها",
        productsCode:"کد محصول : ISPC-101590-2"
    },
    {
        img:src="../images/image5.jpg",
        title: "عطر ملایم مردانه ",
        productsCode:"کد محصول : ISPC-101590-2"
    },
    {
        img:src="../images/51240572_347697592739993_2274350435176435853_n.jpg",
        title: "  ادکلن مردونه ",
        productsCode:"کد محصول : ISPC-101590-2"
    },
    {
        img:src="../images/image6.jpg",
        title: "ادکلن زنانه",
        productsCode:"کد محصول : ISPC-101590-2"
    },
    {
        img:src="../images/81131809_183481672710806_8877983555300047110_n.jpg",
        title: "عطر و ادکلن مردانه و زنانه ",
        productsCode:"کد محصول : ISPC-101668-1"

    }
];

var searchInput=document.getElementById('phone-number');
var button=document.getElementById('searchbtn');

var lists=document.querySelector('.pedar');

searchResult=[];
for(const i in products){
    // ijad tag
    var div=document.createElement('div');
    var h2Tag=document.createElement('h2');
    var img=document.createElement('img');
    var pTag=document.createElement('p');
    h2Tag.className="h2tag";
    pTag.className="pTag";
    img.className="imgTag";
// mohtvaro to tag mirize
    h2Tag.innerHTML=products[i].title;
    img.setAttribute('src',products[i].img);
    pTag.innerHTML=products[i].productsCode;
// tag haro toy div  qrar mide
    div.appendChild(h2Tag);
    div.appendChild(img);
    div.appendChild(pTag);
    lists.appendChild(div);
};


button.addEventListener('click',function(){
    searchResult=[];
    lists.innerHTML='';
    search(products,searchInput.value);
    for (const i in searchResult){
        var div=document.createElement('div');
        var h2Tag=document.createElement('h2');
        var img=document.createElement('img');
        var pTag=document.createElement('p');
        h2Tag.className="h2tag";
        pTag.className="pTag";
        img.className="imgTag";
        h2Tag.innerHTML=searchResult[i].title;
        img.setAttribute('src',searchResult[i].img);
        pTag.innerHTML=searchResult[i].productsCode;
        div.appendChild(h2Tag);
        div.appendChild(img);
        div.appendChild(pTag);
        lists.appendChild(div);
    }
});

function search(array,word){

    for(const i in array){
        if(array[i].title.includes(word)){
            searchResult.push(array[i]);

        }
    }
    return searchResult;
}



