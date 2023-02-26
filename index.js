// Answer for Question number 1

function InstagramPost(author, content, img_source, views, likes){
    this.author =  author;
    this.content = content;
    this.link = img_source;
    this.views = views;
    this.likes = likes;
}


// Answer for Question number 2
const igPost1 =  new InstagramPost("Amarilda", "Tecnology", "www.google.com/world_of_tecnology.jpg", 200, 150 );
console.log(igPost1);

const igPost2 = new InstagramPost("Camila", "Geology", "www.google.com/rock.png", 500, 120 );


// Answer for Question number 3
//point a)
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location
    }
}

const person = createPerson("Musa Dawodu", 19, "Lagos State");
console.log(person);

//point b)
function  createJambScores(eng, govt, lit, crk) {
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk : crk
    }

}

const Scores =  createJambScores(70,85,82,94); 
console.log(Scores);



// Answer for Question number 4
//Answer: The different ways to clones objects are: using SPREAD OPERATORS and using the ASSIGN function

const myObject = {
    name: "Amarilda",
    track: "Sofware Development",
    country: "Mozambique",
    age: 21
}

console.log(myObject);

//Exemplo using spread operators:
const newObject1= {...myObject};

//Exemplo using assifn function:
const newObject2 = Object.assign({}, myObject);

console.log(newObject1);
console.log(newObject2);



// Answer for Question number 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    CCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for(let candidate of Object.entries(presidentialCandidates)){
   console.log(candidate[1]+" is the presedential candidate of "+ candidate[0]);
    
}  