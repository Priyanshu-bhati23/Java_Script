const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}//target
const obj2={3:"a",4:"b"}//source
// const obj3={3:"e",4:"f"}//source
const obj4={3:"g",4:"h"}//source

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggeddIn'));


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}

//course.courseInstructor

const {courseInstructor}=course
console.log(courseInstructor);

