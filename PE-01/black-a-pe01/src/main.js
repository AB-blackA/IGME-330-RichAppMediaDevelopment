
    "use strict";

    //1. Load in random technobabble
    //2. Allow user to click button to load more technobabble

    //NOTE OF THINGS I GOT CORRECT BEFORE TUTORIAL(thanks to my friend Conor for the help)
    //1. Made a function that returned a random word from the arrays
    //2. Made a function that changed the element id "output" to random words from said function

    //THINGS I DIDN'T QUITE GET
    //1. Couldn't remember how to wait for the web page to load before calling a function that interacted with the ID elements
    //2. No idea how to make website suitable for mobile devices

    const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];

    const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];

    const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

    //console.log(words1[0]);

    outputTechnoBabble();

    //returns a random word from the array
    function getRandomBabble(array) {

        //random
        const randomBabble = Math.floor(Math.random() * array.length);

        return array[randomBabble];

    }

    //modifies the html element "output"
    function outputTechnoBabble() {
        document.getElementById("output").innerText = getRandomBabble(words1) + " " + getRandomBabble(words2) + " " + getRandomBabble(words3);
        console.log("running");
    }

    //document.getElementById("myButton").onclick(modifyOutput);

    //alternative function syntax
    const syntaxFunction = () => {

    }
