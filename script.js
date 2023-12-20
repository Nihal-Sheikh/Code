const TopBar = document.getElementById("TopBar")
const TextBox = document.getElementById("TextBox"); 
const Home = document.getElementById("Home");
const About = document.getElementById("About");
const Works = document.getElementById("Works");
const Services = document.getElementById("Services");
const Contact = document.getElementById("Contact");
// imports every text, the text box and the top navigation box
const Background1 = document.getElementById("Background1");
const Background2 = document.getElementById("Background2");
const Background3 = document.getElementById("Background3");
const Background4 = document.getElementById("Background4");
const BackgroundR2 = document.getElementById("BackgroundR2");
const BackgroundR3 = document.getElementById("BackgroundR3");
const BackgroundR4 = document.getElementById("BackgroundR4");
const BackgroundR5 = document.getElementById("BackgroundR5");
Background1.Value = 11;
Background2.Value = 12;
Background3.Value = 13;
Background4.Value = 14;
BackgroundR2.Value = 15;
BackgroundR3.Value = 16;
BackgroundR4.Value = 17;
BackgroundR5.Value = 18;
// imports every background and assigns them a value
let Index = 0;
let ActiveBackground = Background1;
let Height = window.visualViewport.height;
let Width = window.visualViewport.width;//calculates viewport witdh and height
let Active = Home;//keeps count of which tab is active
Home.Value = 1;
About.Value = 2;
Works.Value = 3;
Services.Value = 4;
Contact.Value = 5; //Assigns a value to each tab (Needed to make the movement of tab smooth)
let MoveSpeed = 0.8;
let TabToLeft = false;
let CurrentlyTransitioning = false;
MakeTextBiggernMove(Home);//Loads home on star
function CalculateDistanceValue(d) { //Calculates  move time
        let DistanceValue = d.Value - Active.Value;
        if (DistanceValue < 0) {
            TabToLeft = true;
            DistanceValue = DistanceValue * -1;
        }
        else {
            TabToLeft = false;
        }
        MoveSpeed = ((0.8) + (0.2 * DistanceValue))
        console.log(TabToLeft)
    }
