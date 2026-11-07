
// 1-misol
let data = "javascript";
console.log(data.toUpperCase());

// 2-misol
let great = "HELLO WORLD";
console.log(great.toLowerCase());

// 3-misol
let empty = "  Salom  ";
console.log(empty.trim());

// 4-misol
let js = "  JavaScript darsi  ";
console.log(js.trimStart());

// 5-misol
let web = "  Frontend       ";
console.log(web.trimEnd());

// 6-misol
let theme = "Men JavaScript organaman";
console.log(theme.includes("JavaScript"));

// 7-misol
let weather = "Bugun havo juda yaxshi";
console.log(weather.startsWith("ertaga"));

// 8-misol
let dot = "dasturlash.js";
console.log(dot.endsWith(".js"));

// 9-misol
let world = "Salom dunyo";
console.log(world.indexOf("dunyo"));

// 10-misol
let fruit = "banana";
console.log(fruit.indexOf("a"));
console.log(fruit.lastIndexOf("a"));

// 11-misol
let text12 = "JavaScript";
console.log(text12.slice(0, 4));

// 12-misol
let word13 = "JavaScript";
console.log(word13.slice(-6));

// 13-misol
let word14 = "Kompyuter";
console.log(word14.slice(2, 7));

// 14-misol
let greeting15 = "Assalomu alaykum";
console.log(greeting15.length);

// 15-misol
let word16 = "Salom";
console.log(word16.charAt(0));

// 16-misol
let word17 = "Dasturlash";
console.log(word17.slice(-1));

// 17-misol
let sentence18 = "Men HTML organaman";
console.log(sentence18.replace("HTML", "CSS"));

// 18-misol
let fruits19 = "olma,anor,uzum";
console.log(fruits19.replace(",", ";"));

// 19-misol
let numbers20 = "bir ikki bir uch";
console.log(numbers20.replaceAll("bir", "1"));

// 20-misol
let word21 = "Salom";
console.log(word21.concat("!"));

// 21-misol
let lang22 = "Java";
console.log("Hello ".concat(lang22));

// 22-misol
let text23 = " salom dunyo ";
console.log(text23.trim().toUpperCase());

// 23-misol
let word24 = "developer";
console.log(word24.split("e").length - 1);

// 24-misol
let text25 = "mississippi";
console.log(text25.indexOf("ss"));

// 25-misol
let code26 = "12345";
console.log(code26.charAt(3));

// 26-misol
let msg27 = "Bugun dars bor";
console.log(msg27.replace("dars", "imtihon"));

// 27-misol
let spaceText28 = " JavaScript ";
console.log(spaceText28.trim().length);

// 28-misol
let stack29 = "frontend";
console.log(stack29.toUpperCase());
console.log(stack29.toLowerCase());

// 29-misol
let sentence30 = "Salom, dunyo!";
console.log(sentence30.slice(7, 12));

// 31 
let userName = " DioDev";
console.log(userName.trim().tolowerCase); //diodev
// 32 misol
let tech = ( "Javascrip dasturlash tili");
console.log(tech.trim().includes("JavaScript"));// true



//35 
let dom = "https:// example.com/page";
console.log((dom.startsWith("https://"))); // true

//36
let text = "report.pdf";
console.log(text.endsWith(".pdf")); // true
//37
let mine = "Men Java Scriptni o'rganyapman";
console.log((mine.trim ().replaceAll("  ", " ")));//true

// 38-misol
let tech38 = "frontend-backend-fullstack";
console.log(tech38.slice(0, tech38.indexOf("-")));

//39--misol
let b = "2026-11-04"
console.log(b.replaceAll("-"," ").split(" "));


//40misol
let greatt = "Hello JvaScript"
let cont = 'tolower'
let result = greatt.toLowerCase();
console.log(result.slice(0, 1).toUpperCase().concat(cont));

// 41 misol 
let text41 = "Men React va JavaScript organaman";
console.log(text41.includes("React")); // true 
console.log(text41.includes("JavaScript")); // true 
 
// 42 misol
let t = "abc123XYZ"
console.log(t.slice(3,6));
//43
let tt = "abc123XYZ";
console.log(tt.slice(3,6));

//44 misol
let trem = " salom-dunyo ";
console.log(trem.trim().replace("-"," "));


//45 misol
let textt = "JavaScript Java java JAVASCRIPT"
let r = textt.split(' ')[2]
console.log(r.indexOf('j'));
console.log(r.lastIndexOf('a'));


// 45-masala: URL'ni tozalash va domenini olish
let url = " https://my-site.uz ";
let cleanUrl = url.trim();
let domen = "";
if (cleanUrl.startsWith("https://")) {
    domen = cleanUrl.replace("https://", "");
} else {
    domen = cleanUrl;
}
console.log("45:", domen);


// 46-masala: 
let matn = "Dasturlash — bu kelajak";
let yangiMatn = matn.replace("—", "-");
console.log("46:", yangiMatn);


// 47-masala: 
let str1 = " JavaScript ";
let str2 = " Methods ";
let result47 = str1.trim() + " " + str2.trim();
console.log("47:", result47);


// 48-masala: 
let text48 = "salom dunyo salom olam";
let replacedText = text48.replaceAll("salom", "assalom");
let finalResult48 = replacedText.toUpperCase();
console.log("48:", finalResult48);


// 49-masala: 
let email = " user.name@gmail.com ";
let cleanEmail = email.trim();
let hasAt = cleanEmail.includes("@");
let endsWithCom = cleanEmail.endsWith(".com");
console.log("49:", cleanEmail, "| @ bormi:", hasAt, "| .com bilan tugaydimi:", endsWithCom);


// 50-masala:
let soz = "JavaScript";
let teskari = "";
for (let i = soz.length - 1; i >= 0; i--) {
    teskari += soz[i];
}
console.log("50:", teskari);