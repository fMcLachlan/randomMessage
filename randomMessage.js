const crystalBall = () => {
    theAction = Math.floor(Math.random() * 30);
    thePerson = Math.floor(Math.random() * 30);
    thePlace = Math.floor(Math.random() * 30);
    let action = "";
    let person = "";
    let place = "";

    
        if (theAction === 0) {
            action = "get married to";
        } else if (theAction === 1) {
            action = "murder";
        } else if (theAction === 2) {
            action = "kiss";
        } else if (theAction === 3) {
            action = "rob a bank with";
        } else if (theAction === 4) {
            action = "fight for the world heavyweight championship against";
        } else if (theAction === 5) {
            action = "fall in love with";
        } else if (theAction === 6) {
            action = "attack (unprovoked)";
        } else if (theAction === 7) {
            action = "steal a rocketship with";
        } else if (theAction === 8) {
            action = "start a band with";
        } else if (theAction === 9) {
            action = "have a dramatic, western-style stand-off against";
        } else if (theAction === 10) {
            action = "go swimming with";
        } else if (theAction === 11) {
            action = "star in a child-friendly remake of the TV show Game of Thrones with";
        } else if (theAction === 12) {
            action = "become a vampire because of";
        } else if (theAction === 13) {
            action = "play scrabble against";
        } else if (theAction === 14) {
            action = "shave your entire body with the help of";
        } else if (theAction === 15) {
            action = "write a comic book that rips off (but is legally distinct from) Batman to spite";
        } else if (theAction === 16) {
            action = "sell all your earthly possessions to hide from";
        } else if (theAction === 17) {
            action = "cook a stew using only Doritos and chickpeas for";
        } else if (theAction === 18) {
            action = "crack teleportation of living matter with";
        } else if (theAction === 19) {
            action = "start a career in stand-up comedy with";
        } else if (theAction === 20) {
            action = "raise a calf only to eventually slaughter it for its flesh with";
        } else if (theAction === 21) {
            action = "become a vegan but don’t talk about it all the time with";
        } else if (theAction === 22) {
            action = "cause a plane to crash into";
        } else if (theAction === 23) {
            action = "join the police but as a double agent for the mob to bring down";
        } else if (theAction === 24) {
            action = "get cancelled for your controversial beliefs by";
        } else if (theAction === 25) {
            action = "fight an army of super powered chinchillas with the help of";
        } else if (theAction === 26) {
            action = "have a running race and lose against";
        } else if (theAction === 27) {
            action = "live forever but you're chained to";
        } else if (theAction === 28) {
            action = "commit tax fraud with the help of";
        } else if (theAction === 29) {
            action = "vanish whilst travelling to Antarctica with";
        }
    
        if (thePerson === 0) {
            person = "your other half";
        } else if (thePerson === 1) {
            person = "your mother-in-law";
        } else if (thePerson === 2) {
            person = "your favourite nephew";
        } else if (thePerson === 3) {
            person = "Frodo Baggins";
        } else if (thePerson === 4) {
            person = "Obi Wan Kenobi";
        } else if (thePerson === 5) {
            person = "Albus Dumbledore";
        } else if (thePerson === 6) {
            person = "Will Smith";
        } else if (thePerson === 7) {
            person = "Jennifer Lopez";
        } else if (thePerson === 8) {
            person = "Madonna";
        } else if (thePerson === 9) {
            person = "Donald Trump";
        } else if (thePerson === 10) {
            person = "Elon Musk";
        } else if (thePerson === 11) {
            person = "some annoying guy who keeps asking you to listen to his podcast";
        } else if (thePerson === 12) {
            person = "someone smelly";
        } else if (thePerson === 13) {
            person = "Karl Marx";
        } else if (thePerson === 14) {
            person = "Stanley Kubrick";
        } else if (thePerson === 15) {
            person = "the entire cast of the West End musical 'Jesus Christ Superstar'";
        } else if (thePerson === 16) {
            person = "every member of Coldplay";
        } else if (thePerson === 17) {
            person = "Nobody";
        } else if (thePerson === 18) {
            person = "Iron Man";
        } else if (thePerson === 19) {
            person = "Chairman Mao";
        } else if (thePerson === 20) {
            person = "controversial author, J.K. Rowling,";
        } else if (thePerson === 21) {
            person = "the wizard of Oz";
        } else if (thePerson === 22) {
            person = "a tiger";
        } else if (thePerson === 23) {
            person = "the Doctor from Doctor Who";
        } else if (thePerson === 24) {
            person = "Sam Rockwell";
        } else if (thePerson === 25) {
            person = "former Prime Minister of Britain, Tony Blair,";
        } else if (thePerson === 26) {
            person = "a disinterested lobster";
        } else if (thePerson === 27) {
            person = "Freddy Kruger";
        } else if (thePerson === 28) {
            person = "a grilled cheese sandwich";
        } else if (thePerson === 29) {
            person = "your supportive father";
        }

        if (thePlace === 0) {
            place = "in your house";
        } else if (thePlace === 1) {
            place = "in your garden";
        } else if (thePlace === 2) {
            place = "in London";
        } else if (thePlace === 3) {
            place = "in Tokyo";
        } else if (thePlace === 4) {
            place = "aboard the star ship ‘Enterprise’";
        } else if (thePlace === 5) {
            place = "in Cape town";
        } else if (thePlace === 6) {
            place = "on the Moon";
        } else if (thePlace === 7) {
            place = "in the National History Museum";
        } else if (thePlace === 8) {
            place = "in Hollywood";
        } else if (thePlace === 9) {
            place = "in Metropolis";
        } else if (thePlace === 10) {
            place = "on the planet Arrakis";
        } else if (thePlace === 11) {
            place = "aboard the Titanic";
        } else if (thePlace === 12) {
            place = "on the Nile";
        } else if (thePlace === 13) {
            place = "on a pirate ship";
        } else if (thePlace === 14) {
            place = "on Isla Sorna";
        } else if (thePlace === 15) {
            place = "inside a spaceship hurtling inexorably towards the sun";
        } else if (thePlace === 16) {
            place = "in a galaxy far, far away";
        } else if (thePlace === 17) {
            place = "at camp crystal lake";
        } else if (thePlace === 18) {
            place = "in the afterlife";
        } else if (thePlace === 19) {
            place = "atop the great Pyramid of Giza";
        } else if (thePlace === 20) {
            place = "in a helicopter";
        } else if (thePlace === 21) {
            place = "inside a bewitched doll house";
        } else if (thePlace === 22) {
            place = "somewhere in Yorkshire";
        } else if (thePlace === 23) {
            place = "in Havana";
        } else if (thePlace === 24) {
            place = "in the grounds of Buckingham Palace";
        } else if (thePlace === 25) {
            place = "in cyberspace";
        } else if (thePlace === 26) {
            place = "in the centre of a maze";
        } else if (thePlace === 27) {
            place = "on stage at the Albert Hall";
        } else if (thePlace === 28) {
            place = "in a dream within a dream";
        } else if (thePlace === 29) {
            place = "inside a McDonalds shaped like a spaceship";
        }
    
    let sentence = `In your future I see that you will ${action} ${person} ${place}! Thank you for staring into the crystal ball. Please come back again soon!`;

    return sentence;
}