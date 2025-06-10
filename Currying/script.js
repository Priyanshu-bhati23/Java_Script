function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}


// Curried function to send email
const sendAutoEmail = to => subject => body => {
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
};

// Call the curried email sender
let step1 = sendAutoEmail("priyanshubhati.dev@gmail.com");
let step2 = step1("New Order Confirmation");
step2("Hey Priyanshu, here is something for you!");

// Curried addition function
const add = a => b => c => a + b + c;

// Call the curried addition
console.log(add(2)(3)(8));  // Output: 13


