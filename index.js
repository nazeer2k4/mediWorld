const PromptAsync = require("prompt-sync");
const prompt = PromptAsync();

console.log("Welcome to mediWorld");

let patdata = [];
let index = 0;


const instructions = () => {
    console.log("Enter 1 to register as a patient");
    console.log("Enter 2 to log in as a patient");
    console.log("Enter 3 to Exit");
    var ch = prompt("Enter:");
    return ch;
}

register = () => {
    console.log(" Enter Your Registration Informations\n");
    let name = prompt("Enter Your Name : ");
    let username = prompt("Enter Your UserName : ");
    let gender = prompt("Enter Your Gender : ");
    let age = prompt("Enter Your Age : ");
    let password = prompt("Enter Your Password : ");

    patdata[index] = {
        name,
        username,
        gender,
        age,
        password
    };

    console.log("\nCongratulations, You Have Successfully Registered..!\n");

    console.log("Patient Informations");
    console.log("Patient Name :", patdata[index].name);
    console.log("Patient Gender :", patdata[index].gender);
    console.log("Patient Age :", patdata[index].age);

    index++;
}

const checkLogin = () => {

    userIndex = -1;

    for (let i = 0; i < index; i++) {
        if (loginUserName === patdata[i].username && loginPass === patdata[i].password) {
            userIndex = i;
            break;
        }
    }
    return userIndex;
}


mainLoop: while (true) {

    let Key = instructions();

    switch (Key) {
        case "1":
            register();
            break;
            
            case "2":

            if (index === 0) {
                console.log("You Haven't Registered Yet, Sorry..!");
                continue mainLoop;

            }

            console.log("\nEnter Your Login Informations");
            loginUserName = prompt("Enter Your UserName : ");
            loginPass = prompt("Enter Your Password : ");

              let userIndex = checkLogin();
             if (userIndex !== -1) {
                console.log(`Welcome Again ${patdata[userIndex].name}..!`);


                    console.log("Patient Profile ");
                    console.log("UserName :", patdata[userIndex].username);
                    console.log("Name :", patdata[userIndex].name);
                    console.log("Gender :", patdata[userIndex].gender);
                    console.log("Age :", patdata[userIndex].age);
                

                   

                while (true) {

                    console.log("\nMenu");
                    console.log("Enter 1 To View Available Doctors");
                    console.log("Enter 2 To Check Doctor Schedules");
                    console.log("Enter 3 To Book An Appointment");
                    console.log("Enter 4 To View Booked Appointments");
                    console.log("Enter 5 For Log Out\n");
                
                    let key = prompt("Enter: ");
                

                    switch (Key) {
                        case "1":
                            Doctors_avl();
                            break;

                        case "2":
                            doctor_sch();
                            break;

                        case "3":
                            book_app();
                            break;

                        case "4":
                            view_book_app();
                            break;

                        case "5":
                            console.log("\nYou Have Sucessfully Log Out");
                            continue mainLoop;

                        default:
                            console.log("\nInvalid Choice. Please Try Again..!");
                            break;
                    }
                }
            }
            else {
                console.log("Invalid UserName Or PassWord");
            }
        break;

        case "3":
            console.log("You Are Exited.");
            break mainLoop;

            default:
                console.log("\nInvalid Choice. Please Try Again..!");
                continue mainLoop;

        }
    }

