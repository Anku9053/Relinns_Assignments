const dataset = [{"firstName":"Rosie","lastName":"Gove","email":"rgove0@sohu.com"},
{"firstName":"Andrei","lastName":"Girt","email":"agirt1@angelfire.com"},
{"firstName":"Willy","lastName":"Deluce","email":"wdeluce2@tripadvisor.com"},
{"firstName":"Morly","lastName":"Nano","email":"mnano3@msu.edu"},
{"firstName":"Robbi","lastName":"Adamczewski","email":"radamczewski4@admin.ch"},
{"firstName":"Jonie","lastName":"Norvel","email":"jnorvel5@wikispaces.com"},
{"firstName":"Bennie","lastName":"Duddell","email":"bduddell6@amazon.co.uk"},
{"firstName":"Osmond","lastName":"Burdikin","email":"oburdikin7@usgs.gov"},
{"firstName":"Carly","lastName":"Yeoman","email":"cyeoman8@pen.io"},
{"firstName":"Quintana","lastName":"Roggero","email":"qroggero9@usda.gov"},
{"firstName":"Kristo","lastName":"Sharplin","email":"ksharplina@hp.com"},
{"firstName":"Codi","lastName":"Doick","email":"cdoickb@cam.ac.uk"},
{"firstName":"Adiana","lastName":"Ausiello","email":"aausielloc@people.com.cn"},
{"firstName":"Holden","lastName":"Mandel","email":"hmandeld@columbia.edu"},
{"firstName":"Urban","lastName":"Smeed","email":"usmeede@buzzfeed.com"},
{"firstName":"Maximilianus","lastName":"Fossey","email":"mfosseyf@amazonaws.com"},
{"firstName":"Veda","lastName":"Ryves","email":"vryvesg@netlog.com"},
{"firstName":"Fremont","lastName":"Hariot","email":"fharioth@wsj.com"},
{"firstName":"Bibi","lastName":"McKiddin","email":"bmckiddini@indiatimes.com"},
{"firstName":"Suzi","lastName":"Howlings","email":"showlingsj@delicious.com"},
{"firstName":"Julieta","lastName":"Bendelow","email":"jbendelowk@chronoengine.com"},
{"firstName":"Avie","lastName":"O'Scollee","email":"aoscolleel@businesswire.com"},
{"firstName":"Franzen","lastName":"Eplate","email":"feplatem@fc2.com"},
{"firstName":"Cirstoforo","lastName":"Mapam","email":"cmapamn@hibu.com"},
{"firstName":"Lillian","lastName":"Stoile","email":"lstoileo@timesonline.co.uk"},
{"firstName":"Mercedes","lastName":"Roswarne","email":"mroswarnep@netlog.com"},
{"firstName":"Bonnee","lastName":"Belvard","email":"bbelvardq@godaddy.com"},
{"firstName":"Neel","lastName":"Zottoli","email":"nzottolir@narod.ru"},
{"firstName":"Glennie","lastName":"Turfes","email":"gturfess@craigslist.org"},
{"firstName":"Lyndsie","lastName":"Creelman","email":"lcreelmant@paginegialle.it"}]


function dataset_Email(dataset){
  return dataset.map((el)=>{
    const data =  el.email.split('@',1).join();
    return data.toUpperCase()
  })
}



function ascending_Email(dataset){
  const data  = dataset.map((el)=>{
    return el.email.toLowerCase();
    
  })
  return data.sort()
}


function needed_Syntax(dataset){
  // Hi I am Charlie Smith. You can reach out to me on charlie@yopmail.com.
  
  const data = dataset.forEach((el)=>{
    dataHelper = `Hi I am ${el.firstName} ${el.lastName}. You can reach out to me on ${el.email}`
    console.log(dataHelper)
  })

  return data


}

function adding_Age(dataset){
  const data = dataset.forEach((el)=>{
    el.age = Math.floor(Math.random(10)*30);
    
  })
  return dataset
}

const Adding_Age = adding_Age(dataset)
const Ascending_Emmails = ascending_Email(dataset)
const Needed_Syntax = needed_Syntax(dataset)
const Add_Email = dataset_Email(dataset)
console.log("Needed_Syntax : ",Needed_Syntax)
console.log("Adding_Age : ",Adding_Age)
console.log("Ascending_Emmails : ",Ascending_Emmails)
console.log("Add_Email : ",Add_Email)