function MakeTextBiggernMove(m) { //Makes the tab icon bigger and moves textbox
    if (CurrentlyTransitioning == false) //if not already in transition a enacts function otherwise does it later
    {
    Main(m);
    }
    else {
        setTimeout(() => {
            Main(m)
        }, 810);
    }
}
function Main(t) {
    Height = window.visualViewport.height;
    Width = window.visualViewport.width;//Updates viewport witdh and height
    CalculateDistanceValue(t);//Triggers move time calculation(also helps to count if the user is moving his tab to left or right)
    
    
    if ((Width/Height) > 1.35) {// moves the textbox if it is not viewed a mobile phone
        
        switch (t) //Change color
        {
        case Home: 
            TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(19%, 25%)`;
            TopBar.style.backgroundColor = `rgba(6, 46, 83, 0.9)`;t.style.transition = "0.2s ease";
            t.style.height = "6vh";
            t.style.width = "18vw";
            t.style.transform =  `translate(0%,-20%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
            break;
        case About: 
            TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(9.5%, 25%)`;
            TopBar.style.backgroundColor = `rgba(3, 0, 40, 0.9)`;
            t.style.height = "6vh";
            t.style.width = "18vw";
            t.style.transform =  `translate(0%,-20%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
            break;
        case Works: 
            TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(1%, 20%)`;
            TopBar.style.backgroundColor = `rgba(12, 49, 17, 0.9)`;
            t.style.height = "7.5vh";
            t.style.width = "18vw";
            t.style.transform =  `translate(0%,-30%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
            break;
        case Services: 
            TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(-9%, 25%)`;
            TopBar.style.backgroundColor = `rgba(41, 18, 1, 0.9)`;
            t.style.height = "6vh";
            t.style.width = "18vw";
            t.style.transform =  `translate(0%,-20%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
            break;
        case Contact: 
            TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(-19%, 25%)`;
            TopBar.style.backgroundColor = `rgba(33, 33, 33, 0.9)`;
            t.style.height = "6vh";
            t.style.width = "18vw";
            t.style.transform =  `translate(0%,-20%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
            break;
        
        }
    
    }
    else{
        TextBox.style.transition = `${MoveSpeed}s ease`;
            TextBox.style.transform = `translate(0%, 25%)`;
    }
    if (Active != t)//Checks if the current tab is active if not triggers reset
    {
    ChangeBackground(t);
    TriggerReset()
    Active = t; //sets target of reset to the tab
    }
    
}
function TriggerReset() {
    switch (Active) { //triggers reset
        case Home:
            Reset(Home);
            break;
        case About:
            Reset(About);
            break;
        case Works:
            Reset(Works);
            break;
        case Services:
            Reset(Services);
            break;
        case Contact:
            Reset(Contact);
            break;
    }
}
function Reset(x) {//Resets the previous tab to its original size
    if (x == Works) {
        x.style.transition = "0.3s ease";
        x.style.height = "5.7vh";
        x.style.width = "14vw";
        x.style.transform =  `translate(0%,-10%)`;//The counter offset is no longer needed; resets it.
    }
    else {
        x.style.transition = "0.3s ease";
        x.style.height = "4.5vh";
        x.style.width = "14vw";
        x.style.transform =  `translate(0%,0%)`;//The counter offset is no longer needed; resets it.
    }
}
function ChangeBackground(b) {//changes Background
    if (TabToLeft == true) {
        switch (b) {
            case Home:
                MovePreviousBackground(false, Background1);
                Background1.style.transition = `0.8s ease`;
                Background1.style.transform = `translate(0%,0%)`;
                
                break;
            case About:
                MovePreviousBackground(false, Background2);
                Background2.style.transition = `0.8s ease`;
                Background2.style.transform = `translate(0%,0%)`;
                
                break;
            case Works:
                MovePreviousBackground(false, Background3);
                Background3.style.transition = `0.8s ease`;
                Background3.style.transform = `translate(0%,0%)`;
                
                break;
            case Services:
                MovePreviousBackground(false, Background4);
                Background4.style.transition = `0.8s ease`;
                Background4.style.transform = `translate(0%,0%)`;
                
                break;
        }
    } 
    else {
        switch (b) {
            case About:
                MovePreviousBackground(true, BackgroundR2);
                BackgroundR2.style.transition = `0.8s ease`;
                BackgroundR2.style.transform = `translate(0%,0%)`;
                
                break;
            case Works:
                MovePreviousBackground(true, BackgroundR3);
                BackgroundR3.style.transition = `0.8s ease`;
                BackgroundR3.style.transform = `translate(0%,0%)`;
                
                break;
            case Services:
                MovePreviousBackground(true,  BackgroundR4);
                BackgroundR4.style.transition = `0.8s ease`;
                BackgroundR4.style.transform = `translate(0%,0%)`;
                
                break;
            case Contact:
                MovePreviousBackground(true, BackgroundR5);
                BackgroundR5.style.transition = `0.8s ease`;
                BackgroundR5.style.transform = `translate(0%,0%)`;
                break;
        }
    }    
}
async function MovePreviousBackground(Left, NextBackground) {// resuffles previous background depanding on move direction and original position(left or right)
    
    const transitionPromise = () => {
        return new Promise(resolve => {
            ActiveBackground.addEventListener('transitionend', function handler() {
                resolve();
                ActiveBackground.removeEventListener('transitionend', handler);
            });
        });
    };

    const applyTransition = async (transform, time) => {
        ActiveBackground.style.transition = `${time}s ease`;
        ActiveBackground.style.transform = transform;
        await transitionPromise();
    };

    if (Left) {
        if (ActiveBackground.Value < 15) {
            CurrentlyTransitioning = true;
            await applyTransition(`translate(-100%, 0%)`,0.8);
            CurrentlyTransitioning = false;
        } else {
            CurrentlyTransitioning = true;
            await applyTransition(`translate(-100%, 0%)`,0.8);
            await applyTransition(`translate(-100%, -100%)`,0.001);
            await applyTransition(`translate(100%, -100%)`,0.001);
            await applyTransition(`translate(100%, 0%)`,0.001);
            CurrentlyTransitioning = false;
        }
    } else {
        if (ActiveBackground.Value < 15) {
            CurrentlyTransitioning = true;
            await applyTransition(`translate(100%, 0%)`,0.8);
            await applyTransition(`translate(100%, -100%)`,0.001);
            await applyTransition(`translate(-100%, -100%)`,0.001);
            await applyTransition(`translate(-100%, 0%)`,0.001);
            
            CurrentlyTransitioning = false;
        } else {
            CurrentlyTransitioning = true;
            await applyTransition(`translate(100%, 0%)`,0.8);
            CurrentlyTransitioning = false;
        }
    }
    ActiveBackground = NextBackground;
}
