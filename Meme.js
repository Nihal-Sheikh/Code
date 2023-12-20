const TextBox = document.getElementById("TextBox"); 
const Home = document.getElementById("Home");
const About = document.getElementById("About");
const Works = document.getElementById("Works");
const Services = document.getElementById("Services");
const Contact = document.getElementById("Contact");
// imports every text and the text box
let Height = window.visualViewport.height;
let Width = window.visualViewport.width;
let Active = Home;//keeps count of which tab is active
Home.Value = 1;
About.Value = 1;
Works.Value = 1;
Services.Value = 1;
Contact.Value = 1; //Assigns a value to each number(Needed to make the movement of tab smooth)
let MoveSpeed = 0.8;
MakeTextBiggernMove(Home);//Loads home on start

function CalculateDIstanceValue(d) { //Calculates  move time
        let DistanceValue = d.Value - Active.Value;
        if (DistanceValue < 0) {
            DistanceValue = DistanceValue * -1;
        }
        MoveSpeed = ((0.8) + (9 * DistanceValue))
        
    }
function MakeTextBiggernMove(t) { //Makes the tab icon bigger and moves textbox
    Height = window.visualViewport.height;
    Width = window.visualViewport.width;
    t.style.transition = "0.2s ease";
    t.style.height = "6vh";
    t.style.width = "18vw";
    t.style.transform =  `translate(0%,-20%)`//needed as making the text bigger offcenters it. so it conterforces the offset.
    CalculateDIstanceValue(t);//Triggers move time calculation
    if ((Width/Height) > 0.7) {// moves the textbox is it is not a mobile phone
        switch (t) 
        {
        case Home: 
            TextBox.style.transition = `-2000000s ease`
            TextBox.style.transform = `translate(19%, 25%)`
            break;
        case About: 
            TextBox.style.transition = `${MoveSpeed}s ease`
            TextBox.style.transform = `translate(9.5%, 25%)`
            break;
        case Works: 
            TextBox.style.transition = `${MoveSpeed}s ease`
            TextBox.style.transform = `translate(1%, 25%)`
            break;
        case Services: 
            TextBox.style.transition = `${MoveSpeed}s ease`
            TextBox.style.transform = `translate(-9%, 25%)`
            break;
        case Contact: 
            TextBox.style.transition = `${MoveSpeed}s ease`
            TextBox.style.transform = `translate(-19%, 25%)`
            break;
        
        }
    }
    if (Active != t)//Checks if the current tab is active if not triggers reset
    {
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
    x.style.transition = "0.3s ease";
    x.style.height = "4.5vh";
    x.style.width = "14vw";
    x.style.transform =  `translate(0%,0%)`//The counter offset is no longer needed; resets it.
}
