console.log("Welcome to the Community Portal");

window.onload = () =>{
    alert("Welcome to Yectachy Portal");
};

class EventPortal{

    constructor(name,category,seats){
        this.name=name;
        this.category=category;
        this.seats=seats;
    }

    checkAvailability(){
        return this.seats > 0;
    }
}

let events=[

new EventPortal("Music Festival","Music",20),
new EventPortal("AI Workshop","Technology",15),
new EventPortal("City Marathon","Sports",30)

];

const container =
document.querySelector("#eventContainer");

function displayEvents(eventList){

    container.innerHTML="";

    eventList.forEach(event=>{

        const card=document.createElement("div");
        card.className="eventCard";

        card.innerHTML=`
        <h3>${event.name}</h3>
        <p>Category: ${event.category}</p>
        <p>Seats: ${event.seats}</p>
        <button onclick="registerUser('${event.name}')">
        Register
        </button>
        `;

        container.appendChild(card);
    });
}

displayEvents(events);

function registerUser(eventName){

    try{

        alert(`Registered for ${eventName}`);

    }catch(error){

        console.error(error);
    }
}

document
.querySelector("#categoryFilter")
.addEventListener("change",(e)=>{

    const value=e.target.value;

    if(value==="all"){
        displayEvents(events);
    }
    else{
        const filtered=
        events.filter(ev=>ev.category===value);

        displayEvents(filtered);
    }
});

const feedback=
document.querySelector("#feedback");

feedback.addEventListener("keydown",()=>{

    document.querySelector("#charCount")
    .textContent=feedback.value.length;
});

document
.querySelector("#registrationForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name=e.target.name.value;
    const email=e.target.email.value;

    document.querySelector("#outputMsg")
    .innerHTML=
    `✅ Registration Successful for ${name}`;

    localStorage.setItem(
        "preferredEvent",
        document.querySelector("#eventType").value
    );
});

window.addEventListener("load",()=>{

    const saved=
    localStorage.getItem("preferredEvent");

    if(saved){
        document.querySelector("#eventType").value=saved;
    }
});

document
.querySelector("#locationBtn")
.addEventListener("click",()=>{

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            (position)=>{

                document.querySelector(
                "#locationOutput"
                ).innerHTML=

                `Latitude:
                ${position.coords.latitude}
                <br>
                Longitude:
                ${position.coords.longitude}`;

            },

            ()=>{

                alert("Location access denied");
            },

            {
                enableHighAccuracy:true,
                timeout:5000
            }
        );
    }
});